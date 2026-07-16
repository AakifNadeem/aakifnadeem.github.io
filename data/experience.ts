export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    company: "Numrah",
    role: "Senior iOS Developer",
    period: "Jan 2024 — Present",
    location: "Remote",
    summary:
      "Leading iOS engineering for a social product serving 60,000+ daily active users, with ownership across release quality, stability and scalable feature delivery.",
    achievements: [
      "Implemented 20+ custom SwiftUI/UIKit animations, Dark Mode and modern interaction patterns.",
      "Built XCTest and UI automation suites to improve CI/CD reliability and release confidence.",
      "Modernized architecture and integrated Statsig, Bugsee, Codex and Claude, reducing debugging time by 30%."
    ]
  },
  {
    company: "FiveRivers Technologies",
    role: "Senior iOS Developer",
    period: "Jan 2023 — Jan 2024",
    summary:
      "Led a new iOS product from concept to release using agile delivery and secure cloud-backed infrastructure.",
    achievements: [
      "Created a SwiftUI image-detection framework that reduced app load time by 20% and increased interaction by 10%.",
      "Integrated WalletConnect for secure wallet connectivity and Web3 product flows.",
      "Worked with stakeholders to turn product requirements into a maintainable, release-ready mobile experience."
    ]
  },
  {
    company: "Synavos Solutions",
    role: "iOS Developer",
    period: "Oct 2021 — Jan 2023",
    summary:
      "Delivered performance, engagement and release-process improvements across production iOS applications.",
    achievements: [
      "Implemented advanced data caching that improved app performance by 30%.",
      "Integrated CI/CD pipelines, cutting build time by 50% and improving code-review efficiency.",
      "Built push-notification experiences that increased re-engagement and supported business growth."
    ]
  },
  {
    company: "COEUS Solutions GmbH",
    role: "iOS Developer",
    period: "Oct 2019 — Oct 2021",
    summary:
      "Built and improved mobile products while introducing stronger engineering patterns and delivery practices.",
    achievements: [
      "Added modern design patterns that improved code quality and reduced application crashes by 30%.",
      "Streamlined development and release management, helping deliver updates ahead of schedule.",
      "Led development work on logistics applications that improved operational efficiency."
    ]
  }
];
