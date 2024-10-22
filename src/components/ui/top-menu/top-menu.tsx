import Link from 'next/link'

import { ThemeToggle } from './theme-toggle'
import { DownloadCV } from './download-cv'
import { Logo } from './logo'
import { MobileDrawer } from './mobile-drawer'
import { MenuOptions } from '@/data'

export const TopMenu = () => {
	return (
		<nav className="flex w-full items-center justify-between border-b px-5 py-6">
			{/* Logo */}
			<div className="w-[200px]">
				<Logo />
			</div>

			{/* Center menu */}
			<div className="flex items-center justify-between">
				<div className="hidden sm:block">
					{MenuOptions.map((option) => (
						<Link
							key={option.name}
							className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-accent"
							href={option.href}
						>
							{option.name}
						</Link>
					))}
				</div>
				<div className="hidden sm:block">
					<DownloadCV />
				</div>
				{/* <div className="ml-4 hidden sm:block">
					<ThemeToggle />
				</div> */}
			</div>

			<div className="block sm:hidden">
				<MobileDrawer />
			</div>
		</nav>
	)
}
