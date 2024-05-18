import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CommuFund | Aplikasi Penggalangan Dana Komunitas",
  description:
    "CommuFund adalah aplikasi penggalangan dana komunitas yang memudahkan penggalangan dana untuk kegiatan komunitas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
