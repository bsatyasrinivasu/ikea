import React from 'react';
import Footer from '../components/Footer';
import Navigation from './navigation';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ikea-Shop affortable price</title>

      </head>

      <body>
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
