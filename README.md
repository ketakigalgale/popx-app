# PopX App — React JS Assignment

A pixel-perfect React JS implementation of the PopX mobile app design from Adobe XD.

## 🖥️ Live Demo
https://popx-app-lilac-five.vercel.app/

## 📁 Project Structure

```
popx-app/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── LandingScreen.css  
│   ├── LoginScreen.css    
│   ├── SignupScreen.css   
│   ├── ProfileScreen.css  
│   └── screens/
│       ├── LandingScreen.jsx
│       ├── LoginScreen.jsx
│       ├── SignupScreen.jsx
│       └── ProfileScreen.jsx
```

## 🚀 Step-by-Step Setup From Scratch

### Step 1: Install Node.js
Download and install Node.js from https://nodejs.org (LTS version recommended).

### Step 2: Create the Project
```bash
npm create vite@latest popx-app -- --template react
cd popx-app
npm install
```

### Step 3: Replace All Files
Replace the contents of `src/` with the files from this repository.

### Step 4: Run Locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

## 📤 Deploy on Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - PopX App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/popx-app.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **"New Project"**
3. Import your `popx-app` repository
4. Leave all settings default (Vite is auto-detected)
5. Click **"Deploy"**
6. Your live URL will be ready in ~30 seconds ✅

## ✨ Features
- ✅ Landing Screen with Create Account & Login buttons
- ✅ Login Screen with email/password inputs
- ✅ Signup Screen with all required fields + radio buttons
- ✅ Profile/Account Settings screen
- ✅ Mobile-centered layout (390px phone frame)
- ✅ Pixel-perfect design matching Adobe XD mockup
- ✅ Smooth screen navigation (no React Router needed)
- ✅ Clean, well-formatted code

## 🛠️ Tech Stack
- React 18
- Vite
- CSS Modules (per-screen)
- Google Fonts (Poppins)
