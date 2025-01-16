"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Cookie } from "lucide-react";

interface CookiePreferences {
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Controlla se l'utente ha già espresso le sue preferenze
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      analytics: true,
      functional: true,
      marketing: true,
    });
    localStorage.setItem("cookie-consent", "all");
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      analytics: false,
      functional: false,
      marketing: false,
    });
    localStorage.setItem("cookie-consent", "essential");
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-border/50 backdrop-blur-sm p-4"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Questo sito utilizza cookie per migliorare l'esperienza utente. 
                    Puoi accettarli tutti, rifiutarli o personalizzare le impostazioni.
                    Consulta la nostra <a href="/cookies" className="text-amber-500 hover:text-amber-400">Cookie Policy</a>.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowPreferences(true)}
                  >
                    Personalizza
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRejectAll}
                  >
                    Rifiuta tutti
                  </Button>
                  <Button
                    size="sm"
                    className="bg-amber-500 hover:bg-amber-600 text-black"
                    onClick={handleAcceptAll}
                  >
                    Accetta tutti
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              Preferenze Cookie
            </DialogTitle>
            <DialogDescription>
              Personalizza le tue preferenze sui cookie. I cookie essenziali non possono essere disattivati.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Cookie Essenziali</div>
                <div className="text-sm text-muted-foreground">
                  Necessari per il funzionamento del sito
                </div>
              </div>
              <Switch checked disabled />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Cookie Analitici</div>
                <div className="text-sm text-muted-foreground">
                  Ci aiutano a migliorare il sito
                </div>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: checked }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Cookie Funzionali</div>
                <div className="text-sm text-muted-foreground">
                  Per funzionalità avanzate
                </div>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, functional: checked }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Cookie Marketing</div>
                <div className="text-sm text-muted-foreground">
                  Per pubblicità personalizzata
                </div>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowPreferences(false)}>
              Annulla
            </Button>
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-black"
              onClick={handleSavePreferences}
            >
              Salva preferenze
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}