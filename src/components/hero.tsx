import React from "react";
import MeImage from '../assets/Me.png'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-darkOne text-white flex flex-col items-center justify-center min-h-screen py-20">
        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 mb-8">
          <img
            src={MeImage}
            alt="Portfolio"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">
          CHRISTIAN <span className="text-primary">ELLEDGE</span>
        </h1>

        <p className="text-center max-w-lg text-gray-300 mb-6">
          Software Engineering Student.
          Advocate of deep learning and keeping an open mind.
        </p>
    </section>
  );
};

export default Hero;
