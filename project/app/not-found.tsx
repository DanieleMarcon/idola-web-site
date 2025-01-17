"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { i18n } from "@/i18n-config";

export default function RootNotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Pagina non trovata</p>
          <Link href={`/${i18n.defaultLocale}`}>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black">
              <Home className="w-4 h-4 mr-2" />
              Torna alla Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}