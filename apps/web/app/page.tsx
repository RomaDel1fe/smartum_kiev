import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/data/courses";
import { TrialDialogTrigger } from "@/components/trial-dialog";

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero__content">
          <span className="eyebrow">Академія розвитку інтелекту в Києві</span>
          <h1>Допомагаємо дітям мислити сміливо й навчатися із задоволенням</h1>
          <p>
            Розвиваємо пам’ять, увагу, логіку та впевненість дітей від 5 до 16 років
            за перевіреними методиками SMARTUM.
          </p>
          <div className="hero__actions">
            <TrialDialogTrigger className="button button--primary">
              Записатися на пробне заняття
            </TrialDialogTrigger>
            <Link className="button button--ghost" href="/courses">
              Обрати курс
            </Link>
          </div>
          <ul className="hero__facts" aria-label="Переваги академії">
            <li><strong>5–16</strong><span>років</span></li>
            <li><strong>8</strong><span>напрямків</span></li>
            <li><strong>2</strong><span>формати навчання</span></li>
          </ul>
        </div>
        <div className="hero__visual" aria-label="Навчання у Smartum">
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <div className="hero__card hero__card--main">
            <span className="hero__spark">✦</span>
            <strong>Розумію</strong>
            <span>а не заучую</span>
          </div>
          <div className="hero__card hero__card--small">12 + 8 = 20</div>
          <div className="hero__badge">SMART<br />START</div>
        </div>
      </section>

      <section className="section shell" id="courses">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Напрямки навчання</span>
            <h2>Курс для кожного етапу розвитку</h2>
          </div>
          <Link className="text-link" href="/courses">Усі курси →</Link>
        </div>
        <div className="course-grid">
          {courses.slice(0, 4).map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split">
          <div>
            <span className="eyebrow">Чому Smartum</span>
            <h2>Навички, які працюють далеко за межами уроку</h2>
            <p className="lead">Не женемося за оцінками. Допомагаємо дитині зрозуміти власні сильні сторони й користуватися ними щодня.</p>
          </div>
          <div className="benefit-grid">
            <article><span>01</span><h3>Малі групи</h3><p>Викладач бачить темп і прогрес кожної дитини.</p></article>
            <article><span>02</span><h3>Навчання через гру</h3><p>Складні вправи стають цікавими й зрозумілими.</p></article>
            <article><span>03</span><h3>Видимий прогрес</h3><p>Регулярний зворотний зв’язок для батьків.</p></article>
            <article><span>04</span><h3>Онлайн та офлайн</h3><p>Зручний формат без втрати якості навчання.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="trial-banner">
          <div>
            <span className="eyebrow eyebrow--light">Почніть зі знайомства</span>
            <h2>Підберемо курс під інтереси та вік вашої дитини</h2>
          </div>
          <TrialDialogTrigger className="button button--light">Записатися на пробне</TrialDialogTrigger>
        </div>
      </section>
    </>
  );
}
