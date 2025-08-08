import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import {
  Globe,
  Target,
  Vote,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
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
      description: "Monitoramento e proteção da reputação digital da sua marca, gestão de crises e estratégias de brand safety.",
      features: ["Monitoramento 24/7", "Gestão de Crises", "Proteção de Reputação"]
    }
  ];

  const stats = [
    { number: "200+", label: "Projetos Entregues" },
    { number: "150+", label: "Clientes Satisfeitos" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "5", label: "Anos de Experiência" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
    <span className="text-primary-foreground font-bold text-lg">D</span>
  </div>
  <span className="text-2xl font-bold text-gradient">igitalfy</span>
</div>

          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
          
          <Button className="pulse-button">
            Fale Conosco
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
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Nossos Casos
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/logos/Untitled%20folder/banne.jpg" 
                alt="Digitalfy Banner" 
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
          <Button size="lg" variant="secondary" className="pulse-button">
            Solicitar Proposta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/src/assets/digitalfy_logo_banner.jpg" alt="Digitalfy Logo" className="h-10" />
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transformando negócios através de estratégias digitais inovadoras e resultados mensuráveis.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
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
                  <Mail className="h-4 w-4 mr-2" />
                  contato@digitalfy.com
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 9999-9999
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  São Paulo, SP
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Digitalfy. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

