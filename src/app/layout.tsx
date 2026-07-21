// src/app/layout.tsx
// src/app/layout.tsx
import type { Metadata } from 'next'; // Додай рядок з type
import './globals.css';
// ... інші імпорти
import './globals.css';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Application designed for managing personal notes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}