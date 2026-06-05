import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shree Uniya Construction | Engineering Integrity",
  description: "Premium civil construction and structural development services in Nallasopara, Mumbai. Engineering spaces that stand the test of time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-white selection:bg-gold selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
