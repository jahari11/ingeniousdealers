#!/usr/bin/env node

console.log('🔑 Getting Supabase Credentials\n');

console.log('To get your Supabase credentials:');
console.log('1. Go to https://supabase.com/dashboard');
console.log('2. Select your project');
console.log('3. Go to Settings → API');
console.log('4. Copy the following values:\n');

console.log('📋 Copy these to your .env.local file:');
console.log('REACT_APP_SUPABASE_URL=https://your-project-ref.supabase.co');
console.log('REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here\n');

console.log('🔧 After updating .env.local:');
console.log('1. Restart your React app: npm start');
console.log('2. Test the connection: node test-edge-function.js\n');

console.log('📚 Next steps:');
console.log('1. Deploy the Edge Function (see DEPLOY_EDGE_FUNCTION.md)');
console.log('2. Set up your database table (see DEPLOY_EDGE_FUNCTION.md)');
console.log('3. Test phone number submission\n');

console.log('🎉 Once deployed, your phone numbers will go directly to Supabase!');
