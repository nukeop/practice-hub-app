import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './index.scss';

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-stone-900 text-amber-100">{children}</main>
      </body>
    </html>
  );
}
