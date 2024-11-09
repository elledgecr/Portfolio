import React, { useState } from "react";
import { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiLua,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import {
  faReact,
  faNodeJs,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import SkillScale from "./skillScale";
import SkillButton from "./skillButton";

interface SkillData {
  name: string;
  icon: IconDefinition | IconType;
  percentage: number;
  active: boolean;
}

const initialSkillData: Array<SkillData> = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    percentage: 85,
    active: true,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    percentage: 90,
    active: false,
  },
  {
    name: "Python",
    icon: SiPython,
    percentage: 80,
    active: false,
  },
  {
    name: "Lua",
    icon: SiLua,
    percentage: 95,
    active: false,
  },
  {
    name: "React JS",
    icon: faReact,
    percentage: 90,
    active: false,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    percentage: 70,
    active: false,
  },
  {
    name: "Node.JS",
    icon: faNodeJs,
    percentage: 80,
    active: false,
  },
  {
    name: "Express JS",
    icon: SiExpress,
    percentage: 70,
    active: false,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    percentage: 60,
    active: false,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    percentage: 50,
    active: false,
  },
];

/**
 * @returns A component that renders the skills section.
 */
const SkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<Array<SkillData>>(initialSkillData);

  /**
   * Sets a specified skill as active.
   * @param skillName The name of the skill to be set as active.
   */
  const setActiveSkill = (skillName: string) => {
    setSkills((updatedSkills) =>
      updatedSkills.map((skill) => ({
        ...skill,
        active: skill.name === skillName,
      })),
    );
  };

  return (
    <section id="skills" className="bg-darkOne text-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="w-full md:w-full mx-5">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          {skills.map((skill, index) => (
            <SkillScale
              key={index}
              index={index}
              percentage={skill.percentage}
              name={skill.name}
              active={skill.active}
            />
          ))}
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillButton
              key={index}
              index={index}
              name={skill.name}
              icon={skill.icon}
              active={skill.active}
              setActive={setActiveSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
