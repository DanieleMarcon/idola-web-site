"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    icon: Brain,
    title: "Esplora IDOLA AI",
    description: "Scopri come il nostro assistente AI può aiutarti a trovare le informazioni di cui hai bisogno.",
    action: "Prova l'assistente AI",
  },
  {
    icon: MessageSquare,
    title: "Interazione Naturale",
    description: "Comunica con IDOLA AI in modo naturale, ponendo domande sui nostri servizi e soluzioni.",
    action: "Inizia una conversazione",
  },
  {
    icon: Lightbulb,
    title: "Contenuti Personalizzati",
    description: "Ricevi risposte personalizzate e contenuti dinamici basati sulle tue esigenze specifiche.",
    action: "Esplora i contenuti",
  },
];

export default function TutorialPage() {
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
              Come Funziona
            </h1>
            <p className="text-lg text-muted-foreground">
              Scopri come utilizzare al meglio IDOLA AI e tutte le funzionalità
              della nostra piattaforma.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="bg-black/50 border-border/50 backdrop-blur-sm hover:border-amber-500/50 transition-colors h-full">
                      <CardHeader>
                        <Icon className="w-12 h-12 text-amber-500 mb-4" />
                        <CardTitle>{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="secondary" className="w-full group">
                          {step.action}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 p-8 rounded-lg border border-border/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Video Tutorial</h2>
              <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video tutorial coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}