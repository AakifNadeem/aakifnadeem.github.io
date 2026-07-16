import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Aakif Nadeem — Senior iOS Engineer",
  description:
    "Senior iOS Engineer building scalable, polished mobile experiences with Swift, SwiftUI, UIKit, testing and CI/CD.",
  metadataBase: new URL("https://aakifnadeem.github.io"),
  openGraph: {
    title: "Muhammad Aakif Nadeem — Senior iOS Engineer",
    description:
      "Portfolio of a Senior iOS Engineer focused on architecture, performance, polished interactions and reliable delivery.",
    url: "https://aakifnadeem.github.io",
    siteName: "Aakif Nadeem",
    type: "website"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
