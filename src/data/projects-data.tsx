import type { Project } from '@/interfaces'
import {
	DiscoverMovieLogo,
	FintechLogo,
	MarvelClonLogo,
	MineSweeperLogo,
	StratsAppLogo,
} from '@/components/projects'

import { Technologies } from './technologies-data'

export const ProjectsData: Project[] = [
	// MineSweeper Master
	{
		date: new Date('05-31-2024'),
		slug: 'minesweeper',
		name: 'MineSweeper Master',
		cardDescription: 'Classic minesweeper with custom games',
		logo: <MineSweeperLogo />,
		images: [
			'/assets/img-projects/minesweeper/minesweeper_01.png',
			'/assets/img-projects/minesweeper/minesweeper_02.jpg',
			'/assets/img-projects/minesweeper/minesweeper_03.jpg',
			'/assets/img-projects/minesweeper/minesweeper_04.jpg',
			'/assets/img-projects/minesweeper/minesweeper_05.jpg',
			'/assets/img-projects/minesweeper/minesweeper_06.jpg',
			'/assets/img-projects/minesweeper/minesweeper_07.jpg',
		],
		techStack: [Technologies['csharp'], Technologies['unity']],
		urlStore:
			'https://play.google.com/store/apps/details?id=com.michelenadevelopment.minesweepermaster&hl=en',
		description: `Classic minesweeper game with customizable props. Developed with Unity and available in Play Store.`,
	},
	// Fintech
	{
		date: new Date('02-02-2022'),
		slug: 'fintech',
		name: 'Fintech',
		cardDescription: 'Dashboard for businesses in the retail industry',
		logo: <FintechLogo />,
		images: [
			'/assets/img-projects/fintech/fintech_01.png',
			'/assets/img-projects/fintech/fintech_02.png',
			'/assets/img-projects/fintech/fintech_03.png',
			'/assets/img-projects/fintech/fintech_04.png',
			'/assets/img-projects/fintech/fintech_05.png',
		],
		techStack: [
			Technologies['html'],
			Technologies['css'],
			Technologies['bootstrap'],
			Technologies['javascript'],
			Technologies['react'],
			Technologies['redux'],
			Technologies['nodejs'],
			Technologies['express'],
			Technologies['mysql'],
		],
		urlLive: 'https://fintech-dashboard.netlify.app',
		about: `In this project I worked with 4 colleagues as part of Cohort 2 of the
					<a
						href="https://www.linkedin.com/company/nocountryforjuniordevs/"
						target="_blank"
						class="text-purple-700"
					>
						No Country
					</a>
					company, in charge of supporting the growth of junior developers. My
					role was mainly developing the backend and the architecture and
					content generation for the database. But I also had a small
					participation in the development of components in the frontend.`,
		description: `Administrative Dashboard designed as a solution for small and
					medium-sized companies dedicated to retail sales. The app has a user
					role system that allows different information to be displayed
					depending on the logged in user:
					<br />
					<br />
					<ul>
						<li>
							<b>- User:</b> Able to record and view purchase orders and retail
							sales.
						</li>
						<li>
							<b>- Manager:</b> Able to view analytics related to the branch of
							which he is manager.
						</li>
						<li>
							<b>- CEO:</b> Able to visualize analytics of the different branches
							and comparisons between them.
						</li>
						<li>
							<b>- Admin:</b> Able to manage list of users and providers.
						</li>
					</ul>`,
	},
	// Strats App
	{
		date: new Date('11-11-2021'),
		slug: 'strats-app',
		name: 'Strats App',
		cardDescription: 'Stats and visualizer for STRAVA',
		logo: <StratsAppLogo />,
		images: [
			'/assets/img-projects/strats-app/strats-app_01.png',
			'/assets/img-projects/strats-app/strats-app_02.png',
			'/assets/img-projects/strats-app/strats-app_03.png',
			'/assets/img-projects/strats-app/strats-app_04.png',
			'/assets/img-projects/strats-app/strats-app_05.png',
			'/assets/img-projects/strats-app/strats-app_06.png',
			'/assets/img-projects/strats-app/strats-app_07.png',
			'/assets/img-projects/strats-app/strats-app_08.png',
			'/assets/img-projects/strats-app/strats-app_09.png',
			'/assets/img-projects/strats-app/strats-app_10.png',
			'/assets/img-projects/strats-app/strats-app_11.png',
			'/assets/img-projects/strats-app/strats-app_12.png',
			'/assets/img-projects/strats-app/strats-app_13.png',
			'/assets/img-projects/strats-app/strats-app_14.png',
			'/assets/img-projects/strats-app/strats-app_15.png',
		],
		techStack: [
			Technologies['html'],
			Technologies['css'],
			Technologies['sass'],
			Technologies['javascript'],
			Technologies['typescript'],
			Technologies['angular'],
			Technologies['angularmaterial'],
			Technologies['momentjs'],
			Technologies['chartjs'],
			Technologies['thirdpartyapi'],
		],
		urlCode: 'https://github.com/ifreddy18/strats-app/',
		urlLive: 'https://ifreddy18.github.io/strats-app/',
		description: `Web for detailed consultation of the activity statistics registered in <a href="https://www.strava.com/" target="_blank" class="text-purple-700">Strava</a>.
								<br /><br />
                This is my favorite personal project, because Strava is an app that I use daily for track my activities.
            <br /><br />
                Now, this is the <b>minimum viable product (MVP)</b> of the project. I want to keep adding features in the long term.
            <br /><br />
            <ul>
                <li>
                    <b>-</b> It was developed in <b>Angular</b> and styles with <b>SASS</b>.
                </li>
                <li>
                    <b>-</b> <b>Angular Material</b> was used for some components.
                </li>
                <li>
                    <b>-</b> It was developed using <b>Strava API</b>.
                </li>

            </ul>`,
	},
	// Marvel Clon
	{
		date: new Date('08-08-2021'),
		slug: 'marvel',
		name: 'Marvel Clon',
		cardDescription: "Marvel's homepage static clon",
		logo: <MarvelClonLogo />,
		images: [
			'/assets/img-projects/marvel-clon/marvel-clon_01.png',
			'/assets/img-projects/marvel-clon/marvel-clon_02.png',
			'/assets/img-projects/marvel-clon/marvel-clon_03.png',
			'/assets/img-projects/marvel-clon/marvel-clon_04.png',
			'/assets/img-projects/marvel-clon/marvel-clon_05.png',
			'/assets/img-projects/marvel-clon/marvel-clon_06.png',
			'/assets/img-projects/marvel-clon/marvel-clon_07.png',
		],
		techStack: [
			Technologies['html'],
			Technologies['css'],
			Technologies['javascript'],
			Technologies['sass'],
		],
		urlLive: 'https://ifreddy18.github.io/marvel-clon/',
		urlCode: 'https://github.com/ifreddy18/marvel-clon',
		description: `Full responsive static clone from the homepage of <a href="https://marvel.com/" target="_blank">Marvel’s website</a>.
						<br />
            <ul>
                <li><b>-</b> It was developed with <b>HTML</b> and <b>SASS</b>.</li>
                <li><b>-</b> <b>JavaScript</b> was used only for some animations, like slider and navbar animations.</li>
            </ul>`,
	},
	// Discover Movie
	{
		date: new Date('06-06-2021'),
		slug: 'discover-movie',
		name: 'Discover Movie',
		cardDescription: 'Search engine for movies and TV shows',
		logo: <DiscoverMovieLogo />,
		images: [
			'/assets/img-projects/discover-movie/discover-movie_01.png',
			'/assets/img-projects/discover-movie/discover-movie_02.png',
			'/assets/img-projects/discover-movie/discover-movie_03.png',
			'/assets/img-projects/discover-movie/discover-movie_04.png',
			'/assets/img-projects/discover-movie/discover-movie_05.png',
			'/assets/img-projects/discover-movie/discover-movie_06.png',
		],
		techStack: [
			Technologies['html'],
			Technologies['css'],
			Technologies['bootstrap'],
			Technologies['javascript'],
			Technologies['typescript'],
			Technologies['angular'],
			Technologies['firebase'],
			Technologies['thirdpartyapi'],
		],
		urlLive: 'https://ifreddy18.github.io/discover-movie/',
		urlCode: 'https://github.com/ifreddy18/discover-movie',
		description: `Search engine for movies and TV shows.
                On the web you can register using your email or your Gmail account, add the movies or series to your favorites and you will receive lists of recommendations according to your interests and trends.
								<br />
					<br />
								<ul class="list-disc">
									<li><b>-</b> It was developed in <b>Angular</b> and styles with <b>Bootstrap</b>.</li>
									<li><b>-</b> It was developed using <b>TMDB API</b>.</li>
									<li><b>-</b> An authentication system was implemented with <b>Firebase</b>.</li>
									<li><b>-</b> A Likes functionality has been implemented to add movies and TV shows and give recommendations based on it, using <b>Firebase Realtime Database</b>.</li>
            		</ul>
            `,
	},
]
