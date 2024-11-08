import React from "react";
import HeroPictureDisplay from "./pictureDisplay";
import HeroSocialMediaLinks from "./socialMediaLinks";
import HeroContactItem from "./contactItem";
import HeroDescriptor from "./heroDescriptor";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-darkOne text-white flex flex-col md:flex-row items-center justify-center py-40 px-8 space-y-10 md:space-y-0 md:space-x-12"
    >
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <HeroPictureDisplay />
        <HeroSocialMediaLinks />
      </div>

      <div className="flex flex-col text-left">
        <HeroDescriptor />

        <div className="flex flex-col space-y-2 text-gray-400 mb-4">
          <HeroContactItem
            label="Phone"
            value="+1 (720)-839-3268"
            href="tel:+17208393268"
          />
          <HeroContactItem
            label="Email"
            value="elledgecre@outlook.com"
            href="mailto:elledgecre@outlook.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
