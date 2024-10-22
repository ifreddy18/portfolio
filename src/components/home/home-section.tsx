import { GrandientButton } from '../ui/gradient-button'
import { GradientText } from '../ui/gradient-text'

export const HomeSection = () => {
	return (
		<section
			id="#"
			className="flex h-screen w-full items-center justify-center"
			style={{ marginTop: '-75px' }}
		>
			<div className="flex flex-col items-center justify-center md:w-[768px]">
				<h1 className="text-center text-6xl">
					Hi, my name is{' '}
					<GradientText className="font-bold">Freddy</GradientText>
				</h1>
				<p className="my-4 text-center text-3xl">
					I'm a self-taught web developer, Mechanical Engineer and a problem
					solving lover
				</p>
				<GrandientButton href="#about" className="rounded-md p-3 text-2xl">
					Know more
				</GrandientButton>
			</div>
		</section>
	)
}
