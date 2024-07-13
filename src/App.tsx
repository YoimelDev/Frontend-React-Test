// Components
import { TimeCountDown, Header, Hero, SocialMedia } from '@/components'

// Images
import pic1 from '@/assets/images/Pic1.webp'
import pic2 from '@/assets/images/Pic2.webp'
import pic3 from '@/assets/images/Pic3.webp'
import pic4 from '@/assets/images/Pic4.webp'
import pic5 from '@/assets/images/Pic5.webp'
import green_bg from '@/assets/images/green_bg.webp'

// Styles
import '@/assets/scss/app.scss'
import 'boxicons/css/boxicons.min.css'

import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

const App = () => {
	const videos = [
		{
			id: 'AzV77KFsLn4',
			source: 'youtube',
		},
		{
			id: 'AzV77KFsLn4',
			source: 'youtube',
		},
		{
			id: 'AzV77KFsLn4',
			source: 'youtube',
		},
		{
			id: 'AzV77KFsLn4',
			source: 'youtube',
		},
		{
			id: 'AzV77KFsLn4',
			source: 'youtube',
		},
		{
			id: 'AzV77KFsLn4',
			source: 'youtube',
		},
	]

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
							<button className="btn btn--border">
								LEARN MORE
							</button>
						</div>
					</div>
				</section>

				<section className="horizon">
					<div className="horizon__left">
						<div className="horizon__left__content">
							<h2>Lorem ipsum dolor sit amet, consetetur</h2>

							<button className="btn btn--white">
								LOREM IPSUM DOLOR SIT
							</button>
							<button className="btn btn--border white">
								LOREM IPSUM DOLOR SIT AMET
							</button>
						</div>
					</div>

					<div className="horizon__right">
						<picture className="horizon__right--overlay">
							<img src={green_bg} loading="lazy" alt="Imagen" />
						</picture>

						<picture>
							<img src={pic5} loading="lazy" alt="Imagen" />
						</picture>
					</div>
				</section>

				<section className="latestVideos">
					<div className="latestVideos__container container">
						<div className="latestVideos__content">
							<h2>Latest Videos</h2>

							<div className="latestVideos__videos">
								{videos.map((video, index) => (
									<div
										key={index}
										className="latestVideos__video"
									>
										<Plyr
											source={{
												type: 'video',
												sources: [
													{
														src: video.id,
														// @ts-expect-error video source is a string
														provider: video.source,
													},
												],
											}}
											options={{
												controls: ['play-large'], // Esto mostrará solo el botón de play en el medio
											}}
										/>

										<p>
											Lorem ipsum dolor sit amet,
											consetetur
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="latestVideos__button">
							<button className="btn">VIEW ALL</button>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
