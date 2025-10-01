#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Creating .env.local file for Supabase configuration...\n');

const envContent = `# Supabase Configuration
# Replace these with your actual Supabase project credentials
REACT_APP_SUPABASE_URL=https://your-project-ref.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key

# To get these values:
# 1. Go to https://supabase.com/dashboard
# 2. Select your project
# 3. Go to Settings > API
# 4. Copy the Project URL and anon/public key
# 5. Replace the values above with your actual credentials
`;

const envPath = path.join(__dirname, '.env.local');

try {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Open .env.local in your editor');
  console.log('2. Replace the placeholder values with your actual Supabase credentials');
  console.log('3. Restart your React app (npm start)');
  console.log('\n💡 Your Supabase credentials can be found at:');
  console.log('   https://supabase.com/dashboard → Your Project → Settings → API');
} catch (error) {
  console.error('❌ Error creating .env.local file:', error.message);
  console.log('\n🔧 Manual setup:');
  console.log('1. Create a file named .env.local in your project root');
  console.log('2. Add the following content:');
  console.log(envContent);
}
