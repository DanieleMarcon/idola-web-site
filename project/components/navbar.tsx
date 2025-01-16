"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Info, BookOpen, Mail, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const routes = [
  { href: "/about", label: "Chi Siamo", icon: Info },
  { href: "/services", label: "Servizi", icon: Info },
  { href: "/contact", label: "Contatti", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-amber-500",
                    pathname === route.href
                      ? "text-amber-500"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{route.label}</span>
                </Link>
              );
            })}
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
                href={route.href}
                className={cn(
                  "flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-accent",
                  pathname === route.href
                    ? "text-amber-500"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="h-4 w-4" />
                <span>{route.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}