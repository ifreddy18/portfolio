import Link from 'next/link'
import { cn } from '@/lib/utils'
import './style.css'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	href: string
	isExternal?: boolean
	target?: string // Only use if isExteral = true
}

export const GrandientButton = ({
	children,
	href,
	className,
	isExternal = false,
	target,
	...props
}: Props) => {
	if (isExternal)
		return (
			<div className="border-button" suppressHydrationWarning>
				<a
					href={href}
					target={target}
					{...props}
					className={cn('logo bg-background', className)}
				>
					{children}
				</a>
			</div>
		)

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
