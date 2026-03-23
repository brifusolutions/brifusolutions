# Netlify Deployment Guide

Your project is now fully configured for Netlify!

## 1. Prerequisites
- A Netlify account.
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket).

## 2. Connect to Netlify
1.  Log in to Netlify.
2.  Click **"Add new site"** > **"Import from existing project"**.
3.  Select your Git provider and choose this repository.

## 3. Configure Build Settings
Netlify should automatically detect the settings from `netlify.toml`, but verify them:
-   **Build command:** `npm run build`
-   **Publish directory:** `dist`

## 4. Set Environment Variables (CRITICAL)
This is the most important step for your email function to work.
In the Netlify dashboard for your site:
1.  Go to **Site configuration** > **Environment variables**.
2.  Add the following variables (same as your local `.env`):
    -   `EMAIL_USER`: `brifusolutions@gmail.com`
    -   `EMAIL_PASS`: (Your App Password)
    -   `RECEIVER_EMAIL`: `brifusolutions@gmail.com`

*Note: You do not need to set `PORT` in Netlify.*

## 5. Deploy
-   Click **Deploy site**.
-   Netlify will build your React app and your serverless functions.
-   Once deployed, the `send-email` function will be live at `https://your-site.netlify.app/api/send-email`.

## Local Testing
-   Run `npm run dev` to start the frontend.
-   Run `node server.js` to run the backend locally (or use `netlify dev` if installed).
