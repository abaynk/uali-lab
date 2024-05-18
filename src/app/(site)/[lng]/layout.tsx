import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import { useRouter } from "next/router";
// import Template from "./template";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export const metadata: Metadata = {
  title: "Ualilab",
  description: "Motion graphics studio",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({
  children,
  modal,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: {
    lng: "ru" | "en";
  };
}>) {
  return (
    <html lang={lng} dir={dir(lng)} className="lenis lenis-smooth">
      <head>
        <link rel="shortcut icon" href="/assets/images/ualifavicon.svg" />
      </head>
      <body className={`__className_254d6c __variable_254d6c`}>
        <SmoothScrolling>
          <div className="FooterRevealPageWrap_frame-wrap__PJi9O">
            <Header lng={lng} />
            <div
              className="FooterRevealPageWrap_page-wrap__RQIzf"
              id="page-content"
              style={{
                transform: "none",
                willChange: "auto",
                transformOrigin: "center bottom",
              }}
            >
              {children}
            </div>

            <div className="FooterRevealPageWrap_footer-scroll-twin__tn7UN"></div>
            <Footer lng={lng} />
          </div>
        </SmoothScrolling>
        {modal}
      </body>
    </html>
  );
}
