# For Aditi — A Love Letter Website

A beautiful, romantic digital space dedicated to expressing love through an interactive web experience. This project is a personal love letter website built with modern web technologies, featuring timelines, memories, playlists, and interactive elements.

## 🌹 Features

- **Hero Section** - A captivating landing page with a poetic greeting and call-to-action
- **Story Timeline** - An animated timeline showcasing important moments and memories
- **Memory Gallery** - A collection of cherished memories with beautiful imagery
- **Playlist Section** - A curated playlist with dreams and moments
- **Interactive Questions** - Engaging interactive questionnaire experience
- **Responsive Design** - Fully responsive and optimized for all devices
- **Smooth Animations** - Elegant animations powered by Framer Motion
- **Dark Mode Support** - Beautiful dark theme with custom color scheme
- **Accessible UI** - Built with Radix UI components for better accessibility

## 🚀 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Full-Stack**: [TanStack Start](https://tanstack.com/start)
- **UI Components**: [Radix UI](https://www.radix-ui.com) + Custom Components
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) + [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Forms**: [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) validation
- **Data Fetching**: [TanStack React Query](https://tanstack.com/query)
- **Build Tool**: [Vite](https://vitejs.dev)
- **Package Manager**: [Bun](https://bun.sh)
- **Utilities**: [lucide-react](https://lucide.dev) (icons), [date-fns](https://date-fns.org) (date handling)

## 📦 Project Structure

```
aditi-website/
├── src/
│   ├── components/          # Reusable React components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and helpers
│   ├── assets/              # Images and static assets
│   ├── routes/              # Route components and pages
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Home page
│   │   ├── question.tsx     # Question page
│   │   ├── playlist.tsx     # Playlist page
│   │   └── memories.tsx     # Memories page
│   ├── router.tsx           # Router configuration
│   ├── start.ts             # TanStack Start initialization
│   ├── server.ts            # Server setup
│   └── styles.css           # Global styles
├── components.json          # Shadcn/ui config
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## 🛠️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org) 18+ or [Bun](https://bun.sh)
- npm, yarn, pnpm, or Bun as package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aditi-website
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using yarn
   yarn install

   # Or using pnpm
   pnpm install
   ```

3. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

   The site will be available at `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Available Scripts

```bash
# Start development server with hot reload
bun run dev

# Build for production
bun run build

# Build in development mode
bun run build:dev

# Preview production build locally
bun run preview

# Lint code
bun run lint

# Format code with Prettier
bun run format
```

## 📄 Pages

### Home (/)
The landing page featuring:
- Hero section with poetic greeting
- Inspirational quote
- Story timeline with important moments
- Teaser sections for memories and playlist

### Question (/question)
An interactive page for answering special questions

### Memories (/memories)
A gallery showcasing cherished memories with beautiful imagery

### Playlist (/playlist)
A curated playlist page with dreams and special moments

## 🎨 Styling

The project uses Tailwind CSS with custom color variables:
- **Primary Colors**: Rose/Blush tones for romantic feel
- **Typography**: Mix of serif and custom script fonts
- **Dark Theme**: Optimized for comfortable viewing

Custom fonts used:
- **Serif**: Cormorant Garamond (story/elegant text)
- **Sans**: Inter (body text)
- **Script**: Dancing Script (personal touches)

## 🔧 Configuration

### Tailwind CSS
Configuration managed through `tailwind.config.js` with Tailwind CSS 4 and the @tailwindcss/vite plugin.

### TypeScript
Strict TypeScript configuration in `tsconfig.json` for type safety.

### ESLint & Prettier
- ESLint configured for React and React Hooks
- Prettier for consistent code formatting

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components adapt seamlessly across devices.

## 🎯 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| React | ^19.2.0 | UI library |
| TanStack Router | ^1.168.25 | Client routing |
| TanStack Start | ^1.167.50 | Full-stack framework |
| TanStack Query | ^5.83.0 | Data fetching/caching |
| Tailwind CSS | ^4.2.1 | Utility-first CSS |
| Framer Motion | ^12.40.0 | Animation library |
| Radix UI | Latest | Unstyled accessible components |
| React Hook Form | ^7.71.2 | Form management |
| Zod | ^3.24.2 | Schema validation |

## 🚢 Deployment

The project uses Nitro as the server runtime. To deploy:

1. Build the project:
   ```bash
   bun run build
   ```

2. The build output will be in the `.output` directory

3. Deploy to your preferred hosting platform (Vercel, Netlify, Cloudflare, etc.)

## 📝 License

This project is a personal creation made with love.

## 💝 Notes

This website is a personal expression of love and sentiment. Every detail, from the color scheme to the animations, has been carefully chosen to create a beautiful and meaningful experience.

---

**Created with ❤️ by Navmeet**

For Aditi — Forever yours.
