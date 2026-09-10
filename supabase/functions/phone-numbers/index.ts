import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const { method } = req
    const url = new URL(req.url)
    const pathSegments = url.pathname.split('/').filter(Boolean)
    const phoneNumber = pathSegments[pathSegments.length - 1]

    switch (method) {
      case 'POST':
        return await handlePost(req, supabaseClient)
      case 'GET':
        return await handleGet(supabaseClient)
      case 'PUT':
        if (phoneNumber) {
          return await handlePut(req, supabaseClient, phoneNumber)
        }
        return new Response(
          JSON.stringify({ error: 'Phone number required for PUT request' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      default:
        return new Response(
          JSON.stringify({ error: 'Method not allowed' }),
          { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

async function handlePost(req: Request, supabaseClient: any) {
  try {
    const { phoneNumber, source } = await req.json()

    if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
      return new Response(
        JSON.stringify({ success: false, error: 'Phone number is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const normalized = phoneNumber.trim()
    const upsertPayload = [{ 
      phone_number: normalized, 
      source: source || 'password_page',
      created_at: new Date().toISOString()
    }]

    const { error } = await supabaseClient
      .from('phone_numbers')
      .upsert(upsertPayload, { onConflict: 'phone_number' })

    if (error) {
      console.error('Supabase error:', error)
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in handlePost:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid request body' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}

async function handleGet(supabaseClient: any) {
  try {
    const { data, error } = await supabaseClient
      .from('phone_numbers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Calculate stats
    const total = data.length
    const active = data.filter((sub: any) => sub.is_active !== false).length
    const today = data.filter((sub: any) => {
      const today = new Date().toDateString()
      const subDate = new Date(sub.created_at).toDateString()
      return today === subDate
    }).length

    return new Response(
      JSON.stringify({ 
        phoneNumbers: data,
        count: total,
        stats: { total, active, today }
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in handleGet:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}

async function handlePut(req: Request, supabaseClient: any, phoneNumber: string) {
  try {
    const { is_active } = await req.json()

    const { error } = await supabaseClient
      .from('phone_numbers')
      .update({ is_active })
      .eq('phone_number', phoneNumber)

    if (error) {
      console.error('Supabase error:', error)
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in handlePut:', error)
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}
