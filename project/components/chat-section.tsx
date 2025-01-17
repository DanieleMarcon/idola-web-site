"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { IdolaLogo } from "@/components/idola-logo";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const dataset = [
  {
    id: "001",
    question: "Cos'è l'AI?",
    answer: "L'intelligenza artificiale è un sistema che simula capacità cognitive umane per risolvere problemi e automatizzare processi.",
    context: "Servizi"
  },
  {
    id: "002",
    question: "Offrite soluzioni di Blockchain?",
    answer: "Sì, possiamo integrare la Blockchain in diversi processi aziendali, garantendo sicurezza e trasparenza.",
    context: "Servizi"
  },
  {
    id: "003",
    question: "Come posso contattarvi?",
    answer: "Puoi compilare il modulo di contatto, usare il chatbot per richieste rapide o calendarizzare una call di 30 minuti con i nostri esperti.",
    context: "Contatti"
  },
  {
    id: "004",
    question: "Quali sono i vostri servizi?",
    answer: "Offriamo soluzioni avanzate di AI, Blockchain, VR/AR, sviluppo Metaverso, Web Design 3.0 e AI Marketing Suite personalizzata per aziende.",
    context: "Servizi"
  },
  {
    id: "005",
    question: "Potete fornire esempi di AI applicata?",
    answer: "Certamente! Possiamo mostrarti case study e progetti realizzati in AI per il business.",
    context: "Servizi"
  },
  {
    id: "006",
    question: "Quali vantaggi offre il vostro chatbot?",
    answer: "Il nostro chatbot permette interazioni avanzate e migliora grazie alle interazioni utente.",
    context: "Funzionamento del sito"
  },
  {
    id: "007",
    question: "Come posso navigare nel sito?",
    answer: "Puoi usare il menu principale o il chatbot per esplorare le sezioni Chi Siamo, Servizi e Contatti.",
    context: "Navigazione"
  },
  {
    id: "008",
    question: "Quali sono i costi dei vostri servizi?",
    answer: "I costi dipendono dalle esigenze del progetto. Possiamo fornirti un preventivo personalizzato.",
    context: "Contatti"
  },
  {
    id: "009",
    question: "Come posso usare il chatbot?",
    answer: "Clicca sul pulsante \"Parla con Idola AI\" e inizia la conversazione. Puoi chiedere informazioni sui servizi e navigare nel sito.",
    context: "Funzionamento del chatbot"
  }
];

const quickResponses = [
  "Quali sono i vostri servizi?",
  "Come posso contattarvi?",
  "Cos'è l'AI?",
  "Offrite soluzioni di Blockchain?",
];

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      content: "Ciao! Sono IDOLA AI. Come posso aiutarti oggi?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    const hasTutorial = localStorage.getItem("idola-tutorial");
    if (!hasTutorial) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: "tutorial-1",
          type: "bot",
          content: "👋 Benvenuto! Sono qui per aiutarti a scoprire tutto su IDOLA. Puoi chiedermi informazioni sui nostri servizi o su come contattarci.",
          timestamp: new Date()
        }]);
      }, 1000);
      localStorage.setItem("idola-tutorial", "true");
    }
  }, []);

  const findBestMatch = (input: string) => {
    const normalizedInput = input.toLowerCase();
    let bestMatch = dataset[0];
    let bestScore = 0;

    dataset.forEach(item => {
      const score = similarity(normalizedInput, item.question.toLowerCase());
      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    });

    return bestScore > 0.3 ? bestMatch : null;
  };

  const similarity = (s1: string, s2: string) => {
    const words1 = s1.split(" ");
    const words2 = s2.split(" ");
    let matches = 0;

    words1.forEach(word => {
      if (words2.includes(word)) matches++;
    });

    return matches / Math.max(words1.length, words2.length);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");

    // Find best matching response
    const match = findBestMatch(input);
    
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: match ? match.answer : "Mi dispiace, non ho capito la tua domanda. Puoi riformularla o scegliere una delle domande suggerite?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-black/95 border-y border-border/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <IdolaLogo size={32} />
            <h2 className="text-xl font-semibold">Chat con IDOLA AI</h2>
          </div>

          <ScrollArea className="h-[400px] rounded-lg border border-border/50 bg-black/50 p-4 mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === "user"
                        ? "bg-amber-500 text-black"
                        : "bg-secondary"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <time className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response) => (
                <Button
                  key={response}
                  variant="secondary"
                  size="sm"
                  onClick={() => setInput(response)}
                >
                  {response}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scrivi un messaggio..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}