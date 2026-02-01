import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uncode Store - Os Melhores Produtos de Tecnologia',
  description: 'Encontre notebooks, smartphones, fones, TVs e muito mais com os melhores preços. Entrega rápida e segura.',
  keywords: ['e-commerce', 'tecnologia', 'eletrônicos', 'notebook', 'smartphone', 'loja online'],
  authors: [{ name: 'Uncode Store' }],
  openGraph: {
    title: 'Uncode Store - Os Melhores Produtos de Tecnologia',
    description: 'Loja online com os melhores produtos de tecnologia',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
