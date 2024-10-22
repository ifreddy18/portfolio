'use client'

import { useTheme } from 'next-themes'

import { GrandientButton } from '../gradient-button'
import { GradientText } from '../gradient-text'
import { useEffect, useState } from 'react'

const text = 'Freddy Michelena'
const href = '/'

export const Logo = () => {
	const { resolvedTheme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return resolvedTheme === 'dark' ? (
		<GrandientButton href={href}>{text}</GrandientButton>
	) : (
		<GradientText href={href} className="text-xl font-bold">
			{text}
		</GradientText>
	)
}
