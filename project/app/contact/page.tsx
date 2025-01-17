"use client";

import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contattaci</h1>
              <p className="text-lg text-muted-foreground">
                La nostra sede principale si trova a Milano, Italia, ma lavoriamo con clienti in tutto il mondo. 
                Grazie alle nostre soluzioni digitali e al nostro approccio flessibile, possiamo collaborare 
                efficacemente a distanza, garantendo risultati eccellenti ovunque tu sia.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Compila il form sottostante per metterti in contatto con noi. Il nostro team ti risponderà 
                il prima possibile per discutere del tuo progetto e delle tue esigenze.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field */}
                <div hidden>
                  <label>
                    Non compilare questo campo se sei umano: <input name="bot-field" />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="^[A-Za-zÀ-ÿ\s]{2,50}$"
                      title="Inserisci un nome valido (solo lettere)"
                      className="bg-black/50"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="bg-black/50"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Oggetto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    minLength={5}
                    maxLength={100}
                    className="bg-black/50"
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Messaggio *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    minLength={20}
                    maxLength={1000}
                    className="min-h-[150px] bg-black/50"
                    aria-required="true"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Invia Messaggio
                </Button>
              </form>

              <div className="p-8 rounded-lg border border-border/50 backdrop-blur-sm text-center">
                <h3 className="text-xl font-semibold mb-4">Preferisci una Call?</h3>
                <p className="text-muted-foreground mb-6">
                  Prenota una chiamata gratuita di 30 minuti con uno dei nostri esperti per 
                  discutere del tuo progetto e scoprire come possiamo aiutarti.
                </p>
                <Button
                  className="bg-amber-500 hover:bg-amber-600 text-black group"
                  onClick={() => window.open('https://calendly.com/idola-info/30min', '_blank')}
                >
                  Prenota una Call Gratuita
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}