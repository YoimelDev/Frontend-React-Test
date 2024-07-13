import pic5 from '@/assets/images/Pic5.webp'
import green_bg from '@/assets/images/green_bg.webp'

export const Horizon = () => {
	return (
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
	)
}
