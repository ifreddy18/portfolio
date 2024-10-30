import { Divider } from '@/components/ui'

import { AboutSection } from './ui/about-section'
import { ContactSection } from './ui/contact-section'
import { HomeSection } from './ui/home-section'
import { ProjectsSection } from './ui/projects-section'

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center">
			<HomeSection />
			<Divider />

			<AboutSection />
			<Divider />

			<ProjectsSection />
			<Divider />

			<ContactSection />
		</main>
	)
}
