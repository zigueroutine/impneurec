import { Oswald, Barlow } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const fontClasses = `${oswald.variable} ${barlow.variable}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
