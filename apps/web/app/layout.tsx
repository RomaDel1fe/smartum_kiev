import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrialDialogProvider } from "@/components/trial-dialog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smartum.kiev.ua"),
  title: { default: "SMARTUM Київ — академія розвитку інтелекту", template: "%s | SMARTUM Київ" },
  description: "Курси розвитку інтелекту для дітей 5–16 років у Києві: ментальна арифметика, швидкочитання, пам’ять, математика та підготовка до школи.",
  openGraph: { title: "SMARTUM Київ", description: "Допомагаємо дітям мислити сміливо й навчатися із задоволенням.", locale: "uk_UA", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "SMARTUM Київ" }] },
  twitter: { card: "summary_large_image", title: "SMARTUM Київ", description: "Мислити сміливо. Навчатися із задоволенням.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" data-scroll-behavior="smooth">
      <body>
        <TrialDialogProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TrialDialogProvider>
      </body>
    </html>
  );
}
