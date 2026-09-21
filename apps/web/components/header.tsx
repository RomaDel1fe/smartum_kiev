import Image from "next/image";
import Link from "next/link";
import { CONTACT_PHONE } from "@/data/site-config";
import { ActiveNavLink } from "@/components/active-nav-link";
import { TrialDialogTrigger } from "@/components/trial-dialog";

const nav = [
  { href: "/courses", label: "Курси" },
  { href: "/about", label: "Про академію" },
  { href: "/contacts", label: "Контакти" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand-logo brand-logo--header" href="/" aria-label="SMARTUM Київ — на головну">
          <Image
            src="/smartum-logo.png"
            width={1738}
            height={905}
            alt="SMARTUM — academy of mental arithmetic"
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Головна навігація">
          {nav.map((item) => <ActiveNavLink href={item.href} key={item.href}>{item.label}</ActiveNavLink>)}
        </nav>
        <div className="header-actions">
          <a className="phone" href={CONTACT_PHONE.href}>{CONTACT_PHONE.label}</a>
          <TrialDialogTrigger className="button button--small button--primary">Пробне заняття</TrialDialogTrigger>
        </div>
        <details className="navigation-menu">
          <summary className="navigation-menu__toggle">
            <span className="sr-only">Відкрити або закрити меню</span>
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </summary>
          <div className="navigation-menu__panel">
            <nav aria-label="Мобільна навігація">
              {nav.map((item) => <ActiveNavLink href={item.href} key={item.href}>{item.label}</ActiveNavLink>)}
            </nav>
            <div className="navigation-menu__contacts">
              <a className="navigation-menu__phone" href={CONTACT_PHONE.href}>{CONTACT_PHONE.label}</a>
              <TrialDialogTrigger className="button button--primary">Пробне заняття</TrialDialogTrigger>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
