import { create } from 'zustand'
import { AllTechNames } from '@/data/technologies-data'

interface ProjectsStore {
	activeFilters: string[]
	isAllActive: boolean
	toggleFilter: (filter: string) => void
	toggleAllFilters: () => void
}

export const useProjectsStore = create<ProjectsStore>()((set, get) => ({
	activeFilters: AllTechNames || [],
	isAllActive: true,

	toggleFilter: (filter: string) => {
		const { activeFilters } = get()
		let newFilters = []
		if (activeFilters.includes(filter)) {
			newFilters = activeFilters.filter((value) => value !== filter)
		} else {
			newFilters = [...activeFilters, filter]
		}

		// Compare if all filters are active
		const newIsAllActive = newFilters.length === AllTechNames.length

		set({ activeFilters: newFilters, isAllActive: newIsAllActive })
	},

	toggleAllFilters: () => {
		const { activeFilters } = get()
		const newFilters =
			activeFilters.length < AllTechNames.length ? AllTechNames : []

		set({ activeFilters: newFilters, isAllActive: newFilters.length > 0 })
	},
}))
