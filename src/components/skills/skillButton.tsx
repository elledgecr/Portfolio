import React from "react";
import { IconType } from "react-icons";

interface SkillButtonProps {
  index: number;
  name: string;
  icon: IconType;
  active: boolean;
  setActive: (name: string) => void;
}

/**
 * A button component that, when clicked, will set the state of the parent component to reflect the activity state of the selected skill.
 * @param {number} props.index - The index of the skill in the parent component's skills array.
 * @param {string} props.name - The name of the skill.
 * @param {IconDefinition | IconType} props.icon - The icon associated with the skill.
 * @param {boolean} props.active - Whether the skill is currently active.
 * @param {function} props.setActive - A function to set the active state of the skill.
 * @returns A button that represents a skill with an icon and name.
 */
const SkillButton: React.FC<SkillButtonProps> = (props) => {
  return (
    <button
      key={props.index}
      className={`flex flex-col items-center scale-95 p-6 md:w-36 md:h-36 rounded-lg transition-all duration-300 ${
        props.active
          ? "bg-primary shadow-lg"
          : "bg-gray-800 hover:scale-105"
      }`}
      onClick={() => props.setActive(props.name)}
    >
      <props.icon size={48} />
      <span
        className={`mt-2 text-lg ${
          props.active ? "text-white" : "text-gray-400"
        }`}
      >
        {props.name}
      </span>
    </button>
  );
};

export default SkillButton;
