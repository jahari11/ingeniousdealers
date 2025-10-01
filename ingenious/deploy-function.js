#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying Supabase Edge Function\n');

// Read the Edge Function code
const functionCode = fs.readFileSync(
  path.join(__dirname, 'supabase/functions/phone-numbers/index.ts'), 
  'utf8'
);

console.log('📋 Edge Function Code Ready!');
console.log('Function name: phone-numbers');
console.log('Code length:', functionCode.length, 'characters\n');

console.log('🔧 To deploy this function, you have 3 options:\n');

console.log('OPTION 1: Supabase Dashboard (Easiest)');
console.log('1. Go to https://supabase.com/dashboard');
console.log('2. Select your project');
console.log('3. Click "Edge Functions" in the left sidebar');
console.log('4. Click "Create a new function"');
console.log('5. Name it: phone-numbers');
console.log('6. Copy the code below and paste it:');
console.log('7. Click "Deploy"\n');

console.log('OPTION 2: CLI (if you have access)');
console.log('1. Run: npx supabase login');
console.log('2. Run: npx supabase link --project-ref YOUR_PROJECT_REF');
console.log('3. Run: npx supabase functions deploy phone-numbers\n');

console.log('OPTION 3: Manual Upload');
console.log('1. Create a new file in your Supabase project');
console.log('2. Name it: phone-numbers');
console.log('3. Copy the code below\n');

console.log('📄 EDGE FUNCTION CODE:');
console.log('='.repeat(50));
console.log(functionCode);
console.log('='.repeat(50));

console.log('\n🎯 After deploying, test with: node test-edge-function.js');
console.log('✅ Once deployed, your phone numbers will work!');
