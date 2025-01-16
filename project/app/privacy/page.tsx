"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
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
              <Shield className="w-12 h-12 text-amber-500" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Informazioni sulla raccolta dei dati personali</h2>
              <p className="mb-6">
                La presente informativa illustra le modalità di raccolta e trattamento dei dati personali 
                quando utilizzi i nostri servizi. I dati personali sono tutte le informazioni che possono 
                essere riferite a te personalmente.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. Responsabile del trattamento</h2>
              <p className="mb-6">
                Il responsabile del trattamento dei dati ai sensi del GDPR è:<br />
                Idola S.r.l.<br />
                Milano, Italia<br />
                Email: privacy@idola.it
              </p>

              <h2 className="text-2xl font-semibold mb-4">3. Finalità del trattamento</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Fornitura dei servizi richiesti</li>
                <li>Miglioramento dell'esperienza utente</li>
                <li>Comunicazioni di marketing (previo consenso)</li>
                <li>Adempimento degli obblighi legali</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">4. Base giuridica</h2>
              <p className="mb-6">
                Il trattamento dei tuoi dati personali avviene sulla base delle seguenti basi giuridiche:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Consenso (Art. 6(1)(a) GDPR)</li>
                <li>Esecuzione di un contratto (Art. 6(1)(b) GDPR)</li>
                <li>Obblighi legali (Art. 6(1)(c) GDPR)</li>
                <li>Legittimo interesse (Art. 6(1)(f) GDPR)</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">5. I tuoi diritti</h2>
              <p className="mb-4">Hai il diritto di:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Accedere ai tuoi dati personali</li>
                <li>Richiedere la rettifica dei dati inesatti</li>
                <li>Richiedere la cancellazione dei dati</li>
                <li>Limitare il trattamento</li>
                <li>Opporti al trattamento</li>
                <li>Ricevere i tuoi dati in formato strutturato (portabilità)</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">6. Contatti per richieste sulla privacy</h2>
              <p className="mb-6">
                Per qualsiasi domanda relativa alla privacy o per esercitare i tuoi diritti, puoi 
                contattarci all'indirizzo email: privacy@idola.it
              </p>

              <h2 className="text-2xl font-semibold mb-4">7. Modifiche alla Privacy Policy</h2>
              <p className="mb-6">
                Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina con la data di ultima modifica.
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