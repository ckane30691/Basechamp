import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

const Splash = () => (
	<div className='splash-body-container'>
		<div className="hero-img-container">
			<img className="hero-img" alt="hero image" src="https://s3-us-west-1.amazonaws.com/basechamp/basecamp_hero.jpg"/>
		</div>

		<div className="intro-container">
			<h1 className="intro-title">We've been expecting you.</h1>

			<p className="intro-body">
				All growing businesses run into the same fundamental problems.
				Hair on fire, buried under email, stuff everywhere.
				The good news? Basechamp solves them.
			</p>
		</div>
		<SessionFormContainer />
	</div>
)


export default Splash;
