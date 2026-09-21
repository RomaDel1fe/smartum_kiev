import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { publishedCourses } from "@/data/courses";

export const metadata: Metadata = { title: "Курси", description: "Курси SMARTUM для розвитку інтелекту дітей у Києві." };
export default function CoursesPage() { return <><section className="page-hero shell"><span className="eyebrow">Наші програми</span><h1>Навчання, яке розкриває потенціал</h1><p>Оберіть напрямок відповідно до віку, інтересів і цілей дитини. Допоможемо визначитися на пробному занятті.</p></section><section className="course-grid page-grid shell">{publishedCourses.map((course)=><CourseCard key={course.slug} course={course}/>)}</section></>; }
