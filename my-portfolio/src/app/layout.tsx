import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CursorLight from "@/components/CursorLight";
import Head from "next/head";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Andrea Naranjo Lima | Portfolio",
  description: "A quick look into my experience and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Andrea Naranjo Lima | Portfolio</title>
        <meta name="description" content="Portfolio of Andrea Naranjo Lima, showcasing web applications, projects, and skills in React, PHP, and more." />
        <meta name="keywords" content="Andrea Naranjo Lima, Software Engineer, Portfolio, Web Developer, Front-end Engineer, React, Node.js, PHP" />
        <meta name="author" content="Andrea Naranjo Lima" />
        <meta property="og:title" content="Andrea Naranjo Lima | Portfolio" />
        <meta property="og:description" content="Showcasing projects and skills in modern web development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://screenshotapi.net/_next/image?url=https%3A%2F%2Fs3.eu-central-2.wasabisys.com%2Fw.storage.screenshotapi.net%2Fmy_portfolio_kappa_seven_89_vercel_app__82a8c759116d.png&w=1920&q=75" />
        <link rel="canonical" href="https://my-portfolio-kappa-seven-89.vercel.app/" />
      </Head>
      <body
        className={`${inter.variable} ${poppins.variable}`}
      >
        <CursorLight /> 
        {children}
      </body>
    </html>
  );
}
