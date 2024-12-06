import Image from "next/image";
import "@/styles/common/Header.css";

export default function HeaderComponent() {
  const headers = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  return (
    <div className="header">
      <div className="font-MonoplexKRWideNerd_BoldItalic text-xl text-36">
        soojin
      </div>
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
