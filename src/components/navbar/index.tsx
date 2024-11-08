import React, { useState } from "react";
import NavbarIcon from "./navbarIcon";
import NavbarToggle from "./navbarToggle";

/**
 * @returns A Navigation Bar component.
 */
const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <nav className="bg-darkOne text-white px-8 py-4 fixed w-full top-5 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <div
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg"
            data-testid="desktop-nav"
          >
            <NavbarIcon navOpen label="Home" href="#hero" />
            <NavbarIcon navOpen label="About" href="#about" />
            <NavbarIcon navOpen label="Works" href="#works" />
            <NavbarIcon navOpen label="Journey" href="#journey" />
            <NavbarIcon navOpen label="Contact" href="#contact" />
          </div>

          <NavbarToggle navOpen toggleNav={toggleNav} />
        </div>

        {navOpen && (
          <div
            className="md:hidden mt-4 bg-darkOne px-8 py-4 space-y-4"
            data-testid="mobile-nav"
          >
            <NavbarIcon navOpen label="Home" href="#hero" />
            <NavbarIcon navOpen label="About" href="#about" />
            <NavbarIcon navOpen label="Works" href="#works" />
            <NavbarIcon navOpen label="Journey" href="#journey" />
            <NavbarIcon navOpen label="Contact" href="#contact" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
