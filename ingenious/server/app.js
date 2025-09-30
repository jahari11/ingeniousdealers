const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const cors = require('cors')
const dotenv = require('dotenv')
const { createClient } = require('@supabase/supabase-js')

dotenv.config()

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client (server-side service role key)
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

app.post('/api/phone-numbers', async (req, res) => {
    try {
        const { phoneNumber, source } = req.body || {}
        if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
            return res.status(400).json({ success: false, error: 'Phone number is required' })
        }
        const normalized = phoneNumber.trim()
        const upsertPayload = [{ phone_number: normalized, source: source || 'password_page' }]
        const { error } = await supabase
            .from('phone_numbers')
            .upsert(upsertPayload, { onConflict: 'phone_number' })
        if (error) {
            return res.status(500).json({ success: false, error: error.message })
        }
        return res.json({ success: true })
    } catch (err) {
        return res.status(500).json({ success: false, error: 'Internal server error' })
    }
})

app.get('/api/phone-numbers', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('phone_numbers')
            .select('*')
            .order('created_at', { ascending: false })
        if (error) {
            return res.status(500).json({ success: false, error: error.message })
        }
        return res.json({ success: true, count: data.length, phoneNumbers: data })
    } catch (err) {
        return res.status(500).json({ success: false, error: 'Internal server error' })
    }
})

// Get phone numbers for launch updates (only active subscribers)
app.get('/api/launch-subscribers', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('phone_numbers')
            .select('phone_number, created_at')
            .eq('is_active', true)
            .eq('launch_updates_opted_in', true)
            .order('created_at', { ascending: false })
        if (error) {
            return res.status(500).json({ success: false, error: error.message })
        }
        return res.json({ success: true, count: data.length, subscribers: data })
    } catch (err) {
        return res.status(500).json({ success: false, error: 'Internal server error' })
    }
})

// Update subscriber status (for future unsubscribe functionality)
app.put('/api/phone-numbers/:phoneNumber', async (req, res) => {
    try {
        const { phoneNumber } = req.params
        const { is_active, launch_updates_opted_in } = req.body
        
        const { data, error } = await supabase
            .from('phone_numbers')
            .update({ 
                is_active: is_active !== undefined ? is_active : true,
                launch_updates_opted_in: launch_updates_opted_in !== undefined ? launch_updates_opted_in : true,
                updated_at: new Date().toISOString()
            })
            .eq('phone_number', phoneNumber)
            .select()
            
        if (error) {
            return res.status(500).json({ success: false, error: error.message })
        }
        
        if (!data || data.length === 0) {
            return res.status(404).json({ success: false, error: 'Phone number not found' })
        }
        
        return res.json({ success: true, data: data[0] })
    } catch (err) {
        return res.status(500).json({ success: false, error: 'Internal server error' })
    }
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true 
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});