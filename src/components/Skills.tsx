import type { ElementType } from "react";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiKotlin,
  SiReact,
  SiTailwindcss,
  SiDotnet,
  SiGit,
  SiFigma,
  SiC,
  SiPostgresql,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

type Skill = {
  name: string;
  icon: ElementType;
  color: string;
};

const programmingLanguages: Skill[] = [
  {
    name: "Java",
    icon: FaJava,
    color: "text-sky-400",
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    color: "text-violet-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-blue-400",
  },
  {
    name: "C",
    icon: SiC,
    color: "text-green-600",
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    color: "text-purple-500",
  },
];

const technologies: Skill[] = [
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    color: "text-violet-500",
  },
  {
    name: "SQL",
    icon: SiPostgresql,
    color: "text-blue-600",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-500",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "text-pink-500",
  },
];

function SkillIcon({
  name,
  icon: Icon,
  color,
}: Skill) {
  return (
    <div className="group flex min-h-40 flex-col items-center">
      <Icon
        className={`
          ${color}
          text-6xl
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:scale-110
        `}
      />

      <p
        className="
          mt-8
          text-1xl
          font-normal
          tracking-tight
          text-neutral-900
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
        "
      >
        {name}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="bg-neutral-50 pt-28 pb-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold uppercase tracking-[0.22em] text-neutral-900">
            Skills
          </h2>
        </div>

        <div>
          <h3 className="mb-14 text-center text-2xl font-semibold text-neutral-900">
            Programming Languages
          </h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
            {programmingLanguages.map((skill) => (
              <SkillIcon key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-14 text-center text-2xl font-semibold text-neutral-900">
            Technologies
          </h3>

          <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.map((skill) => (
              <SkillIcon key={skill.name} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}