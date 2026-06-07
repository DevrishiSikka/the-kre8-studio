import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Understand the business, audience, vibe, competitors and visual territory.",
    bg: "white",
    text: "black",
    numberTone: "gray",
    icon: "search",
    rotation: "-rotate-[3deg]",
    offsetY: "-translate-y-3",
  },
  {
    number: "02",
    title: "DISTORT",
    description:
      "Break the obvious. Push typography, color, layout and references until it feels original.",
    bg: "blue",
    text: "white",
    numberTone: "blue",
    icon: "bolt",
    rotation: "rotate-[3deg]",
    offsetY: "translate-y-4",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Build the logo, website, social system and assets into one sharp identity.",
    bg: "orange",
    text: "black",
    numberTone: "orange",
    icon: "pen",
    rotation: "-rotate-[2deg]",
    offsetY: "-translate-y-1",
  },
  {
    number: "04",
    title: "DEPLOY",
    description:
      "Prepare final files, guidelines, responsive pages and launch-ready brand material.",
    bg: "black",
    text: "white",
    numberTone: "dark",
    icon: "rocket",
    rotation: "rotate-[2deg]",
    offsetY: "translate-y-2",
  },
];
