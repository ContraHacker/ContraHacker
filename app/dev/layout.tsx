import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Development',
  description: 'Development Pages'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang = 'en'>
      <body>{ children }</body>
    </html>
  );
}
