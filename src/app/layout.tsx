// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
    title: 'memórias | L&M',
    description: 'Um lugar especial para nossas memórias.',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        {/*
        Fundo claro e neutro (slate-50) aplicado diretamente aqui.
        A "mágica" do Liquid Glass acontecerá nos componentes, sobre este fundo estável.
      */}
        <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}>
        {children}
        </body>
        </html>
    );
}