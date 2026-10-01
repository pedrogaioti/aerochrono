import type { ReactNode } from 'react';

export const metadata = {
  title: 'AeroChrono Admin',
  description: 'AeroChrono catalog administration',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
