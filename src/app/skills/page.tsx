"use client";
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
    <section className="w-full">
      <CategoryComponent text={"Skills"} color={"#0072BB"} />
      <div className="p-10">
        <section className="flex pb-2">
          <Image
            src={`/images/filter.png`}
            alt="filter Icon"
            priority
            width={30}
            height={30}
            style={{ width: 30, height: 30 }}
          />
          <ul className="flex font-establishRetrosansOTF space-x-4 text-lg">
            {filterConditions.map((condition, index) => (
              <li
                className={`${
                  condition === selectedType ? "text-customBlue" : "text-white"
                }`}
                key={index}
                onClick={() => handleClick(condition)}
              >
                {condition}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredSkills.map((skill, index) => (
              <li
                key={index}
                className="p-4 min-h-[200px] border border-blue-500"
              >
                <div className="text-lg	pb-8 text-center font-SDSamliphopangche_Outline">
                  {skill.skill}
                </div>
                <ul className="list-disc pl-4">
                  {skill.descriptions.map((description, index) => (
                    <li className="pb-2 font-GowunBatang_Regular" key={index}>
                      {description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
