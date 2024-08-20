import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Age Calculator App",
  description: "Get your exact age!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} min-h-screen flex justify-center
    items-center`}
      >
        {children}
      </body>
    </html>
  );
}
