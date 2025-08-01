// app/layout.js
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { neueMontreal, recklessNeue } from './fonts';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'PortaFlex',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${neueMontreal.variable} ${recklessNeue.variable}`}
    >
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
