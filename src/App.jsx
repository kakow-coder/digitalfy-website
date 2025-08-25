import digitalfyLogoHorizontal from './assets/digitalfy_logo_horizontal.png';
import dashboardImage from './assets/dashboard.png';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import {
  Globe,
  Target,
  Vote,
  Shield,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import './App.css';

function App() {

  const services = [
    {
      icon: Globe,
      title: "Presença Online",
      description: "Construímos e otimizamos sua presença digital com websites responsivos, SEO e gestão de redes sociais para maximizar sua visibilidade online.",
      features: ["Website Responsivo", "SEO Otimizado", "Gestão de Redes Sociais"]
    },
    {
      icon: Target,
      title: "Geração de Leads",
      description: "Estratégias avançadas de marketing digital para atrair, converter e nutrir leads qualificados que se tornam clientes fiéis.",
      features: ["Campanhas Segmentadas", "Automação de Marketing", "Análise de Conversão"]
    },
    {
      icon: Vote,
      title: "Marketing Político",
      description: "Campanhas digitais estratégicas para candidatos e partidos, com foco em engajamento, credibilidade e resultados eleitorais.",
      features: ["Estratégia Digital", "Gestão de Campanha", "Monitoramento de Resultados"]
    },
    {
      icon: Shield,
      title: "Proteção de Marcas",
      description: "Proteção 360° para sua marca. Deixe a burocracia do registro no INPI conosco e tenha a tranquilidade de saber que seu negócio está sendo protegido contra cópias e usos indevidos no mercado.",
      features: ["Monitoramento no INPI", "Notificações Extrajudiciais", "Acompanhamento Especializado"]
    }
  ];

  const stats = [
    { number: "260+", label: "Projetos Entregues" },
    { number: "170+", label: "Clientes Satisfeitos" },
    { number: "99%", label: "Taxa de Satisfação" },
    { number: "6", label: "Anos de Experiência" }
  ];

  const casesData = [
    {
      title: "Leads para Clínica Médica | Meta Ads + Google Ads Search",
      objective: "Aumentar a captação de leads qualificados para uma clínica de especialidades médicas.",
      action: "Planejamento estrtégico e execução de campanhas Meta Ads com segmentação por interesse e públicos lookalike, testes A/B de criativos e copy para maximizar conversão.",
      result: "Aumento de 47% nos leads qualificados e redução de 32% no CPL em 60 dias."
    },
    {
      title: "Marketing Social para ONG/OSC | SEO + Campanha de captação com Google Ad Grants + CRO",
      objective: "Ampliar o alcance orgânico e o posicionamento da marca e aumentar as arrecadações para projetos sociais.",
      action: "Otimização SEO do site, criação de landing pages de alta conversão e campanha Google Ads voltada para públicos propensos a doar.",
      result: "Crescimento de 64% no tráfego orgânico, aumento de 38% na taxa de conversão e incremento de R$ 13 mil em arrecadações em 6 meses."
    },
    {
      title: "E-commerce Loja Pet | ROAS com Google Ads Shopping + Meta Ads",
      objective: "Escalar vendas mantendo alta eficiência no retorno sobre investimento em Ads.",
      action: "Estruturação de funil de remarketing multicanal, segmentações personalizadas e otimização e testes contínuos de criativos e ofertas.",
      result: "ROAS médio de 9,3 e crescimento de 57% no faturamento em 90 dias."
    },
    {
      title: "Marketing político para campanha eleitoral de vereador | Meta Ads + Google Ads + TikTok Ads + Twitter Ads + Linkedin Ads",
      objective: "Aumentar o reconhecimento e a base de apoiadores do candidato a Deputado Federal.",
      action: "Criação de funis multicanais de engajamento com campanhas segmentadas por demografia, além de impulsionamento de conteúdo estratégico.",
      result: "Crescimento de 2.200% da base de apoiadores e engajamento consistente acima da média de 48%, comparado com o concorrente."
    },
    {
      title: "Proteção de Marca para Comércio | Defesa contra registro conflitante + Oposição no INPI ",
      objective: "Garantir a exclusividade de uso da marca 'BELA PIZZARIA', registrada desde 2021, frente a tentativa de registro da marca similar 'BELLA PIZZA' na mesma classe de serviços.",
      action: "Análise de colidência visual e fonética, identificação de risco de associação indevida e fundamentação jurídica baseada em anterioridade de registro e princípio da especialidade. Elaboração e protocolo de oposição junto ao INPI, requerendo o indeferimento do pedido conflitante.",
      result: "Defesa protocolada com fundamentação robusta, reforçando o direito de precedência e a proteção da marca do cliente contra concorrência desleal e desvio de clientela."
    }
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' }); // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' }); // Adjust scroll amount as needed
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
           <div className="flex items-center space-x-2">
             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
                 </div>
                     <span className="text-2xl font-bold text-gradient">Digitalfy</span>
                   </div>

          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
          
          <Button className="pulse-button" asChild>
            <a href="https://wa.me/5521987211586?text=Olá! Gostaria de saber mais sobre os serviços da Digitalfy." target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <Badge variant="secondary" className="mb-4">
                Agência de Marketing Digital
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Transforme Sua{' '}
                <span className="text-gradient">Presença Digital</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Soluções estratégicas de marketing digital para empresas que querem crescer e se destacar no mercado digital competitivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="pulse-button">
                  <a href="https://wa.me/5521987211586?text=Olá! Gostaria de saber mais sobre os serviços da Digitalfy." target="_blank" rel="noopener noreferrer">
                  Comece Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#cases">Nossos Cases</a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/logos/Untitled%20folder/bannercases.png"
                alt="clientes-Banner" 
                className="w-full h-96 object-cover rounded-3xl floating-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Soluções Completas para Seu{' '}
              <span className="text-gradient">Sucesso Digital</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de marketing digital para impulsionar seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Por que escolher a Digitalfy?
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Especialistas em{' '}
                <span className="text-gradient">Crescimento Digital</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Somos uma agência de marketing digital especializada em soluções estratégicas para empresas que buscam crescimento sustentável no ambiente digital. Nossa equipe combina criatividade, tecnologia e dados para entregar resultados excepcionais.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="stats-counter text-3xl lg:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <div className="w-full h-40 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center">
                    <Award className="h-16 w-16 text-secondary" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="w-full h-40 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-secondary" />
                  </div>
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares no digital.
          </p>
          <Button size="lg" variant="secondary" className="pulse-button" asChild>
            <a href="https://wa.me/5521987211586text=Olá! Gostaria de solicitar uma proposta da Digitalfy." target="_blank" rel="noopener noreferrer">
              Fale com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Cases Section (Carousel) */}
        <section id="cases" className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <Badge variant="secondary" className="mb-4">
        Nossos Cases
      </Badge>
      <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
        Resultados que <span className="text-gradient">Impulsionam</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Confira alguns dos nossos projetos de sucesso e o impacto que geramos para nossos clientes.
      </p>
    </div>

    {/* O container principal do carrossel precisa ser 'relative' */}
    <div className="relative carousel-container">
      
      {/* O wrapper dos cards, onde a rolagem acontece */}
      <div ref={carouselRef} 
  className="carousel-wrapper flex items-stretch overflow-x-auto py-4 snap-x snap-mandatory">
  {casesData.map((caseItem, index) => (
    <div key={index} className="carousel-item-wrapper w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 snap-start px-2">
      <Card className="case-card h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl">{caseItem.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex-grow">
          <div>
            <h3 className="font-semibold text-primary mb-1">Objetivo:</h3>
            <p className="text-muted-foreground text-sm">{caseItem.objective}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-1">Ação:</h3>
            <p className="text-muted-foreground text-sm">{caseItem.action}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-1">Resultado:</h3>
            <p className="text-muted-foreground text-sm">{caseItem.result}</p>
          </div>
    
        </CardContent>
      </Card>
    </div>
  ))}
</div>

      {/* BOTÕES DE NAVEGAÇÃO (POSICIONADOS CORRETAMENTE) */}
      {/* Eles ficam DENTRO do 'carousel-container', mas FORA do 'carousel-wrapper' */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 left-2 z-10" // Classes para posicionar
        onClick={scrollLeft}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 right-2 z-10" // Classes para posicionar
        onClick={scrollRight}
      >
        <ArrowRight className="h-6 w-6" />
      </Button>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/logos/Untitled%20folder/logohorizo3.png" alt="Digitalfy Logo" className="h-14" />
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transformamos sua presença digital com estratégias inovadoras e resultados comprovados. Consolide sua presença no mundo digital.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/digitalfy.br/?hl=pt" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="https://wa.me/5521987211586text=Olá! Gostaria de falar com a Digitalfy." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    WhatsApp: +55 (21) 987 211 586
                  </a>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  São Gonçalo, RJ
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2019 Digitalfy. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
