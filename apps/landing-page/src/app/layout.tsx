import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './index.scss';

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
