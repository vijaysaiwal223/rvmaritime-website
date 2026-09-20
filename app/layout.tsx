import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../styles.css";

const circularStd = localFont({
  src: [
    {
      path: "../assets/typography/CircularStd-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/typography/CircularStd-Medium.otf",
      weight: "500 600",
      style: "normal",
    },
    {
      path: "../assets/typography/CircularStd-Bold.otf",
      weight: "700 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-circular-std",
});

export const metadata: Metadata = {
  title: "R V Maritime Private Limited | Marine Services & Engineering",
  description:
    "R V Maritime Private Limited provides marine services, engineering, port support, ship recycling assistance, ship chandling, marine spares, and cargo operation services across Indian ports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={circularStd.variable}>
      <body className={circularStd.className}>{children}</body>
    </html>
  );
}
