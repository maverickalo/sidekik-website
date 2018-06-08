import React from 'react';
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const ExtraHeader = () => {
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
			<div>
				<div className="logo-container">
					<Link to="/">
						<img className="logo" src={Logo} alt="Sidekik logo" />
					</Link>
				</div>
			</div>
		</div>
	);
};
export default ExtraHeader;
