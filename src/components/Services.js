import React from 'react';
import { Link } from 'react-router-dom';

class Services extends React.Component {
	render() {
		return (
			<div className="services-container">
				<h1 className="services-title">Services</h1>
				<div className="services-row">
					<div className="services-col">
						<div className="services-col-icon">
							<i className="far fa-lightbulb fa-7x" />
						</div>
						<div className="services-col-heading">Personal Assistance</div>
						<div className="services-col-text">Hands-on physical asssitance for someone</div>
					</div>
					<div className="services-col">
						<div className="services-col-icon">
							<i className="far fa-comments fa-7x" />
						</div>
						<div className="services-col-heading">Virtual Assistance</div>
						<div className="services-col-text">
							<p>Assistance performed remotely entire online</p>
						</div>
					</div>
					<div className="services-col">
						<div className="services-col-icon">
							<i className="far fa-comment fa-7x" />
						</div>
						<div className="services-col-heading">Everything Else</div>
						<div className="services-col-text">
							<p>Some things simply do not fall under either of those categories</p>
						</div>
					</div>
				</div>
				<div className="services-links">
					<Link to="/services">
						<div className="services-col-link">View Services + Rates</div>
					</Link>
					<Link to="/services">
						<div className="services-col-link">View Services + Rates</div>
					</Link>
					<Link to="/services">
						<div className="services-col-link" id="bump-left">
							View Services + Rates
						</div>
					</Link>
				</div>
			</div>
		);
	}
}
export default Services;
