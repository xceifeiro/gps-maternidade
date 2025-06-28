"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Calendar, MessageCircle, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-rose-50">
      {/* Header de Confirmação */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center">
              <div className="bg-white/20 p-6 rounded-full">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">🎉 Parabéns, sua vaga está garantida!</h1>
              <p className="text-xl opacity-90">Obrigada por se inscrever no evento GPS da Maternidade</p>
            </div>

            <div className="bg-black/20 backdrop-blur rounded-2xl p-8 text-left max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">📌 Guarde bem essas informações:</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Local:</h3>
                    <p className="opacity-90">Instituto SEB – A Fábrica</p>
                    <p className="opacity-90">R. Mariana Junqueira, 33 – sala 50</p>
                    <p className="opacity-90">Centro, Ribeirão Preto – SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Data e Horário:</h3>
                    <p className="opacity-90">Dia 05 de Julho às 14h</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Evento+GPS+da+Maternidade&dates=20250705T170000Z/20250705T220000Z&details=O+manual+que+toda+mãe+gostaria+de+ter+para+formar+vencedores&location=Instituto+SEB+–+A+Fábrica,+R.+Mariana+Junqueira,+Auditório,+Ribeirão+Preto+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900 shadow-xl hover:bg-purple-800 text-white px-6 py-3 rounded-full text-center"
                  >
                    🗓️ Adicionar no Google Calendar
                  </a>
                  <a
                    href="/gps-evento.ics"
                    download
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-center"
                  >
                    📅 Baixar para Agenda (iCal/Outlook)
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="py-16 md:py-24 bg-cyan-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Próximos Passos</h2>
              <p className="text-lg text-gray-700">Para garantir que você aproveite ao máximo sua experiência</p>
            </div>

            <div className="">
              <Card className="bg-green-500/10 rounded-xl border-0 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MessageCircle className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Grupo Exclusivo no WhatsApp</h3>
                  </div>
                  <p className="text-gray-600">
                    Para receber informações atualizadas e se conectar com outras mães, entre no nosso grupo exclusivo:
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700"
                  onClick = {() => {window.open("https://chat.whatsapp.com/K70Zh16LxGa5MRgkV9Z67d?mode=ac_c", '_blank') }}
                  >Entrar no Grupo do WhatsApp</Button>
                </CardContent>
              </Card>

              {/*<Card className="border-0 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <CheckCircle className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Teste de Temperamento</h3>
                  </div>
                  <p className="text-gray-600">
                    Acesse seu teste clínico digital exclusivo para descobrir seu temperamento antes do evento:
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    Fazer Teste Agora
                  </Button>
                </CardContent>
              </Card>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Contato e Suporte */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Dúvidas? Estamos aqui para você!</h2>
              <p className="text-lg text-gray-700">Nossa equipe está pronta para esclarecer qualquer questão</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5516992127953"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+55 16 99212-7953</span>
              </Link>
              <Link
                href="https://wa.me/5516991230724"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+55 16 99123-0724</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mensagem Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="relative">
              <Image
                src="/favicon.png?height=200&width=200"
                alt="Coração acolhedor"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Nos vemos em breve! 💕</h2>
              <p className="text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
                Nos vemos em breve para uma tarde inesquecível de aprendizado, conexão e transformação. Você deu um
                passo importante para construir uma maternidade mais leve, estruturada e cheia de amor.
              </p>
            </div>

            {/*<div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold">
                "A maternidade consciente começa com o primeiro passo. Você acabou de dar o seu. Parabéns!"
              </p>
              
              <p className="text-sm opacity-75 mt-4">— Equipe GPS da Maternidade</p>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                <p>
                  &copy; 2025 GPS da Maternidade | Todos os direitos reservados. Desenvolvido por{" "}
                  <a className="text-blue-700" href="https://autonextech.com.br">
                    <b>AutoNex</b>
                  </a>
                </p>
                <p className="text-sm mt-2">Pagamento seguro • Garantia de satisfação</p>
              </div>
      </footer>
    </div>
  )
}
