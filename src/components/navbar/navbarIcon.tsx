import React from "react";

interface NavbarIconProps {
  navOpen: boolean;
  label: string;
  href: string;
}

/**
 * Reusable component for the navigation bar icons.
 *
 * @param navOpen - Whether the navigation bar is open or not.
 * @param label - The label for the icon.
 * @param href - The href for the icon.
 * @returns An Icon component for the navigation bar.
 */
const NavbarIcon: React.FC<NavbarIconProps> = ({ navOpen, label, href }) => {
  if (!navOpen) {
    return (
      <a href={href} className="hover:text-accent transition duration-300">
        {label}
      </a>
    );
  } else {
    return (
      <a
        href={href}
        className="block hover:text-accent transition duration-300"
      >
        {label}
      </a>
    );
  }
};

export default NavbarIcon;
