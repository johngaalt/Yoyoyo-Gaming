# AGENTS.md

## Project Overview

Mobile-first educational game for toddlers.

Purpose:

- language learning
- speech development
- card interaction
- simple mini-games
- offline-friendly experience

Primary languages:

- Russian
- Spanish
- English

Target platform:

- mobile web (PWA first)
- future React Native support possible

---

# Tech Stack

## Frontend

- React 18
- TypeScript
- Vite
- React Router DOM v6
- Zustand
- TanStack Query
- TailwindCSS
- clsx
- Zod

## Backend

- Node.js
- NestJS
- PostgreSQL

---

# Project Structure

```txt
src/
├── app/            # app bootstrap, providers, routing
├── pages/          # route pages
├── widgets/        # page compositions
├── features/       # business features
├── entities/       # domain entities
├── shared/
│   ├── ui/         # reusable UI
│   ├── hooks/      # shared hooks
│   ├── utils/      # helpers
│   ├── lib/        # low-level utilities
│   └── types/      # shared types
├── services/       # API clients
├── store/          # Zustand stores
└── assets/         # images, sounds
```
