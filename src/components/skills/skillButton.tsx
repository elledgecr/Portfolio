import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { IconType } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SkillButtonProps {
  index: number;
  name: string;
  icon: IconDefinition | IconType;
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
  /**
   * @returns A React element representing the icon for the skill. If the icon is a React icon, it will be rendered directly. Otherwise, it will be rendered using FontAwesomeIcon.
   */
  function renderedIcon(): React.ReactElement {
    if (typeof props.icon === "function") {
      return <props.icon size={48} />;
    } else {
      return (
        <FontAwesomeIcon
          icon={props.icon}
          className={`text-5xl ${
            props.active ? "text-accent" : "text-gray-400"
          }`}
        />
      );
    }
  }

  return (
    <button
      key={props.index}
      className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${
        props.active ? "bg-primary" : "bg-gray-800 opacity-50"
      }`}
      onClick={() => props.setActive(props.name)}
    >
      {renderedIcon()}
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
