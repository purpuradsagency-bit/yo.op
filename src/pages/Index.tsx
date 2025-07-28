import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Zap, Shield, CheckCircle, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      content: "Esta plataforma transformó completamente nuestro negocio. Los resultados fueron inmediatos.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Marketing",
      content: "La mejor inversión que hemos hecho. El ROI superó todas nuestras expectativas.",
      rating: 5
    },
    {
      name: "Ana López",
      role: "Fundadora, InnovateCorp",
      content: "Increíble facilidad de uso y resultados excepcionales. Lo recomiendo sin dudas.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TuMarca
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-purple-300 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('caracteristicas')} className="text-white hover:text-purple-300 transition-colors">
                Características
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-white hover:text-purple-300 transition-colors">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-purple-300 transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-purple-300 transition-colors text-left">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('caracteristicas')} className="text-white hover:text-purple-300 transition-colors text-left">
                  Características
                </button>
                <button onClick={() => scrollToSection('testimonios')} className="text-white hover:text-purple-300 transition-colors text-left">
                  Testimonios
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-purple-300 transition-colors text-left">
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Nuevo: Funcionalidad revolucionaria</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforma tu
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {" "}negocio{" "}
              </span>
              hoy mismo
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              La plataforma más avanzada para impulsar tu crecimiento. 
              Únete a más de 10,000 empresas que ya confían en nosotros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
                Comenzar gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Ver demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>+10,000 usuarios activos</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span>4.9/5 estrellas</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                <span>100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Características que
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}marcan la diferencia
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre por qué somos la elección preferida de miles de empresas en todo el mundo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Velocidad Extrema",
                description: "Procesamiento 10x más rápido que la competencia con nuestra tecnología de vanguardia."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Seguridad Total",
                description: "Encriptación de nivel militar y cumplimiento con los estándares más exigentes."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Colaboración Fluida",
                description: "Trabaja en equipo sin fricciones con herramientas de colaboración intuitivas."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Experiencia Premium",
                description: "Interfaz elegante y experiencia de usuario diseñada para la máxima productividad."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Resultados Garantizados",
                description: "Garantía de satisfacción del 100% o te devolvemos tu dinero."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Escalabilidad Infinita",
                description: "Crece sin límites con nuestra infraestructura que se adapta a tus necesidades."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Lo que dicen nuestros
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}clientes
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-300">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-purple-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a miles de empresas que ya están viendo resultados extraordinarios. 
              Comienza tu prueba gratuita hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
                Comenzar ahora
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-400 text-sm">
                ✓ Sin tarjeta de crédito ✓ Configuración en 2 minutos ✓ Soporte 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                TuMarca
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La plataforma líder para empresas que buscan crecer y destacar en el mercado digital.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estado del servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TuMarca. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;