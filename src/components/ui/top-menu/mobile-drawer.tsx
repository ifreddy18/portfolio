'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { MenuOptions } from '@/data'
import { DownloadCV } from './download-cv'
import { ThemeToggle } from './theme-toggle'

export const MobileDrawer = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<Drawer>
			{/* Button */}
			<DrawerTrigger className="rounded-md border p-2">
				<HamburgerMenuIcon className="h-6 w-6" />
			</DrawerTrigger>

			{/* Content */}
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Menu</DrawerTitle>
					<DrawerDescription></DrawerDescription>
				</DrawerHeader>

				{/* Url */}
				<div className="flex w-full flex-col justify-between px-5">
					{MenuOptions.map((option) => (
						<DrawerClose key={option.name} asChild>
							<Link
								key={option.name}
								className="m-2 flex flex-row gap-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-accent"
								href={option.href}
							>
								{option.icon}
								{option.name}
							</Link>
						</DrawerClose>
					))}
				</div>

				{/* Footer */}
				<DrawerFooter>
					{/* <div className="mb-0 mt-0 border-t-2 pt-2">
						<ThemeToggle isMobile />
					</div> */}
					<div className="mb-4 mt-1 border-t-2 px-5">
						<span className="my-3 block">Download CV</span>
						<DownloadCV isMobile />
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
