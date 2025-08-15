'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({})

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children, ...props }) {
  const [theme, setTheme] = useState('dark')
  const [resolvedTheme, setResolvedTheme] = useState('dark')

  useEffect(() => {
    // Get stored theme preference, default to dark
    const storedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(storedTheme)
  }, [])

  useEffect(() => {
    const updateTheme = () => {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')

      let newResolvedTheme
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        root.classList.add(systemTheme)
        newResolvedTheme = systemTheme
      } else {
        root.classList.add(theme)
        newResolvedTheme = theme
      }

      setResolvedTheme(newResolvedTheme)
    }

    updateTheme()

    // Listen for system theme changes when using system theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', updateTheme)
      return () => mediaQuery.removeEventListener('change', updateTheme)
    }
  }, [theme])

  const setThemeWithStorage = (newTheme) => {
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const value = {
    theme,
    setTheme: setThemeWithStorage,
    resolvedTheme,
  }

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}