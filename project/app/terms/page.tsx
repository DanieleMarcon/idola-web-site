"use client";

import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

export default function TermsPage() {
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
              <ScrollText className="w-12 h-12 text-amber-500" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-12">Termini di Servizio</h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Accettazione dei termini</h2>
              <p className="mb-6">
                Utilizzando il sito web di Idola, accetti di essere vincolato dai presenti Termini di 
                Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare il sito.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. Descrizione dei servizi</h2>
              <p className="mb-6">
                Idola fornisce soluzioni tecnologiche avanzate nei settori dell'Intelligenza Artificiale, 
                Blockchain, VR/AR e Metaverso. I servizi specifici sono descritti nelle relative sezioni 
                del sito.
              </p>

              <h2 className="text-2xl font-semibold mb-4">3. Utilizzo dei servizi</h2>
              <p className="mb-4">Ti impegni a:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Fornire informazioni accurate e complete</li>
                <li>Mantenere la riservatezza delle credenziali di accesso</li>
                <li>Utilizzare i servizi in conformità con le leggi applicabili</li>
                <li>Non interferire con il funzionamento del sito</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">4. Proprietà intellettuale</h2>
              <p className="mb-6">
                Tutti i contenuti presenti sul sito (testi, grafica, loghi, immagini, video, ecc.) sono 
                di proprietà di Idola o dei suoi licenzianti e sono protetti dalle leggi sulla proprietà 
                intellettuale.
              </p>

              <h2 className="text-2xl font-semibold mb-4">5. Limitazioni di responsabilità</h2>
              <p className="mb-6">
                Idola fornisce i servizi "così come sono" e non fornisce garanzie di alcun tipo, 
                esplicite o implicite. Non saremo responsabili per danni diretti, indiretti, 
                incidentali o consequenziali derivanti dall'utilizzo dei nostri servizi.
              </p>

              <h2 className="text-2xl font-semibold mb-4">6. Modifiche ai servizi</h2>
              <p className="mb-6">
                Ci riserviamo il diritto di modificare o interrompere, temporaneamente o 
                permanentemente, i servizi con o senza preavviso.
              </p>

              <h2 className="text-2xl font-semibold mb-4">7. Legge applicabile</h2>
              <p className="mb-6">
                Questi Termini di Servizio sono regolati dalle leggi italiane. Qualsiasi controversia 
                sarà soggetta alla giurisdizione esclusiva del foro di Milano.
              </p>

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