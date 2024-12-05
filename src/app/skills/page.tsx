import CategoryComponent from "@/components/common/CategoryComponent";
import Image from "next/image";
import { skillsData } from "@/data/skills/SkillsData";

export default function SkillsComponent() {
  const filterConditions = ["All", "Front", "Back", "DB"];
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
            <li key={`index`}>{condition}</li>
          ))}
        </ul>
      </section>
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
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
