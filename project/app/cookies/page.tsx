"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <Cookie className="w-12 h-12 text-amber-500" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-12">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Cosa sono i cookie</h2>
              <p className="mb-6">
                I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo durante 
                la navigazione. Sono ampiamente utilizzati per far funzionare i siti web o per 
                lavorare in modo più efficiente, oltre che per fornire informazioni ai proprietari del sito.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. Tipologie di cookie utilizzati</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Cookie tecnici essenziali</h3>
              <p className="mb-4">
                Necessari per il funzionamento del sito. Non possono essere disattivati nei nostri sistemi.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Cookie di sessione</li>
                <li>Cookie di sicurezza</li>
                <li>Cookie di preferenze essenziali</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Cookie analitici</h3>
              <p className="mb-4">
                Ci aiutano a capire come gli utenti interagiscono con il sito attraverso la raccolta 
                e la comunicazione di informazioni in forma anonima.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Google Analytics</li>
                <li>Cookie di performance</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.3 Cookie funzionali</h3>
              <p className="mb-4">
                Permettono al sito di fornire funzionalità e personalizzazione avanzate.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Preferenze di visualizzazione</li>
                <li>Lingua selezionata</li>
                <li>Dati di accesso salvati</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">3. Gestione dei cookie</h2>
              <p className="mb-6">
                Puoi modificare le tue preferenze sui cookie in qualsiasi momento attraverso il pannello 
                di gestione cookie accessibile dal footer del sito. Inoltre, la maggior parte dei browser 
                web ti permette di:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Visualizzare i cookie presenti e cancellarli singolarmente</li>
                <li>Bloccare i cookie di terze parti</li>
                <li>Bloccare i cookie di particolari siti</li>
                <li>Bloccare l'installazione di tutti i cookie</li>
                <li>Cancellare tutti i cookie alla chiusura del browser</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">4. Cookie di terze parti</h2>
              <p className="mb-6">
                Alcuni cookie di terze parti vengono impostati da servizi che compaiono sulle nostre pagine.
                Non possiamo controllare direttamente questi cookie. Ti invitiamo a consultare le rispettive
                privacy policy dei servizi elencati:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Google Analytics: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400">Privacy Policy</a></li>
                <li>Supabase: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400">Privacy Policy</a></li>
              </ul>

              <p className="text-sm text-muted-foreground mt-12">
                Ultimo aggiornamento: {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}