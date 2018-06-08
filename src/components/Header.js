import React from 'react';
import Logo from '../images/logo.jpg';


const Header = () => {
	return (
		<div className="container">
			<div className="social-icons">
				<a href="" className="facebook">
					<i class="fab fa-facebook-f fa-2x" />
				</a>
				<a href="" className="instagram">
					<i class="fab fa-instagram fa-2x" />
				</a>
				<a href="" className="twitter">
					<i class="fab fa-twitter fa-2x" />
				</a>
			</div>
			<div className="paralax">
				<div className="logo-container">
					<img className="logo" src={Logo} alt="Sidekik logo" />
				</div>
				<div className="text-box">
					<h1 className="heading-primary">
						<span className="heading-primary-main">Sidekik is Here</span>
						<span className="heading-primary-sub">
							For
							<span className="heading-primary-sub-underline">YOU!</span>
						</span>
					</h1>
				</div>
			</div>
		</div>
	);
};
export default Header;
