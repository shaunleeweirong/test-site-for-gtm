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

The following events are automatically sent to GTM dataLayer (visible in browser console via `dataLayer`):

**Click Events** (event: 'click'):
- All "Request Demo" buttons across pages with `event_label: 'Request Demo'`
- "Learn More" buttons with `event_label: 'Learn More'`  
- "Speak with Expert" buttons with `event_label: 'Speak with Expert'`
- Navigation menu links with `event_category: 'navigation'`
- Pricing tier selection buttons with `event_label: '[Plan Name] Plan'`
- CTA buttons with detailed `click_element` tracking (primary_cta, secondary_cta, etc.)

**Form Events**:
- `blog_post_click` - Blog post interactions
- `newsletter_signup_click` - Newsletter signups  
- `demo_form_submit_click` - Demo form button clicks
- `demo_request_submit` - Demo form submissions with form data

**Other Events**:
- `theme_change` - Theme switching events

**Event Structure**: All click events include:
```javascript
{
  event: 'click',
  event_category: 'engagement|navigation', 
  event_action: 'click',
  event_label: 'Button/Link Name',
  page_location: '/current-page',
  click_element: 'primary_cta|secondary_cta|navigation|etc'
}
```

### GTM Implementation Status

✅ **GTM Container**: Loaded via both `@next/third-parties/google` and manual script injection (fallback)
✅ **Click Tracking**: Comprehensive tracking across all pages (Features, Solutions, Pricing, AI Models, Demo, Hero)
✅ **Event Structure**: Standardized event schema with detailed tracking parameters
✅ **dataLayer Integration**: Events successfully push to GTM dataLayer (verify with browser console: `dataLayer`)

**Key Fix Applied**: onClick handlers moved from Button components to Link components to ensure GTM events fire before navigation.

### Environment Configuration

Required environment variables:
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager container ID (format: GTM-XXXXXXXX)

### Styling System

- **Design Tokens**: CSS custom properties for colors, defined in `app/globals.css`
- **Responsive Design**: Mobile-first approach with Tailwind responsive classes
- **Custom Extensions**: Additional Tailwind config in `tailwind.config.js` for aspect ratios, custom heights, and design system colors

## Recent Updates & Fixes

### Blog Image Optimization (Latest)
✅ **Fixed**: Replaced unreliable external image sources with stable Unsplash CDN
✅ **Upgraded**: Standard `<img>` tags to Next.js `<Image>` component for optimization
✅ **Configured**: Added `images.unsplash.com` to `next.config.js` remotePatterns
✅ **Standardized**: All blog images now use 800x450 dimensions with proper lazy loading

**Blog Image Sources**:
- **Development Post**: `https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80` (coding workspace)
- **Business Post**: `https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80` (teamwork)  
- **Design Post**: `https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80` (design workspace)

### Current Page Structure

The website includes the following pages with comprehensive GTM tracking:

- **`/` (Home)**: Hero section with announcement banner, main CTAs, navigation tracking
- **`/features`**: Feature showcase with "Request Demo" and "Learn More" CTAs
- **`/solutions`**: Use case solutions with "Request Demo" and "Speak with Expert" CTAs  
- **`/pricing`**: Tiered pricing plans with individual plan selection tracking
- **`/ai-models`**: AI model showcase (GPT-4, Claude, Gemini) with demo CTAs
- **`/blog`**: Blog listing with optimized Unsplash images and post interaction tracking
- **`/demo`**: Demo request form with GTM conversion tracking

All pages use consistent AnimatedGroup animations, theme toggle, and standardized GTM event tracking patterns.