import { useState } from 'react'
import { AccessPointIcon, PlayerPlayIcon } from '@/components/Icons'

import Logo from '@/assets/images/logo.webp'

export const Header = () => {
	const [isActive, setIsActive] = useState(false)

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
					<ul>
						{Array.from({ length: 5 }).map((_, index) => (
							<li key={index}>
								<a key={index} href="#">
									Lorem Ipsum
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="header__bottomBar__mobile">
				<div className='header__bottomBar__mobile__container'>
					<div className="header__logo">
						<img src={Logo} alt="logo" />
					</div>

					<button
						className="header__bottomBar__mobile__menu"
						onClick={() => setIsActive(!isActive)}
					>
						{isActive ? (
							<i className="bx bx-x bx-lg"></i>
						) : (
							<i className="bx bx-menu bx-lg"></i>
						)}
					</button>
				</div>

				<nav
					className={`header__nav ${isActive ? 'active' : ''}`}
					onClick={() => setIsActive(false)}
				>
					<ul>
						{Array.from({ length: 5 }).map((_, index) => (
							<li key={index}>
								<a key={index} href="#">
									Lorem Ipsum
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
