import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { CourseSubheader } from "@/components/course-subheader";
import { TeacherCard } from "@/components/teacher-card";
import { publishedCourses } from "@/data/courses";

export function generateStaticParams() { return publishedCourses.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = publishedCourses.find((item) => item.slug === slug);
  return { title: course?.title ?? "Курс", description: course?.description };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = publishedCourses.find((item) => item.slug === slug);
  if (!course) notFound();
  return <div className="course-page" style={{ "--course-accent": course.color } as CSSProperties}>
    <CourseSubheader courseTitle={course.title}/>
    <section className="page-hero course-hero shell" id="course-hero"><span className="course-hero__symbol" aria-hidden="true">{course.symbol}</span><span className="eyebrow">{course.information.eyebrow}</span><h1>{course.title}</h1><p>{course.information.fullDescription}</p><div className="hero__actions course-hero__actions"><Link className="button button--primary" href="/contacts#trial">Записатися на пробне</Link></div></section>
    <section className="content-grid shell"><article className="content-card"><h2>Що розвиваємо</h2><ul>{course.result.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="content-card"><h2>Програма курсу</h2><ul>{course.information.program.map((item) => <li key={item}>{item}</li>)}</ul></article></section>
    {course.learningFormats.length > 0 && <section className="course-section shell"><span className="eyebrow">Формат навчання</span><h2>Як проходять заняття</h2><div className="course-detail-grid">{course.learningFormats.map((format) => <article className="content-card" key={format.title}><h3>{format.title}</h3><p>{format.description}</p>{format.durationMinutes && <p><strong>{format.durationMinutes} хвилин</strong></p>}{format.groupSize && <p>{format.groupSize}</p>}</article>)}</div></section>}
    {course.teachers.length > 0 && <section className="course-section shell"><span className="eyebrow">Команда</span><h2>Викладачі курсу</h2><div className="course-detail-grid course-teacher-grid">{course.teachers.map((teacher) => <TeacherCard teacher={teacher} showBio key={teacher.name} />)}</div></section>}
    {course.prices.length > 0 && <section className="course-section shell"><span className="eyebrow">Вартість</span><h2>Ціни</h2><div className="course-detail-grid">{course.prices.map((price) => <article className="content-card" key={price.title}><h3>{price.title}</h3><p className="course-price">{price.amount.toLocaleString("uk-UA")} ₴</p><p>{price.period}</p>{price.description && <p>{price.description}</p>}</article>)}</div></section>}
    {course.reviews.length > 0 && <section className="course-section shell"><span className="eyebrow">Відгуки</span><h2>Що кажуть батьки</h2><div className="course-detail-grid">{course.reviews.map((review) => <blockquote className="content-card" key={`${review.author}-${review.text}`}><p>{review.text}</p><footer>{review.author}{review.childAge ? `, дитині ${review.childAge}` : ""} · {review.rating}/5</footer></blockquote>)}</div></section>}
  </div>;
}
