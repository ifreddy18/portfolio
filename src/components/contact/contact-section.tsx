import Link from 'next/link'
import { PersonalData } from '@/data'
import { SectionTitle } from '../ui'
import { Input } from '../ui/input'
import { ContactForm } from './contact-form'

export const ContactSection = () => {
	return (
		<section
			id="contact"
			className="flex h-screen w-full items-center justify-center"
		>
			<div className="flex w-5/6 flex-col items-center justify-center md:w-[768px]">
				<SectionTitle>Contact</SectionTitle>
				<p className="mt-4 text-lg text-gray-400">
					If you want to get it touch with me, you can send me a message to my{' '}
					<Link
						href={PersonalData.linkedinUrl}
						target="_blank"
						className="text-purple-700"
					>
						LinkedIn
					</Link>{' '}
					profile or you can simple use the next form.
				</p>

				<ContactForm />
			</div>
		</section>
	)
}
