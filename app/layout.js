import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"
import { Syne } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "SILA KARAA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`}>
        <div className="Header">
          <h1>SILA KARA</h1>
          <div class="Nav">
            <Link href={'/'}>Anasayfa</Link>
            <Link href={'/AboutMe'}>Hakkımda</Link>
            <Link href={'/Projects'}>Projeler</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
