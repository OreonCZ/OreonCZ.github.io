# OZ GAMEDEV — Web Portfolio 🗡️

A dark fantasy, gothic game developer HUD web portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Inspired by Souls-like games, retro CRTs, and high-performance game HUDs.

---

## 🎮 Features

- 💀 **Souls-Like HUD Aesthetic**: Monospace technical tags (`// GAME DEVELOPER`, `// GAMEPLAY.GIF`), viewfinder corner crosses (`+`), and custom scanlines.
- 🗡️ **Gothic Sigil & Pixel Art**: Handcrafted vector illustrations for dark fantasy gameplay scenes, knight portraits, and project crests.
- 📊 **RPG Status Elements**: Live RPG gauges (`HP`, `ST`, `MP`), soul counter, and window controls.
- 🕹️ **Authentic Project Showcase**:
  - **Catfighter: In the Lands of Sinners** (Steam)
  - **Breakout!** (C / SDL2)
  - **OsuCraft** (Browser Rhythm Game)
  - **Steelware.co** (FNAF-Inspired Web Game)
  - **TrashIT** (MERN Stack Platform)
- 📱 **Adaptive Layout**: Fixed left HUD sidebar on desktop, responsive top header and drawer on mobile.
- ⚡ **Zero Overhead**: Static site output (~50 KB) with near-zero runtime JavaScript.

---

## 🚀 Getting Started

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates optimized static HTML in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customization

All portfolio content, projects, skills, and links can be customized in **`src/data/portfolio.ts`**:

```typescript
export const portfolioConfig = {
  personal: {
    handle: "OREONCZ",
    brand: "OZ GAMEDEV",
    name: "Filip Kučera",
    role: "GAME DEVELOPER",
    tagline: "CRAFTING DARK WORLDS & EXPERIENCES.",
    // ...
  },
  // ...
};
```

---

## 📂 Architecture

```text
/
├── public/
│   └── favicon.svg               # OZ monogram icon
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   ├── GameplayScene.astro   # Pixel boss fight scene
│   │   │   ├── KnightPortrait.astro  # Armored knight avatar
│   │   │   ├── GothicSigil.astro     # Sword crest art
│   │   │   └── ProjectIcons.astro    # 5 project logos
│   │   ├── Navbar.astro          # Desktop sidebar + mobile header
│   │   ├── Hero.astro            # Intro & gameplay viewport
│   │   ├── About.astro           # Bio & knight portrait
│   │   ├── Projects.astro        # 5-card project showcase
│   │   ├── ProjectCard.astro     # Individual game card
│   │   ├── HudWidgets.astro      # Skills, Recent Project, Status
│   │   ├── Contact.astro         # Direct transmission & castle
│   │   └── Footer.astro          # Bottom status ticker
│   ├── data/
│   │   └── portfolio.ts          # Authentic portfolio data
│   ├── layouts/
│   │   └── Layout.astro          # Window frame HUD wrapper
│   ├── pages/
│   │   └── index.astro           # Aggregated page
│   └── styles/
│       └── global.css            # CRT scanlines & HUD corners
```
