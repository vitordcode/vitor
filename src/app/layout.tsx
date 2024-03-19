import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "./components/header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Vitor de Paula",
  description: "Front-end Developer Freelancer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={clsx("flex flex-col", poppins.variable, grotesk.variable, syne.variable)}>
        <div className="flex-1 relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}