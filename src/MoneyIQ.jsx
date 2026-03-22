# MoneyIQ — Deploy to Vercel (Step by Step)

## What You Need Before Starting
- A computer (Mac or PC)
- A GitHub account (free — github.com)
- A Vercel account (free — vercel.com)
- The moneyiq-vercel-deploy.zip file (you already have this)

---

## STEP 1: Create a GitHub Account (Skip if you already have one)

1. Go to **github.com**
2. Click **Sign Up**
3. Enter your email, create a password, pick a username
4. Done — you have a GitHub account

---

## STEP 2: Create a New Repository on GitHub

1. Go to **github.com** and log in
2. Click the **+** icon in the top right corner
3. Click **New repository**
4. Name it: **moneyiq**
5. Make sure **Public** is selected
6. Check the box that says **Add a README file**
7. Click **Create repository**

---

## STEP 3: Upload Your Project Files to GitHub

1. On your new repository page, click **Add file** → **Upload files**
2. Unzip the **moneyiq-vercel-deploy.zip** file on your computer first
3. Open the unzipped folder — you should see these files:
   - `package.json`
   - `vite.config.js`
   - `index.html`
   - `.gitignore`
   - `src/` folder (contains `main.jsx` and `MoneyIQ.jsx`)
   - `public/` folder (empty, that's fine)
4. Drag ALL of these files and folders into the GitHub upload area
5. Scroll down and click **Commit changes**
6. Wait for the upload to finish

**IMPORTANT:** Make sure the files are at the ROOT of the repository, not inside a subfolder. You should see `package.json` at the top level, NOT inside a folder called `moneyiq-vercel-deploy`.

---

## STEP 4: Create a Vercel Account

1. Go to **vercel.com**
2. Click **Sign Up**
3. Choose **Continue with GitHub** (this connects your accounts automatically)
4. Authorize Vercel to access your GitHub
5. Done — you have a Vercel account connected to GitHub

---

## STEP 5: Deploy to Vercel

1. Once logged into Vercel, click **Add New** → **Project**
2. You'll see a list of your GitHub repositories
3. Find **moneyiq** and click **Import**
4. Vercel will auto-detect the settings. Verify these:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**
6. Wait 1-2 minutes while Vercel builds your project
7. When it says **Congratulations!** — your app is live!

---

## STEP 6: Get Your Link

1. After deployment, Vercel gives you a URL like:
   **https://moneyiq-yourusername.vercel.app**
2. Click it — you'll see MoneyIQ running live on the web
3. This is the link you share with EVERYONE

---

## STEP 7: Custom Domain (Optional but Professional)

If you own **moneyiq.app** or want to buy it:

1. In Vercel, go to your project → **Settings** → **Domains**
2. Type your custom domain: **demo.moneyiq.app** or **app.moneyiq.app**
3. Vercel will give you DNS records to add at your domain registrar
4. Add the records, wait 5-10 minutes, and your app is live at your custom domain

---

## HOW TO UPDATE THE APP LATER

Whenever you want to update the app:

1. Go to your GitHub repository
2. Click on `src/MoneyIQ.jsx`
3. Click the pencil icon (edit)
4. Make your changes
5. Click **Commit changes**
6. Vercel automatically rebuilds and deploys within 1-2 minutes

You can also replace the entire file by uploading a new version.

---

## SHARING THE LINK

Once deployed, you can share the link anywhere:

- In emails to credit unions
- In your TikTok/Instagram bio
- In your pitch deck
- In text messages to beta testers
- On your LinkedIn profile

The app works on any phone, tablet, or computer — no download needed. People just open the link and tap through it.

---

## TROUBLESHOOTING

**"Build failed" error:**
- Make sure `package.json` is at the ROOT of the repository, not in a subfolder
- Make sure the `src` folder contains both `main.jsx` and `MoneyIQ.jsx`

**Blank screen after deploy:**
- Open browser developer tools (F12) and check the Console tab for errors
- Usually means a file path issue — verify `index.html` references `/src/main.jsx`

**Files uploaded to wrong level:**
- If your files are inside a subfolder like `moneyiq-vercel-deploy/package.json` instead of just `package.json`, delete everything and re-upload at the root level

---

## TOTAL TIME: 10-15 minutes
## TOTAL COST: $0 (Vercel free tier handles up to 100GB bandwidth/month)
