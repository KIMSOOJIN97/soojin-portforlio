import AboutContentComponent from "@/components/about/AboutContentComponent";
import Image from "next/image";
import "./about.css";
import CategoryComponent from "@/components/common/CategoryComponent";

export default function AboutComponent() {
  return (
    <>
      <CategoryComponent text={"About"} color={"#0072BB"} />
      <div className="about-container">
        <Image
          src="/images/soojin.jpeg"
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
