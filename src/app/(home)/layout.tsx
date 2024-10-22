import { TopMenu } from '@/components/ui'

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className="min-h-screen">
			<TopMenu />
			{/* <Sidebar /> */}
			<div className="px-0 sm:px-10">{children}</div>
			{/* <Footer /> */}
		</main>
	)
}
