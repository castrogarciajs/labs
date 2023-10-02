import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Main, Footer } from '@labs-pkg/ui';

export const metadata: Metadata = {
  title: 'Labs Company',
  description: 'Desarrolla tu sitio web con velocidad',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Main>{children}</Main>
        <Footer>
          <h2>Footer</h2>
        </Footer>
      </body>
    </html>
  );
}
