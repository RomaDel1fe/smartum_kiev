import Link from "next/link";

const nav = [
  { href: "/courses", label: "Курси" },
  { href: "/about", label: "Про академію" },
  { href: "/contacts", label: "Контакти" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="logo" href="/" aria-label="SMARTUM Київ — на головну">
          <span className="logo__mark">S</span><span>SMARTUM<small>КИЇВ</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Головна навігація">
          {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="phone" href="tel:+380000000000">+38 (000) 000-00-00</a>
          <Link className="button button--small button--primary" href="/contacts#trial">Пробне заняття</Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Відкрити меню">Меню</summary>
          <nav>{nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        </details>
      </div>
    </header>
  );
}
