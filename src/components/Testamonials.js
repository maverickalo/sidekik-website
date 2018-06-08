import React, { Component } from 'react';
import LoriPic from '../images/LE.jpg';
import JessPic from '../images/jes-image.jpg';
import TaraPic from '../images/tara-image.jpg';
import Slider from 'react-slick';

export default class Testamonials extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			className: 'testamonials-wrapper'
		};
		return (
			<Slider {...settings}>
				<div className="object">
					<div className="object-2">
						<div className="object-container">
							<div className="object-image-1">
								<img src={LoriPic} alt="" className="object-img-1" />
							</div>
							<div className="object-text-1">
								<p>"Thanks, lady! I can't tell you how much I love not hassling with scheduling."</p>
								<span className="text-signature">Lori Eberly</span>
							</div>
						</div>
					</div>
				</div>
				<div className="object">
					<div className="object-2">
						<div className="object-container">
							<div className="object-image-2">
								<img src={JessPic} alt="" className="object-img-2" />
							</div>
							<div className="object-text-1">
								<p>"Thanks, lady! I can't tell you how much I love not hassling with scheduling."</p>
								<span className="text-signature">Lori Eberly</span>
							</div>
						</div>
					</div>
				</div>
				<div className="object">
					<div className="object-2">
						<div className="object-container">
							<div className="object-image-1">
								<img src={TaraPic} alt="" className="object-img-1" />
							</div>
							<div className="object-text-1">
								<p>"Thanks, lady! I can't tell you how much I love not hassling with scheduling."</p>
								<span className="text-signature">Lori Eberly</span>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		);
	}
}
