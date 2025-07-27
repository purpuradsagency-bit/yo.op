import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingCard } from "@/components/FloatingCard";
import { GradientText } from "@/components/GradientText";
import { MagneticButton } from "@/components/MagneticButton";
import { Check, Star, Heart, Clock, Pencil, Monitor, Cloud, Settings, Shield, ArrowRight, Sparkles } from "lucide-react";
import heroPremium from "@/assets/hero-premium.jpg";
import problemElegant from "@/assets/problem-elegant.jpg";
import solutionSuccess from "@/assets/solution-success.jpg";
import premiumShield from "@/assets/premium-shield.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
      
      {/* SECCIÓN 1 – HERO PREMIUM */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Texto a la izquierda */}
            <div className="flex-1 text-left space-y-8">
              <div className="space-y-6 animate-fade-up">
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  Landing pages que enamoran
                </Badge>
                
                <h1 className="text-5xl lg:text-8xl font-bold leading-tight text-balance">
                  Una landing que por fin{" "}
                  <GradientText className="block">habla por ti</GradientText>
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                  Bonita, profesional, clara y emocional.<br />
                  <strong className="text-foreground">Lista en 7 días. Con textos incluidos. Sin postureo.</strong>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <MagneticButton 
                  variant="hero"
                  onClick={() => scrollToSection('planes')}
                  className="text-lg px-8 py-6 rounded-2xl group"
                >
                  👉 Quiero mi landing sin dramas
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-2xl"
                >
                  Ver ejemplos
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Entrega garantizada en 7 días
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Garantía emocional incluida
                </div>
              </div>
            </div>
            
            {/* Mockup 3D Premium a la derecha */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-aurora opacity-20 rounded-3xl blur-3xl animate-glow" />
                <img 
                  src={heroPremium} 
                  alt="Mockup premium de landing page" 
                  className="relative w-full max-w-2xl drop-shadow-2xl rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary animate-bounce-gentle">
                  ✨ Premium
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 – Anclaje de precio elegante */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <FloatingCard className="max-w-4xl mx-auto p-12 lg:p-16">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-balance">
                Tranqui, no te vamos a cobrar{" "}
                <GradientText>1000 € por tu landing.</GradientText>
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Y no porque valga menos.<br />
                  Sino porque creemos en <strong className="text-foreground">soluciones reales, accesibles y con sentido.</strong><br />
                  Lo que cuesta DAENA te va a sorprender… y para bien.
                </p>
                
                <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* SECCIÓN 3 – Problema elegante */}
      <section className="py-24 lg:py-32 bg-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="flex-1 animate-scale-in">
              <FloatingCard className="p-4">
                <img 
                  src={problemElegant} 
                  alt="Persona frustrada con su presencia online" 
                  className="w-full rounded-xl"
                />
              </FloatingCard>
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="animate-fade-up">
                <Badge variant="secondary" className="mb-6 bg-destructive/10 text-destructive border-destructive/20">
                  ❌ El problema real
                </Badge>
                
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-balance">
                  Tu presencia online importa,{" "}
                  <GradientText>aunque nadie te lo diga.</GradientText>
                </h2>
              </div>
              
              <div className="space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <p className="text-xl text-muted-foreground">
                  Muchos posibles clientes entran en tu perfil y…
                </p>
                
                <div className="space-y-4">
                  {[
                    "no ven web.",
                    "O ven una que no transmite lo que haces.",
                    "O directamente te da pereza compartirla."
                  ].map((item, index) => (
                    <FloatingCard key={index} className="p-4" delay={index * 100}>
                      <p className="text-lg text-muted-foreground">• {item}</p>
                    </FloatingCard>
                  ))}
                </div>
                
                <FloatingCard className="p-6 border-destructive/20 bg-destructive/5" delay={300}>
                  <p className="text-lg font-semibold text-destructive">
                    Eso te está costando oportunidades.<br />
                    Clientes, ventas y conexiones que ni sabes que estás perdiendo.
                  </p>
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 – Solución premium */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">
            <div className="flex-1 animate-scale-in">
              <FloatingCard className="p-4">
                <img 
                  src={solutionSuccess} 
                  alt="Éxito con landing page profesional" 
                  className="w-full rounded-xl"
                />
              </FloatingCard>
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="animate-fade-up">
                <Badge variant="secondary" className="mb-6 bg-green-500/10 text-green-600 border-green-500/20">
                  ✨ La solución
                </Badge>
                
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-balance">
                  Una landing que representa,{" "}
                  <GradientText>emociona… y convierte.</GradientText>
                </h2>
              </div>
              
              <div className="space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <FloatingCard className="p-6">
                  <p className="text-xl leading-relaxed">
                    <strong className="text-primary font-bold">DAENA no solo diseña.</strong><br />
                    Traduce lo que haces en una página que emociona, aclara y convierte.
                  </p>
                </FloatingCard>
                
                <FloatingCard className="p-6 border-primary/20 bg-primary/5" delay={200}>
                  <p className="text-xl leading-relaxed">
                    Con una landing profesional, tus clientes lo entienden todo de un vistazo.<br />
                    <strong className="text-primary">Confían más. Te contactan antes.</strong><br />
                    Y sí: <GradientText className="font-bold">empiezas a cobrar más y con más seguridad.</GradientText>
                  </p>
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 – Features premium */}
      <section className="py-24 lg:py-32 bg-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              🛠 Todo incluido
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-balance max-w-4xl mx-auto">
              No necesitas saber de diseño, copy o web.<br />
              <GradientText>Solo contarnos quién eres.</GradientText>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Check className="w-8 h-8" />, 
                title: "Diseño visual premium",
                text: "Limpio, moderno y emocional" 
              },
              { 
                icon: <Pencil className="w-8 h-8" />, 
                title: "Textos que conectan",
                text: "Que suenan a ti (o incluso mejor)" 
              },
              { 
                icon: <Monitor className="w-8 h-8" />, 
                title: "Todo técnico incluido",
                text: "Hosting, dominio y soporte incluidos" 
              },
              { 
                icon: <Clock className="w-8 h-8" />, 
                title: "Entrega rápida",
                text: "Lista en 7 días garantizados" 
              },
              { 
                icon: <Heart className="w-8 h-8" />, 
                title: "Mejora continua",
                text: "Actualización semestral gratuita" 
              },
              { 
                icon: <Shield className="w-8 h-8" />, 
                title: "Garantía emocional",
                text: "7 días para enamorarte o la rehacemos gratis" 
              }
            ].map((feature, index) => (
              <FloatingCard key={index} className="p-8 text-center group" delay={index * 100}>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground shadow-lavender-md group-hover:shadow-glow group-hover:animate-bounce-gentle transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 – Garantía premium */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <FloatingCard className="max-w-4xl mx-auto p-12 lg:p-16">
            <div className="space-y-8">
              <div className="flex justify-center animate-glow">
                <img 
                  src={premiumShield} 
                  alt="Sello de garantía premium DAENA" 
                  className="w-24 h-24 lg:w-32 lg:h-32"
                />
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-balance">
                Tienes 7 días para{" "}
                <GradientText>enamorarte de tu landing.</GradientText>
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Si no sientes que te representa, te la rehacemos gratis.<br />
                <strong className="text-primary">Así de simple.</strong>
              </p>
              
              <Badge variant="secondary" className="text-lg px-8 py-3 bg-gradient-primary text-primary-foreground border-none shadow-lavender-md">
                💝 Garantía emocional DAENA
              </Badge>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* SECCIÓN 7 – Testimonios premium */}
      <section className="py-24 lg:py-32 bg-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              💬 Testimonios reales
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-balance">
              Lo que dicen quienes ya{" "}
              <GradientText>confiaron en DAENA:</GradientText>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { message: "Parece que la escribí yo.", author: "María", rating: 5 },
              { message: "En 48h ya me contactaron.", author: "Carlos", rating: 5 },
              { message: "Ahora cobro con más confianza. Y se nota.", author: "Ana", rating: 5 }
            ].map((testimonial, index) => (
              <FloatingCard key={index} className="p-8" delay={index * 100}>
                <div className="space-y-4">
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg font-medium text-foreground text-center">
                    "{testimonial.message}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2 text-primary-foreground font-bold">
                      {testimonial.author[0]}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">- {testimonial.author}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 – Planes premium */}
      <section id="planes" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              💸 Precio transparente
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-balance">
              Tu presencia online,{" "}
              <GradientText>sin complicaciones.</GradientText><br />
              Tú eliges el ritmo.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plan mensual */}
            <FloatingCard className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Plan mensual</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold text-primary">97 €</div>
                    <div className="text-muted-foreground">diseño + copy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold text-primary">19,99 €</div>
                    <div className="text-muted-foreground">/mes (11 meses)</div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Soporte estándar",
                  "Mejora incluida",
                  "Precio/día: 0,90 €"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <MagneticButton variant="premium" className="w-full text-lg py-6">
                👉 Empezar con este plan
              </MagneticButton>
            </FloatingCard>

            {/* Plan anual PRO */}
            <FloatingCard className="p-8 lg:p-10 border-primary/40 bg-gradient-to-b from-primary/5 to-primary/10 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-primary text-primary-foreground shadow-lavender-sm">
                  ⭐ Recomendado
                </Badge>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Plan anual PRO</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold">
                      <GradientText>79 €</GradientText>
                    </div>
                    <div className="text-muted-foreground">en promo limitada</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold">
                      <GradientText>199 €</GradientText>
                    </div>
                    <div className="text-muted-foreground">/año (3 meses GRATIS)</div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Soporte prioritario",
                  "Mejora incluida",
                  "Precio/día: 0,76 €"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <MagneticButton variant="aurora" className="w-full text-lg py-6">
                👉 Empezar con este plan
              </MagneticButton>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* SECCIÓN 9 – CTA final épico */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora opacity-10" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <FloatingCard className="max-w-5xl mx-auto p-12 lg:p-20 bg-gradient-to-b from-background/95 to-primary/5 border-primary/20">
            <div className="space-y-12">
              <div className="animate-fade-up">
                <Badge variant="secondary" className="mb-8 bg-gradient-primary text-primary-foreground border-none shadow-lavender-md text-lg px-6 py-3">
                  🎯 Es tu momento
                </Badge>
                
                <h2 className="text-4xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
                  Tu marca no necesita otra web más.<br />
                  <GradientText className="block">Necesita una landing con alma.</GradientText>
                </h2>
              </div>
              
              <div className="relative inline-block animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="absolute inset-0 bg-gradient-aurora opacity-30 rounded-3xl blur-2xl animate-glow" />
                <MagneticButton 
                  variant="cta" 
                  className="relative z-10 text-xl lg:text-2xl px-12 py-8 rounded-3xl font-bold shadow-aurora hover:shadow-glow"
                >
                  👉 Sí, quiero mi landing DAENA
                  <Sparkles className="w-6 h-6 ml-3" />
                </MagneticButton>
              </div>
              
              <div className="animate-fade-up" style={{ animationDelay: '500ms' }}>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">Entrega en 7 días. Textos incluidos. Garantía emocional.</strong>
                </p>
                
                <div className="flex justify-center items-center gap-8 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Sin compromisos
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    100% seguro
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Hecho con amor
                  </div>
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
};

export default Index;