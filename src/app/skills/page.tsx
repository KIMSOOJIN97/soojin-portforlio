import CategoryComponent from "@/components/common/CategoryComponent";
import Image from "next/image";

export default function SkillsComponent() {
    const filterConditions = ['Front' , 'Back' , 'DB'];
    return (
        <section>
            <CategoryComponent text={"Skills"} color={"#0072BB"} />
            <section className="flex w-full">
                <Image
                    src={`/images/filter.png`}
                    alt="filter Icon"
                    priority
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                />
                <ul className="flex space-x-4">
                    {filterConditions.map((condition) => (
                        <li>
                            {condition}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <ul>
                    {skills.map((skill )=> (
                        <li>
                            {skill}
                        </li>

                    ))}
                </ul>
            </section>
        </section> 
    );
}