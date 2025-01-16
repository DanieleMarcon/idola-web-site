"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-amber-950/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Brain className="w-16 h-16 mx-auto mb-8 text-amber-500" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-500">
                Il Futuro è Qui
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Scopri le nostre soluzioni innovative in AI, Blockchain, VR/AR e
                Metaverso. Trasforma la tua visione in realtà con Idola.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black"
                onClick={() => setIsChatOpen(!isChatOpen)}
              >
                {isChatOpen ? "Chiudi Chat" : "Parla con IDOLA AI"}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12"
            >
              <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-amber-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Chat Section */}
      <motion.section
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isChatOpen ? "auto" : 0,
          opacity: isChatOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="bg-black/50 border-y border-border/50 overflow-hidden"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-amber-500" />
                <h3 className="font-semibold">IDOLA AI Assistant</h3>
              </div>
              
              <div className="h-[400px] bg-black/30 rounded-lg p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Ciao! Sono IDOLA AI. Come posso aiutarti oggi?</p>
                      {currentTime && (
                        <time className="text-xs opacity-70 mt-1 block">
                          {currentTime}
                        </time>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Scrivi un messaggio..."
                  className="flex-1 rounded-md bg-secondary p-2 text-sm"
                />
                <Button>Invia</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}