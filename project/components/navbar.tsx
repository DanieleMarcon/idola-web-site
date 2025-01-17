"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Info, Brain, BookOpen, Mail, Menu, X } from "lucide-react";
import { IdolaLogo } from "@/components/idola-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Locale } from "@/i18n-config";

interface NavDictionary {
  home: string;
  about: string;
  services: string;
  contact: string;
}

interface NavbarProps {
  dictionary: NavDictionary;
  lang: Locale;
}

const getRoutes = (dictionary: NavDictionary) => [
  { href: "/", label: dictionary.home, icon: Home },
  { href: "/about", label: dictionary.about, icon: Info },
  { href: "/services", label: dictionary.services, icon: Brain },
  { href: "/contact", label: dictionary.contact, icon: Mail },
];

export function Navbar({ dictionary, lang }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const routes = getRoutes(dictionary);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === `/${lang}`;
    }
    return pathname === `/${lang}${path}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <IdolaLogo size={50} />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.href}
                  href={`/${lang}${route.href}`}
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-amber-500",
                    isActive(route.href) ? "text-amber-500" : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{route.label}</span>
                </Link>
              );
            })}
            <LanguageSwitcher />
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-border/50 bg-black/95 backdrop-blur-sm">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.href}
                href={`/${lang}${route.href}`}
                className={cn(
                  "flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-accent",
                  isActive(route.href) ? "text-amber-500" : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="h-4 w-4" />
                <span>{route.label}</span>
              </Link>
            );
          })}
          <div className="px-4 py-3">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}