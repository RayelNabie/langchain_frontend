import type { Metadata } from "next";
import { Fraunces, Quantico } from "next/font/google";
import "../styles/main.scss";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const quantico = Quantico({ subsets: ["latin"], weight: "400", variable: "--font-quantico" });

export const metadata: Metadata = {
  title: "Football Manager LLM",
  description: "Chat interface voor de football manager assistent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${quantico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
