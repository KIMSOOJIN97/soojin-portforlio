import "./styles/header.css";

export default function Header() {
  const headers = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  return (
    <ul className="header-container">
      {headers.map((header) => (
        <li key={header}>
          <a href={`#${header}`}>{header}</a>
        </li>
      ))}
    </ul>
  );
}
