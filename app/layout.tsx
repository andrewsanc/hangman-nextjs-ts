import type { Metadata } from "next";
import { Mouse_Memoirs } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
      <body className={`${mouseMemoirs.className} text-white text-base`}>
        <Image
          src="/assets/background-desktop.svg"
          width="1440"
          height="1024"
          alt="blue mountain sky background"
          className="absolute -z-10 bg-center bg-no-repeat object-cover h-full w-full"
        />
        <Image
          src="/assets/background-tablet.svg"
          width="768"
          height="1024"
          alt="blue mountain sky background"
          className="md:hidden absolute -z-10 bg-center bg-no-repeat object-cover h-full w-full"
        />
        <Image
          src="/assets/background-mobile.svg"
          width="375"
          height="812"
          alt="blue mountain sky background"
          className="sm:hidden absolute -z-10 bg-center bg-no-repeat object-cover h-full w-full"
        />
        {children}
      </body>
    </html>
  );
}
