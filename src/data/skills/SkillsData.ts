import { Skills } from "@/types/skills/SkillsType";

// interface 만들기
export const skillsData: Skills[] = [
  {
    skill: "HTML5 / CSS3",
    type: "Front",
    descriptions: [
      "마크업의 구조적 의미를 고려한 컴포넌트 설계로 유지보수성을 높입니다.",
      "웹 표준과 접근성 가이드라인을 준수하여 포용적인 서비스 개발을 지향합니다.",
      "디바이스 환경에 구애받지 않는 유연한 UI/UX를 구현합니다.",
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
      "React 생태계를 활용한 프론트엔드 개발해 본 경험이 있습니다.",
      "비즈니스 로직을 고려한 컴포넌트 설계로 확장성 있는 구조를 만듭니다.",
      "메모리 누수 방지와 불필요한 리렌더링 최소화 등 성능 개선에 노력합니다.",
    ],
  },
  // {
  //   skill: "NextJS",
  //   type: "Front",
  //   descriptions: [
  //     "CSR, SSG, ISG, SSR 4가지 렌더링 기법에 대해 이해하고, 페이지에 따라 적절한 렌더링 기법을 선택하여 사용할 수 있습니다.",
  //     "SEO를 향상시킬 수 있습니다.",
  //     "서버 컴포넌트와 클라이언트 컴포넌트의 차이를 알고 상황에 따라 적절히 사용할 수 있습니다. ",
  //   ],
  // },
  {
    skill: "Spring Boot",
    type: "Back",
    descriptions: [
      "대규모 트랜잭션 처리 및 데이터 무결성을 유지할 수 있습니다.",
      "복잡한 비즈니스 로직을 효율적인 쿼리로 최적화하여 성능을 개선합니다.",
    ],
  },
  {
    skill: "Java",
    type: "Back",
    descriptions: [
      "Java를 활용해 Spring Boot 기반 애플리케이션을 개발해 본 경험이 있습니다.",
      "객체지향 프로그래밍의 원칙을 이해하고, 클래스와 객체를 활용하여 유지보수 가능한 코드를 작성할 수 있습니다.",
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
