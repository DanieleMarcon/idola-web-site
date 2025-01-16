"use client";

import { motion } from "framer-motion";
import { Brain, Award, Users, Rocket } from "lucide-react";

const milestones = [
  {
    year: 2020,
    title: "Fondazione di Idola",
    description: "Nasce con la visione di innovare il futuro digitale",
    icon: Brain,
  },
  {
    year: 2021,
    title: "Primi Successi",
    description: "Lancio delle prime soluzioni AI e blockchain",
    icon: Award,
  },
  {
    year: 2022,
    title: "Espansione del Team",
    description: "Crescita del team e apertura nuove sedi",
    icon: Users,
  },
  {
    year: 2023,
    title: "Innovazione Continua",
    description: "Lancio piattaforma metaverso e soluzioni VR/AR",
    icon: Rocket,
  },
];

export default function AboutPage() {
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
              Chi Siamo
            </h1>
            <p className="text-lg text-muted-foreground">
              Idola è un'azienda leader nell'innovazione tecnologica, specializzata in soluzioni
              all'avanguardia per AI, Blockchain, VR/AR e Metaverso. La nostra missione è
              trasformare il futuro digitale attraverso tecnologie innovative e sostenibili.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-8"
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'order-2'}`}>
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : ''}`}>
                      <span className="text-4xl font-bold text-amber-500">{milestone.year}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}