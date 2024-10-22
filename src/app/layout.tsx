import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import { GlobalProvider } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: "Freddy Michelena's portfolio",
	description: 'Created with Next.js and shadcn/ui',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Toaster />
				<GlobalProvider>{children}</GlobalProvider>
				{/* {children} */}
			</body>
		</html>
	)
}
