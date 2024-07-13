import Logo from '@/assets/images/logo.webp'

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<p>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
				</p>

				<picture className="footer__logo">
					<img src={Logo} alt="logo" />
				</picture>

				<p>All rights reserved to Lorem Ipsum© 2022</p>
			</div>
		</footer>
	)
}
