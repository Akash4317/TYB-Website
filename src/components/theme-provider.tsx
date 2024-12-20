'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { type ThemeProviderProps } from 'next-themes'

const DynamicNextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <DynamicNextThemesProvider {...props}>{children}</DynamicNextThemesProvider>
}