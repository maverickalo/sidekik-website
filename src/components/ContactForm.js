import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			emailErrors: '',
			subject: '',
			message: '',
			open: false
		};
		this.validateEmail = this.validateEmail.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onSubjectChange = this.onSubjectChange.bind(this);
		this.onMessageChange = this.onMessageChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onCloseModal() {
		this.setState({ open: false });
	}
	onEmailChange({ target: { value } }) {
		const email = value;
		this.setState({ email, emailErrors: '' });
	}
	onNameChange(e) {
		const name = e.target.value;
		this.setState({ name });
	}
	onSubjectChange(e) {
		const subject = e.target.value;
		this.setState({ subject });
	}
	onMessageChange(e) {
		const message = e.target.value;
		this.setState({ message });
	}
	validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	onSubmit(e) {
		e.preventDefault();
		if (this.validateEmail(this.state.email)) {
			e.preventDefault();
			axios.defaults.headers.post['Content-Type'] = 'application/json';

			axios
				.post('https://www.enformed.io/1cowi4ls/', this.state)
				.then(this.setState({ name: '', email: '', subject: '', message: '', open: true }))
				.catch((error) => console.log(error));
		} else {
			this.setState({ emailErrors: 'Please Enter a Valid Email!', email: '' });
		}
	}

	render() {
		return (
			<div className="form-container-top">
				<form method="POST" className="form-container">
					<div className="input-style-name-email">
						<div className="input-style input-name">
							<input
								name="name"
								className="input"
								placeholder="Name"
								value={this.state.name}
								onChange={this.onNameChange}
							/>
						</div>
						<div className="input-style input-email">
							<input
								name="email"
								className="input"
								placeholder="Email"
								value={this.state.email}
								onChange={this.onEmailChange}
							/>
							<span className="email-error">{this.state.emailErrors}</span>
						</div>
					</div>
					<div className="input-style-subject-message">
						<div className="input-style input-subject">
							<input
								name="subject"
								className="input"
								placeholder="Subject"
								value={this.state.subject}
								onChange={this.onSubjectChange}
							/>
						</div>
						<div className="input-style input-message">
							<textarea
								name="message"
								className="input"
								placeholder="Message"
								value={this.state.message}
								onChange={this.onMessageChange}
							/>
						</div>
						<div className="button-container">
							<button className="submit-button" onClick={this.onSubmit}>
								Send
							</button>
						</div>
					</div>
				</form>
				<Modal
					open={this.state.open}
					onClose={this.onCloseModal}
					center
					classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
				>
					<div>
						<i class="far fa-envelope fa-4x" />
						<div className="email-sent">
							<h2>Email Sent!</h2>
						</div>

						<h2>Thank you for reaching out! We will get back to you as soon as possible!</h2>
					</div>
				</Modal>
			</div>
		);
	}
}

export default ContactForm;
