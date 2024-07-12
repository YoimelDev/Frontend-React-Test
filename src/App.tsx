// Components
import { TimeCountDown, Header, Hero, SocialMedia } from '@/components'

// Styles
import '@/assets/scss/app.scss'
import 'boxicons/css/boxicons.min.css'

const App = () => {
	return <>
		<Header />

		<Hero />

		<SocialMedia />

		<TimeCountDown />
	</>
}

export default App
