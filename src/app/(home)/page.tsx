import { AboutSection } from '@/components/about'
import { ContactSection } from '@/components/contact'
import { HomeSection } from '@/components/home'
import { ProjectsSection } from '@/components/projects'
import { Divider } from '@/components/ui'

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center">
			<HomeSection />
			<Divider />

			<AboutSection />
			<Divider />

			<ProjectsSection />

			<ContactSection />
		</main>
	)
}
