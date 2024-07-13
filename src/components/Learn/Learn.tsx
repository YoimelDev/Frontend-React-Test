import pic2 from '@/assets/images/Pic2.webp'
import pic3 from '@/assets/images/Pic3.webp'
import pic4 from '@/assets/images/Pic4.webp'

export const Learn = () => {
	return (
		<section className="learn">
			<div className="learn__container container">
				<div className="learn__content">
					<h2>Lorem ipsum</h2>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua.
					</p>
				</div>

				<div className="learn__cards">
					<article className="learn__card">
						<picture>
							<img src={pic2} loading="lazy" alt="Imagen" />
						</picture>
						<p>LOREM IPSUM</p>
					</article>

					<article className="learn__card">
						<picture>
							<img src={pic3} loading="lazy" alt="Imagen" />
						</picture>
						<p>LOREM IPSUM</p>
					</article>

					<article className="learn__card">
						<picture>
							<img src={pic4} loading="lazy" alt="Imagen" />
						</picture>
						<p>LOREM IPSUM</p>
					</article>
				</div>

				<div className="learn__button">
					<button className="btn btn--border btn--full">
						LEARN MORE
					</button>
				</div>
			</div>
		</section>
	)
}
