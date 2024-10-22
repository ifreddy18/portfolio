import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionTitle = ({ className, children, ...props }: Props) => {
	return (
		<h2 className={cn('text-3xl font-bold', className)} {...props}>
			{children}
		</h2>
	)
}
