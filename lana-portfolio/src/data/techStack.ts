export type TechItem = {
  name: string;
  icon: string;
  color: string;
};

export type TechCategory = {
  id: string;
  label: string;
  items: TechItem[];
};

export const techStackData: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#000000" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "HTML5", icon: "/icons/html5.svg", color: "#E34F26" },
      { name: "CSS3", icon: "/icons/css3.svg", color: "#1572B6" },
      { name: "Framer Motion", icon: "/icons/framer.svg", color: "#0055FF" },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
      { name: "Express", icon: "/icons/express.svg", color: "#000000" },
      { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#4169E1" },
      { name: "Firebase", icon: "/icons/firebase.svg", color: "#FFCA28" },
      { name: "GraphQL", icon: "/icons/graphql.svg", color: "#E10098" },
      { name: "REST API", icon: "/icons/api.svg", color: "#0096FF" },
      { name: "Prisma", icon: "/icons/prisma.svg", color: "#2D3748" },
    ]
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "GitHub", icon: "/icons/github.svg", color: "#181717" },
      { name: "VS Code", icon: "/icons/vscode.svg", color: "#007ACC" },
      { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
      { name: "Vercel", icon: "/icons/vercel.svg", color: "#000000" },
      { name: "Netlify", icon: "/icons/netlify.svg", color: "#00C7B7" },
      { name: "npm", icon: "/icons/npm.svg", color: "#CB3837" },
      { name: "Webpack", icon: "/icons/webpack.svg", color: "#8DD6F9" },
    ]
  },
  {
    id: "design",
    label: "Design",
    items: [
      { name: "Figma", icon: "/icons/figma.svg", color: "#F24E1E" },
      { name: "Adobe XD", icon: "/icons/adobexd.svg", color: "#FF61F6" },
      { name: "Photoshop", icon: "/icons/photoshop.svg", color: "#31A8FF" },
      { name: "Illustrator", icon: "/icons/illustrator.svg", color: "#FF9A00" },
      { name: "Sketch", icon: "/icons/sketch.svg", color: "#F7B500" },
      { name: "Canva", icon: "/icons/canva.svg", color: "#00C4CC" },
      { name: "Framer", icon: "/icons/framer.svg", color: "#0055FF" },
      { name: "Webflow", icon: "/icons/webflow.svg", color: "#4353FF" },
    ]
  }
];

export function getTechStackCategories(): TechCategory[] {
  return techStackData;
}