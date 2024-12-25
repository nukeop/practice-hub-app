import type { Metadata } from 'next';
import { Funnel_Display } from 'next/font/google';
import type { ReactNode } from 'react';

import './index.scss';

import { Footer } from '../_components/Footer';

export const metadata: Metadata = {};

const font = Funnel_Display({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
