# IDOLA - Advanced Technology Solutions

IDOLA is a modern web application built with Next.js, showcasing advanced technology solutions in AI, Blockchain, VR/AR, and Metaverse.

## Project Structure

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
│   │   └── [shadcn/ui components]
│   ├── chat-panel.tsx
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

## Features

- Modern, responsive design with Tailwind CSS
- Dark mode support
- Internationalization (i18n) support for Italian, English, and Spanish
- Interactive components with Framer Motion animations
- Carousel with autoplay
- Cookie consent management
- Contact form with validation
- Admin dashboard
- Chat interface with AI assistant
- SEO optimized
- Fully responsive navigation
- Parallax scrolling effects
- Performance optimized images and assets

## Technologies Used

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- shadcn/ui
- Lucide Icons
- Embla Carousel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/idola.git
```

2. Install dependencies:
```bash
cd idola
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please reach out to us at contact@idola.com