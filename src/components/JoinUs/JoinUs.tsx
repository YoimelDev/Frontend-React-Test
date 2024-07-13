import join_us from '@/assets/images/join_us.webp'

export const JoinUs = () => {
	return (
		<section className="joinUs">
			<picture className="joinUs__image">
				<img src={join_us} loading="lazy" alt="Imagen" />
			</picture>

			<div></div>

			<form className="joinUs__form">
				<header>
					<h2>JOIN US.</h2>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
					</p>
				</header>

				<div className="joinUs__form__container">
					{/* name */}
					<div className="joinUs__form__input">
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Name"
						/>
					</div>

					{/* surname */}
					<div className="joinUs__form__input">
						<input
							type="text"
							id="surname"
							name="surname"
							placeholder="Surname"
						/>
					</div>

					{/* phone*/}
					<div className="joinUs__form__input">
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Phone"
						/>
					</div>

					{/* email */}
					<div className="joinUs__form__input">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email"
						/>
					</div>

					{/* derpartment */}
					<div className="joinUs__form__input">
						<input
							type="text"
							id="derpartment"
							name="derpartment"
							placeholder="Department"
						/>
					</div>

					{/* message */}
					<div className="joinUs__form__input">
						<textarea
							id="message"
							name="message"
							placeholder="Mensaje"
                            rows={4}
						/>
					</div>

					<div className="joinUs__form__button">
						<button className="btn btn--full">I'M IN</button>
					</div>

                    <p className="joinUs__form__text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam
                    </p>
				</div>

			
			</form>
		</section>
	)
}
