import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GPS da Maternidade | O manual que toda mãe gostaria de ter',
  description:
    'Participe do evento GPS da Maternidade e transforme sua forma de educar com especialistas em comportamento, temperamentos e liderança familiar. Um encontro único para mães conscientes!',
  generator: 'AutoNex',
  keywords: [
    'maternidade',
    'educação infantil',
    'autoconhecimento',
    'temperamentos',
    'evento para mães',
    'GPS da maternidade',
    'Juliana Barbosa',
    'Fernando Sousa Brasil',
    'Mariella Gottardi',
    'criação com afeto',
  ],
  authors: [{ name: 'Juliana Barbosa' }],
  openGraph: {
    title: 'GPS da Maternidade | O manual que toda mãe gostaria de ter',
    description:
      'Evento presencial para mães que querem educar com afeto, estrutura e propósito. Descubra como criar filhos emocionalmente saudáveis e conscientes.',
    url: 'https://evento.4temperamentos.com.br', // substitua com o domínio real
    siteName: 'GPS da Maternidade',
    images: [
      {
        url: '/banner-oficial.png', // substitua com a URL real da imagem
        width: 1200,
        height: 630,
        alt: 'Banner do evento GPS da Maternidade',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  category: 'Educação e Desenvolvimento Pessoal',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
