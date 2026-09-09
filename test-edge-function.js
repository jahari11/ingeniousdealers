// Simple test script for the Supabase Edge Function
// Run with: node test-edge-function.js

const testEdgeFunction = async () => {
  const EDGE_FUNCTIONS_URL = process.env.REACT_APP_SUPABASE_URL 
    ? `${process.env.REACT_APP_SUPABASE_URL}/functions/v1`
    : 'https://your-project-ref.supabase.co/functions/v1';

  const testPhoneNumber = '+1234567890';
  
  console.log('🧪 Testing Supabase Edge Function...\n');

  try {
    // Test POST request
    console.log('📤 Testing POST request...');
    const postResponse = await fetch(`${EDGE_FUNCTIONS_URL}/phone-numbers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({
        phoneNumber: testPhoneNumber,
        source: 'test'
      })
    });

    if (postResponse.ok) {
      const postData = await postResponse.json();
      console.log('✅ POST request successful:', postData);
    } else {
      const errorData = await postResponse.json();
      console.log('❌ POST request failed:', errorData);
    }

    // Test GET request
    console.log('\n📥 Testing GET request...');
    const getResponse = await fetch(`${EDGE_FUNCTIONS_URL}/phone-numbers`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
      }
    });

    if (getResponse.ok) {
      const getData = await getResponse.json();
      console.log('✅ GET request successful:');
      console.log(`   Total subscribers: ${getData.count}`);
      console.log(`   Stats:`, getData.stats);
    } else {
      const errorData = await getResponse.json();
      console.log('❌ GET request failed:', errorData);
    }

  } catch (error) {
    console.log('❌ Test failed with error:', error.message);
    console.log('\n💡 Make sure to:');
    console.log('1. Set your Supabase credentials in .env.local');
    console.log('2. Deploy the Edge Function: supabase functions deploy phone-numbers');
    console.log('3. Set up your database table');
  }
};

// Load environment variables
require('dotenv').config({ path: '.env.local' });

testEdgeFunction();
