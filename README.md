# Astro Web Portfolio 🚀

A modern, fast, and fully responsive developer portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## ✨ Features

- ⚡ **Blazing Fast**: Static-site generation with near-zero runtime JavaScript.
- 🎨 **Modern Dark Aesthetic**: Clean slate/indigo design with ambient background glows and subtle animations.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices with a responsive navigation menu.
- 🧩 **Single Data File**: Update all your personal info, projects, skills, and links in **one place** (`src/data/portfolio.ts`).
- 🔍 **SEO & Social Share Ready**: Preconfigured OpenGraph and Twitter card meta tags.
- 📬 **Interactive Contact**: One-click "Copy Email" with feedback and direct mailto links.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: Handcrafted accessible SVG icons (zero icon-pack overhead)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

### 3. Build for Production
```bash
npm run build
```
The optimized production output will be generated in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ✏️ Customizing Your Portfolio

To make this portfolio yours, you only need to edit **`src/data/portfolio.ts`**:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title (e.g., Full-Stack Engineer)",
    tagline: "Your punchy personal tagline...",
    bio: [
      "First paragraph of your bio...",
      "Second paragraph of your bio..."
    ],
    location: "City, Country",
    status: "Available for new opportunities",
    email: "your.email@example.com",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects Completed", value: "15+" }
    ]
  },
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your.email@example.com"
  },
  skills: [
    // Add or adjust your skill categories
  ],
  projects: [
    // Add your projects here
  ],
  experience: [
    // Add your career milestones here
  ]
};
```

---

## 📂 Project Structure

```text
/
├── public/
│   └── favicon.svg           # Developer logo SVG
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # Sticky navigation header
│   │   ├── Hero.astro        # Hero section with CTAs
│   │   ├── About.astro       # Bio and highlights
│   │   ├── Projects.astro    # Featured projects section
│   │   ├── ProjectCard.astro # Individual project card
│   │   ├── Skills.astro      # Categorized skill badges
│   │   ├── Experience.astro  # Work history timeline
│   │   ├── Contact.astro     # Contact CTA box
│   │   └── Footer.astro      # Footer with copyright
│   ├── data/
│   │   └── portfolio.ts      # Central configuration & content
│   ├── layouts/
│   │   └── Layout.astro      # Main HTML wrapper & SEO
│   ├── pages/
│   │   └── index.astro       # Landing page
│   └── styles/
│       └── global.css        # Tailwind directives & base styles
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS theme configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## 🌐 Deployment

This Astro site is completely static and can be deployed anywhere for free:

- **[Vercel](https://vercel.com/)**: Connect your GitHub repository and Vercel will automatically detect Astro and build the project.
- **[Netlify](https://www.netlify.com/)**: Build command: `npm run build`, Publish directory: `dist`.
- **[Cloudflare Pages](https://pages.cloudflare.com/)**: Framework preset: `Astro`, Output directory: `dist`.
- **[GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)**: Use the official Astro GitHub Actions deployment workflow.
