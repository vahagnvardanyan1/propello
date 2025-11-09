# Propello - Next.js Website

A modern, performant website for Propello built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Next.js 16** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS v4** for modern styling
- **Motion** (Framer Motion successor) for smooth animations
- **Radix UI** for accessible component primitives
- **Responsive Design** with mobile-first approach
- **Best Practices** following modern React patterns

## 📋 Prerequisites

- Node.js 20+ 
- npm or pnpm

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
propello-next/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with navigation & footer
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page
│   │   ├── services/     # Services page
│   │   ├── portfolio/    # Portfolio page
│   │   └── contact/      # Contact page
│   ├── components/       # Reusable components
│   │   ├── ui/          # Base UI components (buttons, cards, etc.)
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── BackToTop.tsx
│   │   ├── AnimatedCounter.tsx
│   │   └── ScrollReveal.tsx
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # cn() helper for class merging
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Additional utilities
├── public/              # Static assets
└── package.json
```

## 🎨 Design System

The project uses a custom design system with:

- **Brand Colors:**
  - Midnight Blue: `#1C2E4A`
  - Deep Navy: `#041A2B`
  - Dusty Blue: `#52677D`
  - Ivory: `#BDC4D4`
  - Buttercream: `#D1CFC9`

- **Typography:**
  - Headings: Poppins
  - Body: Inter
  - Mobile-first fluid typography

- **Spacing:** 8pt grid system
- **Animations:** Smooth motion with reduced motion support

## 📝 Code Style Guidelines

This project follows specific coding conventions:

### 1. Function Expressions
Use function expressions instead of function declarations:
```typescript
// ✅ Good
const MyComponent = () => { /* ... */ };

// ❌ Avoid
function MyComponent() { /* ... */ }
```

### 2. Argument Passing
Functions with 2+ arguments should accept an object:
```typescript
// ✅ Good
const myFunction = ({ arg1, arg2, arg3 }: MyFunctionProps) => { /* ... */ };

// ❌ Avoid
const myFunction = (arg1: string, arg2: number, arg3: boolean) => { /* ... */ };
```

### 3. Import Organization
Group imports by: framework → third-party → local, with spaces between:
```typescript
import { useState } from 'react';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
```

### 4. Logic Separation
- Separate business logic from UI components
- Use custom hooks for reusable logic
- Extract utilities into separate files

### 5. Component Structure
- One component per file
- Use TypeScript for props
- Export components as const

## 🔧 Configuration

### TypeScript
Configured for strict mode with Next.js optimizations.

### ESLint
Using Next.js recommended ESLint configuration.

### Tailwind CSS
Using Tailwind CSS v4 with custom design tokens defined in `globals.css`.

## 🚀 Deployment

The application can be deployed to Vercel, Netlify, or any platform supporting Next.js:

```bash
# Build the application
npm run build

# The output will be in the .next directory
```

## 📦 Key Dependencies

- **next**: ^16.0.1
- **react**: ^19.2.0
- **motion**: ^12.23.24 (Framer Motion successor)
- **lucide-react**: ^0.553.0
- **@radix-ui/***: Various UI primitives
- **tailwindcss**: ^4
- **typescript**: ^5

## 🎯 Performance

- Server-side rendering with Next.js
- Optimized images with next/image
- Code splitting and lazy loading
- CSS optimization with Tailwind CSS
- Smooth animations with Motion

## 📄 License

Private - All rights reserved

## 🤝 Contributing

This is a private project. Please follow the code style guidelines when contributing.

## 📧 Contact

For questions or support, reach out to the Propello team.
