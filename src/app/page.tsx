"use client";

import { useEffect, useState } from "react";
import AboutComponent from "./about/page";
import ProjectsComponent from "./projects/page";

export default function Home() {
  const [showInitPage, setShowInitPage] = useState(true); // 초기 로딩 페이지 표시 여부
  // 타이머 관리
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 스크롤 비활성

    const timer = setTimeout(() => {
      // 3초 후 수행할 작업
      setShowInitPage(false);
      document.body.style.overflow = ""; // 스크롤 가능하게 변경
    }, 3000);

    // 컴포넌트 언마운트 시 수행
    return () => {
      clearTimeout(timer); // 메모리 누수 방지
      document.body.style.overflow = "";
    };
  }, []); // 우선 컴포넌트 마운트 될 때만 수행하도록함

  return (
    <>
      {!showInitPage && (
        <section>
          <AboutComponent />
          <ProjectsComponent />
        </section>
      )}
    </>
  );
}
