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

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true 
}));

app.listen(4000, ()=> {
    console.log('now listening to requests on port 4000');
});