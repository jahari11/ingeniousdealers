# 🚀 Deployment Guide - 24/7 Server Hosting

## Option 1: Railway (Recommended - Easiest)

### Step 1: Deploy Backend to Railway

1. **Go to [railway.app](https://railway.app) and sign up with GitHub**

2. **Create a new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `ingeniousdealers` repository
   - Select the `server` folder as the root directory

3. **Add environment variables:**
   - Go to your project settings
   - Add these variables:
     ```
     SUPABASE_URL=your_supabase_url
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
     NODE_ENV=production
     ```

4. **Deploy:**
   - Railway will automatically build and deploy your server
   - You'll get a URL like: `https://your-app-name.railway.app`

### Step 2: Deploy Frontend to Vercel

1. **Go to [vercel.com](https://vercel.com) and sign up with GitHub**

2. **Create a new project:**
   - Click "New Project"
   - Import your `ingeniousdealers` repository
   - Set the root directory to `ingenious`

3. **Add environment variables:**
   - Add: `NODE_ENV=production`

4. **Update API URL:**
   - In `src/config/api.js`, replace `your-railway-app-url.railway.app` with your actual Railway URL

5. **Deploy:**
   - Vercel will build and deploy your React app
   - You'll get a URL like: `https://your-app-name.vercel.app`

## Option 2: Render (Alternative)

### Backend Deployment:
1. Go to [render.com](https://render.com)
2. Create "Web Service"
3. Connect your GitHub repo
4. Set root directory to `server`
5. Add environment variables
6. Deploy

### Frontend Deployment:
1. Create "Static Site" on Render
2. Connect your GitHub repo
3. Set root directory to `ingenious`
4. Build command: `npm run build`
5. Publish directory: `build`
6. Deploy

## Option 3: DigitalOcean App Platform

### Backend:
1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Create "App"
3. Connect GitHub repo
4. Select `server` directory
5. Add environment variables
6. Deploy

### Frontend:
1. Add another component to your app
2. Select `ingenious` directory
3. Set as static site
4. Deploy

## Testing Your Deployment

1. **Test your backend:**
   ```bash
   curl https://your-railway-url.railway.app/api/phone-numbers
   ```

2. **Test your frontend:**
   - Visit your Vercel/Render URL
   - Try submitting a phone number
   - Check the admin dashboard

## Cost Breakdown

- **Railway**: $5/month (free tier available)
- **Vercel**: Free tier (generous limits)
- **Render**: Free tier available
- **DigitalOcean**: $5-12/month

## Next Steps After Deployment

1. Update your domain (if you have one)
2. Set up custom domain in Vercel/Railway
3. Configure SSL certificates (automatic)
4. Set up monitoring and alerts
5. Consider adding a database backup strategy

## Troubleshooting

### Common Issues:
- **CORS errors**: Make sure your frontend URL is allowed in CORS settings
- **Environment variables**: Double-check all variables are set correctly
- **Build failures**: Check the build logs in your hosting platform
- **API not responding**: Verify the backend URL is correct in your frontend config

### Support:
- Railway: Excellent documentation and Discord community
- Vercel: Great docs and support
- Render: Good documentation
- DigitalOcean: Comprehensive support
