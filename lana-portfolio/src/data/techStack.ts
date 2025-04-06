export type TechItem = {
    name: string;
    svg: string;
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
        { 
          name: "React", 
          svg: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', 
          color: "#61DAFB" 
        },
        { 
          name: "Next.js", 
          svg: 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white', 
          color: "#000000" 
        },
        { 
          name: "TypeScript", 
          svg: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white', 
          color: "#007ACC" 
        },
        { 
          name: "Tailwind CSS", 
          svg: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white', 
          color: "#38B2AC" 
        },
        { 
          name: "JavaScript", 
          svg: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', 
          color: "#F7DF1E" 
        },
        { 
          name: "HTML5", 
          svg: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', 
          color: "#E34F26" 
        },
        { 
          name: "CSS3", 
          svg: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', 
          color: "#1572B6" 
        },
        { 
          name: "Framer Motion", 
          svg: 'https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue', 
          color: "#0055FF" 
        },
      ]
    },
    {
      id: "backend",
      label: "Backend",
      items: [
        { 
          name: "Node.js", 
          svg: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white', 
          color: "#6DA55F" 
        },
        { 
          name: "Express", 
          svg: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB', 
          color: "#404d59" 
        },
        { 
          name: "MongoDB", 
          svg: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white', 
          color: "#4ea94b" 
        },
        { 
          name: "PostgreSQL", 
          svg: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white', 
          color: "#316192" 
        },
      ]
    },
    // You can add more categories based on your GitHub README badges
    {
      id: "languages",
      label: "Languages",
      items: [
        { 
          name: "Go", 
          svg: 'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white', 
          color: "#00ADD8" 
        },
        { 
          name: "Java", 
          svg: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white', 
          color: "#ED8B00" 
        },
        { 
          name: "PHP", 
          svg: 'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white', 
          color: "#777BB4" 
        },
        { 
          name: "Python", 
          svg: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54', 
          color: "#3670A0" 
        },
        { 
          name: "PowerShell", 
          svg: 'https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white', 
          color: "#5391FE" 
        }
      ]
    },
    {
      id: "aiml",
      label: "AI/ML",
      items: [
        { 
          name: "TensorFlow", 
          svg: 'https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white', 
          color: "#FF6F00" 
        },
        { 
          name: "scikit-learn", 
          svg: 'https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white', 
          color: "#F7931E" 
        },
        { 
          name: "Pandas", 
          svg: 'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white', 
          color: "#150458" 
        },
        { 
          name: "NumPy", 
          svg: 'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white', 
          color: "#013243" 
        },
        { 
          name: "Matplotlib", 
          svg: 'https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black', 
          color: "#ffffff" 
        }
      ]
    }
  ];