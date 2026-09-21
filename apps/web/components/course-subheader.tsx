"use client";

import { useEffect, useState } from "react";
import { TrialDialogTrigger } from "@/components/trial-dialog";

const DESKTOP_HEADER_HEIGHT = 94;
const MOBILE_HEADER_HEIGHT = 82;

export function CourseSubheader({ courseTitle }: { courseTitle: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("#course-hero");
    if (!hero) return;

    const updateVisibility = () => {
      const headerHeight = window.matchMedia("(max-width: 680px)").matches
        ? MOBILE_HEADER_HEIGHT
        : DESKTOP_HEADER_HEIGHT;
      setIsVisible(hero.getBoundingClientRect().bottom <= headerHeight);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <aside className={`course-subheader${isVisible ? " course-subheader--visible" : ""}`} aria-label={`Навігація курсу ${courseTitle}`} aria-hidden={!isVisible}>
      <div className="course-subheader__inner shell">
        <span className="course-subheader__title">{courseTitle}</span>
        <TrialDialogTrigger className="button button--primary button--small" courseTitle={courseTitle} tabIndex={isVisible ? undefined : -1}>Записатися на пробне</TrialDialogTrigger>
      </div>
    </aside>
  );
}
