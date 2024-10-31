import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface NavbarToggleProps {
  navOpen: boolean;
  toggleNav: () => void;
}

/**
 * A component for toggling the navigation menu (mobile).
 *
 * @param navOpen - The current state of the navigation menu.
 * @param toggleNav - A function to toggle the navigation menu.
 * @returns A toggle button for the navigation menu.
 */
const NavbarToggle: React.FC<NavbarToggleProps> = ({ navOpen, toggleNav }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="md:hidden cursor-pointer" onClick={toggleNav}>
        <FontAwesomeIcon
          icon={navOpen ? faTimes : faBars}
          className="w-6 h-6 text-primary"
        />
      </div>
    </div>
  );
};

export default NavbarToggle;
