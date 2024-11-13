import React from "react";
import NavbarIcon from "./navbarIcon";

/**
 * @returns A Navigation Bar component.
 */
const Navbar: React.FC = () => {
  return (
    <>
      <nav className=" text-white px-8 py-4 fixed w-full top-5 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <div
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg"
            data-testid="desktop-nav"
          >
            <NavbarIcon navOpen label="Home" href="#hero" />
            <NavbarIcon navOpen label="About" href="#about" />
            <NavbarIcon navOpen label="Skills" href="#skills" />
            <NavbarIcon navOpen label="Projects" href="#projects" />
            <NavbarIcon navOpen label="Contact" href="#contact" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
