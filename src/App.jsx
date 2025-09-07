import digitalfyLogoHorizontal from './assets/digitalfy_logo_horizontal.png';
import dashboardImage from './assets/dashboard.png';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import {
  Globe,
  Target,
  Users,
  Shield,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ArrowLeft
} from 'lucide-react';
import { initAnimationsWithAccessibility } from './animations';
import './App.css';

function App() {
  const casesData = [
    {
      category: "Geração de Leads",
      title: "Leads para saúde | Meta Ads + Copy A/B",
      description: "Aumentamos a captação de leads qualificados para uma clínica de especialidades com campanhas Meta Ads e testes A/B.",
      metrics: [
        { value: "47%", label: "Aumento de Leads Qualificados" },
        { value: "32%", label: "Redução no CPL" }
      ],
      dashboardImage: dashboardImage
    },
    {
      category: "SEO & Conteúdo",
      title: "SEO + Campanha de arrecadação | CRO + Google Ads",
      description: "Ampliamos o alcance orgânico e aumentamos as doações para projetos sociais com otimização SEO e campanhas de arrecadação.",
      metrics: [
        { value: "64%", label: "Crescimento Tráfego Orgânico" },
        { value: "38%", label: "Aumento Taxa de Conversão" },
        { value: "R$ 13 mil", label: "Incremento em Arrecadações" }
      ],
      dashboardImage: dashboardImage
    },
    {
      category: "E-commerce",
      title: "E-commerce pet | ROAS 9,3 com funil de remarketing",
      description: "Escalamos vendas mantendo alta eficiência no retorno sobre investimento com funil de remarketing multicanal.",
      metrics: [
        { value: "9,3", label: "ROAS Médio" },
        { value: "57%", label: "Crescimento Faturamento" }
      ],
      dashboardImage: dashboardImage
    },
    {
      category: "Marketing Político",
      title: "Campanha eleitoral | Tráfego pago, engajamento e captação de leads",
      description: "Aumentamos o reconhecimento e a base de apoiadores de um candidato com campanhas segmentadas e impulsionamento de conteúdo.",
      metrics: [
        { value: "220%", label: "Crescimento Base Apoiadores" },
        { value: "Acima da Média", label: "Engajamento Consistente" }
      ],
      dashboardImage: dashboardImage
    },
    {
      category: "Proteção de Marcas",
      title: "Oposição no INPI | Defesa contra registro conflitante",
      description: "Garantimos a exclusividade de uso da marca 'BELA PIZZARIA' contra tentativa de registro similar.",
      metrics: [
        { value: "100%", label: "Marca Protegida" },
        { value: "Sucesso", label: "Oposição Protocolada" }
      ],
      dashboardImage: dashboardImage
    }
  ];

  useEffect(() => {
    initAnimationsWithAccessibility();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-text-medium">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-white/90 backdrop-blur-md border-b border-border-light">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={digitalfyLogoHorizontal} alt="Digitalfy" className="h-8" />
            </div>

            {/* Menu sóbrio inspirado no modifia.net */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="menu-item text-text-dark hover:text-primary-blue transition-colors">
                Home
              </a>
              <a href="#services" className="menu-item text-text-dark hover:text-primary-blue transition-colors">
                Serviços
              </a>
              <a href="#about" className="menu-item text-text-dark hover:text-primary-blue transition-colors">
                Sobre
              </a>
              <a href="#cases" className="menu-item text-text-dark hover:text-primary-blue transition-colors">
                Cases
              </a>
              <a href="#contact" className="menu-item text-text-dark hover:text-primary-blue transition-colors">
                Contato
              </a>
            </div>

            {/* CTA Button */}
            <Button className="hidden md:block btn-enhanced bg-primary-blue text-white hover:bg-primary-green">
              Fale Conosco
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Inspirado no modifia.net */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 hero-background">
        {/* Background com elementos 3D */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Elementos geométricos 3D */}
          <div className="geometric-shape geometric-shape-1 floating-3d"></div>
          <div className="geometric-shape geometric-shape-2 floating-3d-delayed"></div>
          <div className="geometric-shape geometric-shape-3 floating-3d"></div>
          
          {/* Linhas conectoras */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-blue)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="var(--primary-green)" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path d="M 100 200 Q 400 100 800 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="draw-svg-path"/>
            <path d="M 200 500 Q 500 300 900 400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="draw-svg-path-delayed"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl lg:text-8xl font-bold text-text-dark mb-8 leading-tight page-transition">
            Transforme sua
            <br />
            <span className="text-gradient-flow">
              presença digital
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-text-medium mb-12 max-w-4xl mx-auto leading-relaxed">
            Somos especialistas em marketing digital que impulsionam o crescimento do seu negócio através de estratégias inovadoras e resultados mensuráveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="btn-enhanced bg-primary-blue text-white text-lg px-8 py-4">
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="btn-enhanced text-lg px-8 py-4 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
              Ver Cases de Sucesso
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-light rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-light rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20 bg-background-light section-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-text-dark mb-6">
              Soluções que <span className="text-gradient-flow">impulsionam</span>
            </h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              Oferecemos um conjunto completo de serviços de marketing digital para acelerar o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Presença Online */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-background-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 icon-gradient bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-text-dark">Presença Online</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-text-medium mb-4">
                  Criação de websites, otimização SEO e gestão de redes sociais para fortalecer sua marca digital.
                </CardDescription>
                <ul className="text-sm text-text-light space-y-2">
                  <li>• Desenvolvimento de websites</li>
                  <li>• Otimização SEO</li>
                  <li>• Gestão de redes sociais</li>
                  <li>• Branding digital</li>
                </ul>
              </CardContent>
            </Card>

            {/* Geração de Leads */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-background-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 icon-gradient bg-primary-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-text-dark">Geração de Leads</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-text-medium mb-4">
                  Campanhas de tráfego pago, automação de marketing e estratégias de conversão para gerar leads qualificados.
                </CardDescription>
                <ul className="text-sm text-text-light space-y-2">
                  <li>• Google Ads & Meta Ads</li>
                  <li>• Automação de marketing</li>
                  <li>• Landing pages otimizadas</li>
                  <li>• CRO e testes A/B</li>
                </ul>
              </CardContent>
            </Card>

            {/* Marketing Político */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-background-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 icon-gradient bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-text-dark">Marketing Político</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-text-medium mb-4">
                  Estratégias digitais para campanhas eleitorais, engajamento de eleitores e construção de base de apoiadores.
                </CardDescription>
                <ul className="text-sm text-text-light space-y-2">
                  <li>• Campanhas eleitorais digitais</li>
                  <li>• Segmentação de públicos</li>
                  <li>• Gestão de crises</li>
                  <li>• Monitoramento de menções</li>
                </ul>
              </CardContent>
            </Card>

            {/* Proteção de Marcas */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-background-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 icon-gradient bg-primary-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-text-dark">Proteção de Marcas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-text-medium mb-4">
                  Monitoramento, registro e defesa de marcas no INPI, proteção contra uso indevido e gestão de propriedade intelectual.
                </CardDescription>
                <ul className="text-sm text-text-light space-y-2">
                  <li>• Registro de marcas INPI</li>
                  <li>• Monitoramento de infrações</li>
                  <li>• Oposições e nulidades</li>
                  <li>• Consultoria jurídica</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-background-white section-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
                Sobre a Digitalfy
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-text-dark mb-6">
                Sua parceira em <span className="text-gradient-flow">transformação digital</span>
              </h2>
              <p className="text-xl text-text-medium mb-8 leading-relaxed">
                Somos uma agência especializada em marketing digital com foco em resultados mensuráveis. Nossa missão é impulsionar o crescimento dos nossos clientes através de estratégias inovadoras e tecnologia de ponta.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">150+</div>
                  <div className="text-text-medium">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-green mb-2">98%</div>
                  <div className="text-text-medium">Satisfação dos Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">5+</div>
                  <div className="text-text-medium">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-green mb-2">24/7</div>
                  <div className="text-text-medium">Suporte Dedicado</div>
                </div>
              </div>

              <Button size="lg" className="btn-enhanced bg-primary-blue text-white text-lg px-8 py-4">
                Conheça Nossa História
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              {/* Elementos 3D decorativos */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary-blue to-primary-green rounded-3xl transform rotate-12 opacity-20"></div>

              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary-green to-primary-blue rounded-full opacity-20"></div>

              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Equipe Digitalfy" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section - Novo estilo */}
      <section id="cases" className="min-h-screen py-20 bg-background-light section-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">Nossos Cases</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-text-dark mb-6 heading-enhanced">
              Resultados que <span className="text-gradient-flow">falam por si</span>
            </h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              Veja como ajudamos nossos clientes a alcançar seus objetivos com estratégias de marketing digital.
            </p>
          </div>

          <div className="cases-grid">
            {casesData.map((caseItem, index) => (
              <Card key={index} className="case-card section-reveal">
                <CardContent className="p-0">
                  <div className="case-category">{caseItem.category}</div>
                  <h3 className="case-title">{caseItem.title}</h3>
                  <p className="case-description">{caseItem.description}</p>
                  
                  <div className="case-metrics">
                    {caseItem.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="case-metric">
                        <div className="case-metric-value">{metric.value}</div>
                        <div className="case-metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {caseItem.dashboardImage && (
                    <div className="mt-6">
                      <img 
                        src={caseItem.dashboardImage} 
                        alt="Dashboard de resultados" 
                        className="w-full h-auto object-cover rounded-lg border border-border-light shadow-sm"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary-blue text-white text-center section-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 heading-enhanced">
            Pronto para impulsionar seu negócio?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-background-white">
            Entre em contato conosco e descubra como a Digitalfy pode transformar sua presença digital e gerar resultados reais.
          </p>
          <Button size="lg" className="btn-enhanced bg-background-white text-primary-blue hover:bg-background-lighter text-lg px-8 py-4">
            Fale Conosco Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-dark text-text-light py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={digitalfyLogoHorizontal} alt="Digitalfy" className="h-8 mb-4" />
            <p className="text-sm mb-4">
              Transformando sua presença digital em resultados mensuráveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-light hover:text-background-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-light hover:text-background-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-background-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-background-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-background-white transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-background-white transition-colors">Sobre</a></li>
              <li><a href="#cases" className="hover:text-background-white transition-colors">Cases</a></li>
              <li><a href="#contact" className="hover:text-background-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-background-white mb-4">Contato</h3>
            <p className="text-sm mb-2 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              +55 11 99999-9999
            </p>
            <p className="text-sm mb-2 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              São Paulo, SP - Brasil
            </p>
            <p className="text-sm flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              www.digitalfy.com.br
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-text-light mt-8">
          &copy; {new Date().getFullYear()} Digitalfy. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;


