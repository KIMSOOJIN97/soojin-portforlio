import { Skills } from "@/types/skills/SkillsType";

// interface 만들기
export const skillsData: Skills[] = [
  {
    skill: "HTML5 / CSS3",
    type: "Front",
    descriptions: [
      "웹 서비스를 설계할 때 시각적인 부분뿐만 아니라 시맨틱한 마크업 구조를 생각하여 만듭니다.",
      "웹 표준을 지키고 웹 접근성 개선에 노력합니다.",
      "반응형 웹 디자인을 할 수 있습니다.",
    ],
  },
  {
    skill: "JavaScript / TypeScript",
    type: "Front",
    descriptions: [
      "실행 컨텍스트, 호출 스택과 이벤트 루프의 동작 원리를 이해하여 사용합니다.",
      "적절한 함수 분리를 통해 코드의 가독성을 높이고 유지보수성을 향상시킵니다.",
      "TypeScript의 타입 시스템을 활용하여 개발하는 것을 지향합니다.",
    ],
  },
  {
    skill: "React",
    type: "Front",
    descriptions: [
      "합리적인 방식으로 컴포넌트를 분리하여 컴포넌트의 재사용성을 높입니다.",
      "React Hooks 사용이 능숙하고 Recoil, Redux 등으로 상태 관리가 가능합니다. ",
      "라이프 사이클을 이해하며 사용하고, 성능 최적화를 고민합니다.",
    ],
  },
  {
    skill: "NextJS",
    type: "Front",
    descriptions: [
      "CSR, SSG, ISG, SSR 4가지 렌더링 기법에 대해 이해하고, 페이지에 따라 적절한 렌더링 기법을 선택하여 사용할 수 있습니다.",
      "SEO를 향상시킬 수 있습니다.",
      "서버 컴포넌트와 클라이언트 컴포넌트의 차이를 알고 상황에 따라 적절히 사용할 수 있습니다. ",
    ],
  },
  {
    skill: "Spring Boot",
    type: "Back",
    descriptions: [
      "대규모 트랜잭션 처리 및 데이터 무결성을 유지할 수 있습니다.",
    ],
  },
  {
    skill: "Java",
    type: "Back",
    descriptions: [
      "대규모 트랜잭션 처리 및 데이터 무결성을 유지할 수 있습니다.",
    ],
  },
  {
    skill: "Oracle, Tibero",
    type: "DB",
    descriptions: [
      "동적 쿼리, PL/SQL을 사용하여 원하는 기능을 구현할 수 있습니다.",
      "SQL 쿼리 최적화가 가능하고 비효율적인 스키마를 개선할 수 있습니다.",
    ],
  },
];
