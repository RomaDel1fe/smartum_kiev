import type { Metadata } from "next";
export const metadata: Metadata = { title:"Контакти" };
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/data/site-config";
import { TrialForm } from "@/components/trial-form";

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
        <div id="trial">
          <h2 className="contact-form-title">Запис на пробне заняття</h2>
          <p className="contact-form-description">Залиште контакти — ми допоможемо з програмою та розкладом.</p>
          <TrialForm />
        </div>
      </section>
    </>
  );
}
