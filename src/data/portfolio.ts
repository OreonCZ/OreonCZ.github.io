import type { Images } from "@/components/icons/ProjectIcons.astro";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  genre: string;
  tags: string[];
  iconType: Images;
  link: string;
  linkType: 'STEAM' | 'GITHUB' | 'WEB';
  featured?: boolean;
}

export interface SkillProgress {
  name: string;
  level: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioConfig {
  personal: {
    handle: string;
    brand: string;
    name: string;
    role: string;
    tagline: string;
    subtagline: string;
    bioParagraphs: string[];
    location: string;
    status: string;
    email: string;
    version: string;
  };
  experiences: ExperienceItem[];
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    steam: string;
    email: string;
  };
  skillsProgress: SkillProgress[];
  allSkills: string[];
  projects: ProjectItem[];
  recentProject: {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    steamLink: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    handle: "OREONCZ",
    brand: "OREONCZ",
    name: "Filip Kučera",
    role: "STUDENT & DEVELOPER & COFFAINE ENJOYER",
    tagline: "CRAFTING WORLDS & EXPERIENCES WITH SOUL.",
    subtagline: "Independent game developer, artist, and software engineering student with a deep passion for unique projects with soul and depth, dark/retro aesthetics, and challenging gameplay mechanics.",
    bioParagraphs: [
      "I successfully graduated from the Secondary Technical School in Mladá Boleslav (SPSMB), specializing in Information Technology. This background honed both my logical programming foundation and creative imagination to build immersive interactive experiences. I believe every project needs depth and a distinct identity to truly stand out. For example:",
      "My most ambitious project so far is 'Catfighter: In the Lands of Sinners', a dark fantasy souls-like action visual novel that I developed and released on Steam for 4$. I poured immense dedication into its pixel art, depth, story, and challenging combat. In my free time, my friends and I are working on a brand new game called 'Borders of Dreamland'.",
      "Currently pursuing higher education at VSB-TUO (Technical University of Ostrava). When I'm not doing something code oriented, you'll find me running in the woods while listening to heavy metal music (training for circle pits at metal festivals wooooo + best therapy), drawing digital art for our next project (Borders of Dreamland), drawing pixel sprites and animations, geeking out about Pokémon TCG, playing cute cozy videogames for relaxation (brutal), or chilling with my bearded dragon Kirby! 🦎"
    ],
    location: "Czech Republic (VSB-TUO)",
    status: "Open to work",
    email: "oreoncz@gmail.com",
    version: "VER. 1.0.0"
  },
  experiences: [
    {
      role: "Solo Game Developer",
      company: "Catfighter: In the Lands of Sinners",
      period: "Sep 2023 – now",
      description: "Full-cycle indie game development published on Steam. Designed gameplay mechanics in Unity & C#, animated all pixel art sprites and tiles, designed levels, and coordinated Steam store release."
    },
    {
      role: "MyŠkoda App Tester",
      company: "Škoda Auto",
      period: "Apr 2023, Apr 2024",
      description: "QA and manual testing for the official MyŠkoda automotive mobile application, verifying vehicle connectivity, UX flows, and release stability."
    }
  ],
  socials: {
    github: "https://github.com/OreonCZ",
    linkedin: "https://www.linkedin.com/in/filip-ku%C4%8Dera-592929294/",
    instagram: "https://www.instagram.com/oreoncz/",
    steam: "https://store.steampowered.com/app/3664280/Catfighter_In_the_Lands_of_Sinners/?beta=0",
    email: "mailto:oreoncz@gmail.com"
  },
  skillsProgress: [
    { name: "UNITY", level: 100 },
    { name: "C#, C++, C", level: 100 },
    { name: "SOFT SKILLS", level: 100 },
    { name: "PIXEL & DIGITAL ART", level: 100 },
    { name: "JAVASCRIPT / TS", level: 90 }
  ],
  allSkills: [
    "Unity Engine",
    "AI",
    "Networking",
    "Figma",
    "Aseprite",
    "C / Assembly",
    "SDL2",
    "TypeScript / JavaScript",
    "MERN Stack",
    "Linux",
    "Electron",
    "Git"
  ],
  projects: [
      {
      id: "dreamland",
      title: "BORDERS OF DREAMLAND",
      subtitle: "Surreal political horror",
      description: "In Development",
      genre: "Surreal horror with political background",
      tags: ["Unity", "C#", "Pixel Art", "Blender", "Steam"],
      iconType: "null",
      link: "https://github.com/RadekPelikan/pre-gamejam-2026",
      linkType: "GITHUB",
      featured: true
    },
    {
      id: "catfighter",
      title: "CATFIGHTER: IN THE LANDS OF SINNERS",
      subtitle: "Souls-like RPG",
      description: "Souls-like open-world visual novel with cute cats and creepy elements. Available on Steam for 4€.",
      genre: "Souls-like RPG",
      tags: ["Unity", "C#", "Pixel Art", "Steam"],
      iconType: "catfighter",
      link: "https://store.steampowered.com/app/3664280/Catfighter_In_the_Lands_of_Sinners/?beta=0",
      linkType: "STEAM",
      featured: true
    },
    {
      id: "breakout",
      title: "BREAKOUT!",
      subtitle: "2D Arcade",
      description: "My first semester project: classic retro breakout game built with SDL2 library in pure C.",
      genre: "2D Arcade",
      tags: ["C", "SDL2", "Retro"],
      iconType: "breakout",
      link: "https://github.com/OreonCZ/Breakout",
      linkType: "GITHUB"
    },
    {
      id: "osucraft",
      title: "OSUCRAFT",
      subtitle: "Rhythm Game",
      description: "Minecraft-inspired rhythm game. BEWARE! Touch that creeper or he's going to explode. Playable in browser.",
      genre: "Rhythm Game",
      tags: ["JavaScript", "HTML5", "Audio"],
      iconType: "osucraft",
      link: "https://oreoncz.github.io/OsuCraft/",
      linkType: "WEB"
    },
    {
      id: "steelware",
      title: "STEELWARE.CO",
      subtitle: "FNAF-Inspired",
      description: "FNAF-inspired survival horror game made by me and my team. Play for free in browser.",
      genre: "FNAF-Inspired",
      tags: ["Web", "Horror", "Game Dev"],
      iconType: "steelware",
      link: "https://vojtakdo.github.io/FNAF/",
      linkType: "WEB"
    },
    {
      id: "trashit",
      title: "TRASHIT",
      subtitle: "MERN Website",
      description: "Full-stack MERN website platform for recycling and reselling vintage electronic gear.",
      genre: "MERN Website",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      iconType: "trashit",
      link: "https://github.com/HonzaJeMocDobrej/TrashIT",
      linkType: "GITHUB"
    }
  ],
  recentProject: {
    title: "CATFIGHTER: IN THE LANDS OF SINNERS",
    subtitle: "Souls-like action RPG with pixel art visuals and dark fantasy world.",
    description: "Final graduation project: an expansive open-world dark fantasy visual novel where feline champions battle demonic horrors.",
    link: "https://store.steampowered.com/app/3664280/Catfighter_In_the_Lands_of_Sinners/?beta=0",
    steamLink: "https://store.steampowered.com/app/3664280/Catfighter_In_the_Lands_of_Sinners/?beta=0"
  }
};
