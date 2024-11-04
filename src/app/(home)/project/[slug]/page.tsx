'use client'

import { notFound } from 'next/navigation'

import { cn } from '@/lib/utils'
import { ProjectsData } from '@/data'
import { GrandientButton, ImageCarousel } from '@/components/ui'
import { Badge } from '@/components/ui/badge'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

interface Props {
	params: {
		slug: string
	}
}

export default function ProjectPage({ params }: Readonly<Props>) {
	const { slug } = params
	const project = ProjectsData.find((project) => project.slug === slug)

	if (!project) return notFound()

	const {
		name,
		about,
		description,
		images,
		techStack,
		urlCode,
		urlLive,
		urlStore,
		date,
		credentials,
	} = project

	return (
		<div className="flex flex-row justify-center">
			<div className="mt-6 flex max-w-[800px] flex-col justify-center px-4">
				<h1 className="mb-2 text-3xl font-bold">
					{name} <span className="italic">({date.getFullYear()})</span>
				</h1>
				<div className="mb-4 mt-2 flex flex-row flex-wrap justify-start gap-2">
					{techStack.map((tech) => (
						<Badge
							key={tech.slug}
							className={cn('cursor-pointer')}
							variant="outline"
						>
							{tech.name}
						</Badge>
					))}
				</div>

				{images && <ImageCarousel images={images} />}

				<section className="project-description project-section mb-4">
					{about && (
						<>
							<h2 className="mt-4 text-2xl">About this project</h2>
							<p
								className="mt-3 block"
								dangerouslySetInnerHTML={{ __html: about }}
							></p>
						</>
					)}

					{description && (
						<>
							<h2 className="mt-4 text-2xl">Project description</h2>
							<p
								className="mt-3 block"
								dangerouslySetInnerHTML={{ __html: description }}
							></p>
						</>
					)}

					{credentials && credentials?.length > 0 && (
						<>
							<h2 className="mt-4 text-2xl">Test credentials</h2>
							<Table className="">
								<TableHeader>
									<TableRow>
										<TableHead className="">User</TableHead>
										<TableHead>Password</TableHead>
										<TableHead>Role/Type</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{credentials.map((credential) => (
										<TableRow key={credential.user}>
											<TableCell className="font-medium">
												{credential.user}
											</TableCell>
											<TableCell>{credential.password}</TableCell>
											<TableCell>{credential.type}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</>
					)}
				</section>

				{/* <TechLogoGrid technologies={techStackWithLogo} /> */}

				<div className="my-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
					{urlCode && (
						<GrandientButton
							href={urlCode}
							className="rounded-md px-6 py-2 sm:px-4"
							isExternal
							target="_blank"
						>
							View Code
						</GrandientButton>
					)}
					{urlLive && (
						<GrandientButton
							href={urlLive}
							className="rounded-md px-6 py-2 sm:px-4"
							isExternal
							target="_blank"
						>
							View Live
						</GrandientButton>
					)}
					{urlStore && (
						<GrandientButton
							href={urlStore}
							className="rounded-md px-6 py-2 sm:px-4"
							isExternal
							target="_blank"
						>
							View Store
						</GrandientButton>
					)}
				</div>

				{/* <Divider /> */}
				{/* Technologies */}
			</div>
		</div>
	)
}
