import { AccessPointIcon, PlayerPlayIcon } from '@/components/Icons'

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
		</header>
	)
}
