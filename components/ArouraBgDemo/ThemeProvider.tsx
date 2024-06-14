"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider   {...props}
    storageKey="theme" // Ensure you specify the storage key
    defaultTheme="dark"
    enableSystem       >{children}</NextThemesProvider>
}
