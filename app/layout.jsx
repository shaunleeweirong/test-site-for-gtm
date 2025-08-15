import { GoogleTagManager } from '@next/third-parties/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata = {
  title: 'Tailark - Modern Customer Engagement Solutions',
  description: 'Highly customizable components for building modern websites and applications that look and feel the way you mean it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarnings>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}