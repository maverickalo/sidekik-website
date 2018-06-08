import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Stairs from '../images/hollystairs.jpg';

class Contact extends Component {
	render() {
		return (
			<div className="contact-container">
				<div className="contact-info">
					<div className="contact-container-text">
						<h1>So...How Can I Help?</h1>
						<h2>
							Let's talk! Let me know how I can be beneficial to your life. I'd love to discuss your needs
							and find a helpful solution.
						</h2>
						<div className="icon-container">
							<i class="fab fa-facebook-f fa-2x" />
							<i class="fab fa-twitter fa-2x" />
							<i class="fab fa-instagram fa-2x" />
						</div>

						<ContactForm />
					</div>
				</div>
				<div className="contact-form-image">
					<img className="holly-stairs" src={Stairs} alt="" />
				</div>
			</div>
		);
	}
}

export default Contact;
