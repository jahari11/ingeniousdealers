#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Supabase Edge Functions for Ingenious Dealers...\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');
  const envContent = `# Supabase Configuration
REACT_APP_SUPABASE_URL=your-supabase-project-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key

# Get these values from your Supabase project dashboard
# 1. Go to https://supabase.com/dashboard
# 2. Select your project
# 3. Go to Settings > API
# 4. Copy the Project URL and anon/public key
`;
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file');
  console.log('⚠️  Please update .env.local with your actual Supabase credentials\n');
} else {
  console.log('✅ .env.local already exists\n');
}

// Check if supabase directory exists
const supabasePath = path.join(__dirname, 'supabase');
if (!fs.existsSync(supabasePath)) {
  console.log('📁 Supabase directory not found. Please run: supabase init');
} else {
  console.log('✅ Supabase directory found');
}

console.log('\n📋 Next steps:');
console.log('1. Update .env.local with your Supabase credentials');
console.log('2. Run: supabase init (if not done already)');
console.log('3. Run: supabase link --project-ref your-project-ref');
console.log('4. Run: supabase functions deploy phone-numbers');
console.log('5. Set up your database table (see SUPABASE_EDGE_FUNCTIONS_SETUP.md)');
console.log('6. Run: npm start');

console.log('\n🎉 Setup complete! Your phone numbers will now go directly to Supabase!');
