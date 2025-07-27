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
      
      {/* HERO LIMPIO */}
      <section className="px-6 pt-20 pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Proof social simple */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span><strong>+200</strong> empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span><strong>300%</strong> más conversiones</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span><strong>7 días</strong> garantizados</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna izquierda */}
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Landing pages que funcionan
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

              {/* Botones */}
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
                  className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-gray-50"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Ver ejemplos
                </Button>
              </div>

              {/* Mini testimonial */}
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
                    <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="relative">
              <img 
                src={heroLaptop} 
                alt="Laptop mostrando landing page profesional" 
                className="w-full rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-bold text-blue-600">+127%</div>
                    <div className="text-xs text-gray-500">Conversiones</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-bold text-blue-600">7 días</div>
                    <div className="text-xs text-gray-500">Entrega</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANCLAJE DE PRECIO */}
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

      {/* NÚMEROS */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">+200</div>
              <div className="text-gray-600">Proyectos entregados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">7 días</div>
              <div className="text-gray-600">Tiempo de entrega</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">96%</div>
              <div className="text-gray-600">Clientes satisfechos</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Más conversiones</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-gray-100 text-gray-700 border-gray-200">
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
                impact: "70% se van sin contactar"
              },
              { 
                problem: "Ven una que no transmite",
                impact: "45% pierde confianza"
              },
              { 
                problem: "Te da pereza compartirla",
                impact: "0 referencias nuevas"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border">
                <h3 className="font-semibold text-gray-900 mb-2">{item.problem}</h3>
                <p className="text-gray-600">{item.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center p-8 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Resultado: Pierdes clientes que ni sabes que tuviste
            </h3>
            <p className="text-gray-600">
              Cada día sin una landing profesional = oportunidades perdidas para siempre
            </p>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-600 border-blue-200">
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
            
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                📈 Resultados garantizados
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tus clientes lo entienden todo de un vistazo. <strong>Confían más. Te contactan antes.</strong> 
                Y sí: empiezas a cobrar más y con más seguridad.
              </p>
            </div>
          </div>

          {/* Antes/Después */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-xl">
              <h4 className="font-bold text-gray-700 mb-4">❌ ANTES (Sin DAENA)</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Visitantes confusos → 70% se van</li>
                <li>• Sin mensaje claro → Pocas conversiones</li>
                <li>• Apariencia amateur → Precios bajos</li>
                <li>• Cero referencias → Crecimiento lento</li>
              </ul>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-xl">
              <h4 className="font-bold text-blue-700 mb-4">✅ DESPUÉS (Con DAENA)</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Mensaje claro → +300% conversiones</li>
                <li>• Look profesional → Precios premium</li>
                <li>• Genera confianza → Más clientes</li>
                <li>• Orgulloso de compartir → Crecimiento orgánico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-600 border-blue-200">
              🛠 Todo incluido
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              No necesitas saber de diseño, copy o web.<br />
              <span className="text-blue-600">Solo contarnos quién eres.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Diseño visual premium",
                description: "Limpio, moderno y emocional que refleja tu personalidad"
              },
              { 
                title: "Textos que conectan",
                description: "Copy que suena a ti pero 10x mejor. Sin jerga corporativa."
              },
              { 
                title: "Técnico resuelto",
                description: "Hosting, dominio, SSL, velocidad. Nosotros nos encargamos."
              },
              { 
                title: "Entrega ultrarrápida",
                description: "7 días desde briefing hasta live. Sin retrasos, sin excusas."
              },
              { 
                title: "Evolución continua",
                description: "Mejora semestral gratuita basada en datos reales."
              },
              { 
                title: "Garantía emocional",
                description: "7 días para enamorarte. Si no, la rehacemos gratis."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-6 py-20">
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
                role: "Consultora Marketing"
              },
              { 
                message: "En 48h ya me contactaron 3 clientes nuevos. Nunca había tenido esa respuesta.", 
                author: "Carlos Ruiz",
                role: "Coach Personal"
              },
              { 
                message: "Ahora cobro con más confianza y se nota. Mis proyectos subieron de nivel.", 
                author: "Ana Martín",
                role: "Arquitecta"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-sm border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.message}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="px-6 py-20 bg-gray-50">
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
          
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-6 py-2 text-lg">
            💝 Garantía emocional DAENA
          </Badge>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="px-6 py-20">
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
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Todo incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Soporte estándar</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Mejora semestral</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Garantía 7 días</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl">
                👉 Empezar con este plan
              </Button>
            </div>

            {/* Plan anual */}
            <div className="relative p-8 bg-blue-600 text-white rounded-xl shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-blue-600 font-bold px-4 py-1">
                  ⭐ RECOMENDADO
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
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Todo incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Soporte prioritario</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Mejora semestral</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Garantía 7 días</span>
                </li>
              </ul>
              
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 text-lg rounded-xl font-bold">
                👉 Empezar con este plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            Tu marca no necesita otra web más.<br />
            <span className="text-blue-100">Necesita una landing con alma.</span>
          </h2>
          
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 mb-8 font-bold"
          >
            👉 Sí, quiero mi landing DAENA
            <Sparkles className="w-6 h-6 ml-3" />
          </Button>
          
          <p className="text-blue-100">
            <strong>Entrega en 7 días. Textos incluidos. Garantía emocional.</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;