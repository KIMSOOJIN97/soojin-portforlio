import Image from "next/image";
import "@/styles/about/About.css";
import CategoryComponent from "@/components/common/CategoryComponent";
import AboutContentComponent from "@/components/about/AboutContentComponent";

export default function AboutComponent() {
  return (
    <>
      <CategoryComponent text={"About"} color={"#0072BB"} />
      <div className="about-container">
        <Image
          src="/images/soojin.jpg"
          alt="Soojin Image"
          width={250}
          height={50}
          priority={true}
        />
        <AboutContentComponent />
      </div>
    </>
  );
}
