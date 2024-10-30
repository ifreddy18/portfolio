import { PersonalData } from '@/data'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
	return (
		<div className="flex w-full items-center justify-center p-5">
			<h4>
				&copy; <span>2024</span> Freddy Michelena |{' '}
				<Link
					href={PersonalData.linkedinUrl}
					target="_blank"
					className="text-purple-700"
				>
					LinkedIn
				</Link>
			</h4>
		</div>
	)
}
