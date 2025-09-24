# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern portfolio website built for Lana, a Web Developer & Designer. The project showcases professional work, skills, and provides contact functionality. It's built with Next.js 15 and features a modern tech stack with responsive design and dark/light theme support.

## Common Development Commands

All commands should be run from the `lana-portfolio` directory unless otherwise specified.

### Setup and Installation
```bash
cd lana-portfolio
npm install
```

### Development
```bash
# Start development server with Turbopack (faster)
npm run dev

# Alternative development server (standard Next.js)
next dev
```
The dev server runs on http://localhost:3000

### Building and Production
```bash
# Build for production
npm run build

# Start production server
npm run start

# Build and start in sequence
npm run build && npm run start
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix
```

### Testing a Single Component
When testing specific components or pages, you can focus on:
- Individual page components in `src/app/`
- Reusable components in `src/components/`
- UI components in `src/components/ui/`

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with Shadcn UI components
- **Animations**: Framer Motion
- **Icons**: Tabler Icons and Lucide React
- **Theme**: next-themes for dark/light mode
- **Forms**: React Hook Form with Zod validation
- **Image Optimization**: Cloudinary integration

### Project Structure
```
/lana-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── portfolio/       # Portfolio showcase
│   │   └── contact/         # Contact form
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Shadcn UI components
│   │   ├── MainLayout.tsx   # Main layout wrapper
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── Footer.tsx       # Site footer
│   │   ├── ProjectCard.tsx  # Individual project display
│   │   ├── ProjectsGrid.tsx # Project grid layout
│   │   ├── TechStack.tsx    # Technology showcase
│   │   └── ThemeProvider.tsx # Theme context provider
│   ├── data/                # Static data and content
│   │   ├── projects.ts      # Project information
│   │   ├── certificates.ts  # Certificate data
│   │   └── techStack.ts     # Technology stack data
│   ├── lib/                 # Utility functions and libraries
│   │   ├── utils.ts         # General utilities (cn helper)
│   │   └── projects.ts      # Project filtering logic
│   └── utils/               # Additional utilities
│       └── cloudinary.ts    # Image optimization helpers
└── public/                  # Static assets
```

### Key Architecture Patterns

#### App Router Structure
The project uses Next.js 15 App Router with file-based routing:
- `layout.tsx` files provide nested layouts
- `page.tsx` files define route endpoints
- Root layout includes global providers (Theme, font loading)

#### Component Architecture
- **MainLayout**: Wraps all pages with Navbar and Footer
- **UI Components**: Shadcn-based design system in `components/ui/`
- **Feature Components**: Specialized components for projects, tech stack, etc.
- **Theme System**: Dark/light mode support via `next-themes`

#### Data Management
- Static data stored in TypeScript files with proper typing
- Project data includes filtering logic for featured vs. all projects
- Certificate data structured for scrolling carousel display
- Tech stack organized by categories (frontend, backend, tools)

#### Styling System
- Tailwind CSS 4 with custom configuration
- Shadcn UI for consistent component library
- CSS variables for theme switching
- Responsive design patterns throughout
- Framer Motion for smooth animations

#### Image Handling
- Next.js Image component for optimization
- Cloudinary integration for external images
- Placeholder system for development

## Development Guidelines

### File Organization
- Keep components focused and single-responsibility
- Use proper TypeScript interfaces for all props
- Store reusable logic in `lib/` directory
- Keep static data separate from components

### Styling Conventions
- Use Tailwind utility classes primarily
- Leverage Shadcn UI components for consistency
- Implement responsive design mobile-first
- Use CSS variables for theme-aware styling

### Component Patterns
- Use `'use client'` directive for interactive components
- Implement proper loading and error states
- Follow Next.js App Router conventions
- Use Framer Motion for meaningful animations

### Data Fetching
- Static data is imported directly (no API needed)
- Use proper TypeScript interfaces for data structures
- Implement client-side filtering where appropriate

## Working Directory
The main development work happens in `/Users/em/web/Lana-Developer/lana-portfolio/`. Always navigate to this directory before running commands.

## Environment Setup
The project uses standard Next.js configuration with:
- TypeScript strict mode enabled
- Path aliases configured (`@/*` maps to `src/*`)
- ESLint with Next.js recommended rules
- Tailwind CSS with PostCSS integration