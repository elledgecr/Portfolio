import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface NavbarToggleProps {
  navOpen: boolean;
  toggleNav: () => void;
}

/**
 * A component for toggling the navigation menu (mobile).
 *
 * @param {boolean} props.navOpen - The current state of the navigation menu.
 * @param {function} props.toggleNav - A function to toggle the navigation menu.
 * @returns A toggle button for the navigation menu.
 */
const NavbarToggle: React.FC<NavbarToggleProps> = (props) => {
  return (
    <button
      className="md:hidden w-12 h-12 bg-primary flex items-center justify-center cursor-pointer"
      onClick={props.toggleNav}
      aria-label="toggle-nav-menu"
    >
      <FontAwesomeIcon
        icon={props.navOpen ? faTimes : faBars}
        className="w-6 h-6 text-white"
      />
    </button>
  );
};

export default NavbarToggle;
