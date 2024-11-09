import React from "react";

interface NavbarIconProps {
  navOpen: boolean;
  label: string;
  href: string;
}

/**
 * Reusable component for the navigation bar icons.
 *
 * @param {boolean} props.navOpen - Whether the navigation bar is open or not.
 * @param {string} props.label - The label for the icon.
 * @param {string} props.href - The href for the icon.
 * @returns An Icon component for the navigation bar.
 */
const NavbarIcon: React.FC<NavbarIconProps> = (props) => {
  if (!props.navOpen) {
    return (
      <a href={props.href} className="hover:text-primary transition duration-300">
        {props.label}
      </a>
    );
  } else {
    return (
      <a
        href={props.href}
        className="block hover:text-primary transition duration-300"
      >
        {props.label}
      </a>
    );
  }
};

export default NavbarIcon;
