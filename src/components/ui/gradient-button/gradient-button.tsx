import Link from 'next/link'
import { cn } from '@/lib/utils'
import './style.css'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	href: string
}

export const GrandientButton = ({
	children,
	href,
	className,
	...props
}: Props) => {
	return (
		<div className="border-button" suppressHydrationWarning>
			<Link
				href={href}
				{...props}
				className={cn('logo bg-background', className)}
			>
				{children}
			</Link>
		</div>
	)
}
