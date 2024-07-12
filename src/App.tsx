// Components
import { TimeCountDown, Header, Hero, SocialMedia } from '@/components'

// Images
import pic1 from '@/assets/images/Pic1.webp'
import pic2 from '@/assets/images/Pic2.webp'
import pic3 from '@/assets/images/Pic3.webp'
import pic4 from '@/assets/images/Pic4.webp'

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
				<section className="information">
					<div className="information__container container">
						<div className="information__content">
							<h2>Lorem ipsum dolor sit amet</h2>
							<p>
								Lorem ipsum dolor sit amet, consetetur
								sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolore magna aliquyam
								erat, sed diam voluptua. At vero eos et accusam
								et justo duo dolores et ea rebum. Stet clita
								kasd gubergren, no sea takimata sanctus est
								Lorem ipsum dolor sit amet. Lorem ipsum dolor
								sit amet, consetetur sadipscing elitr, sed diam
								nonumy eirmod tempor invidunt ut labore et
								dolore magna aliquyam erat, sed diam voluptua.
								At vero eos et accusam et justo duo dolores et
								ea rebum. Stet clita kasd gubergren, no sea
								takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>

						<picture>
							<img src={pic1} loading="lazy" alt="Imagen" />
						</picture>
					</div>
				</section>

				<section className="learn">
					<div className="learn__container container">
						<div className="learn__content">
							<h2>Lorem ipsum</h2>
							<p>
								Lorem ipsum dolor sit amet, consetetur
								sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolore magna aliquyam
								erat, sed diam voluptua.
							</p>
						</div>

						<div className="learn__cards">
							<article className="learn__card">
								<picture>
									<img
										src={pic2}
										loading="lazy"
										alt="Imagen"
									/>
								</picture>
								<p>LOREM IPSUM</p>
							</article>

							<article className="learn__card">
								<picture>
									<img
										src={pic3}
										loading="lazy"
										alt="Imagen"
									/>
								</picture>
								<p>LOREM IPSUM</p>
							</article>

							<article className="learn__card">
								<picture>
									<img
										src={pic4}
										loading="lazy"
										alt="Imagen"
									/>
								</picture>
								<p>LOREM IPSUM</p>
							</article>
						</div>

						<div className="learn__button">
							<button className='btn btn--border'>
								LEARN MORE
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
