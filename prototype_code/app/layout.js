import Script from 'next/script';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes move {
            0% { left: 0%; }
            20% { left: 50%; }
            40% { left: 50%; }
            60% { left: 100%; }
            80% { left: 100%; }
            100% { left: 0%; }
          }
          .animate-move {
            animation: move 4s ease-in-out infinite;
          }
        `}} />
      </head>
      <body>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}