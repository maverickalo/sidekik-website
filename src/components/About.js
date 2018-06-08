import React from 'react';
import aboutimg from '../images/about-image.JPG';

const About = () => {
	return (
		<div className="about-container">
			<div className="about-img-container">
				<img className="about-img" src={aboutimg} alt="About Holly" />
			</div>
			<div className="text-container">
				<h1 className="about-text-heading">Who is Sidekik?</h1>
				<div className="about-text-content">
					<p>The human behind Sidekik is Holly Landaker.</p>
					<p>
						Born in Florida, raised in Texas, and blossomed in Oregon, Holly is a hustling machine and is
						always trying to do what’s right for her and others in this world.
					</p>
					<p>
						After 10 years of working in the food industry and graduating from culinary school with honors,
						Holly found herself yearning for a job that allowed her to sit down in front of a computer in a
						creative space. In 2015 she became an Office Manager for two marketing agencies in Portland,
						Oregon. It was there she realized she had found her calling in finding process and organization
						in chaos. Where many find it unruly to clean out years worth of junk in storage closets, Holly
						finds peace and calm, and a really strange sense of excitement. The simple art of taking
						something that doesn’t make sense and finding meaning and order in her own way, is what sets
						Holly apart from the typical person.
					</p>
					<p>
						It’s not surprising Holly would eventually find a way to become an official entrepreneur. When
						she was 5 her mom helped her setup her first lemonade stand. By the time she was 8, she started
						a dog walking business in the Florida retiree neighborhood she grew up in. In middle school
						she’d create menus in her journals for restaurants that would never come to fruition. Holly’s
						the friend who was always trying to concoct a way to start a business together.
					</p>
					<p>
						So here we are. She’s doing it for real now. After working for what seems like a lifetime in
						coffee shops, restaurants, marketing, and a little dabble in IT, it is now time for the little
						birdy to take flight on her own as a personal and virtual assistant.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
