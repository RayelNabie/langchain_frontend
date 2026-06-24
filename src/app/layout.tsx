import type { Metadata } from "next";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "DSI Workshop",
  description: "BEM SCSS & React workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
