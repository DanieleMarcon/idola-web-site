"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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

export function WhyChooseUs() {
  return (
    <section 
      className="w-full bg-fixed bg-cover bg-center py-24"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="container mx-auto px-4">
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
                <Card className="h-full bg-black/40 backdrop-blur-sm border-border/50 hover:border-amber-500/50 transition-colors">
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
    </section>
  );
}