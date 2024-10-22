import { GrandientButton, SectionTitle } from '../ui'

export const AboutSection = () => {
	return (
		<section
			id="about"
			className="flex h-screen w-full items-center justify-center"
		>
			<div className="flex w-5/6 flex-col items-center justify-center md:w-[768px]">
				<SectionTitle>About</SectionTitle>
				<p className="mt-4 text-lg text-gray-900 dark:text-gray-400">
					I’m a passionate Web Developer with over 3 years of experience
					building full-stack applications. <br />
					<br /> My background as a Mechanical Engineer gives me a unique
					problem-solving approach and an eye for detail, which I apply to every
					project. I specialize in JavaScript, Node.js, React, and SQL, among
					other technologies. <br /> <br />
					I’m constantly learning and love tackling new challenges, with a focus
					on delivering high-quality, scalable solutions. I’m actively seeking
					opportunities to collaborate with dynamic teams on innovative web
					development projects.
				</p>
				<p className="mt-4 w-full font-bold">Download my CV</p>
				<div className="mt-4 flex flex-col justify-between gap-4 sm:w-[300px] sm:flex-row">
					<GrandientButton
						href="#about"
						className="rounded-md px-6 py-2 sm:px-4"
					>
						CV (Español)
					</GrandientButton>
					<GrandientButton
						href="#about"
						className="rounded-md px-6 py-2 sm:px-4"
					>
						CV (English)
					</GrandientButton>
				</div>
			</div>
		</section>
	)
}
