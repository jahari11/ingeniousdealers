#!/bin/bash

echo "🚀 Setting up Supabase Edge Functions for Ingenious Dealers"
echo "=========================================================="

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Installing..."
    npm install -g supabase
    echo "✅ Supabase CLI installed"
else
    echo "✅ Supabase CLI found"
fi

# Check if user is logged in
if ! supabase projects list &> /dev/null; then
    echo "🔐 Please login to Supabase:"
    supabase login
fi

echo ""
echo "📋 Next steps:"
echo "1. Link to your Supabase project:"
echo "   supabase link --project-ref YOUR_PROJECT_ID"
echo ""
echo "2. Deploy the Edge Functions:"
echo "   supabase functions deploy"
echo ""
echo "3. Set environment variables in Supabase dashboard:"
echo "   - SUPABASE_URL"
echo "   - SUPABASE_SERVICE_ROLE_KEY"
echo ""
echo "4. Create .env file in ingenious directory:"
echo "   REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co"
echo "   REACT_APP_SUPABASE_ANON_KEY=your-anon-key"
echo ""
echo "5. Deploy frontend to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import your GitHub repo"
echo "   - Set root directory to 'ingenious'"
echo "   - Add environment variables"
echo ""
echo "📖 Full guide: SUPABASE_EDGE_FUNCTIONS_GUIDE.md"
echo ""
echo "🎉 You're all set! Much simpler than Railway! 🎉"
