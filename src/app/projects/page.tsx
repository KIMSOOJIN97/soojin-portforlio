// swiper
import "./projects.css";
// 이미지
import Image from "next/image";

export default function ProjectsComponent() {
  const projectList = [
    {
      imgPath: "/images/gaiaCubeLogo.png",
      imgAltText: "cube",
      title: "gaiaCube",
      subtitle: "노코드 앱 플랫폼",
      startDate: "2023.09",
      endDate: "진행 중",
      stacks: ["react", "typescript", "spring"],
    },
    {
      imgPath: "/images/tmaxGaiaLogo.png", // 나중에 사진 변경
      imgAltText: "gaiaDocsLogo",
      title: "gaiaDocs",
      subtitle: "문서 생성, 공유, 실시간 동시편집을 제공하는 문서 소프트웨어",
      startDate: "2021.01",
      endDate: "2023.09",
      stacks: ["react", "typescript", "spring"],
    },
  ];

  return (
    <div className="project-list">
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <div className="image-wrapper">
            <Image
              src={project.imgPath}
              alt={project.imgAltText}
              layout="fill" // 부모 요소의 크기를 채우도록 설정
              objectFit="contain" // 이미지가 왜곡되지 않도록 조정
              priority={true}
            />
          </div>
          <p>{project.title}</p>
          <p>{project.subtitle}</p>
          <p className=" text-gray-600 text-base md:text-sm mb-1">
            {project.startDate} ~ {project.endDate}
          </p>
          <div className="flex flex-row items-center text-xs md:text-sm text-gray-700 my-2 ">
            {project.stacks.map((stack) => (
              <Image
                key={stack}
                className="rounded-sm mx-1"
                src={`/images/icons/${stack}.svg`}
                alt={stack}
                priority
                quality={100}
                width={20}
                height={20}
                style={{ width: 20, height: 20 }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
