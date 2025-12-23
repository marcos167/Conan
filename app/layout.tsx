import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Show - Superaplicativo Global",
  description: "Ecossistema global de comércio eletrônico, fintech, telecomunicações, logística e redes sociais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
