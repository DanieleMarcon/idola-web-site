"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Glasses, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    description: "Soluzioni AI avanzate per automatizzare processi e prendere decisioni intelligenti.",
    features: [
      "Machine Learning personalizzato",
      "Natural Language Processing",
      "Computer Vision",
      "Automazione dei processi",
    ],
  },
  {
    icon: Cpu,
    title: "Blockchain",
    description: "Tecnologia blockchain sicura e scalabile per transazioni e smart contracts.",
    features: [
      "Smart Contracts",
      "DeFi Solutions",
      "NFT Marketplace",
      "Blockchain privata",
    ],
  },
  {
    icon: Glasses,
    title: "VR/AR",
    description: "Esperienze immersive in realtà virtuale e aumentata per il tuo business.",
    features: [
      "Applicazioni VR personalizzate",
      "AR per marketing",
      "Training virtuale",
      "Visualizzazione 3D",
    ],
  },
  {
    icon: Globe,
    title: "Metaverso",
    description: "Entra nel futuro digitale con le nostre soluzioni per il metaverso.",
    features: [
      "Ambienti virtuali",
      "Asset digitali",
      "Eventi nel metaverso",
      "Integrazione Web3",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              I Nostri Servizi
            </h1>
            <p className="text-lg text-muted-foreground">
              Scopri le nostre soluzioni tecnologiche all'avanguardia per trasformare
              il tuo business e prepararlo per il futuro digitale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-black/50 border-border/50 backdrop-blur-sm hover:border-amber-500/50 transition-colors h-full">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-amber-500 mb-4" />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="secondary" className="w-full">
                        Scopri di più
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}