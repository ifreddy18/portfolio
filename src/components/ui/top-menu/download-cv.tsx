'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
} from '../dropdown-menu'

import { Button } from '@/components/ui/button'
import { CVPaths } from '@/constants'

interface Props {
	isMobile?: boolean
}

export const DownloadCV = ({ isMobile = false }: Props) => {
	if (isMobile)
		return (
			<div className="flex w-full flex-col">
				<a href={CVPaths.esp} className="cursor-pointer" download>
					<Button
						variant="outline"
						className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-accent"
					>
						Español
					</Button>
				</a>
				<a href={CVPaths.eng} className="cursor-pointer" download>
					<Button
						variant="outline"
						className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-accent"
					>
						English
					</Button>
				</a>
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
				<a href={CVPaths.esp} download>
					<DropdownMenuItem className="cursor-pointer">
						Español
					</DropdownMenuItem>
				</a>
				<a href={CVPaths.eng} download>
					<DropdownMenuItem className="cursor-pointer">
						English
					</DropdownMenuItem>
				</a>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
