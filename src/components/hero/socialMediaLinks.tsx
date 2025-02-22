import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "../../elements/socialMediaIcon";

/**
 * @returns A set of elements that display social media icons for the hero section.
 */
const HeroSocialMediaLinks: React.FC = () => {
  return (
    <>
      <div className="flex space-x-4 text-primary mt-4">
        <SocialMediaIcon
          icon={faLinkedin}
          href="https://www.linkedin.com/in/christian-elledge-b5b55628a/"
        />
        <SocialMediaIcon icon={faGithub} href="https://github.com/elledgecr" />
      </div>
    </>
  );
};

export default HeroSocialMediaLinks;
