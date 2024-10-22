'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
} from '../dropdown-menu'

import { Button } from '@/components/ui/button'

interface Props {
	isMobile?: boolean
}

export const DownloadCV = ({ isMobile = false }: Props) => {
	if (isMobile)
		return (
			<div className="flex w-full flex-col">
				<Button
					variant="outline"
					className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-accent"
					onClick={() => console.log('Español')}
				>
					Español
				</Button>
				<Button
					variant="outline"
					className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-accent"
					onClick={() => console.log('English')}
				>
					English
				</Button>
			</div>
		)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="default" className="text-base">
					Download CV
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => console.log('Español')}>
					Español
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => console.log('English')}>
					English
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
