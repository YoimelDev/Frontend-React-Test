import pic6 from '@/assets/images/Pic6.webp'

export const News = () => {
	return (
		<section className="news">
			<picture className="news__image">
				<img src={pic6} loading="lazy" alt="Imagen" />
			</picture>

			<div className="news__container container">
				<div className="news__content">
					<h2>Lorem ipsum dolor sit</h2>

					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua.
					</p>

					<button className="btn btn--full">VIEW ALL</button>
				</div>

				<div></div>
			</div>
		</section>
	)
}
