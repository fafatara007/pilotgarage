import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Anasayfa - Pilot Garage Şaşmaz",
  description: "Pilot Garage Oto Ekspertiz, 2011 yılında kurulmuş olup, genişleyen bayi ağı ile Türkiye'deki müşterilerine güvenli araç alım satım deneyimi yaşatmayı hedeflemektedir.",
  icons: {
    icon: "https://ext.same-assets.com/1880888334/2545416576.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
