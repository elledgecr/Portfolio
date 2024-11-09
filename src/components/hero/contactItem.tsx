import React from "react";

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
}

/** 
 * @param {string} props.label - The label for the contact item.
 * @param {string} props.value - The value for the contact item (ex: phone number, email, etc).
 * @param {string} props.href - The URL for the contact item (ex: phone number, email, etc).
 * @returns A contact item component for the hero section.
 */
const HeroContactItem: React.FC<ContactItemProps> = (props) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-semibold text-white">{props.label}:</span>
      <a
        href={props.href}
        className="text-primary hover:text-accent transition duration-300"
      >
        {props.value}
      </a>
    </div>
  );
};

export default HeroContactItem;
