'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { sendGTMEvent } from '@next/third-parties/google'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    // Track theme change in GTM
    sendGTMEvent({ 
      event: 'theme_change', 
      theme_selected: newTheme 
    })
  }

  const cycleTheme = () => {
    const themes = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    handleThemeChange(themes[nextIndex])
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      case 'system':
        return <Monitor className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode'
      case 'dark':
        return 'Dark mode'
      case 'system':
        return 'System theme'
      default:
        return 'Toggle theme'
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      title={getLabel()}
      className="h-9 w-9"
    >
      {getIcon()}
      <span className="sr-only">{getLabel()}</span>
    </Button>
  )
}

// Alternative dropdown version (more comprehensive)
export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    sendGTMEvent({ 
      event: 'theme_change', 
      theme_selected: newTheme 
    })
  }

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        title="Change theme"
      >
        {theme === 'light' && <Sun className="h-4 w-4" />}
        {theme === 'dark' && <Moon className="h-4 w-4" />}
        {theme === 'system' && <Monitor className="h-4 w-4" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
      
      <div className="absolute right-0 mt-2 w-36 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          <button
            onClick={() => handleThemeChange('light')}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2 ${
              theme === 'light' ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <Sun className="h-4 w-4" />
            Light
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2 ${
              theme === 'dark' ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <Moon className="h-4 w-4" />
            Dark
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2 ${
              theme === 'system' ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <Monitor className="h-4 w-4" />
            System
          </button>
        </div>
      </div>
    </div>
  )
}