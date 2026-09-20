import type { Metadata } from "next";
export const metadata: Metadata = { title:"Контакти" };
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/data/site-config";

export default function ContactsPage() {
  return (
    <>
      <section className="page-hero shell">
        <span className="eyebrow">Контакти</span>
        <h1>Познайоммося ближче</h1>
        <p>Залиште заявку — підкажемо програму, розклад і найближчу локацію в Києві.</p>
      </section>
      <section className="contact-grid shell">
        <article className="contact-card">
          <h2>SMARTUM Київ</h2>
          <div className="contact-list">
            <span>Київ, Україна</span>
            <a href={CONTACT_PHONE.href}>{CONTACT_PHONE.label}</a>
            <a href={CONTACT_EMAIL.href}>{CONTACT_EMAIL.label}</a>
            <span>Пн–Сб, 09:00–19:00</span>
          </div>
        </article>
        <form className="trial-form" id="trial">
          <h2>Запис на пробне заняття</h2>
          <p>Форма підготовлена для майбутнього підключення до API.</p>
          <label>
            Ім’я батька або матері
            <input name="parentName" placeholder="Ваше ім’я" />
          </label>
          <label>
            Телефон
            <input name="phone" type="tel" placeholder="+38 (___) ___-__-__" />
          </label>
          <label className="form-wide">
            Вік дитини та побажання
            <textarea name="message" placeholder="Наприклад: 8 років, цікавить швидкочитання" />
          </label>
          <button className="button button--primary form-wide" type="button">Надіслати заявку</button>
        </form>
      </section>
    </>
  );
}
