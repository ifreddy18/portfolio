import Link from 'next/link'
import { GradientText } from '../gradient-text'

export const PageNotFound = () => {
	return (
		<div className="flex h-screen w-full flex-col-reverse items-center justify-center align-middle md:flex-row">
			<div className="mx-5 px-5 text-center">
				<GradientText className="text-9xl antialiased">404</GradientText>
				{/* <h2 className={``}>404</h2> */}
				<p className="text-xl font-semibold">Whoops! Something went wrong.</p>
				<p className="font-light">
					<span>Go back to </span>
					<Link href="/" className="font-normal transition-all hover:underline">
						Home
					</Link>
				</p>
			</div>
		</div>
	)
}
