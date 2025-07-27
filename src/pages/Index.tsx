import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Shield, Clock, Sparkles, Star, Users, TrendingUp, Eye, ChevronDown } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";
import testimonialFaces from "@/assets/testimonial-faces.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO MEJORADO - Con contexto visual y proof social */}
      <section className="px-6 pt-20 pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Proof social arriba */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span><strong>+200</strong> empresas confían en DAENA</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span><strong>300%</strong> más conversiones promedio</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span><strong>7 días</strong> de entrega garantizada</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna izquierda - Texto */}
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Landing pages que enamoran y convierten
              </Badge>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Una landing que por fin{" "}
                  <span className="text-blue-600">habla por ti</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Bonita, profesional, clara y emocional.<br />
                  <strong className="text-gray-900">Lista en 7 días. Con textos incluidos. Sin postureo.</strong>
                </p>
              </div>

              {/* Botones con alternativa suave */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('planes')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  👉 Quiero mi landing sin dramas
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('ejemplos')}
                  className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-gray-50"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Ver ejemplos reales
                </Button>
              </div>

              {/* Mini testimonial con foto */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  M
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 font-medium">"En 48h ya tenía 3 clientes nuevos"</p>
                  <p className="text-sm text-gray-500">María, Consultora Marketing</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha - Visual context */}
            <div className="relative">
              <div className="relative">
                <img 
                  src={heroLaptop} 
                  alt="Laptop mostrando landing page profesional" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                {/* Elementos flotantes de métricas */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-bold text-green-600">+127%</div>
                      <div className="text-xs text-gray-500">Conversiones</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-bold text-blue-600">7 días</div>
                      <div className="text-xs text-gray-500">Entrega</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANCLAJE DE PRECIO - Estrategia mantenida */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tranqui, no te vamos a cobrar{" "}
            <span className="text-blue-600">1000 € por tu landing.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Y no porque valga menos. Sino porque creemos en <strong className="text-gray-900">soluciones reales, accesibles y con sentido.</strong>
          </p>
          
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span>Lo que cuesta DAENA te va a sorprender… y para bien</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* NÚMEROS CONCRETOS - Nueva sección */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">+200</div>
              <div className="text-gray-600">Proyectos entregados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">7 días</div>
              <div className="text-gray-600">Tiempo de entrega</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">96%</div>
              <div className="text-gray-600">Clientes satisfechos</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">300%</div>
              <div className="text-gray-600">Más conversiones</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA - Mejorado */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-red-50 text-red-600 border-red-200">
              ❌ El problema real
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Tu presencia online importa,{" "}
              <span className="text-blue-600">aunque nadie te lo diga.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                problem: "No ven web",
                impact: "70% se van sin contactar",
                icon: "🚫"
              },
              { 
                problem: "Ven una que no transmite",
                impact: "45% pierde confianza",
                icon: "😕"
              },
              { 
                problem: "Te da pereza compartirla",
                impact: "0 referencias nuevas",
                icon: "😣"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border-l-4 border-red-500">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.problem}</h3>
                <p className="text-red-600 font-medium">{item.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center p-8 bg-red-50 rounded-xl border border-red-200">
            <h3 className="text-xl font-bold text-red-700 mb-2">
              Resultado: Pierdes clientes que ni sabes que tuviste
            </h3>
            <p className="text-red-600">
              Cada día sin una landing profesional = oportunidades perdidas para siempre
            </p>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN - Con beneficios específicos */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-green-50 text-green-600 border-green-200">
              ✨ La transformación
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Una landing que representa,{" "}
              <span className="text-blue-600">emociona… y convierte.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                🎯 DAENA no solo diseña
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Traduce lo que haces en una página que <strong>emociona, aclara y convierte</strong>. 
                Cada palabra, cada imagen, cada botón está pensado para que tus visitantes se conviertan en clientes.
              </p>
            </div>
            
            <div className="p-8 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                📈 Resultados garantizados
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tus clientes lo entienden todo de un vistazo. <strong>Confían más. Te contactan antes.</strong> 
                Y sí: empiezas a cobrar más y con más seguridad.
              </p>
            </div>
          </div>

          {/* Antes/Después visual */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-700 mb-4">❌ ANTES (Sin DAENA)</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Visitors confused → 70% bounce rate</li>
                <li>• No clear value → Few conversions</li>
                <li>• Cheap appearance → Lower prices</li>
                <li>• Zero referrals → Slow growth</li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-50 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-700 mb-4">✅ DESPUÉS (Con DAENA)</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Clear message → +300% conversions</li>
                <li>• Professional look → Premium pricing</li>
                <li>• Trust building → More clients</li>
                <li>• Proud to share → Organic growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE - Más detallado */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-600 border-blue-200">
              🛠 Todo incluido, cero estrés
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              No necesitas saber de diseño, copy o web.<br />
              <span className="text-blue-600">Solo contarnos quién eres.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: "🎨",
                title: "Diseño visual premium",
                description: "Limpio, moderno y emocional que refleja tu personalidad",
                included: "Mockups + Wireframes incluidos"
              },
              { 
                icon: "✍️",
                title: "Textos que conectan",
                description: "Copy que suena a ti pero 10x mejor. Sin jerga corporativa.",
                included: "Headlines + CTA copy incluido"
              },
              { 
                icon: "⚡",
                title: "Técnico completamente resuelto",
                description: "Hosting, dominio, SSL, velocidad. Nosotros nos encargamos.",
                included: "Setup + mantenimiento 6 meses"
              },
              { 
                icon: "🚀",
                title: "Entrega ultrarrápida",
                description: "7 días desde briefing hasta live. Sin retrasos, sin excusas.",
                included: "Timeline detallado incluido"
              },
              { 
                icon: "🔄",
                title: "Evolución continua",
                description: "Mejora semestral gratuita basada en datos reales.",
                included: "Analytics + optimización"
              },
              { 
                icon: "💝",
                title: "Garantía emocional",
                description: "7 días para enamorarte. Si no, la rehacemos gratis.",
                included: "Sin letra pequeña"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{feature.description}</p>
                <div className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {feature.included}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EJEMPLOS - Nueva sección */}
      <section id="ejemplos" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="text-blue-600">Casos reales</span> que funcionan
            </h2>
            <p className="text-lg text-gray-600">
              Estas landings consiguieron +300% más clientes para nuestros partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                sector: "Consultoría Marketing",
                result: "+400% leads en 30 días",
                client: "María González",
                description: "De 2 clientes/mes a 8 clientes/mes"
              },
              {
                sector: "Coach Personal",
                result: "+250% conversión",
                client: "Carlos Ruiz", 
                description: "De 1% a 3.5% conversión en formulario"
              },
              {
                sector: "Arquitecto",
                result: "+180% presupuestos",
                client: "Ana Martín",
                description: "Proyectos premium aumentaron 60%"
              }
            ].map((example, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border shadow-sm">
                <div className="mb-4">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                    {example.sector}
                  </Badge>
                </div>
                <h3 className="font-bold text-lg text-green-600 mb-2">{example.result}</h3>
                <p className="text-gray-600 mb-3">{example.description}</p>
                <p className="text-sm text-gray-500">— {example.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS - Con fotos reales */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Lo que dicen quienes ya{" "}
              <span className="text-blue-600">confiaron en DAENA:</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                message: "Parece que la escribí yo, pero 100 veces mejor. Los clientes lo entienden al segundo.", 
                author: "María González",
                role: "Consultora Marketing",
                rating: 5,
                result: "+127% conversiones"
              },
              { 
                message: "En 48h ya me contactaron 3 clientes nuevos. Nunca había tenido esa respuesta.", 
                author: "Carlos Ruiz",
                role: "Coach Personal", 
                rating: 5,
                result: "+89% leads qualified"
              },
              { 
                message: "Ahora cobro con más confianza y se nota. Mis proyectos subieron de nivel.", 
                author: "Ana Martín",
                role: "Arquitecta",
                rating: 5,
                result: "+156% ticket promedio"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-sm border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.message}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    {testimonial.author[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA - Más detallada */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Tienes 7 días para{" "}
            <span className="text-blue-600">enamorarte de tu landing.</span>
          </h2>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Si no sientes que te representa al 100%, <strong>te la rehacemos gratis.</strong>
            </p>
            <p className="text-gray-600">
              Sin preguntas incómodas. Sin letra pequeña. Así de simple.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold mb-2">✅ Revisiones ilimitadas</div>
              <div className="text-gray-600">Durante los 7 días de garantía</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold mb-2">💯 Reembolso completo</div>
              <div className="text-gray-600">Si decides no seguir adelante</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold mb-2">🤝 Sin compromisos</div>
              <div className="text-gray-600">Cancelas cuando quieras</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES - Mejorado con comparación */}
      <section id="planes" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-600 border-blue-200">
              💸 Precio transparente
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Tu presencia online,{" "}
              <span className="text-blue-600">sin complicaciones.</span>
            </h2>
            <p className="text-lg text-gray-600">Tú eliges el ritmo. Ambos incluyen exactamente lo mismo.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Plan mensual */}
            <div className="p-8 bg-white rounded-xl shadow-sm border-2 hover:border-blue-200 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Plan mensual</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold text-blue-600">97 €</div>
                    <div className="text-gray-600">diseño + copy completo</div>
                  </div>
                  <div className="text-gray-400">+</div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600">19,99 €</div>
                    <div className="text-gray-600">/mes × 11 meses</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Total: <strong>316,89 €</strong></div>
                    <div className="text-xs text-gray-500">Precio/día: 0,90 €</div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Todo lo que necesitas incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Soporte estándar por email</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Mejora semestral incluida</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Garantía emocional 7 días</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl">
                👉 Empezar con este plan
              </Button>
            </div>

            {/* Plan anual PRO */}
            <div className="relative p-8 bg-blue-600 text-white rounded-xl shadow-lg border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-400 text-yellow-900 font-bold px-4 py-1">
                  ⭐ AHORRO €118
                </Badge>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Plan anual PRO</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold">79 €</div>
                    <div className="text-blue-100">diseño + copy (promo limitada)</div>
                  </div>
                  <div className="text-blue-200">+</div>
                  <div>
                    <div className="text-4xl font-bold">199 €</div>
                    <div className="text-blue-100">/año (3 meses GRATIS)</div>
                  </div>
                  <div className="bg-blue-500 rounded-lg p-3">
                    <div className="text-sm">Total: <strong>278 €</strong></div>
                    <div className="text-xs text-blue-200">Precio/día: 0,76 €</div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>Todo lo que necesitas incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>Soporte prioritario (24h respuesta)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>Mejora semestral incluida</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>Garantía emocional 7 días</span>
                </li>
              </ul>
              
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 text-lg rounded-xl font-bold">
                👉 Empezar con este plan
              </Button>
            </div>
          </div>

          {/* Comparación rápida */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 text-sm text-gray-600 bg-white rounded-lg px-6 py-3">
              <span>Plan mensual: <strong>316,89 €</strong></span>
              <span className="text-gray-400">vs</span>
              <span>Plan anual: <strong className="text-green-600">278 €</strong></span>
              <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                Ahorras 118 €
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Nueva sección */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="text-blue-600">Preguntas frecuentes</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "¿Realmente lo entregan en 7 días?",
                a: "Sí, garantizado. Desde que completamos el briefing inicial hasta que tu landing está live. Llevamos +200 proyectos entregados a tiempo."
              },
              {
                q: "¿Qué pasa si no me gusta el resultado?",
                a: "Tienes 7 días para solicitar cambios ilimitados o reembolso completo. Sin preguntas incómodas, sin letra pequeña."
              },
              {
                q: "¿Incluye el hosting y dominio?",
                a: "Sí, todo incluido durante el primer año. Después puedes mantenerlo con nosotros o llevártelo donde quieras."
              },
              {
                q: "¿Funciona para cualquier sector?",
                a: "Hemos trabajado con consultores, coaches, arquitectos, abogados, dentistas, agencias... Si vendes servicios, sabemos cómo ayudarte."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - Mejorado */}
      <section className="px-6 py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            Tu marca no necesita otra web más.<br />
            <span className="text-blue-100">Necesita una landing con alma.</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Deja de perder clientes por una presencia online que no te representa. 
            Es hora de tener una landing que hable por ti.
          </p>
          
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 mb-8 font-bold"
          >
            👉 Sí, quiero mi landing DAENA
            <Sparkles className="w-6 h-6 ml-3" />
          </Button>
          
          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <strong>Entrega garantizada en 7 días</strong>
            </div>
            <div className="hidden md:block w-1 h-1 bg-blue-300 rounded-full" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <strong>Garantía emocional incluida</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Credibilidad */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">DAENA</h3>
              <p className="text-gray-400 text-sm">
                Landing pages que enamoran y convierten. +200 proyectos entregados.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Landing pages</li>
                <li>Copywriting</li>
                <li>Hosting & dominio</li>
                <li>Soporte técnico</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Garantías</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Entrega en 7 días</li>
                <li>Garantía emocional</li>
                <li>Reembolso completo</li>
                <li>Soporte 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>hello@daena.es</div>
                <div>+34 600 000 000</div>
                <div>Madrid, España</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 DAENA. Todos los derechos reservados. | Política de privacidad | Términos de servicio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;