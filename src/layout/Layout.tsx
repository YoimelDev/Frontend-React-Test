import { TimeCountDown, Header, Hero, SocialMedia, Footer } from '@/components'

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />

			<Hero />

			<SocialMedia />

			<TimeCountDown />

			<main>{children}</main>

			<Footer />
		</>
	)
}
