import { PersonIcon, FileTextIcon, PaperPlaneIcon } from '@radix-ui/react-icons'

interface MenuOption {
	name: string
	href: string
	icon: React.ReactNode
}

export const MenuOptions: MenuOption[] = [
	{
		name: 'About',
		href: '/#about',
		icon: <PersonIcon className="h-6 w-6" />,
	},
	{
		name: 'Projects',
		href: '/#projects',
		icon: <FileTextIcon className="h-6 w-6" />,
	},
	{
		name: 'Contact',
		href: '/#contact',
		icon: <PaperPlaneIcon className="h-6 w-6" />,
	},
]
