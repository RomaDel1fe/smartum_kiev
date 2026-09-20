import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

export function generateStaticParams() { return courses.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug:string }> }): Promise<Metadata> { const { slug } = await params; const course=courses.find((item)=>item.slug===slug); return { title:course?.title ?? "Курс" }; }
export default async function CoursePage({ params }: { params: Promise<{ slug:string }> }) { const { slug }=await params; const course=courses.find((item)=>item.slug===slug); if(!course) notFound(); return <><section className="page-hero shell"><span className="eyebrow">{course.age}</span><h1>{course.title}</h1><p>{course.description}</p><div className="hero__actions" style={{justifyContent:"center"}}><Link className="button button--primary" href="/contacts#trial">Записатися на пробне</Link></div></section><section className="content-grid shell"><article className="content-card"><h2>Що розвиваємо</h2><ul>{course.result.map((item)=><li key={item}>{item}</li>)}</ul></article><article className="content-card"><h2>Як проходить навчання</h2><p>Заняття у невеликих групах, регулярна практика та зрозумілий зворотний зв’язок для батьків. Детальну програму й розклад уточнюйте у менеджера академії.</p></article></section></>; }
