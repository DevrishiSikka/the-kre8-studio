export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  accent: "blue" | "orange";
}

export interface PortfolioItem {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  bg: "white" | "blue" | "orange" | "black";
  text: "black" | "white";
  numberTone: "gray" | "blue" | "orange" | "dark";
  icon: "search" | "bolt" | "pen" | "rocket";
  rotation: string;
  offsetY: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
