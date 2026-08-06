# Esau Rahim — Portfolio

A recreation of esau-rahim.vercel.app, built with Next.js, React, and Tailwind CSS.

## Features

- Particle-animated hero background (tsparticles), reacts to mouse hover/click
- "Esau" in the headline is rendered in 4 brand colors and animates on hover
- Sticky navbar that hides on scroll-down and reappears on scroll-up
- Full dark mode: background `#1f1d1d`, white text, logo + top-right semicircle
  switch from red (`#f85555`) to blue (`#557bf8`)
- Fully functional contact form that emails submissions to `mumbonumber7@gmail.com`
- Sections: Hero, About Me, Skills & Experience, Contact, Projects, Footer

## Color palette

| Name   | Hex       |
|--------|-----------|
| Green  | `#55f886` |
| Red    | `#f85555` |
| Blue   | `#557bf8` |
| Yellow | `#ffbc48` |
| Dark bg| `#1f1d1d` |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Setting up the contact form (required for real emails)

The contact form posts to `/api/contact`, which uses **Nodemailer** with Gmail
SMTP to deliver messages straight to `mumbonumber7@gmail.com`. Gmail requires
an **App Password** rather than your normal password:

1. Turn on 2-Step Verification on the Gmail account you want to SEND from:
   https://myaccount.google.com/security
2. Create an App Password: https://myaccount.google.com/apppasswords
   (choose "Mail" as the app)
3. Copy `.env.local.example` to `.env.local` and fill in:
   ```
   EMAIL_USER=your-sending-gmail@gmail.com
   EMAIL_PASS=the-16-character-app-password
   ```
4. Restart `npm run dev`. Every form submission will now arrive in
   `mumbonumber7@gmail.com`'s inbox, with "reply-to" set to whoever filled out
   the form so you can reply directly.

> You can use `mumbonumber7@gmail.com` itself as `EMAIL_USER` if you generate
> an app password for it, or send FROM a different Gmail account — either
> way, mail always lands in `mumbonumber7@gmail.com` since that's hardcoded as
> the recipient in `pages/api/contact.js`.

## Deploying (Vercel)

1. Push this project to a GitHub repo.
2. Import it into Vercel.
3. In Vercel's Project Settings → Environment Variables, add `EMAIL_USER` and
   `EMAIL_PASS` (same values as your `.env.local`).
4. Deploy. The API route works out of the box as a serverless function.

## Project structure

```
components/   Navbar, Hero, AboutMe, Skills, Contact, Projects, Footer, Logo, Semicircle
context/      ThemeContext.js (dark mode, persisted to localStorage)
pages/        index.js, _app.js, _document.js, api/contact.js
styles/       globals.css (Tailwind)
```

## Notes

- Replace `public/Resume_EsauRahim.pdf` with your real CV so the "Grab a copy
  of my CV" button downloads the right file.
- Swap the GitHub/LinkedIn URLs in `components/Hero.js` if they ever change.
- Project cards in `components/Projects.js` are pulled from the live site's
  content — edit freely to add/remove projects.
