"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Glasses, Globe, LayoutGrid, BarChart, ArrowRight, Shield, Zap, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Brain,
    title: "Intelligenza Artificiale",
    description:
      "Soluzioni AI avanzate per automatizzare processi e prendere decisioni intelligenti.",
  },
  {
    icon: LayoutGrid,
    title: "Web Design 3.0",
    description:
      "Siti web innovativi, performanti e su misura per ogni esigenza aziendale.",
  },
  {
    icon: BarChart,
    title: "AI Marketing Suite",
    description:
      "L'intelligenza artificiale al servizio della crescita digitale.",
  },
  {
    icon: Cpu,
    title: "Blockchain",
    description:
      "Tecnologia blockchain sicura e scalabile per transazioni e smart contracts.",
  },
  {
    icon: Glasses,
    title: "VR/AR",
    description:
      "Esperienze immersive in realtà virtuale e aumentata per il tuo business.",
  },
  {
    icon: Globe,
    title: "Metaverso",
    description:
      "Entra nel futuro digitale con le nostre soluzioni per il metaverso.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Sicurezza Avanzata",
    description: "Protezione dei dati con crittografia di ultima generazione e blockchain.",
  },
  {
    icon: Zap,
    title: "Prestazioni Ottimizzate",
    description: "Soluzioni scalabili e performanti per ogni esigenza.",
  },
  {
    icon: Globe2,
    title: "Accessibilità Globale",
    description: "Piattaforma accessibile da qualsiasi dispositivo, ovunque nel mondo.",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri come le nostre soluzioni tecnologiche possono trasformare il
            tuo business e prepararlo per il futuro digitale.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <CarouselItem key={service.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <Card className="h-full bg-black border-border/50 hover:border-amber-500/50 transition-colors">
                          <CardHeader>
                            <Icon className="w-12 h-12 text-amber-500 mb-4" />
                            <CardTitle>{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-32"
        >
          <Link href="/services">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black group">
              Scopri tutti i servizi
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perché Scegliere Idola
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovazione, sicurezza e performance al servizio del tuo successo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full bg-black border-border/50 hover:border-amber-500/50 transition-colors">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-amber-500 mb-4" />
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black group"
              onClick={() => window.open('https://calendly.com/idola-info/30min', '_blank')}
            >
              Prenota una Call Gratuita
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}