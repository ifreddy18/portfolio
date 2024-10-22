import { GrandientButton } from '../ui/gradient-button'
import { GradientText } from '../ui/gradient-text'

export const HomeSection = () => {
	return (
		<section
			id="#"
			className="flex h-screen w-full items-center justify-center"
			style={{ marginTop: '-55px' }}
		>
			<div className="flex w-5/6 flex-col items-center justify-center md:w-[768px]">
				<h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
					Hi, my name is{' '}
					<GradientText className="font-bold">Freddy</GradientText>
				</h1>
				<p className="my-6 text-center text-xl text-gray-400 sm:my-4 sm:text-2xl md:text-3xl">
					I'm a self-taught web developer, Mechanical Engineer and a problem
					solving lover
				</p>
				<GrandientButton
					href="#about"
					className="rounded-md p-2 text-lg sm:text-xl md:p-3 md:text-2xl"
				>
					Know more
				</GrandientButton>
			</div>
		</section>
	)
}
