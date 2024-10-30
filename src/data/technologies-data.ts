import type { Technology } from '@/interfaces'

export const Technologies: { [key: string]: Technology } = {
	angular: {
		slug: 'angular',
		name: 'Angular',
		web: '',
		logoPath: '/assets/tech-logos/angular.svg',
	},
	angularmaterial: {
		slug: 'angularmaterial',
		name: 'Angular Material',
		isLibrary: true,
	},
	bootstrap: {
		slug: 'bootstrap',
		name: 'Bootstrap',
		web: '',
		logoPath: '/assets/tech-logos/bootstrap.svg',
	},
	chartjs: {
		slug: 'chartjs',
		name: 'Chart.js',
		isLibrary: true,
	},
	csharp: {
		slug: 'csharp',
		name: 'C#',
	},
	css: {
		slug: 'css',
		name: 'CSS',
		web: '',
		logoPath: '/assets/tech-logos/css3.svg',
	},
	express: {
		slug: 'express',
		name: 'Express',
		web: '',
		logoPath: '',
	},
	firebase: {
		slug: 'firebase',
		name: 'Firebase',
		web: '',
		logoPath: '/assets/tech-logos/firebase.svg',
	},
	// grapql: {
	// 	slug: 'grapql',
	// 	name: 'GraphQL',
	// 	web: '',
	// 	logoPath: '',
	// },
	html: {
		slug: 'html',
		name: 'HTML',
		web: '',
		logoPath: '/assets/tech-logos/html5.svg',
	},
	javascript: {
		slug: 'javascript',
		name: 'JavaScript',
		web: '',
		logoPath: '/assets/tech-logos/javascript.svg',
	},
	momentjs: {
		slug: 'momentjs',
		name: 'Moment.js',
		isLibrary: true,
	},
	// mongodb: {
	// 	slug: 'mongodb',
	// 	name: 'MongoDB',
	// 	web: '',
	// 	logoPath: '/assets/tech-logos/mongodb.svg',
	// },
	mysql: {
		slug: 'mysql',
		name: 'MySQL',
		web: '',
		logoPath: '/assets/tech-logos/mysql.svg',
	},
	// nest: {
	// 	slug: 'nest',
	// 	name: 'NestJs',
	// 	web: '',
	// 	logoPath: '',
	// },
	// next: {
	// 	slug: 'next',
	// 	name: 'NextJs',
	// 	web: '',
	// 	logoPath: '',
	// },
	nodejs: {
		slug: 'nodejs',
		name: 'NodeJs',
		web: '',
		logoPath: '/assets/tech-logos/nodejs.svg',
	},
	// postgresql: {
	// 	slug: 'postgresql',
	// 	name: 'PostgreSQL',
	// 	web: '',
	// 	logoPath: '',
	// },
	// reactnative: {
	// 	slug: 'reactnative',
	// 	name: 'React Native',
	// 	web: '',
	// 	logoPath: '/assets/tech-logos/react-native.svg',
	// },
	react: {
		slug: 'react',
		name: 'React',
		web: '',
		logoPath: '/assets/tech-logos/react.svg',
	},
	redux: {
		slug: 'redux',
		name: 'Redux',
		web: '',
		logoPath: '/assets/tech-logos/redux.svg',
	},
	sass: {
		slug: 'sass',
		name: 'SASS',
		web: '',
		logoPath: '/assets/tech-logos/sass.svg',
	},
	// tailwind: {
	// 	slug: 'tailwind',
	// 	name: 'Tailwind',
	// 	web: '',
	// 	logoPath: '',
	// },
	thirdpartyapi: {
		slug: 'thirtpartyapi',
		name: 'Third Party API REST',
		isLibrary: false,
	},
	typescript: {
		slug: 'typescript',
		name: 'TypeScript',
		web: '',
		logoPath: '/assets/tech-logos/typescript.svg',
	},
	unity: {
		slug: 'unity',
		name: 'Unity',
		web: '',
		logoPath: '',
	},
	// zustand: {
	// 	slug: 'zustand',
	// 	name: 'Zustand',
	// 	web: '',
	// 	logoPath: '',
	// },
}

export const AllTechNames: string[] = Object.values(Technologies).map(
	(tech) => tech.name,
)
