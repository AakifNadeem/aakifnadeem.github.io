export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image?: string;
  link?: string;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "FadFed",
    category: "Social platform · Main project",
    description:
      "Leading the modernization of a high-scale social application used by 60,000+ people daily. Migrated a legacy Swift 3 codebase toward a modern SwiftUI architecture while improving performance, maintainability, testing and release quality.",
    highlights: ["25+ features", "SwiftUI migration", "Dark Mode", "iCloud sync", "XCTest & CI/CD"],
    link: "https://apps.apple.com/pk/app/%D9%81%D8%B6%D9%81%D8%B6-%D8%B5%D8%AF%D8%A7%D9%82%D8%A7%D8%AA-%D8%B4%D8%A7%D8%AA-%D8%AA%D8%B9%D8%A7%D8%B1%D9%81-%D8%A7%D8%B5%D8%AF%D9%82%D8%A7%D8%A1/id6759283484",
    featured: true,
    accent: "#8dfc7b"
  },
  {
    title: "4ART",
    category: "Art technology · iOS",
    description:
      "Developed key experiences for artwork registration, authentication, provenance tracking and virtual galleries. Added multilingual navigation and refined the application experience for a global art audience.",
    highlights: ["Virtual gallery", "Artwork authentication", "Provenance", "Localization"],
    image: "/projects/4art.png",
    link: "http://apps.apple.com/us/app/4art/id1493952761",
    accent: "#e8edf2"
  },
  {
    title: "TicketLake",
    category: "Events & entertainment · iOS",
    description:
      "Redesigned chart-heavy interfaces and implemented real-time data updates to make event operations clearer and more responsive. Integrated PayPal to broaden payment options and improve successful transactions.",
    highlights: ["Real-time data", "PayPal", "Event discovery", "Analytics UI"],
    image: "/projects/ticketlake.png",
    link: "https://apps.apple.com/pk/app/ticketlake/id1496918851",
    accent: "#ff5964"
  },
  {
    title: "Hitachi",
    category: "Enterprise technology · Mobile",
    description:
      "Developed a hardware-showcase application from scratch within tight timelines. The product presents industrial systems, events, case studies and technical-support workflows in a focused mobile experience.",
    highlights: ["Built from scratch", "Product catalogue", "Case studies", "Support workflows"],
    image: "/projects/hitachi.jpg",
    link: "https://apps.apple.com/sg/app/marking-and-coding/id1164307957",
    accent: "#e51b23"
  },
  {
    title: "Febys",
    category: "Commerce & real estate · iOS",
    description:
      "Designed the project around VIPER architecture and led two junior iOS developers through delivery. The app combines shopping, discovery, reviews and real-estate opportunities in one consumer platform.",
    highlights: ["VIPER", "Team leadership", "Product discovery", "Ratings & reviews"],
    image: "/projects/febys.png",
    link: "https://apps.apple.com/pk/app/febys/id6446107196",
    accent: "#ff4d4d"
  },
  {
    title: "Energy Radio KSA",
    category: "Media & audio · iOS",
    description:
      "Built a polished radio experience with Chromecast and AirPlay support, enabling listeners to move seamlessly between mobile and connected devices.",
    highlights: ["Chromecast", "AirPlay", "Live radio", "Media playback"],
    image: "/projects/energy-radio.png",
    link: "https://apps.apple.com/sg/app/energy-radio-ksa/id1478691494",
    accent: "#ffd84a"
  },
  {
    title: "EnvisionWell",
    category: "Wellness · Mobile",
    description:
      "A wellness-focused mobile experience designed around clear onboarding, guided journeys and approachable health interactions.",
    highlights: ["Wellness UX", "Guided flows", "Content discovery"],
    image: "/projects/envisionwell.jpg",
    accent: "#b28cff"
  },
  {
    title: "Active Lookup",
    category: "Productivity · Mobile",
    description:
      "A focused lookup and discovery experience centered on fast access to useful information, simple navigation and clear presentation.",
    highlights: ["Search UX", "Fast navigation", "Information design"],
    image: "/projects/active-lookup.png",
    accent: "#5eead4"
  },
  {
    title: "Yahuda",
    category: "Community · Mobile",
    description:
      "A community-driven mobile product with content discovery, engagement flows and a bold visual identity.",
    highlights: ["Community", "Content feeds", "Engagement"],
    image: "/projects/yahuda.jpg",
    accent: "#fb7185"
  },
  {
    title: "Fuel Station",
    category: "Logistics · Mobile",
    description:
      "A utility-first mobile experience for locating and interacting with fuel-station services, designed for speed and clarity in everyday use.",
    highlights: ["Location UX", "Utility flows", "Operational clarity"],
    image: "/projects/fuel-station.jpg",
    accent: "#67e8f9"
  }
];
