# Agent Guidance

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npx tsc --noEmit` - TypeScript check

## Tech Stack
- Next.js 16.2.5 (App Router)
- React 19.2.4
- TailwindCSS v4
- TypeScript
- react-icons (use Fa* or Gr* packages)

## Project Structure
```
components/
├── layout/    # Layout components (NavBar, Footer)
├── sections/  # Page sections (HeroBanner, FeaturedCategories)
└── ui/        # Reusable UI components (Button, cards)
app/
├── globals.css    # Global styles + CSS variables
├── layout.tsx     # Root layout
└── page.tsx       # Home page
```

## Styling
- Use CSS variables from `app/globals.css` (defined in `@theme`)
- Available colors: `--color-gold`, `--color-white-bone`, `--color-gray-red`, `--color-black-charcoal`, `--color-blood-red`, `--color-white-gray`
- Use `font-title` for titles (defined as `--font-castellar`)
- Prefer Tailwind utilities over custom CSS

## Component Patterns
- Use `'use client'` directive for client components
- Use `FC` type from React for functional components
- Use `readonly` for immutable props
- Use `aria-label`, `aria-hidden`, `aria-labelledby` for accessibility
- Add `focus-visible` states for keyboard navigation

## Verification Order
`npm run lint` -> `npx tsc --noEmit` -> `npm run build`