"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MapPin, Calendar, Users, Award, Heart, Star, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElements } from "@/components/floating-elements"

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="bg-gradient-to-r from-red-400 to-red-500 text-white py-6 px-8 rounded-xl shadow-lg hover-glow">
      <div className="text-center space-y-4">
        <p className="text-lg font-bold uppercase tracking-wide animate-pulse">⏰ Inscrições encerram em:</p>
        <div className="flex justify-center gap-6">
          {[
            { label: "Dias", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Seg", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 rounded-lg px-4 py-3 min-w-[60px] hover:bg-white/30 transition-colors duration-300">
                <span className="text-3xl font-bold">{item.value.toString().padStart(2, "0")}</span>
              </div>
              <p className="text-sm mt-2 opacity-90">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-lg font-semibold">Não perca essa oportunidade única!</p>
      </div>
    </div>
  )
}

export default function LandingPage() {
  // Data do evento: 05 de julho de 2024 às 14h
  const eventDate = new Date("2024-07-05T14:00:00")
  const eventUrl = process.env.NEXT_PUBLIC_EVENT_URL

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mother-children-embrace.png"
            alt="Mãe acolhendo filhos com carinho"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Blur Layer sobre a imagem */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/20" />

          {/* Overlay gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        {/* Floating Elements */}
        <FloatingElements />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <AnimatedSection animation="fadeInUp">
              <div className="pt-10">
              <Badge className="bg-gradient-to-r from-pink-600 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-bold hover-glow flex items-center gap-2 mx-auto w-fit">
                <span className="hidden sm:inline">EVENTO PRESENCIAL • 05 DE JULHO • RIBEIRÃO PRETO</span>
                <span className="sm:hidden">EVENTO • 05/07 • RIBEIRÃO PRETO</span>
              </Badge>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  <span className="text-yellow-300">GPS</span> da Maternidade
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-rose-200 font-semibold drop-shadow-lg px-4 sm:px-0">
                  O manual que toda mãe gostaria de ter para formar vencedores
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md px-4 sm:px-0">
                  Prepare-se para transformar sua maternidade com conhecimento, afeto e estratégia — guiada por
                  especialistas que já impactaram milhares de famílias.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="flex flex-col gap-4 justify-center items-center pb-6 sm:pb-8 px-4 sm:px-0">
                <div className="text-center space-y-2">
                  <p className="text-white/80 text-sm sm:text-md text-green-100 pb-2 sm:pb-4">
                    <span className="hidden sm:inline">Evento + Coffee Break + Certificado + Teste Digital</span>
                    <span className="sm:hidden">Evento + Bônus Exclusivos</span>
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-pink-700 hover:to-pink-800 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover-glow backdrop-blur border-2 border-white/20 w-full sm:w-auto max-w-sm sm:max-w-none"
                  onClick={() => {
                    document.getElementById('ingresso')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span className="hidden sm:inline">🎟️ GARANTIR MINHA VAGA NO EVENTO</span>
                  <span className="sm:hidden">🎟️ GARANTIR VAGA</span>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={300}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto shadow-2xl mx-4 sm:mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/80">Data</p>
                      <p className="font-bold text-white text-sm sm:text-base">05 de Julho</p>
                      <p className="text-xs text-white/70">Sexta-feira • 14h</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/80">Local</p>
                      <p className="font-bold text-white text-sm sm:text-base">Instituto SEB</p>
                      <p className="text-xs text-white/70">Ribeirão Preto - SP</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/80">Vagas</p>
                      <p className="font-bold text-red-300 text-sm sm:text-base">LIMITADAS</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Scroll indicator */}
            <AnimatedSection animation="fadeIn" delay={600}>
              <div className="pt-6 sm:pt-8 text-white/60 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs sm:text-sm">Role para saber mais</span>
                  <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Por que esse evento é para você */}
      <section className="py-16 md:py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <AnimatedSection animation="fadeInUp">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Por que esse evento é para você?</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Você já se sentiu perdida na criação dos filhos? Queria um manual para entender cada fase, lidar com
                  birras, dúvidas e ainda formar adultos conscientes, responsáveis e amorosos?
                  <strong className="text-rose-600"> Então, esse evento é seu ponto de virada.</strong>
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Heart className="h-8 w-8 text-rose-500" />,
                  title: "Aprenda a lidar com os comportamentos infantis",
                  description: "Com mais leveza e compreensão",
                },
                {
                  icon: <Star className="h-8 w-8 text-rose-500" />,
                  title: "Descubra o temperamento do seu filho",
                  description: "Com teste clínico exclusivo",
                },
                {
                  icon: <Award className="h-8 w-8 text-rose-500" />,
                  title: "Conheça métodos educativos eficazes",
                  description: "Que funcionam sem punições",
                },
                {
                  icon: <Users className="h-8 w-8 text-rose-500" />,
                  title: "Conecte-se com outras mães",
                  description: "E vivencie um encontro transformador",
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                  <Card className="border-0 shadow-lg w-full bg-purple-200 h-full rounded-xl hover:shadow-xl transition-all duration-300 hover-lift group">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introdução dos Palestrantes */}
      <section className="py-16 md:py-8 bg-gradient-to-b from-purple-100 to-purple-100">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Conheça seus mentores</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Especialistas que já transformaram milhares de vidas
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Palestrante 1 - Juliana Barbosa */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-rose-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="relative order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift group max-w-md mx-auto lg:max-w-none">
                    <Image
                      src="/4.png?height=500&width=500"
                      alt="Juliana Barbosa - Terapeuta e Mentora"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Juliana Barbosa</h3>
                    <p className="text-lg sm:text-xl text-rose-600 font-semibold">Terapeuta, Mentora & Idealizadora</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                    <p className="text-base sm:text-lg">
                      Fundadora do <strong>Instituto A Ciência dos Temperamentos</strong>, Juliana já impactou mais de{" "}
                      <strong>10 mil pessoas</strong> por meio de formações, mentorias e vivências que unem{" "}
                      <em>ciência, sensibilidade e humanidade</em>.
                    </p>
                    <p>
                      É autora do livro <strong>"Os Temperamentos"</strong>, que teve mais de{" "}
                      <strong>1.000 cópias vendidas organicamente</strong> nos primeiros meses. A obra ajuda famílias e
                      educadores a compreenderem os comportamentos infantis e a construírem{" "}
                      <em>relações mais saudáveis</em>.
                    </p>
                    <p>
                      <strong>Mãe do Pedro e da Ana</strong>, sua missão é transformar vidas por meio do{" "}
                      <strong>autoconhecimento</strong> e da <strong>educação consciente</strong>, promovendo uma
                      criação com <em>afeto, estrutura, respeito e limites</em> — sem violência ou punições.
                    </p>
                    <p className="hidden sm:block">
                      Seu <strong>novo livro</strong>, ainda inédito no Brasil, apresenta práticas educativas baseadas
                      nas <em>habilidades naturais de cada fase da infância</em>, estimulando o desenvolvimento de
                      crianças mais <strong>conscientes, responsáveis e amorosas</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                    <Badge className="bg-rose-100 text-rose-700 px-2 sm:px-3 py-1 hover:bg-black/10 text-xs sm:text-sm">
                      Ciência dos Temperamentos
                    </Badge>
                    <Badge className="bg-rose-100 text-rose-700 px-2 sm:px-3 py-1 hover:bg-black/10 text-xs sm:text-sm">
                      Educação Consciente
                    </Badge>
                    <Badge className="bg-rose-100 text-rose-700 px-2 sm:px-3 py-1 hover:bg-black/10 text-xs sm:text-sm">
                      Autora "Os Temperamentos"
                    </Badge>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Palestrante 2 - Fernando Sousa Brasil */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInRight" className="lg:order-2">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift group">
                    <Image
                      src="/6.png?height=500&width=500"
                      alt="Fernando Sousa Brasil - Mentor e Autor"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInLeft" delay={200} className="lg:order-1">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Fernando Sousa Brasil</h3>
                    <p className="text-xl text-blue-600 font-semibold">Mentor, Empresário & Palestrante</p>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      <strong>Administrador e consultor de empresas</strong>, Fernando é especialista em{" "}
                      <strong>liderança</strong> e <strong>comportamento humano</strong>, reconhecido por sua capacidade
                      de provocar transformações profundas.
                    </p>
                    <p>
                      Fundador do <strong>Movimento A Virada</strong> e do <strong>Conselho Secreto Club</strong>, já
                      impactou <strong>milhares de empresários</strong> em todo o Brasil com uma metodologia{" "}
                      <em>emocional, estratégica e provocadora</em>.
                    </p>
                    <p>
                      É autor do livro <strong>“A Virada – Do Impossível à Realidade”</strong>, e uma{" "}
                      <strong>referência nacional</strong> na formação de líderes com{" "}
                      <em>identidade, propósito e resultados concretos</em>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-blue-100 text-blue-700 px-3 py-1 hover:bg-black/10">Liderança</Badge>
                    <Badge className="bg-blue-100 text-blue-700 px-3 py-1 hover:bg-black/10">
                      Comportamento Humano
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 px-3 py-1 hover:bg-black/10">Autor "A Virada"</Badge>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Palestrante 3 - Mariella Gottardi */}
      <section className="py-16 md:py-24 bg-gradient-to-b to-purple-200 from-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift group">
                    <Image
                      src="/5.png?height=500&width=500"
                      alt="Mariella Gottardi - Especialista em Análise Facial"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Mariella Gottardi</h3>
                    <p className="text-xl text-purple-600 font-semibold">
                      Dentista, Mentora & Criadora de Metodologias Exclusivas
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Com <strong>26 anos de experiência</strong>, Mariella é <strong>cirurgiã-dentista</strong>, com{" "}
                      <strong>mestrado e doutorado pela USP</strong>. Ao longo de sua trajetória, atendeu{" "}
                      <strong>milhares de pacientes</strong> e formou profissionais, sempre unindo{" "}
                      <em>ciência, sensibilidade e propósito</em>.
                    </p>
                    <p>
                      É idealizadora da <strong>Análise Facial dos Temperamentos</strong> e da{" "}
                      <strong>Metodologia da Tríade</strong> — ferramentas inovadoras que integram{" "}
                      <em>autoconhecimento, comportamento e saúde emocional</em>.
                    </p>
                    <p>
                      Criadora de <strong>formações, mentorias e dossiês exclusivos</strong>, Mariella ajuda pessoas e
                      empresas a reconhecerem seus talentos, fortalecerem a autoestima e desenvolverem{" "}
                      <em>relações mais conscientes e equilibradas</em>.
                    </p>
                    <p>
                      Seu trabalho promove uma <strong>visão transformadora</strong>, baseada em{" "}
                      <em>respeito, estrutura, afeto e autenticidade</em> — impactando vidas{" "}
                      <strong>dentro e fora dos consultórios</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-purple-100 text-purple-700 px-3 py-1 hover:bg-black/10">Análise Facial</Badge>
                    <Badge className="bg-purple-100 text-purple-700 px-3 py-1 hover:bg-black/10">Temperamentos</Badge>
                    <Badge className="bg-purple-100 text-purple-700 px-3 py-1 hover:bg-black/10">
                      Desenvolvimento Humano
                    </Badge>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque - Teste Clínico Digital */}
      <section className="py-16 md:py-24 bg-gradient-to-r to-pink-500 via-red-300 from-purple-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-yellow-400 text-gray-900 px-4 py-2 text-sm font-bold">
                      🎁 BÔNUS EXCLUSIVO INCLUSO
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                      Teste Clínico Digital dos Temperamentos
                    </h2>
                    <p className="text-xl opacity-90 leading-relaxed">
                      Descubra seu temperamento e o do seu filho com nossa avaliação profissional exclusiva
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-black/20 backdrop-blur rounded-xl shadow-lg p-6 space-y-4">
                      <h3 className="text-2xl font-semibold">O que você vai descobrir:</h3>
                      <div className="space-y-3">
                        {[
                          "Seu perfil comportamental completo",
                          "Como seu temperamento influencia sua maternidade",
                          "O temperamento do seu filho e como lidar com ele",
                          "Estratégias personalizadas de educação",
                          "Pontos fortes e desafios da sua personalidade",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                            <span className="opacity-90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-xl p-6 border-4 border-yellow-300 shadow-2xl">
                      <div className="text-center space-y-4">
                        <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                          <Award className="h-8 w-8 text-gray-900" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold">
                            Valor do Teste: <s>R$ 279,00</s>
                          </p>
                          <p className="text-base opacity-80">Incluso automaticamente com a compra do seu ingresso</p>
                        </div>
                        <div className="bg-white/30 rounded-lg p-3">
                          <p className="text-sm font-bold">✅ Comprou o ingresso = Recebe o teste!</p>
                        </div>
                      </div>
                      <p className="text-xs opacity-70 mt-4 text-center">
                        *Teste desenvolvido pela Juliana Barbosa, baseado na Ciência dos Temperamentos
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="relative">
                  <div className="bg-black/20 backdrop-blur rounded-2xl p-8 shadow-2xl hover-lift">
                    <div className="space-y-6">
                      <div className="text-center space-y-4">
                        <div className="bg-white/20 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                          <Users className="h-12 w-12 text-yellow-300" />
                        </div>
                        <h3 className="text-2xl font-bold">Os 4 Temperamentos</h3>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            name: "Sanguíneo",
                            color: "bg-red-500",
                            description: "Extrovertido, otimista e sociável. Ama diversão e conexões.",
                          },
                          {
                            name: "Colérico",
                            color: "bg-yellow-500",
                            description: "Líder natural, determinado e focado em resultados.",
                          },
                          {
                            name: "Melancólico",
                            color: "bg-blue-500",
                            description: "Perfeccionista, analítico e profundamente emocional.",
                          },
                          {
                            name: "Fleumático",
                            color: "bg-green-500",
                            description: "Pacífico, estável e busca harmonia em tudo.",
                          },
                        ].map((temperament, index) => (
                          <div key={index} className="flex gap-4 items-start">
                            <div className={`${temperament.color} w-4 h-4 rounded-full flex-shrink-0 mt-1`}></div>
                            <div>
                              <h4 className="font-semibold text-yellow-300">{temperament.name}</h4>
                              <p className="text-sm opacity-80">{temperament.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="text-center pt-6 border-t border-white/20">
                        <div className="bg-yellow-400/30 backdrop-blur rounded-xl p-4 border border-yellow-300/50">
                          <p className="text-lg font-bold text-yellow-300">
                            🎯 Compre seu ingresso e receba o teste como BÔNUS EXCLUSIVO!
                          </p>
                          <p className="text-sm opacity-90 mt-2">
                            Acesso liberado automaticamente após a confirmação do pagamento
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus e Experiências */}
      <section className="py-16 md:py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Bônus Exclusivos Inclusos</h2>
                <p className="text-lg text-gray-700">
                  Experiências especiais que tornam seu investimento ainda mais valioso
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Users className="h-12 w-12 text-blue-500" />,
                  title: "Coffee Break Especial",
                  description: "Momento único e especial entre mães com espaço para conexões genuínas",
                },
                {
                  icon: <Award className="h-12 w-12 text-purple-500" />,
                  title: "Certificado de Participação",
                  description: "Documento oficial digital comprovando sua participação no evento",
                },
              ].map((bonus, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                  <div className="text-center space-y-4 p-6 bg-black/10 rounded-xl border shadow-lg border-gray-300 hover:border-rose-200 transition-all duration-300 hover-lift group">
                    <div className="flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {bonus.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{bonus.title}</h3>
                    <p className="text-gray-600">{bonus.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Compra Persuasiva */}
      <section id="ingresso" className="py-12 sm:py-16 md:py-24 bg-gradient-to-r to-rose-400 from-purple-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header da Seção */}
            <AnimatedSection animation="fadeInUp">
              <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
                <Badge className="bg-yellow-400 text-gray-900 hover:bg-black/20 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-bold">
                  OFERTA ESPECIAL POR TEMPO LIMITADO
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4 sm:px-0">
                  Transforme sua Maternidade
                  <span className="block text-yellow-300">HOJE MESMO!</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                  Mais de <strong>R$ 900,00 em valor</strong> por apenas <strong>R$ 299,90</strong>. Uma oportunidade
                  única que pode mudar sua vida e a do seu filho para sempre.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Lado Esquerdo - Benefícios */}
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="space-y-6 sm:space-y-8">
                  {/* O que você vai receber */}
                  <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-300">
                      ✨ O que você vai receber:
                    </h3>

                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          item: "Evento Presencial Completo (4h)",
                          value: "R$ 497,00",
                          description: "Com 3 especialistas renomados",
                        },
                        {
                          item: "Teste Digital dos Temperamentos",
                          value: "R$ 279,00",
                          description: "Análise completa dos temperamentos",
                        },
                        {
                          item: "Coffee Break Exclusivo",
                          value: "R$ 89,00",
                          description: "Networking com outras mães",
                        },
                        {
                          item: "Acesso ao Grupo VIP",
                          value: "R$ 47,00",
                          description: "Comunidade exclusiva de mães",
                        },
                      ].map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-black/20 rounded-xl border border-white/10"
                        >
                          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0 mt-1" />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-2">
                              <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">
                                {benefit.item}
                              </h4>
                              <span className="text-yellow-300 font-bold text-xs sm:text-sm flex-shrink-0">
                                <s>{benefit.value}</s>
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-white/80">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                        <span className="text-base sm:text-lg font-semibold">Valor Total:</span>
                        <div className="text-right">
                          <div className="text-lg sm:text-2xl font-bold text-red-300 line-through">R$ 936,00</div>
                          <div className="text-2xl sm:text-3xl font-bold text-yellow-300">R$ 299,90</div>
                          <div className="text-xs sm:text-sm text-green-300">Economia de R$ 636,10!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Lado Direito - Compra */}
              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="lg:sticky lg:top-8">
                  {/* Card Principal de Compra */}
                  <div className="bg-black/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-yellow-400/50 shadow-2xl">
                    {/* Informações do Evento */}
                    <div className="space-y-4 mb-6 sm:mb-8">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="text-center p-3 sm:p-4 bg-white/10 rounded-xl">
                          <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 mx-auto mb-2" />
                          <div className="text-xs sm:text-sm text-white/80">Data</div>
                          <div className="font-bold text-sm sm:text-base">05 de Julho</div>
                          <div className="text-xs text-white/70">Sábado • 14h</div>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-white/10 rounded-xl">
                          <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 mx-auto mb-2" />
                          <div className="text-xs sm:text-sm text-white/80">Local</div>
                          <div className="font-bold text-sm sm:text-base">Instituto SEB</div>
                          <div className="text-xs text-white/70">Ribeirão Preto</div>
                        </div>
                      </div>
                    </div>

                    {/* Preço */}
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="text-xs sm:text-sm text-white/80 mb-2">Investimento Hoje:</div>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-300 mb-2">
                        R$ 299<sub className="text-lg sm:text-xl lg:text-2xl">,90</sub>
                      </div>
                      <div className="text-base sm:text-lg text-white/90">ou 12x de R$ 29,90</div>
                      <div className="text-xs sm:text-sm text-green-300 mt-2">Cartão • Pix • Boleto</div>
                    </div>

                    {/* Botão Principal */}
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-yellow-300 mb-4"
                      onClick={() => {window.open("https://sun.eduzz.com/Z0B51E36WA", '_blank') }}
                    >
                      <span className="hidden sm:inline">🎟️ GARANTIR MINHA VAGA AGORA</span>
                      <span className="sm:hidden">🎟️ GARANTIR VAGA</span>
                    </Button>

                    {/* Segurança */}
                    <div className="mt-4 sm:mt-6 text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                        <span>Pagamento 100% Seguro</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                        <span className="hidden sm:inline">Confirmação Imediata por WhatsApp</span>
                        <span className="sm:hidden">Confirmação Imediata</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                        <span>Acesso ao Grupo Exclusivo</span>
                      </div>
                    </div>
                  </div>

                  {/* Urgência Final */}
                  <div className="mt-4 sm:mt-6 text-center">
                    <div className="bg-purple-900/30 border border-red-400/50 rounded-xl p-3 sm:p-4">
                      <div className="text-red-300 font-bold text-xs sm:text-sm mb-1">⚠️ ATENÇÃO: VAGAS LIMITADAS</div>
                      <div className="text-white/90 text-xs">
                        Devido ao espaço físico limitado, não temos muitas vagas disponíveis. Não perca esta
                        oportunidade única!
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Dúvidas? Estamos aqui para ajudar!</h3>
                <p className="text-gray-300">Nossa equipe está pronta para esclarecer qualquer questão</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://wa.me/5516992127953"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover-glow"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>+55 16 99212-7953</span>
                </Link>
                <Link
                  href="https://wa.me/5516991230724"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover-glow"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>+55 16 99123-0724</span>
                </Link>
              </div>

              <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                <p>
                  &copy; 2025 GPS da Maternidade | Todos os direitos reservados. Desenvolvido por{" "}
                  <a className="text-blue-700" href="https://autonextech.com.br">
                    <b>AutoNex</b>
                  </a>
                </p>
                <p className="text-sm mt-2">Pagamento seguro • Garantia de satisfação</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
