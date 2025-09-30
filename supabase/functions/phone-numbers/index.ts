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
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { method } = req

    if (method === 'POST') {
      // Handle phone number submission
      const { phoneNumber, source } = await req.json()
      
      if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
        return new Response(
          JSON.stringify({ success: false, error: 'Phone number is required' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      const normalized = phoneNumber.trim()
      
      // Insert phone number
      const { data, error } = await supabaseClient
        .from('phone_numbers')
        .upsert([
          { 
            phone_number: normalized, 
            source: source || 'password_page',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ], { 
          onConflict: 'phone_number' 
        })
        .select()

      if (error) {
        return new Response(
          JSON.stringify({ success: false, error: error.message }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      return new Response(
        JSON.stringify({ success: true, data }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (method === 'GET') {
      // Handle getting all phone numbers
      const { data, error } = await supabaseClient
        .from('phone_numbers')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        return new Response(
          JSON.stringify({ success: false, error: error.message }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      return new Response(
        JSON.stringify({ success: true, count: data.length, phoneNumbers: data }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (method === 'PUT') {
      // Handle updating phone number status
      const url = new URL(req.url)
      const phoneNumber = url.pathname.split('/').pop()
      const { is_active, launch_updates_opted_in } = await req.json()

      if (!phoneNumber) {
        return new Response(
          JSON.stringify({ success: false, error: 'Phone number is required' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      const { data, error } = await supabaseClient
        .from('phone_numbers')
        .update({ 
          is_active: is_active !== undefined ? is_active : true,
          launch_updates_opted_in: launch_updates_opted_in !== undefined ? launch_updates_opted_in : true,
          updated_at: new Date().toISOString()
        })
        .eq('phone_number', phoneNumber)
        .select()

      if (error) {
        return new Response(
          JSON.stringify({ success: false, error: error.message }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      if (!data || data.length === 0) {
        return new Response(
          JSON.stringify({ success: false, error: 'Phone number not found' }),
          { 
            status: 404, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      return new Response(
        JSON.stringify({ success: true, data: data[0] }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
