// Import necessary dependencies and types
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/ui/styles/globals.css';
import { Header } from '@/app/ui/components/shared/Header';
import { Footer } from '@/app/ui/components/shared/Footer';

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

/**
 * RootLayout Component
 *
 * A React component serving as the root layout for the application.
 *
 * @component
 * @param {Object} props - Props for the RootLayout component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} - JSX element representing the RootLayout component.
 */
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cinergia">
      <body className={`${inter.className} antialiased`}>
        {/* Header with navigation bar */}
        <Header />

        {/* Main content */}
        {children}

        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
