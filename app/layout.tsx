import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Enano Cornudo",
  description: "Catálogo para el contacto directo con el vendedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
    >
      <body className={`${bitter.className} min-h-screen flex flex-col bg-black-charcoal text-white-bone`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
