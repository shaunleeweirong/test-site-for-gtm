# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Instructions

1. **Always read this CLAUDE.md file at the start of each new coding session** to understand the project structure and requirements.

2. **Before adding new code or dependencies**, use Context7 to check for the latest documentation of any libraries or frameworks you plan to use. This ensures you're following current best practices and using up-to-date APIs.

## Development Commands

```bash
# Development server
npm run dev          # Start development server on http://localhost:3000

# Building and deployment
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint

# Environment setup
cp .env.local.example .env.local    # Copy environment template
# Then add your GTM container ID: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
```

## Architecture Overview

This is a Next.js 14 website with Google Tag Manager integration, built using the App Router architecture:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components and custom design tokens
- **Theme System**: Dark/light mode with system preference detection via ThemeProvider
- **Analytics**: Google Tag Manager integration using `@next/third-parties/google`
- **Animations**: Framer Motion with custom AnimatedGroup wrapper component

### Key Architectural Patterns

**GTM Event Tracking**: Events are sent using `sendGTMEvent()` from `@next/third-parties/google`. The GTM container ID is configured via `NEXT_PUBLIC_GTM_ID` environment variable in `app/layout.jsx:13`.

**Theme System**: Uses CSS custom properties defined in `app/globals.css` with Tailwind classes. The theme provider in `components/theme-provider.jsx` handles theme switching and persistence.

**Component Structure**: 
- UI components follow shadcn/ui patterns in `components/ui/`
- Custom AnimatedGroup wrapper in `components/ui/animated-group.jsx` provides consistent Framer Motion animations
- Page components are in `app/` directory using App Router conventions

### GTM Events Tracked

The following events are automatically sent to GTM:
- `blog_post_click` - Blog post interactions
- `newsletter_signup_click` - Newsletter signups  
- `demo_form_submit_click` - Demo form button clicks
- `demo_request_submit` - Demo form submissions with form data
- `theme_change` - Theme switching events

### Environment Configuration

Required environment variables:
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager container ID (format: GTM-XXXXXXXX)

### Styling System

- **Design Tokens**: CSS custom properties for colors, defined in `app/globals.css`
- **Responsive Design**: Mobile-first approach with Tailwind responsive classes
- **Custom Extensions**: Additional Tailwind config in `tailwind.config.js` for aspect ratios, custom heights, and design system colors