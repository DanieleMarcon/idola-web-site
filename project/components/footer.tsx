import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { IdolaLogo } from "@/components/idola-logo";

const footerLinks = {
  company: [
    { label: "Chi Siamo", href: "/about" },
    { label: "Servizi", href: "/services" },
    { label: "Contatti", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Termini di Servizio", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/idola-ai", icon: Linkedin },
    { label: "Instagram", href: "https://instagram.com/idola.ai", icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <IdolaLogo size={32} />
              <span className="text-xl font-bold">IDOLA</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovazione tecnologica per il futuro digitale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legale</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-amber-500 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Idola. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}