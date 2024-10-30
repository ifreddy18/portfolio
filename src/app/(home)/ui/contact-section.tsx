import Link from 'next/link'
import { PersonalData } from '@/data'
import { Divider, SectionTitle } from '@/components/ui'
import { ContactForm } from '@/components/contact/contact-form'

export const ContactSection = () => {
	return (
		<section
			id="contact"
			className="flex h-auto w-full items-center justify-center"
		>
			<div className="flex h-auto w-5/6 flex-col items-center justify-center py-10 md:w-[768px]">
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
