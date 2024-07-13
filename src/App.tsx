// Components
import {
	TimeCountDown,
	Header,
	Hero,
	SocialMedia,
	LatestVideos,
	JoinUs,
	News,
	Slider,
	Footer,
	Horizon,
	Learn,
	Information
} from '@/components'

// Styles
import '@/assets/scss/app.scss'
import 'boxicons/css/boxicons.min.css'

const App = () => {
	return (
		<>
			<Header />

			<Hero />

			<SocialMedia />

			<TimeCountDown />

			<main>
				<Information />

				<Learn />

				<Horizon />

				<LatestVideos />

				<JoinUs />

				<News />

				<Slider />
			</main>

			<Footer />
		</>
	)
}

export default App
