import Link from "next/link";
import { Brain, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Chi Siamo", href: "/about" },
    { label: "Servizi", href: "/services" },
    { label: "Tutorial", href: "/tutorial" },
    { label: "Contatti", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Termini di Servizio", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold">IDOLA</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovazione tecnologica per il futuro digitale. AI, Blockchain,
              VR/AR e Metaverso.
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