"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CONTACT_PHONE } from "@/data/site-config";
import { ActiveNavLink } from "@/components/active-nav-link";
import { TrialDialogTrigger } from "@/components/trial-dialog";
import { assetPath } from "@/lib/asset-path";

const nav = [
  { href: "/courses", label: "Курси" },
  { href: "/about", label: "Про академію" },
  { href: "/contacts", label: "Контакти" },
];

export function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeMenuOnOutsidePress = (event: PointerEvent) => {
      const menu = menuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) {
        menu.removeAttribute("open");
      }
    };

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.removeAttribute("open");
        menuRef.current.querySelector("summary")?.focus();
      }
    };

    document.addEventListener("pointerdown", closeMenuOnOutsidePress);
    document.addEventListener("keydown", closeMenuOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeMenuOnOutsidePress);
      document.removeEventListener("keydown", closeMenuOnEscape);
    };
  }, []);

  const closeMenuAfterAction = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as Element).closest("a, button")) {
      menuRef.current?.removeAttribute("open");
    }
  };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand-logo brand-logo--header" href="/" aria-label="SMARTUM Київ — на головну">
          <Image
            src={assetPath("/smartum-logo.png")}
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
        <details className="navigation-menu" ref={menuRef}>
          <summary className="navigation-menu__toggle">
            <span className="sr-only">Відкрити або закрити меню</span>
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </summary>
          <div className="navigation-menu__panel" onClick={closeMenuAfterAction}>
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
