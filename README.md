# Jinx Esport Website

Landing experience for the Jinx Esport Counter-Strike organization built with React, TypeScript, Vite, and Tailwind CSS. The site showcases animated page transitions, dedicated team hubs for the main and academy rosters, and reusable player profiles sourced from typed data.

## Features

- Multi-page layout with React Router covering home, teams overview, and roster pages
- Framer Motion powered hero, navigation, and roster card animations
- Tailwind CSS theme with custom color palette, fonts, and glassmorphism utility classes
- Typed roster data driving reusable player cards with stats and social links
- Responsive navigation with mobile menu and animated active state indicator

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- React Router DOM

## Getting Started

`ash
npm install
npm run dev
`

Open the dev server URL printed in the terminal (default http://localhost:5173).

## Available Scripts

`ash
npm run dev      # start local development server
npm run build    # type-check and create production build
npm run lint     # run ESLint across the project
npm run preview  # preview the production build locally
`

## Project Structure

`
src/
├── components/   # shared layout and UI building blocks
├── data/         # typed roster data
├── pages/        # route-level views
├── App.tsx       # router + layout shell
└── main.tsx      # React bootstrap
`

## Deployment

Generate a production build with 
pm run build. Deploy the contents of the dist directory to your hosting provider or connect the repository to a static hosting platform (Netlify, Vercel, GitHub Pages, etc.).
