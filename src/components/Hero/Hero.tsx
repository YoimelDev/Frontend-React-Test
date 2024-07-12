import heroImage from '@/assets/images/bg_header.webp'

export const Hero = () => {
	return (
		<section className="hero">
			<picture className="hero__image">
				<img src={heroImage} alt="Hero Image" />
			</picture>

			<div className="hero__content">
				<h1>
					LOREM IPSUM
					<span>LOREM IPSUM DOLOR</span>
					LOREM IPSUM
				</h1>

                <button className="btn btn--primary">
                    WHAT IS NEXT
                </button>
			</div>
		</section>
	)
}
