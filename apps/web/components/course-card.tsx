import Link from "next/link";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card" style={{ "--accent": course.color } as React.CSSProperties}>
      <div className="course-card__icon" aria-hidden="true">{course.symbol}</div>
      <span className="course-card__age">{course.age}</span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link href={`/courses/${course.slug}`}>Дізнатися більше <span>→</span></Link>
    </article>
  );
}
