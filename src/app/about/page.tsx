import AboutContentComponent from "@/components/about/AboutContentComponent";
import Image from "next/image";
import "./about.css";

export default function AboutComponent() {
  return (
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
  );
}
