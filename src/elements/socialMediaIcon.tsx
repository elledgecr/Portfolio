import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

interface SocialMediaIconProps {
  icon: IconProp;
  href: string;
}

/**
 * @param icon - The icon to be displayed.
 * @param href - The URL to which the icon will link.
 * @returns A component for displaying a social media icon with a link.
 */
const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        href.includes("linkedin")
          ? "LinkedIn"
          : href.includes("github")
            ? "GitHub"
            : "Social Media"
      }
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-6 h-6 hover:text-accent transition duration-300"
      />
    </a>
  );
};

export default SocialMediaIcon;
