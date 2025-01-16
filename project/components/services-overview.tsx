"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Glasses, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Intelligenza Artificiale",
    description:
      "Soluzioni AI avanzate per automatizzare processi e prendere decisioni intelligenti.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-black/50 border-border/50 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-amber-500 mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/services">
                      <Button variant="secondary" className="w-full">
                        Scopri di più
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}