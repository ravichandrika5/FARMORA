# Farmora — Organic Farming Web App

## Overview
Full-stack organic farming web app featuring tutorial browsing, a DIY kit marketplace, an AI advisor chat with quantum farm planning, a creator dashboard, and quantum optimization (QUBO/simulated annealing) throughout. All prices use Indian Rupee (₹).

## Tech Stack
- **Frontend:** React 19, Vite, Tailwind CSS v4, wouter (routing), framer-motion (animations), TanStack Query, Recharts, shadcn/ui
- **Backend:** Express.js, PostgreSQL, Drizzle ORM
- **Quantum Engine:** Simulated annealing QUBO, QAOA simulator, quantum random picker, farm plan generator

## Architecture
- `server/` — Express server, API routes, quantum engine, storage layer
- `shared/schema.ts` — Drizzle ORM schema (tutorials, kits, creators, quantumLogs)
- `client/src/` — React SPA
  - `pages/` — Home, Tutorials, TutorialDetail, Kits, Advisor, Creator, About, Upload, NotFound
  - `components/ui-custom/` — TutorialCard, KitCard, QuantumToggle, QAOADemoModal
  - `components/layout/` — Navbar, Footer
  - `lib/api.ts` — API client with TanStack Query options
  - `lib/utils.ts` — formatRupee, cn utility

## Key API Endpoints
- `GET /api/tutorials` — List tutorials (filterable by category, search)
- `GET /api/tutorials/:id` — Single tutorial (auto-increments views)
- `GET /api/kits` — List kits
- `GET /api/creators` — List creators
- `POST /api/quantum/recommend` — QUBO-optimized recommendations
- `POST /api/quantum/qaoa-demo` — QAOA simulation with probability histogram
- `POST /api/quantum/creator-optimize` — Creator fairness optimization
- `GET /api/quantum/random` — Quantum random creator picker
- `POST /api/quantum/farm-plan` — Optimized crop schedule

## Design System
- Primary color: hsl(155, 100%, 23%) — high-contrast leaf green
- Background: warm off-white hsl(60, 20%, 98%)
- Rounded cards (1.5rem–4rem), minimal shadows, large bold typography
- Fonts: Inter (UI), Merriweather (serif accents)

## Commands
- `npm run dev` — Start dev server (port 5000)
- `npm run build` — Production build
- `npm run db:push` — Push schema to PostgreSQL
- `npx tsx server/seed.ts` — Seed database

## Database
PostgreSQL with tables: users, tutorials, kits, creators, quantumLogs
Seeded with 8 tutorials, 6 kits, 8 creators.
