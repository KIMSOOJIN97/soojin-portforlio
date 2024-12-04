import Image from "next/image";
import "@/styles/common/Header.css";

export default function HeaderComponent() {
  const headers = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  return (
    <div className="header">
      <Image
        key={"soojinLogo"}
        src={`/images/soojin_logo.png`}
        alt={"soojinLogo"}
        width={200}
        height={5}
      />
      <ul className="header-container">
        {headers.map((header) => (
          <li key={header}>
            <a href={`#${header}`}>{header}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
