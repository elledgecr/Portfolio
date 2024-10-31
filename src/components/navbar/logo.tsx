import React from "react";

/**
 * @returns The logo component for the navigation bar.
 */
const NavBarLogo: React.FC = () => {
  return (
    <div className="w-20 h-20 bg-primary flex items-center justify-center cursor-pointer">
      <div className="text-white text-4xl font-bold">C.E.</div>
    </div>
  );
};

export default NavBarLogo;
