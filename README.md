# 👤 User Management App (React + TypeScript)

A responsive CRUD User Management application built with **React, TypeScript, Tailwind CSS, React Hook Form, and Zod**.  
It supports creating, editing, deleting users with validation and duplicate email protection.

Deployed easily on **Vercel** with optional backend on **Render**.

---

## 🚀 Features

- ✅ Create / Read / Update / Delete Users
- ✅ Dynamic form generated from schema
- ✅ Zod validation with React Hook Form
- ✅ Prevent duplicate email entries
- ✅ Edit existing users
- ✅ Responsive UI (Mobile cards + Desktop table)
- ✅ Toast notifications
- ✅ Loading spinner
- ✅ Schema-driven architecture (easy to add new fields)

---

## 🛠 Tech Stack

- React + TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Axios
- react-hot-toast
- Vite

---

## 🧠 Schema Driven Form & Validation (Important)

This project follows a **single source of truth** pattern for form fields.

If you want to add more fields to the user form:

### 1️⃣ Add field in:

`src/config/userSchema.ts`

Example:

```ts
{
  name: "address",
  label: "Address",
  type: "text",
  required: true
}
2️⃣ Add validation in:
src/config/userValidation.ts

Example:

address: z.string().min(1, "Address is required"),
After these two steps, the following updates automatically:

✔ Form UI
✔ Validation errors
✔ Reset behavior
✔ Edit mode auto-fill
✔ User list table
✔ Mobile cards
✔ Create / Update logic

No other code changes are required.

This architecture makes the application:

✅ Highly scalable
✅ Easy to maintain
✅ Production ready

📦 Frontend Installation
1️⃣ Clone repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
Create .env in project root:

VITE_API_URL=http://localhost:3000
⚠️ Do NOT push .env to GitHub. Add it to .gitignore.

Local dev uses http://localhost:3000

Production uses Render backend (see below)

4️⃣ Start development server
npm run dev
App runs on:

http://localhost:5173
🔧 Backend (JSON Server)
If using json-server locally:

npm install -g json-server
json-server --watch db.json --port 3000
API is available at:

http://localhost:3000/users
🌍 Deploy Backend (Render)
Create a separate GitHub repo for backend (example: user-api)

Add db.json and package.json:

{
  "name": "user-api",
  "version": "1.0.0",
  "scripts": {
    "start": "json-server --watch db.json --host 0.0.0.0 --port 10000"
  },
  "dependencies": {
    "json-server": "^0.17.4"
  }
}
Push repo to GitHub

Go to Render → New → Web Service

Connect GitHub repo

Build & Start commands:

Build: npm install
Start: npm start
Deploy → get backend URL:

https://your-render-app.onrender.com
🔗 Connect Frontend to Render Backend
Update .env for production:

VITE_API_URL=https://your-render-app.onrender.com
In React, Axios uses:

const BASE_URL = import.meta.env.VITE_API_URL;
Restart dev server for changes to take effect.

🌐 Deploy Frontend (Vercel)
Push React project to GitHub

Go to Vercel → New Project → Import Repo

Build settings:

Framework: Vite
Build Command: npm run build
Output Directory: dist
Add Environment Variable in Vercel:

Key: VITE_API_URL
Value: https://your-render-app.onrender.com
Redeploy project

App is now live at:

https://your-vercel-app.vercel.app
⚠️ Important Notes
.env files should never be pushed to GitHub

Frontend env variables must start with VITE_

Vercel env variables are read only at build time

Render free tier may sleep after inactivity (first request may be slow)

For real persistence, use Supabase, Firebase, or a proper database

📱 Responsive Design
Mobile → Card layout

Desktop → Table layout

Fully responsive with Tailwind CSS

👨‍💻 Author
Vijendra Kumar
B.Tech CSE
Passionate about Full Stack Development & AI

⭐ If you like this project
Give it a star ⭐ on GitHub 🙂

