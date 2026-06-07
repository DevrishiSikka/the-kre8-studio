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
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
  color: "black" | "blue" | "orange";
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
