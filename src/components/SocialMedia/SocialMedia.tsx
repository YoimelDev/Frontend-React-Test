export const SocialMedia = () => {
	const socialMedia = [
		{
			icon: 'bx bxl-facebook bx-sm',
			link: '#',
		},
		{
			icon: 'bx bxl-twitter bx-sm',
			link: '#',
		},
		{
			icon: 'bx bxl-instagram bx-sm',
			link: '#',
		},
		{
			icon: 'bx bxl-youtube bx-sm',
			link: '#',
		},
		{
			icon: 'bx bxl-tiktok bx-sm',
			link: '#',
		},
	]

	return (
		<div className="socialMedia">
			{socialMedia.map((item, index) => (
				<a key={index} href={item.link} className="socialMedia__icon">
					<i className={item.icon}></i>
				</a>
			))}
		</div>
	)
}
