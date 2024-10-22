import Link from 'next/link'
import { cn } from '@/lib/utils'

import './style.css'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	href?: string
}

export const GradientText = ({
	children,
	href,
	className,
	...props
}: Props) => {
	if (href) {
		return (
			<Link href={href}>
				<span className={cn('gradient', className)} {...props}>
					{children}
				</span>
			</Link>
		)
	}

	return (
		<span className={cn('gradient', className)} {...props}>
			{children}
		</span>
	)
}
