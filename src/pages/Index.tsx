import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Shield, Clock, Sparkles, Star, Users, TrendingUp, Eye, ChevronDown, Zap, Heart, Target, Award, MessageCircle, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    { 
      message: "Parece que la escribí yo, pero 100 veces mejor. Los clientes lo entienden al segundo.", 
      author: "María González",
      role: "Consultora Marketing",
      avatar: "M",
      color: "bg-pink-100 text-pink-600"
    },
    { 
      message: "En 48h ya me contactaron 3 clientes nuevos. Nunca había tenido esa respuesta.", 
      author: "Carlos Ruiz",
      role: "Coach Personal",
      avatar: "C",
      color: "bg-blue-100 text-blue-600"
    },
    { 
      message: "Ahora cobro con más confianza y se nota. Mis proyectos subieron de nivel.", 
      author: "Ana Martín",
      role: "Arquitecta",
      avatar: "A",
      color: "bg-green-100 text-green-600"
    }
  ];

  const features = [
    { 
      icon: <Sparkles className="w-6 h-6" />,
      title: "Diseño visual premium",
      description: "Limpio, moderno y emocional que refleja tu personalidad",
      color: "bg-purple-50 border-purple-200"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Textos que conectan",
      description: "Copy que suena a ti pero 10x mejor. Sin jerga corporativa.",
      color: "bg-blue-50 border-blue-200"
    },
    { 
      icon: <Zap className="w-6 h-6" />,
      title: "Técnico resuelto",
      description: "Hosting, dominio, SSL, velocidad. Nosotros nos encargamos.",
      color: "bg-yellow-50 border-yellow-200"
    },
    { 
      icon: <Clock className="w-6 h-6" />,
      title: "Entrega ultrarrápida",
      description: "7 días desde briefing hasta live. Sin retrasos, sin excusas.",
      color: "bg-green-50 border-green-200"
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Evolución continua",
      description: "Mejora semestral gratuita basada en datos reales.",
      color: "bg-indigo-50 border-indigo-200"
    },
    { 
      icon: <Heart className="w-6 h-6" />,
      title: "Garantía emocional",
      description: "7 días para enamorarte. Si no, la rehacemos gratis.",
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl">DAENA</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('problema')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                ¿Por qué?
              </button>
              <button 
                onClick={() => scrollToSection('solucion')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Casos reales
              </button>
              <Button 
                onClick={() => scrollToSection('planes')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
              >
                Empezar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO MEJORADO */}
      <section className="px-6 pt-32 pb-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
        
        <div className="max-w-7xl mx-auto relative">
          
          {/* Social proof flotante */}
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">+200 empresas</span>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">4.9/5</span>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">300% más conversiones</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Columna izquierda mejorada */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-6 py-3 text-base font-medium rounded-full">
                <Sparkles className="w-5 h-5 mr-2" />
                Landing pages que funcionan de verdad
              </Badge>

              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                  Una landing que por fin{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-shift bg-size-200">
                    habla por ti
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                  Bonita, profesional, clara y emocional.<br />
                  <span className="font-semibold text-gray-900">Lista en 7 días. Con textos incluidos. Sin postureo.</span>
                </p>
              </div>

              {/* Botones mejorados */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('planes')}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-3">👉</span>
                  Quiero mi landing sin dramas
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-10 py-6 text-xl rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <Eye className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Ver ejemplos reales
                </Button>
              </div>

              {/* Testimonial destacado mejorado */}
              <div className="relative">
                <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center font-bold text-xl`}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-lg mb-2">"{testimonials[activeTestimonial].message}"</p>
                    <p className="text-gray-600">
                      <span className="font-semibold">{testimonials[activeTestimonial].author}</span>, {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                {/* Indicadores de testimonial */}
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha mejorada */}
            <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
                  alt="Laptop mostrando landing page profesional" 
                  className="relative w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
                />
                
                {/* Floating stats mejorados */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-green-600">+127%</div>
                      <div className="text-sm text-gray-500">Conversiones</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-float" style={{animationDelay: '2s'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-blue-600">7 días</div>
                      <div className="text-sm text-gray-500">Entrega</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="text-center mt-16">
            <button 
              onClick={() => scrollToSection('problema')}
              className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors group"
            >
              <span className="text-sm">Descubre por qué necesitas esto</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* ANCLAJE DE PRECIO MEJORADO */}
      <section className="px-6 py-24 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-full border border-red-200 mb-8">
            <span className="text-2xl">💸</span>
            <span className="font-semibold">Precio honesto</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Tranqui, no te vamos a cobrar{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">1000 € por tu landing.</span>
              <div className="absolute -inset-2 bg-red-100 rounded-lg -z-10 transform rotate-1"></div>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Y no porque valga menos. Sino porque creemos en{" "}
            <span className="font-semibold text-gray-900 bg-yellow-100 px-2 py-1 rounded">
              soluciones reales, accesibles y con sentido.
            </span>
          </p>
          
          <div className="inline-flex items-center gap-3 text-gray-500 text-lg">
            <span>Lo que cuesta DAENA te va a sorprender… y para bien</span>
            <ChevronDown className="w-6 h-6 animate-bounce text-blue-600" />
          </div>
        </div>
      </section>

      {/* NÚMEROS MEJORADOS */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "+200", label: "Proyectos entregados", icon: <Award className="w-8 h-8" />, color: "from-blue-500 to-blue-600" },
              { number: "7 días", label: "Tiempo de entrega", icon: <Clock className="w-8 h-8" />, color: "from-green-500 to-green-600" },
              { number: "96%", label: "Clientes satisfechos", icon: <Heart className="w-8 h-8" />, color: "from-pink-500 to-pink-600" },
              { number: "300%", label: "Más conversiones", icon: <TrendingUp className="w-8 h-8" />, color: "from-purple-500 to-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA MEJORADO */}
      <section id="problema" className="px-6 py-24 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-8 bg-red-100 text-red-700 border-red-200 px-6 py-3 text-lg font-medium rounded-full">
              <span className="text-2xl mr-2">❌</span>
              El problema real que nadie te cuenta
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              Tu presencia online importa,{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                aunque nadie te lo diga.
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada día sin una presencia digital profesional = oportunidades perdidas para siempre
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                problem: "No ven web",
                impact: "70% se van sin contactar",
                icon: <Eye className="w-8 h-8" />,
                color: "border-red-200 hover:border-red-300"
              },
              { 
                problem: "Ven una que no transmite",
                impact: "45% pierde confianza",
                icon: <Target className="w-8 h-8" />,
                color: "border-orange-200 hover:border-orange-300"
              },
              { 
                problem: "Te da pereza compartirla",
                impact: "0 referencias nuevas",
                icon: <Users className="w-8 h-8" />,
                color: "border-yellow-200 hover:border-yellow-300"
              }
            ].map((item, index) => (
              <div key={index} className={`group p-8 bg-white rounded-2xl shadow-lg border-2 ${item.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.problem}</h3>
                <p className="text-gray-600 text-lg">{item.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center p-10 bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl border-2 border-red-200">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Resultado: Pierdes clientes que ni sabes que tuviste
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Cada día sin una landing profesional = oportunidades perdidas para siempre
            </p>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN MEJORADA */}
      <section id="solucion" className="px-6 py-24 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-8 bg-green-100 text-green-700 border-green-200 px-6 py-3 text-lg font-medium rounded-full">
              <span className="text-2xl mr-2">✨</span>
              La transformación que necesitas
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              Una landing que representa,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                emociona… y convierte.
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="group p-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                🎯 DAENA no solo diseña
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Traduce lo que haces en una página que <span className="font-semibold bg-blue-200 px-2 py-1 rounded">emociona, aclara y convierte</span>. 
                Cada palabra, cada imagen, cada botón está pensado para que tus visitantes se conviertan en clientes.
              </p>
            </div>
            
            <div className="group p-10 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                📈 Resultados garantizados
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Tus clientes lo entienden todo de un vistazo. <span className="font-semibold bg-green-200 px-2 py-1 rounded">Confían más. Te contactan antes.</span> 
                Y sí: empiezas a cobrar más y con más seguridad.
              </p>
            </div>
          </div>

          {/* Antes/Después mejorado */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl border-2 border-gray-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">❌</span>
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-6">ANTES (Sin DAENA)</h4>
              <ul className="space-y-4">
                {[
                  "Visitantes confusos → 70% se van",
                  "Sin mensaje claro → Pocas conversiones", 
                  "Apariencia amateur → Precios bajos",
                  "Cero referencias → Crecimiento lento"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl border-2 border-blue-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✅</span>
              </div>
              <h4 className="font-bold text-xl text-blue-800 mb-6">DESPUÉS (Con DAENA)</h4>
              <ul className="space-y-4">
                {[
                  "Mensaje claro → +300% conversiones",
                  "Look profesional → Precios premium",
                  "Genera confianza → Más clientes", 
                  "Orgulloso de compartir → Crecimiento orgánico"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE MEJORADO */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-8 bg-purple-50 text-purple-700 border-purple-200 px-6 py-3 text-lg font-medium rounded-full">
              <span className="text-2xl mr-2">🛠</span>
              Todo incluido, sin sorpresas
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              No necesitas saber de diseño, copy o web.<br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Solo contarnos quién eres.
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group p-8 bg-white rounded-2xl shadow-lg border-2 ${feature.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS MEJORADOS */}
      <section id="testimonios" className="px-6 py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-8 bg-yellow-50 text-yellow-700 border-yellow-200 px-6 py-3 text-lg font-medium rounded-full">
              <span className="text-2xl mr-2">💬</span>
              Casos reales, resultados reales
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              Lo que dicen quienes ya{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                confiaron en DAENA:
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.message}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA MEJORADA */}
      <section className="px-6 py-24 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-10 animate-pulse">
            <Shield className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            Tienes 7 días para{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              enamorarte de tu landing.
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-10 mb-10 border-2 border-green-200">
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Si no sientes que te representa al 100%, <span className="font-bold bg-green-200 px-3 py-1 rounded-lg">te la rehacemos gratis.</span>
            </p>
            <p className="text-lg text-gray-600">
              Sin preguntas incómodas. Sin letra pequeña. Así de simple.
            </p>
          </div>
          
          <Badge variant="secondary" className="bg-green-100 text-green-700 px-8 py-4 text-xl font-bold rounded-full border-2 border-green-200">
            <span className="text-2xl mr-2">💝</span>
            Garantía emocional DAENA
          </Badge>
        </div>
      </section>

      {/* PLANES MEJORADOS */}
      <section id="planes" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-8 bg-blue-50 text-blue-700 border-blue-200 px-6 py-3 text-lg font-medium rounded-full">
              <span className="text-2xl mr-2">💸</span>
              Precio transparente, sin letra pequeña
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              Tu presencia online,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                sin complicaciones.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tú eliges el ritmo. Ambos incluyen exactamente lo mismo. Sin trucos, sin sorpresas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Plan mensual mejorado */}
            <div className="group p-10 bg-white rounded-3xl shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 to-blue-300"></div>
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Plan mensual</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-blue-50 rounded-2xl">
                    <div className="text-5xl font-bold text-blue-600 mb-2">97 €</div>
                    <div className="text-gray-600 text-lg">diseño + copy completo</div>
                  </div>
                  <div className="text-gray-400 text-2xl font-bold">+</div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <div className="text-5xl font-bold text-blue-600 mb-2">19,99 €</div>
                    <div className="text-gray-600 text-lg">/mes × 11 meses</div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Todo incluido",
                  "Soporte estándar", 
                  "Mejora semestral",
                  "Garantía 7 días"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl rounded-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                <span className="mr-2">👉</span>
                Empezar con este plan
              </Button>
            </div>

            {/* Plan anual mejorado */}
            <div className="group relative p-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 opacity-90"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-6 py-2 text-lg rounded-full shadow-lg">
                  <span className="mr-2">⭐</span>
                  RECOMENDADO
                </Badge>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold mb-6">Plan anual PRO</h3>
                  <div className="space-y-6">
                    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <div className="text-5xl font-bold mb-2">79 €</div>
                      <div className="text-blue-100 text-lg">diseño + copy (promo limitada)</div>
                    </div>
                    <div className="text-blue-200 text-2xl font-bold">+</div>
                    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <div className="text-5xl font-bold mb-2">199 €</div>
                      <div className="text-blue-100 text-lg">/año (3 meses GRATIS)</div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Todo incluido",
                    "Soporte prioritario",
                    "Mejora semestral", 
                    "Garantía 7 días"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-6 text-xl rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="mr-2">👉</span>
                  Empezar con este plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL MEJORADO */}
      <section className="px-6 py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">
            Tu marca no necesita otra web más.<br />
            <span className="text-blue-200">
              Necesita una landing con alma.
            </span>
          </h2>
          
          <Button 
            size="lg"
            className="group bg-white text-blue-600 hover:bg-gray-100 px-16 py-8 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 mb-12 font-bold transform hover:scale-105"
          >
            <span className="mr-3 text-2xl">👉</span>
            Sí, quiero mi landing DAENA
            <Sparkles className="w-8 h-8 ml-4 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">Entrega en 7 días</span>
            </div>
            <div className="w-2 h-2 bg-blue-300 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg font-semibold">Textos incluidos</span>
            </div>
            <div className="w-2 h-2 bg-blue-300 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-semibold">Garantía emocional</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MEJORADO */}
      <footer className="px-6 py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <span className="font-bold text-2xl">DAENA</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Landing pages con alma que representan, emocionan y convierten. 
                Porque tu marca merece más que una web bonita.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Copywriting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diseño UX/UI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hola@daena.es</li>
                <li>+34 600 000 000</li>
                <li>Madrid, España</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">© 2024 DAENA. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;