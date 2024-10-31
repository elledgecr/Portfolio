import React from "react";

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
}

const HeroContactItem: React.FC<ContactItemProps> = ({
  label,
  value,
  href,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-semibold text-white">{label}:</span>
      <a
        href={href}
        className="text-primary hover:text-accent transition duration-300"
      >
        {value}
      </a>
    </div>
  );
};

export default HeroContactItem;
