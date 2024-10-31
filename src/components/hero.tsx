import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white p-8" id="hero">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          I'm a passionate developer specializing in building web applications and delightful user experiences.
        </p>
        <a
          href="#projects"
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
