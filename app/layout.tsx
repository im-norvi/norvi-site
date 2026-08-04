import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NORVI - Modern metalcore from Almaty",
  description: "NORVI music, videos, gallery, discography and booking.",
  openGraph: {
    title: "NORVI - Modern metalcore from Almaty",
    description: "NORVI music, videos, gallery, discography and booking.",
    images: ["/images/norvi-cover.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
