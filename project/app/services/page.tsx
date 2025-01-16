"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Glasses, Globe, LayoutGrid, BarChart } from "lucide-react";
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
    icon: LayoutGrid,
    title: "Web Design 3.0",
    description: "Siti web innovativi, performanti e su misura per ogni esigenza aziendale.",
    features: [
      "Siti web 3.0",
      "Chatbot AI",
      "Automazione AI",
      "Integrazione Web3 e SEO avanzato",
    ],
  },
  {
    icon: BarChart,
    title: "AI Marketing Suite",
    description: "L'intelligenza artificiale al servizio della crescita digitale.",
    features: [
      "Automazione e Ottimizzazione delle Campagne",
      "Creazione di Contenuti AI-Driven",
      "Analisi Predittiva e Customer Insights",
      "Chatbot e AI per Engagement e Lead Generation",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto a Trasformare il Tuo Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Prenota una call gratuita con i nostri esperti per scoprire come possiamo aiutarti
              a raggiungere i tuoi obiettivi.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black"
              onClick={() => window.open('https://calendly.com/idola-info/30min', '_blank')}
            >
              Prenota una Call Gratuita
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}