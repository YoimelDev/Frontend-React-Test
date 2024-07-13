// @ts-expect-error video source is a string
import { Splide, SplideSlide } from '@splidejs/react-splide' 
import '@splidejs/react-splide/css'

import green_bg from '@/assets/images/green_bg.webp'
import pic7 from '@/assets/images/Pic7.webp'
import pic8 from '@/assets/images/Pic8.webp'
import pic9 from '@/assets/images/Pic9.webp'
import pic10 from '@/assets/images/Pic10.webp'

export const Slider = () => {
	const images = [
		pic7,
		pic8,
		pic9,
		pic10,
		pic7,
		pic8,
		pic9,
		pic10,
		pic7,
		pic8,
		pic9,
		pic10,
	]

	return (
		<section className="slider">
			<picture className="slider--overlay">
				<img src={green_bg} loading="lazy" alt="Imagen" />
			</picture>

			<h2 className="section__title">Lorem ipsum dolor sit amet</h2>

			<div className="slider__container">
				<Splide
					options={{
						width: '100%',
						perPage: 3,
						perMove: 1,
						center: false,
						trimSpace: true,
						gap: '1rem',
						arrows: false,
						breakpoints: {
							600: {
								perPage: 2,
							},
						},
					}}
				>
					{images.map((image, index) => (
						<SplideSlide key={index}>
							<img src={image} alt="Slider" />
						</SplideSlide>
					))}
				</Splide>
			</div>

			<div className="slider__button">
				<button className="btn btn--full btn--white">VIEW ALL</button>
			</div>
		</section>
	)
}
