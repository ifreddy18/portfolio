interface Technology {
	slug: string
	name: string
	web?: string
	logoPath?: string
}

interface Project {
	slug: string
	name: string
	logoPath: string
	shortDescription: string
	description: string
	images: string[]
	techStack: Technology[]
}
