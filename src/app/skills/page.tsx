import CategoryComponent from "@/components/common/CategoryComponent";
import Image from "next/image";
import { skillsData } from "@/data/skills/SkillsData";
import { useState } from "react";

export default function SkillsComponent() {
  const [selectedType, setSelectedType] = useState("All");
  const filterConditions = ["All", "Front", "Back", "DB"];
  const filteredSkills =
    selectedType === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.type === selectedType);

  const handleClick = (type: string) => {
    setSelectedType(type);
  };

  return (
    <section className="w-full p-10">
      <CategoryComponent text={"Skills"} color={"#0072BB"} />
      <section className="flex pb-2">
        <Image
          src={`/images/filter.png`}
          alt="filter Icon"
          priority
          width={30}
          height={30}
          style={{ width: 30, height: 30 }}
        />
        <ul className="flex space-x-4">
          {filterConditions.map((condition, index) => (
            <li key={index} onClick={() => handleClick(condition)}>
              {condition}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <li
              key={`index`}
              className="p-4 min-h-[200px] border border-blue-500"
            >
              <div>{skill.skill}</div>
              {skill.descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
