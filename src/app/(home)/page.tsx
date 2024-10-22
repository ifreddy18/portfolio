import { AboutSection } from '@/components/about'
import { ContactSection } from '@/components/contact'
import { HomeSection } from '@/components/home'
import { ProjectsSection } from '@/components/projects'

export default function HomePage() {
	return (
		<main>
			<HomeSection />

			<AboutSection />

			<ProjectsSection />

			<ContactSection />
		</main>
	)
}
