import type { Metadata } from "next";
import Link from "next/link";
import { TeacherCard } from "@/components/teacher-card";
import { teachers } from "@/data/teachers";
import { TrialDialogTrigger } from "@/components/trial-dialog";

export const metadata: Metadata = {
  title: "Про академію",
  description: "Підхід, методики та викладачі академії розвитку інтелекту SMARTUM у Києві.",
};

const principles = [
  ["01", "Індивідуальний темп", "Викладач враховує вік, стартові навички та особливості дитини, щоб навчання було посильним."],
  ["02", "Гра зі змістом", "Вправи й розвивальні ігри підтримують інтерес і допомагають засвоювати складне без механічного заучування."],
  ["03", "Практика між заняттями", "Онлайн-платформа та авторські матеріали допомагають закріплювати навички регулярно."],
  ["04", "Помітний прогрес", "Ми відстежуємо динаміку навчання, а батьки отримують зрозумілий зворотний зв’язок про сильні сторони дитини."],
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero shell">
        <div className="about-hero__copy">
          <span className="eyebrow">Про SMARTUM</span>
          <h1>Допомагаємо дітям розкривати свій потенціал</h1>
          <p className="lead">
            SMARTUM — міжнародна академія розвитку інтелекту. У Києві ми створюємо
            простір, де дитина вчиться мислити, не боїться помилятися і бачить власний прогрес.
          </p>
          <div className="hero__actions">
            <TrialDialogTrigger className="button button--primary">Записатися на пробне</TrialDialogTrigger>
            <Link className="button button--ghost" href="/courses">Переглянути курси</Link>
          </div>
        </div>
        <div className="about-hero__panel" aria-label="SMARTUM у цифрах">
          <div className="about-hero__mark">∞</div>
          <div className="about-stat about-stat--large"><strong>28</strong><span>країн, де працює SMARTUM</span></div>
          <div className="about-stat"><strong>5–16</strong><span>років — вік наших учнів</span></div>
          <div className="about-stat"><strong>100+</strong><span>розвивальних ігор</span></div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell about-mission">
          <div><span className="eyebrow">Наша місія</span><h2>Навички для життя, а не лише для уроку</h2></div>
          <div className="about-mission__copy"><p>Даємо дітям інструменти для роботи з інформацією та новими знаннями, які можна застосовувати у навчанні та щоденному житті.</p></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading about-section-heading">
          <div><span className="eyebrow">Як ми навчаємо</span><h2>Продумана система на кожному етапі</h2></div>
          <p className="lead">Поєднуємо роботу з викладачем, авторські матеріали та зручні цифрові інструменти.</p>
        </div>
        <div className="about-principles">
          {principles.map(([number, title, text]) => <article className="about-principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section about-team" id="team">
        <div className="shell">
          <div className="section-heading about-section-heading"><div><span className="eyebrow">Наша команда</span><h2>Викладачі SMARTUM</h2></div></div>
          <div className="about-team__grid">
            {teachers.map((teacher) => <TeacherCard teacher={teacher} key={teacher.name} />)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="trial-banner">
          <div><span className="eyebrow eyebrow--light">Почнімо зі знайомства</span><h2>Дайте дитині можливість спробувати SMARTUM</h2></div>
          <TrialDialogTrigger className="button button--light">Записатися на пробне</TrialDialogTrigger>
        </div>
      </section>
    </main>
  );
}
