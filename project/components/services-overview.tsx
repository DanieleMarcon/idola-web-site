"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Glasses, Globe, LayoutGrid, BarChart, ArrowRight } from "lucide-react";
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
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

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

export function ServicesOverview() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  }, [
    AutoPlay({ delay: 4000, stopOnInteraction: false })
  ]);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-amber-950/10">
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
                        <Card className="bg-black/50 border-border/50 backdrop-blur-sm hover:border-amber-500/50 transition-colors h-full">
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
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black group">
              Scopri tutti i servizi
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}