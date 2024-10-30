import Image from 'next/image'

import type { Technology } from '@/interfaces'

interface Props {
	technologies: Technology[]
}

export const TechLogoGrid = ({ technologies }: Props) => {
	return (
		<div className="mt-6 grid w-full grid-cols-3 justify-center justify-items-center gap-4 sm:grid-cols-4 md:grid-cols-6">
			{technologies
				.filter((tech) => tech.logoPath && tech.logoPath !== '')
				.map((tech) => (
					<Image
						key={tech.name}
						src={tech.logoPath!}
						alt={tech.name}
						width={80}
						height={80}
					/>
				))}
		</div>
	)
}
