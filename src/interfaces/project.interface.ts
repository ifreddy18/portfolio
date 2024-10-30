export interface Technology {
	slug: string
	name: string
	web?: string
	logoPath?: string
	bgClassColor?: string
	isLibrary?: boolean
}

export interface Project {
	date: Date
	slug: string
	name: string
	cardDescription: string
	about?: string // Related to the product itself
	description?: string // Related to tech description
	logo: React.ReactNode
	images: string[]
	techStack: Technology[]
	note?: string
	urlCode?: string
	urlLive?: string
	urlStore?: string
}