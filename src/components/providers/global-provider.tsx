import { ThemeProvider } from './theme-provider'

interface Props {
	children: React.ReactNode
}

export const GlobalProvider = ({ children }: Props) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	)
}
