import React from "react";
import MeImage from '../assets/Me.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero: React.FC = () => {
  return (
	<section id="hero" className="bg-darkOne text-white flex flex-col md:flex-row items-center justify-center min-h-screen py-20 px-8 space-y-10 md:space-y-0 md:space-x-12">
		<div className="flex flex-col items-center mb-8 md:mb-0">
			<div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 mb-8 md:mb-0">
				<img
					src={MeImage}
					alt="Portfolio"
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="flex space-x-4 text-primary mt-4">
				<a href="https://www.linkedin.com/in/christian-elledge-b5b55628a/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 hover:text-accent transition duration-300" />
				</a>
				<a href="https://github.com/Cigatronix" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} className="w-6 h-6 hover:text-accent transition duration-300" />
				</a>
			</div>
		</div>

		<div className="flex flex-col text-left">
			<h1 className="text-4xl font-bold">
				CHRISTIAN <span className="text-primary">ELLEDGE</span>
			</h1>

			<div className="flex items-center mb-4">
				<h3 className="text-primary font-semibold text-xl mr-4">Software Engineer</h3>
				<div className="w-2/6 border-t-2 border-primary translate-y-1/2"></div>
			</div>

			<p className="max-w-lg text-white mb-6">
				Software Engineering Student. Advocate of deep learning and keeping an open mind.
			</p>

			<div className="flex flex-col space-y-2 text-gray-400">
				<div className="flex items-center space-x-2">
					<span className="font-semibold text-white">Phone:</span>
					<span className="text-primary hover:text-accent transition duration-300">+1 (720)-839-3268</span>
				</div>
				<div className="flex items-center space-x-2">
					<span className="font-semibold text-white">Email: </span>
					<a href="mailto:elledgecre@outlook.com" className="text-primary hover:text-accent transition duration-300">
						elledgecre@outlook.com
					</a>
				</div>
			</div>
		</div>
    </section>
  );
};

export default Hero;
