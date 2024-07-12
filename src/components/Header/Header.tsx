import { AccessPointIcon, PlayerPlayIcon } from '@/components/Icons'

import Logo from '@/assets/images/logo.webp'

export const Header = () => {
	return (
		<header className="header">
			<div className="header__topBar">
				<div className="header__topBar__live">
					<span>LIVE</span>
					<AccessPointIcon />
				</div>

				<p>Lorem ipsum dolor sit amet</p>

				<a href="#" className="header__topBar__play">
					JOIN NOW! <PlayerPlayIcon />
				</a>
			</div>

			<div className="header__bottomBar container">
				<div className="header__logo">
					<img src={Logo} alt="logo" />
				</div>

				<nav className="header__nav">
					<ul>						{
							Array.from({ length: 5 }).map((_, index) => (
								<li>
									<a key={index} href="#">Lorem Ipsum</a>
								</li>
							))
						}
					</ul>
				</nav>				
			</div>
		</header>
	)
}
