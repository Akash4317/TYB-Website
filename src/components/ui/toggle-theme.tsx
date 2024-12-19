"use client"

import * as React from "react"
import { MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		theme === "light" ? <Button onClick={() => setTheme("dark")}>
			<MoonIcon size={24} />
			<span className="sr-only">Toggle theme</span>
		</Button> : <Button onClick={() => setTheme("light")}>
			<Sun size={24} />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
