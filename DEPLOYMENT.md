# Portfolio Deployment Guide

## Netlify Deployment with Chatbot

### Prerequisites
- GitHub repository with your portfolio code
- Netlify account
- Groq API key

### Deployment Steps

1. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   - In your Netlify dashboard, go to Site settings > Environment variables
   - Add the following variable:
     - Key: `VITE_GROQ_API_KEY`
     - Value: Your Groq API key from [Groq Console](https://console.groq.com)

3. **Deploy**
   - Netlify will automatically build and deploy your site
   - The chatbot will work once the environment variable is set

### Chatbot Features
- Secure API calls through Netlify Functions
- No API key exposure in frontend code
- Fallback responses when API is unavailable
- CORS handling for cross-origin requests

### Performance Optimizations
- Reduced animation complexity for smoother performance
- Optimized particle counts and update frequencies
- Efficient canvas rendering with proper cleanup

### Troubleshooting
- If chatbot doesn't work, check browser console for errors
- Verify environment variable is set correctly in Netlify
- Ensure Netlify Functions are enabled in your plan
- Check that the API key has sufficient credits

### Local Development
```bash
npm install
npm run dev
```

The chatbot will work locally with the environment variable set in a `.env` file:
```
VITE_GROQ_API_KEY=your_api_key_here
``` 