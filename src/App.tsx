import { Layout } from '@/layout'

import {
	LatestVideos,
	JoinUs,
	News,
	Slider,
	Horizon,
	Learn,
	Information,
} from '@/components'

// Styles
import '@/assets/scss/app.scss'
import 'boxicons/css/boxicons.min.css'

const App = () => {
	return (
		<Layout>
			<Information />

			<Learn />

			<Horizon />

			<LatestVideos />

			<JoinUs />

			<News />

			<Slider />
		</Layout>
	)
}

export default App
