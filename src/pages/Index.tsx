import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Shield, Clock, Sparkles } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO - Ultra Minimalista */}
      <section className="px-6 pt-24 pb-32">
        <div className="max-w-6xl mx-auto">
          
          {/* Badge sutil */}
          <div className="flex justify-center mb-12">
            <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Landing pages que funcionan
            </Badge>
          </div>

          {/* Título principal */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none">
              Una landing que por fin{" "}
              <span className="text-blue-600">habla por ti</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bonita, profesional, clara y emocional.<br />
              <strong>Lista en 7 días. Con textos incluidos. Sin postureo.</strong>
            </p>
          </div>

          {/* CTA principal */}
          <div className="flex justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('planes')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              👉 Quiero mi landing sin dramas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Indicadores de confianza */}
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Entrega en 7 días
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Garantía incluida
            </div>
          </div>
        </div>
      </section>

      {/* PRECIO - Directo */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Tranqui, no te vamos a cobrar{" "}
            <span className="text-blue-600">1000 € por tu landing.</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Y no porque valga menos. Sino porque creemos en soluciones reales, accesibles y con sentido.
          </p>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8 bg-red-50 text-red-600 border-red-200">
            ❌ El problema real
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Tu presencia online importa,{" "}
            <span className="text-blue-600">aunque nadie te lo diga.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              "No ven web",
              "Ven una que no transmite",
              "Te da pereza compartirla"
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <p className="text-lg text-gray-700">• {item}</p>
              </div>
            ))}
          </div>
          
          <div className="p-8 bg-red-50 rounded-xl border border-red-200">
            <p className="text-lg font-semibold text-red-600">
              Eso te está costando oportunidades.<br />
              Clientes, ventas y conexiones que ni sabes que estás perdiendo.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8 bg-green-50 text-green-600 border-green-200">
            ✨ La solución
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Una landing que representa,{" "}
            <span className="text-blue-600">emociona… y convierte.</span>
          </h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <p className="text-xl text-gray-700">
                <strong className="text-blue-600">DAENA no solo diseña.</strong><br />
                Traduce lo que haces en una página que emociona, aclara y convierte.
              </p>
            </div>
            
            <div className="p-8 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-xl text-gray-700">
                Con una landing profesional, tus clientes lo entienden todo de un vistazo.<br />
                <strong className="text-blue-600">Confían más. Te contactan antes. Empiezas a cobrar más.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              No necesitas saber de diseño, copy o web.<br />
              <span className="text-blue-600">Solo contarnos quién eres.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Diseño visual limpio y profesional",
              "Textos que suenan a ti",
              "Hosting y dominio incluidos",
              "Entrega en 7 días",
              "Mejora semestral gratuita",
              "Garantía de 7 días"
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Tienes 7 días para{" "}
            <span className="text-blue-600">enamorarte de tu landing.</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Si no sientes que te representa, te la rehacemos gratis.<br />
            <strong>Así de simple.</strong>
          </p>
          
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-6 py-2 text-lg">
            💝 Garantía emocional DAENA
          </Badge>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Lo que dicen quienes ya{" "}
            <span className="text-blue-600">confiaron en DAENA:</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { message: "Parece que la escribí yo.", author: "María" },
              { message: "En 48h ya me contactaron.", author: "Carlos" },
              { message: "Ahora cobro con más confianza.", author: "Ana" }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-sm border">
                <p className="text-lg font-medium text-gray-700 mb-4">
                  "{testimonial.message}"
                </p>
                <p className="text-gray-500">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="px-6 py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Tu presencia online,{" "}
              <span className="text-blue-600">sin complicaciones.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Plan mensual */}
            <div className="p-8 bg-white rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold mb-6">Plan mensual</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">97 €</div>
                <div className="text-gray-600">diseño + copy</div>
                <div className="text-4xl font-bold text-blue-600 mt-4 mb-2">19,99 €</div>
                <div className="text-gray-600">/mes (11 meses)</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Soporte estándar</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Mejora incluida</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>Precio/día: 0,90 €</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                👉 Empezar con este plan
              </Button>
            </div>

            {/* Plan anual */}
            <div className="p-8 bg-blue-600 text-white rounded-xl shadow-lg relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-white text-blue-600">⭐ Recomendado</Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Plan anual PRO</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">79 €</div>
                <div className="text-blue-100">en promo limitada</div>
                <div className="text-4xl font-bold mt-4 mb-2">199 €</div>
                <div className="text-blue-100">/año (3 meses GRATIS)</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300" />
                  <span>Soporte prioritario</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300" />
                  <span>Mejora incluida</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-300" />
                  <span>Precio/día: 0,76 €</span>
                </li>
              </ul>
              
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 font-semibold">
                👉 Empezar con este plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
            Tu marca no necesita otra web más.<br />
            <span className="text-blue-600">Necesita una landing con alma.</span>
          </h2>
          
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 mb-8"
          >
            👉 Sí, quiero mi landing DAENA
            <Sparkles className="w-6 h-6 ml-3" />
          </Button>
          
          <p className="text-gray-600">
            <strong>Entrega en 7 días. Textos incluidos. Garantía emocional.</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;