'use client'

import * as React from 'react'
import { Link, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Props {
	isMobile?: boolean
}

const LightAttributes = {
	theme: 'dark',
	buttonText: 'Light Mode',
	icon: <Sun className="h-6 w-6" />,
}

const DarkAttributes = {
	theme: 'light',
	buttonText: 'Dark Mode',
	icon: <Moon className="h-6 w-6" />,
}

export function ThemeToggle({ isMobile = false }: Props) {
	const { setTheme, resolvedTheme } = useTheme()

	if (isMobile) {
		const attributes =
			resolvedTheme === 'dark' ? DarkAttributes : LightAttributes
		return (
			<div
				className="my-2 ml-2 mr-4 flex w-full cursor-pointer flex-row gap-2 rounded-md p-2 pr-3 text-start transition-all hover:bg-gray-100 dark:hover:bg-accent"
				onClick={() => setTheme(attributes.theme)}
			>
				{attributes.icon}
				{attributes.buttonText}
			</div>
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
