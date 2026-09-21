import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/data/site-config";
import { assetPath } from "@/lib/asset-path";

const footerNav = [
  { href: "/courses", label: "Курси" },
  { href: "/about", label: "Про академію" },
  { href: "/contacts", label: "Контакти" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-about">
          <Link className="brand-logo brand-logo--footer" href="/" aria-label="SMARTUM Київ — на головну">
            <Image
              src={assetPath("/smartum-logo.png")}
              width={1738}
              height={905}
              alt="SMARTUM — academy of mental arithmetic"
            />
          </Link>
          <p>Академія розвитку інтелекту для дітей від 5 до 16 років.</p>
        </div>
        <nav className="footer-column" aria-label="Навігація у футері">
          <h2>Навігація</h2>
          {footerNav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <address className="footer-column">
          <h2>Контакти</h2>
          <a href={CONTACT_PHONE.href}>{CONTACT_PHONE.label}</a>
          <a href={CONTACT_EMAIL.href}>{CONTACT_EMAIL.label}</a>
          <span>Київ, Україна</span>
        </address>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} SMARTUM Київ</span>
        <span>Політика конфіденційності</span>
      </div>
    </footer>
  );
}
