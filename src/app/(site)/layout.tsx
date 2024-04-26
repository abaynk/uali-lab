import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import { useRouter } from "next/router";
// import Template from "./template";

export const metadata: Metadata = {
  title: "Ualilab",
  description: "Motion graphics studio",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <head>
        <link rel="shortcut icon" href="/assets/images/white_logo.png" />
      </head>
      <body className={`__className_254d6c __variable_254d6c`}>
        <SmoothScrolling>
          <div className="FooterRevealPageWrap_frame-wrap__PJi9O">
            <Header />
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
            <Footer />
          </div>
        </SmoothScrolling>
        {modal}
      </body>
    </html>
  );
}
