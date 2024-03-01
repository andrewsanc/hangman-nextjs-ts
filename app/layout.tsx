import type { Metadata } from "next";
import { Mouse_Memoirs } from "next/font/google";
import "./globals.css";

const mouseMemoirs = Mouse_Memoirs({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Hangman",
  description: "Hangman game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mouseMemoirs.className}>{children}</body>
    </html>
  );
}
