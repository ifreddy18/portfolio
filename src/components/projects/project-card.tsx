import type { Technology } from '@/interfaces'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card'
import Link from 'next/link'

interface Props {
	name: string
	logo: React.ReactNode
	cardDescription: string
	slug: string
	techStack: Technology[]
}

export const ProjectCard = ({
	name,
	logo,
	cardDescription,
	slug,
	techStack,
}: Props) => {
	return (
		<Link key={`link-${slug}`} href={`/project/${slug}`}>
			<Card className="h-full cursor-pointer">
				<CardHeader>
					<CardTitle className="text-center">{name}</CardTitle>
				</CardHeader>
				<CardContent className="flex w-full items-center justify-center">
					{logo}
				</CardContent>
				<CardFooter>
					<p className="w-full text-center">{cardDescription}</p>
				</CardFooter>
			</Card>
		</Link>
	)
}
