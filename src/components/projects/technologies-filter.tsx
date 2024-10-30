'use client'

import type { Technology } from '@/interfaces'
import { Technologies } from '@/data'
import { Badge } from '../ui/badge'
import { useProjectsStore } from '@/store'

export const TechnologiesFilter = () => {
	const { activeFilters, isAllActive, toggleFilter, toggleAllFilters } =
		useProjectsStore((state) => state)

	const techArray: Technology[] = []

	for (const key in Technologies) {
		techArray.push(Technologies[key])
	}

	return (
		<div className="my-6 flex flex-row flex-wrap gap-2">
			<Badge
				variant={isAllActive ? 'secondary' : 'outline'}
				className="cursor-pointer"
				onClick={() => toggleAllFilters()}
			>
				All
			</Badge>
			<span className="text-grey-400 block font-bold">|</span>
			{techArray.map((tech) => (
				<Badge
					key={tech.slug}
					className="cursor-pointer"
					variant={activeFilters.includes(tech.name) ? 'secondary' : 'outline'}
					onClick={() => toggleFilter(tech.name)}
				>
					{tech.name}
				</Badge>
			))}
		</div>
	)
}
