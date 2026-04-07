# Watch Microbrands Review App

A React + TypeScript application for browsing microbrand watch companies and adding user reviews, backed by a real database (Supabase).

## 🚀 Live Demo

👉 https://watch-microbrands-review.vercel.app/

## 🛠 Tech Stack

* React
* TypeScript
* Vite
* Supabase
* SCSS Modules
* Vercel

## ✨ Features

* Browse watch brands with dynamic ratings
* View detailed brand pages
* Add and display user reviews
* Form validation and async submission
* Persistent data storage via Supabase

## 🔄 Key Highlight

Migrated review storage from **localStorage to Supabase**, introducing:

* async data fetching
* loading & error states
* service layer refactor
* real database persistence

## ⚠️ Routing

Uses **HashRouter** to ensure correct routing on static hosting (Vercel).

## ⚙️ Setup

```bash
git https://github.com/mmagari/watch-microbrands-review-app
cd watch-microbrands-review-app/frontend
npm install
npm run dev
```

Create `.env`:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🔮 Next Steps

* authentication (Supabase Auth)
* edit/delete reviews
* sorting & filtering

---

Created as a frontend project evolving into a fullstack-ready application.
