import React from "react";

interface SkillScaleProps {
    index: number;
    percentage: number;
    name: string;
    active: boolean;
}

/**
 * @param {number} props.index - The index of the skill in the parent component's skills array.
 * @param {number} props.percentage - The percentage of the skill.
 * @param {string} props.name - The name of the skill.
 * @param {boolean} props.active - Whether the skill is currently active.
 * @returns A component that renders a "progress bar" and displays the skill's name and percentage.
 */
const SkillScale: React.FC<SkillScaleProps> = (props) => {
  return (
    <div key={props.index} className="mb-6">
      <div className="flex justify-between mb-1">
        <span
          className={`${props.active ? "text-xl py-2" : "text-lg"} font-medium transition-all duration-300 ease-in-out`}
        >
          {props.name}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`${props.active ? "bg-accent" : "bg-primary"} h-2 rounded-full`}
          style={{ width: `${props.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillScale;
