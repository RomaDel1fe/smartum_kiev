import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><div className="logo logo--light"><span className="logo__mark">S</span><span>SMARTUM<small>КИЇВ</small></span></div><p>Академія розвитку інтелекту для дітей від 5 до 16 років.</p></div>
        <div><h3>Навігація</h3><Link href="/courses">Курси</Link><Link href="/about">Про академію</Link><Link href="/contacts">Контакти</Link></div>
        <div><h3>Контакти</h3><a href="tel:+380000000000">+38 (000) 000-00-00</a><a href="mailto:kyiv@smartum.com.ua">kyiv@smartum.com.ua</a><span>Київ, Україна</span></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} SMARTUM Київ</span><span>Політика конфіденційності</span></div>
    </footer>
  );
}
