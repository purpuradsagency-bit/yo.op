import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Heart, Clock, Pencil, Monitor, Cloud, Settings, Shield } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import frustratedPerson from "@/assets/frustrated-person.jpg";
import guaranteeShield from "@/assets/guarantee-shield.jpg";
import featuresIcons from "@/assets/features-icons.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* SECCIÓN 1 – HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Texto a la izquierda */}
            <div className="flex-1 text-left animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Una landing que por fin
                <span className="text-primary block">habla por ti</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Bonita, profesional, clara y emocional.<br />
                Lista en 7 días. Con textos incluidos. Sin postureo.
              </p>
              
              <Button 
                variant="daena" 
                size="lg"
                onClick={() => scrollToSection('planes')}
                className="text-lg px-8 py-6 rounded-2xl"
              >
                👉 Quiero mi landing sin dramas
              </Button>
            </div>
            
            {/* Mockup 3D a la derecha */}
            <div className="flex-1 flex justify-center">
              <div className="relative animate-float">
                <img 
                  src={heroMockup} 
                  alt="Mockup 3D de landing page" 
                  className="w-full max-w-lg drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg blur-3xl animate-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 – Anclaje de precio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Tranqui, no te vamos a cobrar 1000 € por tu landing.
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Y no porque valga menos.<br />
                Sino porque creemos en soluciones reales, accesibles y con sentido.<br />
                Lo que cuesta DAENA te va a sorprender… y para bien.
              </p>
              
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 – Problema (Before) */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img 
                src={frustratedPerson} 
                alt="Persona frustrada con su presencia online" 
                className="w-full max-w-md mx-auto lg:mx-0 animate-fade-in"
              />
            </div>
            
            <div className="flex-1 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Tu presencia online importa, aunque nadie te lo diga.
              </h2>
              
              <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                <p>Muchos posibles clientes entran en tu perfil y…</p>
                <ul className="space-y-3 ml-6">
                  <li>• no ven web.</li>
                  <li>• O ven una que no transmite lo que haces.</li>
                  <li>• O directamente te da pereza compartirla.</li>
                </ul>
                <p className="text-primary font-semibold">
                  Eso te está costando oportunidades.<br />
                  Clientes, ventas y conexiones que ni sabes que estás perdiendo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 – Solución (After) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="relative animate-float">
                <div className="w-full max-w-md mx-auto bg-gradient-primary p-8 rounded-3xl shadow-glow">
                  <div className="bg-background rounded-2xl p-6 space-y-4">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-4 bg-primary/30 rounded w-1/2"></div>
                    <div className="h-20 bg-gradient-primary rounded-xl"></div>
                    <div className="h-3 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Una landing que representa, emociona… y convierte.
              </h2>
              
              <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">DAENA no solo diseña.</strong><br />
                  Traduce lo que haces en una página que emociona, aclara y convierte.
                </p>
                
                <p>
                  Con una landing profesional, tus clientes lo entienden todo de un vistazo.<br />
                  Confían más. Te contactan antes.<br />
                  <strong className="text-primary">Y sí: empiezas a cobrar más y con más seguridad.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 – ¿Qué incluye? */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              No necesitas saber de diseño, copy o web.<br />
              Solo contarnos quién eres.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Check className="w-8 h-8" />, text: "Diseño visual limpio, moderno y emocional" },
              { icon: <Pencil className="w-8 h-8" />, text: "Textos que suenan a ti (o incluso mejor)" },
              { icon: <Monitor className="w-8 h-8" />, text: "Hosting, dominio y soporte incluidos" },
              { icon: <Clock className="w-8 h-8" />, text: "Entrega en 7 días" },
              { icon: <Heart className="w-8 h-8" />, text: "Mejora semestral gratuita" },
              { icon: <Shield className="w-8 h-8" />, text: "Garantía de 7 días: si no conecta contigo, la rehacemos sin coste" }
            ].map((feature, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card hover:-translate-y-2 animate-fade-in bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground animate-bounce-gentle">
                    {feature.icon}
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 – Garantía emocional */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-8">
              <img 
                src={guaranteeShield} 
                alt="Sello de garantía DAENA" 
                className="w-24 h-24 animate-glow"
              />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Tienes 7 días para enamorarte de tu landing.
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Si no sientes que te representa, te la rehacemos gratis.<br />
              <strong className="text-primary">Así de simple.</strong>
            </p>
            
            <Badge variant="secondary" className="mt-8 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20">
              Garantía emocional DAENA
            </Badge>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 – Testimonios */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Lo que dicen quienes ya confiaron en DAENA:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { message: "Parece que la escribí yo.", author: "María" },
              { message: "En 48h ya me contactaron.", author: "Carlos" },
              { message: "Ahora cobro con más confianza. Y se nota.", author: "Ana" }
            ].map((testimonial, index) => (
              <div key={index} className="animate-fade-in">
                <Card className="bg-primary-foreground border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-foreground font-medium mb-2">"{testimonial.message}"</p>
                        <p className="text-muted-foreground text-sm">- {testimonial.author}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 – Planes y precios */}
      <section id="planes" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Tu presencia online, sin complicaciones.<br />
              Tú eliges el ritmo.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan mensual */}
            <Card className="border-primary/20 hover:border-primary hover:shadow-lavender hover:-translate-y-2 transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Plan mensual</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-3xl font-bold text-primary">97 €</span>
                      <span className="text-muted-foreground"> diseño + copy</span>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">19,99 €</span>
                      <span className="text-muted-foreground">/mes (11 meses)</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Soporte estándar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Mejora incluida</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span>Precio/día: 0,90 €</span>
                  </li>
                </ul>
                
                <Button variant="daena" className="w-full">
                  👉 Empezar con este plan
                </Button>
              </CardContent>
            </Card>

            {/* Plan anual PRO */}
            <Card className="border-primary hover:shadow-glow hover:-translate-y-2 transition-all duration-300 animate-fade-in relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">Recomendado</Badge>
              </div>
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Plan anual PRO</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-3xl font-bold text-primary">79 €</span>
                      <span className="text-muted-foreground"> en promo limitada</span>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">199 €</span>
                      <span className="text-muted-foreground">/año (3 meses GRATIS)</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Soporte prioritario</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Mejora incluida</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span>Precio/día: 0,76 €</span>
                  </li>
                </ul>
                
                <Button variant="daena" className="w-full">
                  👉 Empezar con este plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECCIÓN 9 – Cierre final + CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-12">
              Tu marca no necesita otra web más.<br />
              <span className="text-primary">Necesita una landing con alma.</span>
            </h2>
            
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl animate-glow"></div>
              <Button variant="daenaBig" className="relative z-10 animate-bounce-gentle">
                👉 Sí, quiero mi landing DAENA
              </Button>
            </div>
            
            <p className="text-muted-foreground mt-8 text-lg">
              Entrega en 7 días. Textos incluidos. Garantía emocional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;