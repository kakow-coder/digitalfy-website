import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Zap, Eye, Target, BarChart3 } from 'lucide-react';
import './App.css';

function App() {
  const portfolioItems = [
    {
      title: "E-commerce de Moda",
      category: "Tráfego Pago + Site",
      description: "Loja online completa com campanhas de Google Ads e Meta Ads",
      metrics: "↗ 280% vendas online"
    },
    {
      title: "Clínica Médica",
      category: "Marketing Digital", 
      description: "Estratégia completa de marketing digital para captação de pacientes",
      metrics: "↗ 350% agendamentos"
    },
    {
      title: "Restaurante Gourmet",
      category: "Redes Sociais + Site",
      description: "Gestão de redes sociais e site institucional para delivery",
      metrics: "↗ 200% pedidos online"
    },
    {
      title: "Consultoria Empresarial",
      category: "Tráfego Pago",
      description: "Campanhas segmentadas para geração de leads B2B qualificados",
      metrics: "↗ 400% leads qualificados"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">Digitalfy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Início</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Serviços</a>
            <a href="#cases" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Cases</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contato</a>
          </nav>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 border-gray-300 text-gray-700">
              Agência de Marketing Digital
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Transformamos
              <span className="block text-gray-400 italic font-light">sua presença</span>
              digital
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Criamos estratégias digitais que conectam sua marca ao público certo, 
              gerando resultados reais e crescimento sustentável para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6">
                Ver Nossos Cases
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" className="text-lg px-8 py-6 text-gray-700 hover:text-gray-900">
                <Play className="mr-2 w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24h</div>
              <div className="text-gray-600 font-medium">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Soluções completas em marketing digital para impulsionar seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                  <Target className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-gray-900">Tráfego Pago</CardTitle>
                <CardDescription className="text-gray-600">
                  Campanhas estratégicas no Google Ads e Meta Ads para gerar leads qualificados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Google Ads e Meta Ads</li>
                  <li>• Segmentação avançada</li>
                  <li>• Otimização de conversões</li>
                  <li>• Relatórios detalhados</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-gray-900">Criação de Sites</CardTitle>
                <CardDescription className="text-gray-600">
                  Sites profissionais, responsivos e otimizados para conversão
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Landing pages de alta conversão</li>
                  <li>• Sites institucionais</li>
                  <li>• E-commerce</li>
                  <li>• Otimização SEO</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                  <BarChart3 className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-gray-900">Gestão de Redes Sociais</CardTitle>
                <CardDescription className="text-gray-600">
                  Estratégias de conteúdo e gestão completa das suas redes sociais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Criação de conteúdo</li>
                  <li>• Planejamento editorial</li>
                  <li>• Engajamento e comunidade</li>
                  <li>• Análise de métricas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="cases" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Resultados reais que alcançamos para nossos clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="ghost" className="text-white hover:bg-white/20">
                      <Eye className="w-5 h-5 mr-2" />
                      Ver Projeto
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                      {item.category}
                    </Badge>
                    <span className="text-sm font-medium text-gray-900">{item.metrics}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Ver Todos os Projetos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Resultados que falam por si só
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Na Digitalfy, combinamos estratégia, criatividade e dados para criar 
                campanhas que realmente convertem. Nossa missão é transformar sua 
                presença digital em resultados reais e mensuráveis.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="font-semibold text-gray-900">Especialistas</span>
                  </div>
                  <p className="text-gray-600 text-sm">Time certificado em Google e Meta</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="font-semibold text-gray-900">Suporte Total</span>
                  </div>
                  <p className="text-gray-600 text-sm">Acompanhamento dedicado e personalizado</p>
                </div>
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Falar no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para acelerar seus resultados?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vamos conversar sobre seus objetivos e criar uma estratégia 
            personalizada para o seu negócio decolar no digital.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
            Falar no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg font-bold text-gray-900">Digitalfy</span>
              </div>
              <p className="text-gray-600 text-sm">
                Agência de marketing digital especializada em transformar sua presença online em resultados reais.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Tráfego Pago</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Criação de Sites</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Redes Sociais</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Consultoria</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Cases</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>contato@digitalfy.com.br</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP</li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">&copy; 2024 Digitalfy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
