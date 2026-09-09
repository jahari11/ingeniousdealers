// Test script to verify your Supabase setup
// Run this with: node test-setup.js

const testSupabaseConnection = async () => {
  console.log('🧪 Testing Supabase connection...\n');
  
  try {
    // Test 1: Check if server is running
    console.log('1. Testing server connection...');
    const serverResponse = await fetch('http://localhost:4000/api/phone-numbers');
    if (serverResponse.ok) {
      console.log('✅ Server is running and accessible');
    } else {
      console.log('❌ Server is not responding properly');
      return;
    }
    
    // Test 2: Test phone number submission
    console.log('\n2. Testing phone number submission...');
    const testPhone = '+1234567890';
    const submitResponse = await fetch('http://localhost:4000/api/phone-numbers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: testPhone,
        source: 'test_script'
      })
    });
    
    if (submitResponse.ok) {
      console.log('✅ Phone number submission works');
    } else {
      console.log('❌ Phone number submission failed');
      const error = await submitResponse.json();
      console.log('Error:', error);
    }
    
    // Test 3: Test subscriber count
    console.log('\n3. Testing subscriber count...');
    const countResponse = await fetch('http://localhost:4000/api/launch-subscribers');
    if (countResponse.ok) {
      const data = await countResponse.json();
      console.log(`✅ Subscriber count: ${data.count}`);
    } else {
      console.log('❌ Failed to get subscriber count');
    }
    
    // Test 4: List all subscribers
    console.log('\n4. Testing subscriber list...');
    const listResponse = await fetch('http://localhost:4000/api/phone-numbers');
    if (listResponse.ok) {
      const data = await listResponse.json();
      console.log(`✅ Found ${data.phoneNumbers.length} total subscribers`);
      if (data.phoneNumbers.length > 0) {
        console.log('Sample subscriber:', data.phoneNumbers[0]);
      }
    } else {
      console.log('❌ Failed to get subscriber list');
    }
    
    console.log('\n🎉 All tests completed!');
    console.log('\nNext steps:');
    console.log('1. Visit http://localhost:3000 to see your password page');
    console.log('2. Visit http://localhost:3000/admin/subscribers to manage subscribers');
    console.log('3. Test submitting a phone number on the password page');
    
  } catch (error) {
    console.log('❌ Test failed with error:', error.message);
    console.log('\nMake sure:');
    console.log('1. Your server is running (npm start in server directory)');
    console.log('2. Your React app is running (npm start in ingenious directory)');
    console.log('3. Your .env file is configured with Supabase credentials');
  }
};

// Run the test
testSupabaseConnection();
