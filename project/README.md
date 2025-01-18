# IDOLA - Advanced Technology Solutions

IDOLA è una piattaforma innovativa che offre soluzioni tecnologiche all'avanguardia nei settori dell'Intelligenza Artificiale, Blockchain, VR/AR e Metaverso.

## 🌟 Caratteristiche Principali

- Design moderno e responsive
- Animazioni fluide con Framer Motion
- Carosello automatico dei servizi
- Chat AI integrata
- Sistema di gestione dei cookie
- Area amministrativa protetta
- Integrazione con Supabase per autenticazione e database

## 🛠️ Tecnologie Utilizzate

- **Framework**: Next.js 13 con App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Database**: Supabase
- **Carousel**: Embla Carousel

## 📁 Struttura del Progetto

```
idola/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── cookies/
│   │   └── page.tsx
│   ├── idola-admin/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── tutorial/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   └── tooltip.tsx
│   ├── chat-panel.tsx
│   ├── chat-section.tsx
│   ├── cookie-consent.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── idola-logo.tsx
│   ├── navbar.tsx
│   ├── services-overview.tsx
│   ├── theme-provider.tsx
│   └── why-choose-us.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── Daniele-Marcon.jpg
│   ├── favicon.ico
│   └── logo.png
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Come Iniziare

1. Clona il repository:
```bash
git clone https://github.com/tuouser/idola.git
```

2. Installa le dipendenze:
```bash
cd idola
npm install
```

3. Configura le variabili d'ambiente:
Crea un file `.env.local` e aggiungi:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Avvia il server di sviluppo:
```bash
npm run dev
```

## 📝 Note di Sviluppo

- Il progetto utilizza il nuovo App Router di Next.js 13
- Tutti i componenti che utilizzano hooks React hanno la direttiva "use client"
- Le immagini di sfondo sono ottimizzate e caricate da Unsplash
- Il carosello dei servizi ha autoplay con pausa all'interazione
- La gestione dei cookie è completamente personalizzabile
- L'area admin è protetta con autenticazione Supabase

## 🔒 Sicurezza

- Autenticazione gestita da Supabase
- Cookie policy conforme al GDPR
- Protezione CSRF integrata
- Headers di sicurezza configurati

## 🎨 Design System

- Tema scuro predefinito
- Palette colori personalizzata con accenti ambra
- Componenti UI consistenti da shadcn/ui
- Animazioni fluide e performanti
- Design responsive per tutti i dispositivi

## 📦 Build e Deploy

Per creare una build di produzione:
```bash
npm run build
```

Il progetto è configurato per il deploy statico con:
```javascript
// next.config.js
module.exports = {
  output: 'export'
}
```

## 🤝 Contribuire

Le pull request sono benvenute. Per modifiche importanti, apri prima un issue per discutere cosa vorresti cambiare.

## 📄 Licenza

[MIT](https://choosealicense.com/licenses/mit/)