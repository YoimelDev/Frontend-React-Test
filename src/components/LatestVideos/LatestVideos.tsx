import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

// @ts-expect-error video source is a string
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export const LatestVideos = () => {
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
		<section className="latestVideos">
			<div className="latestVideos__container container">
				<div className="latestVideos__content">
					<h2>Latest Videos</h2>

					<div className="latestVideos__videos">
						{videos.map((video, index) => (
							<div key={index} className="latestVideos__video">
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
										controls: ['play-large'],
									}}
								/>

								<p>Lorem ipsum dolor sit amet, consetetur</p>
							</div>
						))}
					</div>

					<div className="latestVideos__videos__mobile">
						<Splide
							options={{
								width: '100%',
								perPage: 1,
								perMove: 1,
								center: false,
								trimSpace: true,
								gap: '1rem',
								arrows: false,
							}}
						>
							{videos.map((video, index) => (
								<SplideSlide key={index}>
									<div className="latestVideos__video">
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
												controls: ['play-large'],
											}}
										/>

										<p>
											Lorem ipsum dolor sit amet,
											consetetur
										</p>
									</div>
								</SplideSlide>
							))}
						</Splide>
					</div>
				</div>

				<div className="latestVideos__button">
					<button className="btn btn--full">VIEW ALL</button>
				</div>
			</div>
		</section>
	)
}
