"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { IdolaLogo } from "@/components/idola-logo";

export function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <>
      <section 
        className="relative min-h-[90vh] flex items-center justify-center py-16 overflow-hidden bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <IdolaLogo size={300} className="mx-auto mb-6" animate={true} />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-500">
                Il Futuro è Qui
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
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
              className="mt-8"
            >
              <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-amber-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
    </>
  );
}