# Tailark Website

A modern Next.js website with Google Tag Manager integration, featuring a blog and demo request form.

## Features

- ✨ Modern design following the Tailark theme
- 🌙 Dark/Light theme switcher with system preference detection
- 📊 Google Tag Manager integration with event tracking
- 📝 Blog page with sample posts
- 🎯 Demo request form with GTM events
- 🎨 Tailwind CSS + shadcn/ui components
- ⚡ Framer Motion animations
- 📱 Fully responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up Google Tag Manager**
   - Copy the environment file:
     ```bash
     cp .env.local.example .env.local
     ```
   - Edit `.env.local` and add your GTM container ID:
     ```
     NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
     ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Google Tag Manager Setup

### Getting Your GTM Container ID

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or use an existing one
3. Copy your container ID (format: GTM-XXXXXXXX)
4. Add it to your `.env.local` file

### GTM Events Being Tracked

The website automatically sends the following events to GTM:

#### Blog Page Events
- `blog_post_click` - When a user clicks "Read more" on a blog post
  - `post_title`: The title of the blog post
- `newsletter_signup_click` - When newsletter signup button is clicked

#### Demo Page Events  
- `demo_form_submit_click` - When the demo form submit button is clicked
- `demo_request_submit` - When the demo form is successfully submitted
  - `form_data.company`: Company name
  - `form_data.role`: User's role
  - `form_data.interest`: Selected interest area

#### Theme Events
- `theme_change` - When user switches themes
  - `theme_selected`: Selected theme (light, dark, or system)

### Setting Up GTM Tags

To capture these events in GTM:

1. **Create Custom Event Triggers** in GTM:
   - Trigger Type: Custom Event
   - Event Name: `blog_post_click`, `newsletter_signup_click`, etc.

2. **Create Tags** to send data to your analytics platform:
   - Google Analytics 4
   - Facebook Pixel  
   - LinkedIn Insight Tag
   - Or any other tracking platform

3. **Use Event Parameters** for more detailed tracking:
   - Access event parameters like `{{Event - post_title}}`
   - Set up custom dimensions in GA4 for form data

## Project Structure

```
├── app/
│   ├── blog/          # Blog page
│   ├── demo/          # Demo request form
│   ├── layout.jsx     # Root layout with GTM
│   ├── page.jsx       # Home page
│   └── globals.css    # Global styles
├── components/
│   ├── ui/            # Reusable UI components
│   └── hero-section.jsx
├── lib/
│   └── utils.js       # Utility functions
└── public/            # Static assets
```

## Customization

### Styling
- Uses Tailwind CSS with custom design tokens
- Dark/light mode support built-in
- Modify `tailwind.config.js` for theme changes

### Content
- Update blog posts in `app/blog/page.jsx`
- Modify hero content in `components/hero-section.jsx`
- Customize form fields in `app/demo/page.jsx`

### GTM Events
- Add new events using `sendGTMEvent()` from `@next/third-parties/google`
- Example:
  ```javascript
  import { sendGTMEvent } from '@next/third-parties/google'
  
  const handleClick = () => {
    sendGTMEvent({ 
      event: 'custom_event_name',
      custom_parameter: 'value'
    })
  }
  ```

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add your environment variable:
   - `NEXT_PUBLIC_GTM_ID`: Your GTM container ID
3. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in `.next/` directory.

## GTM Best Practices

1. **Test in GTM Preview Mode** before publishing
2. **Use GTM's built-in variables** like Page URL, Click Text, etc.
3. **Set up conversion tracking** for demo form submissions
4. **Create audiences** based on blog engagement
5. **Monitor GTM's real-time reports** to verify events

## Support

For questions about:
- **Next.js**: Check the [Next.js documentation](https://nextjs.org/docs)
- **GTM Integration**: Review the [Next.js third-parties documentation](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- **Tailwind CSS**: See [Tailwind CSS documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).