'use client'

import type { Project } from '@/interfaces'
import { ProjectsData } from '@/data'

import { ProjectCard, TechnologiesFilter } from '@/components/projects'
import { Divider, SectionTitle } from '@/components/ui'
import { useProjectsStore } from '@/store'
import { useEffect, useState } from 'react'

const validProjectWithTechStack = (
	project: Project,
	filters: string[],
): boolean => {
	const { techStack } = project
	const techName = techStack.map((t) => t.name)

	for (const technology of filters) {
		if (techName.includes(technology)) return true
	}
	return false
}

export const ProjectsSection = () => {
	const activeFilters = useProjectsStore((state) => state.activeFilters)
	const [projects, setProjects] = useState(ProjectsData)

	useEffect(() => {
		const filteredProjects = ProjectsData.filter((project) =>
			validProjectWithTechStack(project, activeFilters),
		)
		setProjects(filteredProjects)
	}, [activeFilters])

	return (
		<section
			id="projects"
			className="flex h-auto min-h-screen w-full items-center justify-center"
		>
			<div className="flex h-auto w-5/6 flex-col items-center justify-center py-10 md:w-[768px]">
				<SectionTitle>Projects</SectionTitle>

				<TechnologiesFilter />

				{projects.length > 0 ? (
					<div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3">
						{projects.map((project) => (
							<ProjectCard key={project.slug} {...project} />
						))}
					</div>
				) : (
					<div className="flex w-full items-center justify-center py-12">
						<span className="size-5 w-full text-center font-semibold">
							No projects to show. Change the filters.
						</span>
					</div>
				)}
			</div>
		</section>
	)
}
