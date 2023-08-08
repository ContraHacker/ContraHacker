import cx from 'classnames';
import type { Metadata } from 'next';
import { AxiomWebVitals } from 'next-axiom';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ContraHacker',
  description: 'This is ContraHacker\'s personal website.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang = 'en'>
      <AxiomWebVitals />
      <body className = { cx(inter.className, 'dark:bg-zinc-900 dark:text-zinc-100') }>{ children }</body>
    </html>
  );
}
