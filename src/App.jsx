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
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const casesData = [
    {
      title: "[Digitalfy] Leads para saúde | Meta Ads + Copy A/B",
      objective: "Aumentar a captação de leads qualificados para uma clínica de especialidades.",
      action: "Planejamento e execução de campanhas Meta Ads com segmentação por interesse e públicos lookalike, testes A/B de criativos e copy para maximizar conversão.",
      result: "Aumento de 47% nos leads qualificados e redução de 32% no CPL em 60 dias.",
      dashboardImage: dashboardImage
    },
    {
      title: "[ONG Mudes] SEO + Campanha de arrecadação | CRO + Google Ads",
      objective: "Ampliar o alcance orgânico e aumentar as doações para projetos sociais.",
      action: "Otimização SEO do site, criação de landing pages de alta conversão e campanha Google Ads voltada para públicos propensos a doar.",
      result: "Crescimento de 64% no tráfego orgânico, aumento de 38% na taxa de conversão e incremento de R$ 13 mil em arrecadações.",
      dashboardImage: dashboardImage
    },
    {
      title: "[Omnicenter] E-commerce pet | ROAS 9,3 com funil de remarketing",
      objective: "Escalar vendas mantendo alta eficiência no retorno sobre investimento.",
      action: "Estruturação de funil de remarketing multicanal, segmentações personalizadas e otimização contínua de criativos e ofertas.",
      result: "ROAS médio de 9,3 e crescimento de 57% no faturamento em 90 dias.",
      dashboardImage: dashboardImage
    },
    {
      title: "[Marketing Político] Campanha eleitoral | Tráfego pago, engajamento e captação de leads segmentados",
      objective: "Aumentar o reconhecimento e a base de apoiadores de um candidato durante o período eleitoral.",
      action: "Criação de funis de engajamento com campanhas segmentadas por região, idade e interesses políticos, além de impulsionamento de conteúdo estratégico.",
      result: "Crescimento de 220% na base de apoiadores e engajamento consistente acima da média do setor.",
      dashboardImage: dashboardImage
    },
    {
      title: "[Proteção de Marcas] Oposição no INPI | Defesa contra registro conflitante",
      objective: "Garantir a exclusividade de uso da marca 'BELA PIZZARIA', registrada desde 2021, frente a tentativa de registro da marca similar 'BELLA PIZZA' na mesma classe de serviços.",
      action: "Análise de colidência visual e fonética, identificação de risco de associação indevida e fundamentação jurídica baseada em anterioridade de registro e princípio da especialidade. Elaboração e protocolo de oposição junto ao INPI, requerendo o indeferimento do pedido conflitante.",
      result: "Defesa protocolada com fundamentação robusta, reforçando o direito de precedência e a proteção da marca do cliente contra concorrência desleal e desvio de clientela.",
      dashboardImage: dashboardImage
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % casesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + casesData.length) % casesData.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0]?.offsetWidth || 0;
      carouselRef.current.scrollTo({
        left: currentSlide * (slideWidth + 24),
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  // Initialize animations on component mount
  useEffect(() => {
    initAnimationsWithAccessibility();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={digitalfyLogoHorizontal} alt="Digitalfy" className="h-8" />
            </div>

            {/* Menu colorido inspirado no modifia.net */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors">
                Home
              </a>
              <a href="#services" className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#about" className="px-4 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors">
                Sobre
              </a>
              <a href="#cases" className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                Cases
              </a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
                Contato
              </a>
            </div>

            {/* CTA Button */}
            <Button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path d="M 100 200 Q 400 100 800 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="draw-svg-path"/>
            <path d="M 200 500 Q 500 300 900 400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="draw-svg-path-delayed"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight page-transition">
            Transforme sua
            <br />
            <span className="text-gradient-flow">
              presença digital
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Somos especialistas em marketing digital que impulsionam o crescimento do seu negócio através de estratégias inovadoras e resultados mensuráveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="btn-enhanced bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 glow-blue">
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="btn-enhanced text-lg px-8 py-4 border-2 glow-purple">
              Ver Cases de Sucesso
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Soluções que <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">impulsionam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um conjunto completo de serviços de marketing digital para acelerar o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Presença Online */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-blue">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Presença Online</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Criação de websites, otimização SEO e gestão de redes sociais para fortalecer sua marca digital.
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Desenvolvimento de websites</li>
                  <li>• Otimização SEO</li>
                  <li>• Gestão de redes sociais</li>
                  <li>• Branding digital</li>
                </ul>
              </CardContent>
            </Card>

            {/* Geração de Leads */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-blue">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Geração de Leads</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Campanhas de tráfego pago, automação de marketing e estratégias de conversão para gerar leads qualificados.
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Google Ads & Meta Ads</li>
                  <li>• Automação de marketing</li>
                  <li>• Landing pages otimizadas</li>
                  <li>• CRO e testes A/B</li>
                </ul>
              </CardContent>
            </Card>

            {/* Marketing Político */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-purple">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Marketing Político</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Estratégias digitais para campanhas eleitorais, engajamento de eleitores e construção de base de apoiadores.
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Campanhas eleitorais digitais</li>
                  <li>• Segmentação de públicos</li>
                  <li>• Gestão de crises</li>
                  <li>• Monitoramento de menções</li>
                </ul>
              </CardContent>
            </Card>

            {/* Proteção de Marcas */}
            <Card className="card-3d group hover:shadow-2xl transition-all duration-300 border-0 bg-white gpu-accelerated">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-blue">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Proteção de Marcas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Monitoramento, registro e defesa de marcas no INPI, proteção contra uso indevido e gestão de propriedade intelectual.
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2">
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
      <section id="about" className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
                Sobre a Digitalfy
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Sua parceira em <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">transformação digital</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Somos uma agência especializada em marketing digital com foco em resultados mensuráveis. Nossa missão é impulsionar o crescimento dos nossos clientes através de estratégias inovadoras e tecnologia de ponta.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Satisfação dos Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Suporte Dedicado</div>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Conheça Nossa História
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              {/* Elementos 3D decorativos */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-12 opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl transform -rotate-12 opacity-20"></div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Estratégias personalizadas para cada cliente</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Resultados mensuráveis e transparentes</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Equipe especializada e certificada</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Tecnologia de ponta e inovação</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Suporte contínuo e consultoria estratégica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Cases de Sucesso
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resultados que <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">impressionam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos nossos projetos de sucesso e o impacto que geramos para nossos clientes.
            </p>
          </div>

          <div className="relative">
            <div ref={carouselRef} className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4">
              {casesData.map((caseItem, index) => (
                <Card key={index} className="flex-shrink-0 w-80 lg:w-96 h-auto bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 leading-tight">{caseItem.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-blue-600 mb-2">Objetivo:</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{caseItem.objective}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-2">Ação:</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{caseItem.action}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-600 mb-2">Resultado:</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{caseItem.result}</p>
                      
                      {/* Dashboard de resultados */}
                      <div className="mt-4">
                        <img 
                          src={caseItem.dashboardImage} 
                          alt="Dashboard de resultados" 
                          className="w-full h-32 object-cover rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 p-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 p-0"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {casesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Pronto para <span className="text-yellow-300">transformar</span> seu negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos impulsionar o crescimento da sua empresa com estratégias de marketing digital eficazes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
              Solicitar Proposta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Agendar Consultoria
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <img src={digitalfyLogoHorizontal} alt="Digitalfy" className="h-8 mb-4 brightness-0 invert" />
              <p className="text-gray-400 mb-6 max-w-md">
                Transformamos negócios através de estratégias de marketing digital inovadoras e resultados mensuráveis.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Presença Online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Geração de Leads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Político</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Proteção de Marcas</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <a href="https://wa.me/5511999999999" className="hover:text-white transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Digitalfy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

