import Countdown from 'react-countdown'

interface ICountdown {
	days: number
	hours: number
	minutes: number
	seconds: number
}

export const TimeCountDown = () => {
	const renderer = ({ days, hours, minutes, seconds }: ICountdown) => {
		return (
			<div className="countdown__items">
				<div className="countdown__item">
					<div className="countdown__item-number">{days}</div>
					<div className="countdown__item-text">Days</div>
				</div>
				<div className="countdown__item">
					<div className="countdown__item-number">{hours}</div>
					<div className="countdown__item-text">Hours</div>
				</div>
				<div className="countdown__item">
					<div className="countdown__item-number">{minutes}</div>
					<div className="countdown__item-text">Minutes</div>
				</div>
				<div className="countdown__item">
					<div className="countdown__item-number">{seconds}</div>
					<div className="countdown__item-text">Seconds</div>
				</div>
			</div>
		)
	}

	return (
		<div className="countdown">
			<div className="countdown__container container">
				<div className="countdown__title">
                    Lorem ipsum dolor sit amet, consectetur
                </div>

				<Countdown
					date={new Date('2025')}
					intervalDelay={0}
					precision={3}
					renderer={renderer}
                    autoStart={true}
				/>
			</div>
		</div>
	)
}
