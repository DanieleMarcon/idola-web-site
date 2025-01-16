"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Users, MessageSquare, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const stats = [
  {
    icon: Users,
    title: "Utenti Attivi",
    value: "1,234",
    change: "+12%",
  },
  {
    icon: MessageSquare,
    title: "Interazioni Chat",
    value: "5,678",
    change: "+8%",
  },
  {
    icon: Database,
    title: "Dataset AI",
    value: "10GB",
    change: "+15%",
  },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.username,
        password: credentials.password,
      });

      if (error) throw error;
      if (data.user) {
        setIsAuthenticated(true);
      }
    } catch (err: any) {
      setError(err.message || "Errore durante l'accesso");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="bg-black/50 border-border/50">
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>
                Accedi alla dashboard amministrativa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-500 bg-red-500/10 rounded-md">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="username"
                    type="email"
                    value={credentials.username}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Accedi
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Brain className="w-8 h-8 text-amber-500" />
            <h1 className="text-2xl font-bold">IDOLA Admin</h1>
          </div>
          <Button
            variant="ghost"
            onClick={async () => {
              await supabase.auth.signOut();
              setIsAuthenticated(false);
            }}
          >
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.title}
                className="bg-black/50 border-border/50"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.change} rispetto al mese scorso
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="content" className="space-y-4">
          <TabsList>
            <TabsTrigger value="content">Contenuti</TabsTrigger>
            <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="content" className="space-y-4">
            <Card className="bg-black/50 border-border/50">
              <CardHeader>
                <CardTitle>Gestione Contenuti</CardTitle>
                <CardDescription>
                  Gestisci i contenuti del sito
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Aggiungi Nuovo Contenuto
                  </Button>
                  <div className="rounded-lg border border-border/50 p-4">
                    <p className="text-muted-foreground">
                      Nessun contenuto da mostrare
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="chatbot" className="space-y-4">
            <Card className="bg-black/50 border-border/50">
              <CardHeader>
                <CardTitle>Training Chatbot</CardTitle>
                <CardDescription>
                  Gestisci il training del chatbot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Carica Dataset
                  </Button>
                  <div className="rounded-lg border border-border/50 p-4">
                    <p className="text-muted-foreground">
                      Nessun dataset caricato
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card className="bg-black/50 border-border/50">
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Monitora le performance del sito
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] rounded-lg border border-border/50 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Grafici in arrivo
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}