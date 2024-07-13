import pic1 from '@/assets/images/Pic1.webp'

export const Information = () => {
	return (
		<section className="information">
			<div className="information__container container">
				<div className="information__content">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum. Stet
						clita kasd gubergren, no sea takimata sanctus est Lorem
						ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt ut labore et dolore magna aliquyam erat,
						sed diam voluptua. At vero eos et accusam et justo duo
						dolores et ea rebum. Stet clita kasd gubergren, no sea
						takimata sanctus est Lorem ipsum dolor sit
					</p>
				</div>

				<picture>
					<img src={pic1} loading="lazy" alt="Imagen" />
				</picture>
			</div>
		</section>
	)
}
