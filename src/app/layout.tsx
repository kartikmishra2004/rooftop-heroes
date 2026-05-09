import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROOFTOP HEROES | Engineered Permanence",
  description: "ELITE ARCHITECTURAL SOLUTIONS FOR MODERN INFRASTRUCTURE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@300;400;500;600;700;800&family=Metropolis:wght@300;400;500;600;700&family=Geist:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-background text-on-background antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
