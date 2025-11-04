import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join } from 'path';

// Load environment variables from .env.local
const envPath = join(process.cwd(), '.env.local');
try {
  const envContent = readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      process.env[key] = value;
    }
  });
} catch (error) {
  console.error('❌ Error reading .env.local file');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please check your .env.local file');
  console.error('Need: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

// Use service role key to bypass RLS for seeding
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const projects = [
  // === FEATURED AI/ML PROJECTS ===
  {
    title: "Nutrition AI App",
    description: "AI-powered nutrition tracking and meal planning application.",
    long_description: "An intelligent nutrition app that uses AI to analyze food items, track calorie intake, provide personalized meal recommendations, and help users achieve their health goals with smart dietary insights.",
    tags: ["AI", "Machine Learning", "Health", "Nutrition", "Mobile App"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/10b981/ffffff?text=Nutrition+AI+App",
    images: [],
    link: "",
    github: "https://github.com/lana-techn/nutrition-ai-app",
    featured: true,
  },
  {
    title: "AI Trading System",
    description: "Artificial Intelligence-based trading analysis and prediction system.",
    long_description: "An advanced AI trading system that analyzes market trends, provides trading signals, and uses machine learning algorithms to predict market movements and optimize trading strategies.",
    tags: ["AI", "Machine Learning", "Trading", "Finance", "Python"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=AI+Trading+System",
    images: [],
    link: "",
    github: "https://github.com/lana-techn/ai-trading",
    featured: true,
  },
  {
    title: "BacaCerdas AI",
    description: "AI-powered reading comprehension and learning assistant application.",
    long_description: "An intelligent reading application that uses artificial intelligence to help users improve their reading comprehension, vocabulary, and learning efficiency through personalized content and adaptive learning algorithms.",
    tags: ["TypeScript", "AI", "Education", "Machine Learning"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/06b6d4/ffffff?text=BacaCerdas+AI",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/BacaCerdas-AI",
    featured: true,
  },
  {
    title: "AI Voice Agent",
    description: "Intelligent voice-powered AI assistant with natural language processing.",
    long_description: "A sophisticated voice AI agent that can understand and respond to voice commands, perform tasks, and interact naturally with users using advanced speech recognition and NLP technologies.",
    tags: ["TypeScript", "AI", "Voice Recognition", "NLP", "Speech"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=AI+Voice+Agent",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/ai-voice-agent",
    featured: true,
  },
  {
    title: "AI Resume Analyst",
    description: "AI-powered resume analysis and improvement recommendation system.",
    long_description: "An intelligent system that analyzes resumes using AI, provides detailed feedback, suggests improvements, and helps job seekers optimize their resumes for better opportunities.",
    tags: ["JavaScript", "AI", "NLP", "Career", "MIT License"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/f59e0b/ffffff?text=AI+Resume+Analyst",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/ai-resume-analyst",
    featured: true,
  },

  // === MAIN WEB APPLICATIONS ===
  {
    title: "Lana Developer Portfolio",
    description: "Modern portfolio website showcasing projects and skills.",
    long_description: "A comprehensive developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features project showcases, skills display, contact form, and responsive design with smooth animations.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Portfolio"],
    type: "Website",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=Lana+Developer",
    images: [],
    link: "https://lana-developer.vercel.app",
    github: "https://github.com/maulana-tech/Lana-Developer",
    featured: true,
  },
  {
    title: "MarketPlace Web",
    description: "Full-featured e-commerce marketplace built with Laravel 10.",
    long_description: "A comprehensive marketplace platform that allows vendors to create stores, list products, and process orders. Features include user authentication, product search, shopping cart, payment integration, and order management.",
    tags: ["Laravel", "PHP", "MySQL", "Blade"],
    type: "Website",
    image: "https://placehold.co/600x340/f59e0b/ffffff?text=MarketPlace+Web",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/marketplace-project",
    featured: true,
  },
  {
    title: "Social Web Platform",
    description: "Social networking platform built with Next.js.",
    long_description: "A feature-rich social media application with user profiles, posts, comments, likes, friend connections, and real-time notifications. Provides a responsive interface for seamless interaction across devices.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    type: "Website",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Social+Web",
    images: [],
    link: "https://social-web-lake.vercel.app/",
    github: "https://github.com/maulana-tech/social-web",
    featured: true,
  },

  // === BUSINESS & MANAGEMENT SYSTEMS ===
  {
    title: "Sistem Penggajian Guru",
    description: "Teacher salary management system for educational institutions.",
    long_description: "A comprehensive salary management system designed for schools and educational institutions to manage teacher payroll, calculate salaries, track attendance, and generate detailed payroll reports.",
    tags: ["PHP", "MySQL", "Payroll", "Education"],
    type: "Website",
    image: "https://placehold.co/600x340/14b8a6/ffffff?text=Sistem+Penggajian+Guru",
    images: [],
    link: "",
    github: "https://github.com/lana-techn/penggajian-guru",
    featured: false,
  },
  {
    title: "Web Sistem Pengolahan KAS",
    description: "Cash management and accounting system for businesses.",
    long_description: "A complete cash management system for companies to track income, expenses, generate financial reports, and manage daily cash flow operations with an intuitive interface.",
    tags: ["PHP", "MySQL", "Accounting", "Finance"],
    type: "Website",
    image: "https://placehold.co/600x340/0ea5e9/ffffff?text=Sistem+KAS",
    images: [],
    link: "",
    github: "https://github.com/lana-techn/kas-cv",
    featured: false,
  },
  {
    title: "Portal Lomba",
    description: "Competition and event management portal platform.",
    long_description: "A comprehensive platform for organizing and managing competitions, events, and contests. Features registration system, participant management, judging interface, and result announcements.",
    tags: ["TypeScript", "Next.js", "Event Management"],
    type: "Website",
    image: "https://placehold.co/600x340/a855f7/ffffff?text=Portal+Lomba",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/portal-lomba",
    featured: false,
  },
  {
    title: "Task Management System",
    description: "Modern task and project management application.",
    long_description: "A comprehensive task management system built with TypeScript, featuring project organization, task tracking, deadline management, team collaboration, and productivity analytics for efficient workflow management.",
    tags: ["TypeScript", "Task Management", "Productivity"],
    type: "Website",
    image: "https://placehold.co/600x340/14b8a6/ffffff?text=Task+Management",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/task-management",
    featured: false,
  },

  // === E-COMMERCE & MARKETPLACE ===
  {
    title: "SGS Market",
    description: "E-commerce platform for local market products.",
    long_description: "A Laravel-based e-commerce platform designed for local markets, featuring product catalogs, shopping cart, order management, and payment integration with a focus on traditional market products.",
    tags: ["Laravel", "PHP", "Blade", "E-commerce"],
    type: "Website",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=SGS+Market",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/SGS-market",
    featured: false,
  },
  {
    title: "Panuntun Market",
    description: "Traditional market e-commerce platform.",
    long_description: "A PHP-based marketplace platform for traditional markets, providing vendors with digital presence, product management, and online sales capabilities.",
    tags: ["PHP", "MySQL", "E-commerce"],
    type: "Website",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Panuntun+Market",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/panuntun_market",
    featured: false,
  },
  {
    title: "MarketBang SGS HIMASIA",
    description: "Student organization marketplace platform.",
    long_description: "An e-commerce platform developed for HIMASIA student organization, facilitating online transactions and product sales for campus community.",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
    type: "Website",
    image: "https://placehold.co/600x340/f97316/ffffff?text=MarketBang",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/marketBang-SGS-HIMASIA",
    featured: false,
  },
  {
    title: "Tuku WebApp",
    description: "Modern online shopping web application.",
    long_description: "A web-based shopping application with product catalog, shopping cart functionality, and user-friendly interface for seamless online shopping experience.",
    tags: ["HTML", "CSS", "JavaScript", "Shopping"],
    type: "Website",
    image: "https://placehold.co/600x340/22c55e/ffffff?text=Tuku+WebApp",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/tuku-WebApp",
    featured: false,
  },
  {
    title: "Marketplace Dashboard",
    description: "Admin dashboard for marketplace management.",
    long_description: "A comprehensive admin dashboard for managing marketplace operations, including product management, order tracking, user management, and analytics.",
    tags: ["HTML", "CSS", "JavaScript", "Dashboard"],
    type: "Website",
    image: "https://placehold.co/600x340/06b6d4/ffffff?text=Marketplace+Dashboard",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/marketplace-dashboard",
    featured: false,
  },

  // === DASHBOARDS & BUSINESS APPS ===
  {
    title: "Finance WebApp",
    description: "Financial management and tracking web application.",
    long_description: "A web application for personal and business finance management, featuring expense tracking, budget planning, financial reports, and investment monitoring.",
    tags: ["HTML", "CSS", "JavaScript", "Finance"],
    type: "Website",
    image: "https://placehold.co/600x340/f59e0b/ffffff?text=Finance+WebApp",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/finance-WebApp",
    featured: false,
  },
  {
    title: "Business WebApp",
    description: "Comprehensive business management web application.",
    long_description: "A complete business management solution with features for inventory management, sales tracking, customer relationship management, and business analytics.",
    tags: ["CSS", "JavaScript", "Business", "Management"],
    type: "Website",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Business+WebApp",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/business-WebApp",
    featured: false,
  },
  {
    title: "Dashboard Index",
    description: "Modern dashboard template and components.",
    long_description: "A collection of modern dashboard layouts and components for building admin panels, analytics dashboards, and data visualization interfaces.",
    tags: ["HTML", "CSS", "Dashboard", "Templates"],
    type: "Website",
    image: "https://placehold.co/600x340/14b8a6/ffffff?text=Dashboard+Index",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/dashboard-index",
    featured: false,
  },
  {
    title: "SaaS Web Platform",
    description: "Software as a Service web platform template.",
    long_description: "A modern SaaS platform template with subscription management, user authentication, billing integration, and multi-tenant architecture.",
    tags: ["CSS", "SaaS", "Web Platform"],
    type: "Website",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=SaaS+Web",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/saas-web",
    featured: false,
  },

  // === HEALTHCARE & APPOINTMENT SYSTEMS ===
  {
    title: "Doctor Appointment App",
    description: "Web application for scheduling doctor appointments.",
    long_description: "A user-friendly React application that allows patients to schedule, manage, and track doctor appointments. Features calendar integration, appointment reminders, and patient history management.",
    tags: ["React", "JavaScript", "Healthcare"],
    type: "Website",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=Doctor+Appointment",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/DoctorAppointment-App",
    featured: false,
  },

  // === SHOWCASE & PORTFOLIO SITES ===
  {
    title: "Car Showcase Web",
    description: "Modern web application for showcasing cars and specifications.",
    long_description: "Built with Next.js, this car showcase platform features detailed car listings, advanced search functionality, filtering options, and responsive design for optimal viewing on all devices.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    type: "Website",
    image: "https://placehold.co/600x340/10b981/ffffff?text=Car+Showcase",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Car-Showcase-App",
    featured: false,
  },
  {
    title: "Maulana Linktree",
    description: "Personal link-in-bio page with social media integration.",
    long_description: "A customized link-in-bio page built with TypeScript and modern web technologies, showcasing social media profiles, projects, and important links in one centralized location.",
    tags: ["TypeScript", "Next.js", "Link Management"],
    type: "Website",
    image: "https://placehold.co/600x340/06b6d4/ffffff?text=Linktree",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/maulana-linktree",
    featured: false,
  },

  // === SOCIAL IMPACT & SUSTAINABILITY ===
  {
    title: "PilaRahan GSC",
    description: "Financial management application for Google Solution Challenge.",
    long_description: "A Google Solution Challenge project focused on financial literacy and money management. Features budgeting tools, expense tracking, financial education content, and savings goal management.",
    tags: ["TypeScript", "Next.js", "Finance", "Education"],
    type: "Website",
    image: "https://placehold.co/600x340/f59e0b/ffffff?text=PilaRahan+GSC",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/PilaRahan-GSC",
    featured: false,
  },
  {
    title: "Waste Food Management",
    description: "Platform to reduce food waste and connect donors with recipients.",
    long_description: "An innovative platform that connects food donors with people in need, helping to reduce food waste. Features real-time food listings, donation tracking, and impact analytics.",
    tags: ["JavaScript", "React", "Social Impact", "Sustainability"],
    type: "Website",
    image: "https://placehold.co/600x340/22c55e/ffffff?text=Waste+Food",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/waste-food",
    featured: false,
  },

  // === TEMPLATES & TOOLS ===
  {
    title: "Web Template Collection",
    description: "Collection of reusable web templates and components.",
    long_description: "A curated collection of modern, responsive web templates and reusable components built with TypeScript, React, and Tailwind CSS for rapid web development.",
    tags: ["TypeScript", "React", "Tailwind CSS", "Templates"],
    type: "Website",
    image: "https://placehold.co/600x340/f97316/ffffff?text=Web+Templates",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/web-template",
    featured: false,
  },
  {
    title: "Firebase AI Sample",
    description: "Sample implementation of AI features with Firebase.",
    long_description: "A demonstration project showcasing integration of AI capabilities with Firebase platform, including authentication, real-time database, and cloud functions.",
    tags: ["TypeScript", "Firebase", "AI", "Apache 2.0"],
    type: "Website",
    image: "https://placehold.co/600x340/ff6b35/ffffff?text=Firebase+AI",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/firebase-ai-sample",
    featured: false,
  },

  // === NEWS & MEDIA APPS ===
  {
    title: "News App",
    description: "Modern news aggregation and reading application.",
    long_description: "A news application that aggregates articles from multiple sources, featuring categories, search functionality, bookmarks, and a clean reading interface.",
    tags: ["CSS", "JavaScript", "News", "Media"],
    type: "Website",
    image: "https://placehold.co/600x340/0ea5e9/ffffff?text=News+App",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/News-App",
    featured: false,
  },
  {
    title: "IK News 1",
    description: "News portal web application.",
    long_description: "A news portal featuring latest articles, category browsing, and user-friendly interface for staying updated with current events.",
    tags: ["HTML", "CSS", "JavaScript", "News"],
    type: "Website",
    image: "https://placehold.co/600x340/a855f7/ffffff?text=IK+News",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/ik-news-1",
    featured: false,
  },
  {
    title: "MyNetflix Clone",
    description: "Netflix-inspired streaming platform UI clone.",
    long_description: "A front-end clone of Netflix featuring movie browsing, category filtering, responsive design, and modern streaming platform interface.",
    tags: ["CSS", "JavaScript", "Clone", "Streaming"],
    type: "Website",
    image: "https://placehold.co/600x340/e50914/ffffff?text=Netflix+Clone",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/MyNetflix-Clone",
    featured: false,
  },

  // === LANDING PAGES & STATIC SITES ===
  {
    title: "Landing Page",
    description: "Modern responsive landing page template.",
    long_description: "A beautiful, responsive landing page template with modern design, smooth animations, and conversion-optimized layout for products and services.",
    tags: ["CSS", "HTML", "Landing Page", "Responsive"],
    type: "Website",
    image: "https://placehold.co/600x340/6366f1/ffffff?text=Landing+Page",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/LandingPage",
    featured: false,
  },
  {
    title: "Coffee Website",
    description: "Coffee shop website with modern design.",
    long_description: "A visually appealing website for a coffee shop featuring menu display, location information, online ordering, and attractive product showcase.",
    tags: ["SCSS", "CSS", "Coffee", "Restaurant"],
    type: "Website",
    image: "https://placehold.co/600x340/8b4513/ffffff?text=Coffee+Shop",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Coffee-01",
    featured: false,
  },
  {
    title: "Web Project PWC",
    description: "Professional web project for PWC organization.",
    long_description: "A professional website project featuring organizational information, services, team profiles, and contact functionality.",
    tags: ["HTML", "CSS", "JavaScript", "Corporate"],
    type: "Website",
    image: "https://placehold.co/600x340/00338d/ffffff?text=PWC+Project",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Web-Project-PWC",
    featured: false,
  },
  {
    title: "Web HIMASIA",
    description: "Student organization website (Forked).",
    long_description: "A website for HIMASIA student organization featuring event information, member profiles, news updates, and organizational activities.",
    tags: ["TypeScript", "Next.js", "Organization"],
    type: "Website",
    image: "https://placehold.co/600x340/4ade80/ffffff?text=HIMASIA",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/web-himasia",
    featured: false,
  },
  {
    title: "ForYour Information",
    description: "Information sharing and documentation platform.",
    long_description: "A platform for sharing information, documentation, and resources with organized content structure and easy navigation.",
    tags: ["HTML", "Documentation", "Information", "MIT"],
    type: "Website",
    image: "https://placehold.co/600x340/10b981/ffffff?text=ForYour+Information",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/ForYour-Information",
    featured: false,
  },

  // === LEARNING & PRACTICE PROJECTS ===
  {
    title: "Taskia Master",
    description: "Task management application template.",
    long_description: "A task management application featuring todo lists, task organization, priority setting, and deadline tracking.",
    tags: ["HTML", "CSS", "JavaScript", "Tasks"],
    type: "Website",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Taskia+Master",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/taskia-master",
    featured: false,
  },
  {
    title: "New React Project",
    description: "React learning and practice project.",
    long_description: "A React application developed for learning and practicing React concepts, hooks, state management, and component architecture.",
    tags: ["JavaScript", "React", "Learning"],
    type: "Website",
    image: "https://placehold.co/600x340/61dafb/ffffff?text=React+Project",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/newReact-01",
    featured: false,
  },
  {
    title: "Study JavaScript IK-2",
    description: "JavaScript learning and practice exercises.",
    long_description: "A collection of JavaScript exercises, examples, and practice projects for learning fundamental and advanced JavaScript concepts.",
    tags: ["HTML", "JavaScript", "Learning", "MIT"],
    type: "Website",
    image: "https://placehold.co/600x340/f7df1e/ffffff?text=JS+Study",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Study-IK-2-javascript-",
    featured: false,
  },
  {
    title: "PHP Project",
    description: "PHP development practice project.",
    long_description: "A PHP project demonstrating server-side programming, database integration, and web application development using PHP.",
    tags: ["PHP", "MySQL", "Backend"],
    type: "Website",
    image: "https://placehold.co/600x340/777bb4/ffffff?text=PHP+Project",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/project-php",
    featured: false,
  },

  // === GAMES & INTERACTIVE ===
  {
    title: "Flappy Bird Game",
    description: "JavaScript implementation of Flappy Bird game.",
    long_description: "A fun recreation of the popular Flappy Bird game using HTML5 Canvas and JavaScript, featuring score tracking and responsive controls.",
    tags: ["JavaScript", "Game", "HTML5 Canvas"],
    type: "Game",
    image: "https://placehold.co/600x340/ffcc00/ffffff?text=Flappy+Game",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Flappy",
    featured: false,
  },

  // === BACKEND & API PROJECTS ===
  {
    title: "Submission Project",
    description: "Backend API project built with Go.",
    long_description: "A backend submission project demonstrating REST API development, data handling, and server-side logic implementation using Go programming language.",
    tags: ["Go", "Backend", "API"],
    type: "Backend",
    image: "https://placehold.co/600x340/00add8/ffffff?text=Go+Submission",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Subsmission",
    featured: false,
  },

  // === DATA SCIENCE & MACHINE LEARNING PROJECTS ===
  {
    title: "Machine Learning Projects",
    description: "Collection of machine learning and AI projects.",
    long_description: "A comprehensive collection of machine learning projects covering various domains including classification, regression, deep learning, and computer vision using Python and popular ML frameworks.",
    tags: ["Python", "Machine Learning", "TensorFlow", "PyTorch"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/10b981/ffffff?text=ML+Projects",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/My-Project-ML",
    featured: false,
  },
  {
    title: "Data Analysis Projects",
    description: "Portfolio of data analysis and visualization projects.",
    long_description: "A collection of data analysis projects using Python, Pandas, and visualization libraries. Includes exploratory data analysis, statistical modeling, and interactive dashboards.",
    tags: ["Python", "Jupyter Notebook", "Data Analysis", "Pandas"],
    type: "Data Analysis",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=Data+Analysis",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/My-Project-DataAnalyst",
    featured: false,
  },
  {
    title: "B2B Courier Analytics",
    description: "Business-to-business courier service data analysis.",
    long_description: "Data analysis project for B2B courier services, featuring route optimization, delivery performance metrics, customer behavior analysis, and operational efficiency insights.",
    tags: ["Jupyter Notebook", "Data Analysis", "Logistics"],
    type: "Data Analysis",
    image: "https://placehold.co/600x340/f59e0b/ffffff?text=B2B+Courier",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/B2B-Courier",
    featured: false,
  },
  {
    title: "ML Salary Prediction",
    description: "Machine learning model for salary prediction based on job features.",
    long_description: "A machine learning project that predicts salaries based on various factors such as experience, education, location, and job role using regression algorithms and feature engineering.",
    tags: ["Jupyter Notebook", "Machine Learning", "Regression"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Salary+Prediction",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Ml-Salary-Prediction",
    featured: false,
  },
  {
    title: "Metro Operation Analysis",
    description: "Data analysis of metro rail operations and passenger patterns.",
    long_description: "Comprehensive analysis of metro rail operations including passenger flow, peak hours, route efficiency, and operational insights to improve urban transportation systems.",
    tags: ["Jupyter Notebook", "Data Analysis", "Transportation"],
    type: "Data Analysis",
    image: "https://placehold.co/600x340/14b8a6/ffffff?text=Metro+Analysis",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Metro-Opearation-Analyst",
    featured: false,
  },
  {
    title: "Finance Data Analysis",
    description: "Financial data analysis and investment insights.",
    long_description: "Financial data analysis project covering stock market trends, investment portfolio optimization, risk assessment, and financial forecasting using statistical methods and visualization.",
    tags: ["Jupyter Notebook", "Finance", "Data Analysis"],
    type: "Data Analysis",
    image: "https://placehold.co/600x340/0ea5e9/ffffff?text=Finance+Analysis",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Finanace-Analyst",
    featured: false,
  },
  {
    title: "IPL Cricket Analysis",
    description: "Indian Premier League cricket data analysis and insights.",
    long_description: "Detailed analysis of IPL cricket matches, player statistics, team performance, match predictions, and trend analysis using data science techniques and visualization.",
    tags: ["Jupyter Notebook", "Data Analysis", "Sports Analytics"],
    type: "Data Analysis",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=IPL+Analysis",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/IPL_Analysis",
    featured: false,
  },
  {
    title: "Trash Classification Dataset",
    description: "Machine learning dataset and model for waste classification.",
    long_description: "A computer vision project using deep learning to classify different types of waste materials for automated recycling systems. Includes dataset preparation, model training, and deployment.",
    tags: ["Jupyter Notebook", "Computer Vision", "Deep Learning"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/22c55e/ffffff?text=Trash+Classification",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/TrashClassification-dataset",
    featured: false,
  },

  // === PRIVATE PROJECTS ===
  {
    title: "Yo Use Ship",
    description: "TypeScript-based project management and deployment tool.",
    long_description: "A comprehensive project management and deployment platform built with TypeScript, focusing on streamlined development workflows and efficient shipping processes.",
    tags: ["TypeScript", "Development Tools", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/6366f1/ffffff?text=Yo+Use+Ship",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/yo-use-ship",
    featured: false,
  },
  {
    title: "Learning Agent",
    description: "AI-powered learning assistant with Leap integration.",
    long_description: "An intelligent learning agent that adapts to user behavior and provides personalized learning experiences using advanced AI algorithms and Leap technology.",
    tags: ["TypeScript", "AI", "Learning", "Leap", "Private"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Learning+Agent",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/learning-agent",
    featured: false,
  },
  {
    title: "AI Calorie App",
    description: "Flutter mobile app for AI-powered calorie tracking.",
    long_description: "A mobile application built with Flutter that uses AI to recognize food items and track nutritional information, helping users maintain healthy eating habits.",
    tags: ["Dart", "Flutter", "AI", "Health", "Mobile", "Private"],
    type: "Mobile App",
    image: "https://placehold.co/600x340/02569b/ffffff?text=AI+Calorie+App",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/ai-calorie-app",
    featured: false,
  },
  {
    title: "Admin SaaS",
    description: "SaaS admin panel and management system.",
    long_description: "A comprehensive admin panel for SaaS applications featuring user management, subscription handling, analytics dashboard, and multi-tenant architecture.",
    tags: ["TypeScript", "SaaS", "Admin Panel", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/10b981/ffffff?text=Admin+SaaS",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/admin-saas",
    featured: false,
  },
  {
    title: "Chat App",
    description: "Real-time messaging and chat application.",
    long_description: "A real-time chat application featuring private messaging, group chats, file sharing, emoji support, and online status indicators built with modern web technologies.",
    tags: ["JavaScript", "Chat", "Real-time", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/25d366/ffffff?text=Chat+App",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Chat-App",
    featured: false,
  },
  {
    title: "ForYou Tech",
    description: "Technology platform and service application.",
    long_description: "A technology service platform providing various digital solutions and tools for businesses and individuals.",
    tags: ["TypeScript", "Tech Platform", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=ForYou+Tech",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/foryou-tech",
    featured: false,
  },
  {
    title: "Maulana Developer",
    description: "Personal developer portfolio and blog.",
    long_description: "A personal developer portfolio featuring projects, blog posts, and professional information with modern design and smooth interactions.",
    tags: ["TypeScript", "Portfolio", "Blog", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=Maulana+Developer",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/maulana-developer",
    featured: false,
  },
  {
    title: "Desa Web",
    description: "Village information and administration website.",
    long_description: "A website for village administration and information sharing, featuring news, services, and community engagement features.",
    tags: ["JavaScript", "Government", "Community", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/22c55e/ffffff?text=Desa+Web",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/desa-web",
    featured: false,
  },
  {
    title: "My App",
    description: "General purpose application project.",
    long_description: "A versatile application built with TypeScript demonstrating various features and functionalities for web development.",
    tags: ["TypeScript", "Web App", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/f59e0b/ffffff?text=My+App",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/my-app",
    featured: false,
  },
  {
    title: "Budget Website",
    description: "Personal and business budget management website.",
    long_description: "A comprehensive budget management application for tracking income, expenses, savings, and financial goals with visual reports and analytics.",
    tags: ["TypeScript", "Finance", "Budgeting", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/10b981/ffffff?text=Budget+Website",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/budget-website",
    featured: false,
  },
  {
    title: "Job Portal",
    description: "Job listing and recruitment platform.",
    long_description: "A job portal platform connecting job seekers with employers, featuring job listings, applications, resume management, and candidate tracking.",
    tags: ["TypeScript", "Job Portal", "Recruitment", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/6366f1/ffffff?text=Job+Portal",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/job-portal",
    featured: false,
  },
  {
    title: "Event Platform App",
    description: "Event management and ticketing platform.",
    long_description: "A comprehensive event platform for organizing events, selling tickets, managing attendees, and providing event information to participants.",
    tags: ["TypeScript", "Event Management", "Tickets", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Event+Platform",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Event-Platform-App",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website project.",
    long_description: "A personal portfolio website showcasing projects, skills, and professional experience with modern design.",
    tags: ["TypeScript", "Portfolio", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=Portfolio",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/portofolio",
    featured: false,
  },
  {
    title: "My First Next.js",
    description: "Learning project for Next.js framework.",
    long_description: "A Next.js learning project exploring framework features, routing, server-side rendering, and modern React patterns.",
    tags: ["TypeScript", "Next.js", "Learning", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/000000/ffffff?text=Next.js+Learning",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/myfirst-nextjs",
    featured: false,
  },
  {
    title: "My Girlfriend App",
    description: "Personal relationship tracking application.",
    long_description: "A personal application for tracking special moments, memories, and important dates in relationships.",
    tags: ["TypeScript", "Personal", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ff1493/ffffff?text=Relationship+App",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/my-girlfriend-app",
    featured: false,
  },
  {
    title: "Photobooth Project",
    description: "Digital photobooth application.",
    long_description: "A photobooth application for capturing, editing, and sharing photos at events with filters and effects.",
    tags: ["HTML", "Photography", "Events", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ff6b6b/ffffff?text=Photobooth",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/photobooth",
    featured: false,
  },
  {
    title: "Birthday Card Project",
    description: "Digital birthday card creator.",
    long_description: "A web application for creating and sharing digital birthday cards with customizable designs and messages.",
    tags: ["HTML", "Cards", "Personal", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ffd700/ffffff?text=Birthday+Card",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Birthday-card",
    featured: false,
  },
  {
    title: "My GF Website",
    description: "Personal website for girlfriend.",
    long_description: "A personal website created as a gift featuring photos, memories, and special messages.",
    tags: ["CSS", "Personal", "Gift", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ff69b4/ffffff?text=My+GF",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/my-GF",
    featured: false,
  },
  {
    title: "Code PWC Project",
    description: "Programming practice and coding project.",
    long_description: "A collection of coding exercises and programming challenges for skill development.",
    tags: ["HTML", "Coding", "Practice", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/00338d/ffffff?text=Code+PWC",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Code-PWC",
    featured: false,
  },
  {
    title: "MPSI Project",
    description: "Management and information system project.",
    long_description: "A project focused on management and information system development.",
    tags: ["Information System", "Management", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=MPSI",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/MPSI",
    featured: false,
  },
  {
    title: "My Repo",
    description: "General PHP development repository.",
    long_description: "A repository containing various PHP projects, experiments, and code samples.",
    tags: ["PHP", "Development", "Repository", "Private"],
    type: "Backend",
    image: "https://placehold.co/600x340/777bb4/ffffff?text=My+Repo",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/my-repo",
    featured: false,
  },
  {
    title: "Maulana App",
    description: "Personal Laravel application project.",
    long_description: "A Laravel-based application project demonstrating backend development and blade templating.",
    tags: ["Blade", "Laravel", "PHP", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ff2d20/ffffff?text=Maulana+App",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Maulana-app",
    featured: false,
  },
  {
    title: "Flower Main",
    description: "Flower shop website project.",
    long_description: "A website for a flower shop featuring product catalog, ordering system, and delivery information.",
    tags: ["CSS", "E-commerce", "Flowers", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ff6b9d/ffffff?text=Flower+Shop",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/flower-main",
    featured: false,
  },
  {
    title: "Week 11 Project",
    description: "Weekly coding assignment project.",
    long_description: "A weekly project assignment focusing on PHP development and problem-solving.",
    tags: ["PHP", "Assignment", "Learning", "Private"],
    type: "Backend",
    image: "https://placehold.co/600x340/777bb4/ffffff?text=Week+11",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/week-11",
    featured: false,
  },
  {
    title: "Week 04 Project",
    description: "Weekly coding assignment project.",
    long_description: "An early week project assignment for PHP programming fundamentals.",
    tags: ["PHP", "Assignment", "Learning", "Private"],
    type: "Backend",
    image: "https://placehold.co/600x340/777bb4/ffffff?text=Week+04",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/week-04",
    featured: false,
  },
  {
    title: "01 Project",
    description: "Data analysis and Jupyter notebook project.",
    long_description: "A data analysis project using Jupyter notebooks for exploring datasets and statistical analysis.",
    tags: ["Jupyter Notebook", "Data Analysis", "Python", "Private"],
    type: "Data Analysis",
    image: "https://placehold.co/600x340/f37626/ffffff?text=Project+01",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/01",
    featured: false,
  },
  {
    title: "01 PHP Project",
    description: "PHP programming project collection.",
    long_description: "A collection of PHP programming exercises and projects for backend development practice.",
    tags: ["PHP", "Backend", "Practice", "Private"],
    type: "Backend",
    image: "https://placehold.co/600x340/777bb4/ffffff?text=PHP+01",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/01-Project",
    featured: false,
  },
  {
    title: "50 Projects Challenge",
    description: "50 small web projects collection.",
    long_description: "A challenge to build 50 small web projects covering various CSS and JavaScript techniques.",
    tags: ["CSS", "JavaScript", "Challenge", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/6366f1/ffffff?text=50+Projects",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/50--projects",
    featured: false,
  },
  {
    title: "Project 02",
    description: "HTML practice project.",
    long_description: "A simple HTML project for practicing web fundamentals and structure.",
    tags: ["HTML", "Practice", "Learning", "Private"],
    type: "Website",
    image: "https://placehold.co/600x340/e34f26/ffffff?text=Project+02",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Project-02",
    featured: false,
  },

  // === PERSONAL & FUN PROJECTS (PUBLIC) ===
  {
    title: "Valentine's Day Project",
    description: "Interactive Valentine's Day card website.",
    long_description: "A romantic interactive website created for Valentine's Day with animations, messages, and special effects.",
    tags: ["JavaScript", "Valentine", "Personal"],
    type: "Website",
    image: "https://placehold.co/600x340/ff1493/ffffff?text=Valentine",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/valentine",
    featured: false,
  },
  {
    title: "Valentine Maze Game",
    description: "Valentine-themed maze game (Forked).",
    long_description: "An interactive maze game with Valentine's Day theme where players navigate through romantic challenges.",
    tags: ["JavaScript", "Game", "Valentine"],
    type: "Game",
    image: "https://placehold.co/600x340/ff69b4/ffffff?text=Maze+Valentine",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/maze-valentine",
    featured: false,
  },
  {
    title: "Birthday Gift Website",
    description: "Interactive birthday gift website.",
    long_description: "A creative website created as a birthday gift featuring interactive elements, animations, and personalized content.",
    tags: ["CSS", "Birthday", "Personal"],
    type: "Website",
    image: "https://placehold.co/600x340/ffd700/ffffff?text=Birthday+Gift",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Birthday-Gf",
    featured: false,
  },
  {
    title: "Love Website",
    description: "Romantic themed interactive website.",
    long_description: "A romantic website with interactive animations, love messages, and beautiful design created for special occasions.",
    tags: ["JavaScript", "Love", "Personal"],
    type: "Website",
    image: "https://placehold.co/600x340/ff1493/ffffff?text=Love+Website",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/love-1",
    featured: false,
  },
];

async function seedProjects() {
  console.log('🌱 Starting project seeding...\n');
  console.log(`📊 Total projects to seed: ${projects.length}\n`);

  try {
    // Step 1: Delete all existing projects
    console.log('🗑️  Deleting existing projects...');
    const { error: deleteError } = await supabase
      .from('projects')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
      console.error('❌ Error deleting existing projects:', deleteError);
      throw deleteError;
    }
    console.log('✅ Existing projects deleted\n');

    // Step 2: Insert all projects
    console.log('📝 Inserting new projects...');
    const { data, error: insertError } = await supabase
      .from('projects')
      .insert(projects)
      .select();

    if (insertError) {
      console.error('❌ Error inserting projects:', insertError);
      throw insertError;
    }

    console.log(`✅ Successfully inserted ${data?.length || 0} projects\n`);

    // Step 3: Verify results
    console.log('🔍 Verifying database...');
    const { count, error: countError } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Error counting projects:', countError);
      throw countError;
    }

    console.log(`✅ Total projects in database: ${count}\n`);

    // Show featured projects
    const { data: featuredProjects, error: featuredError } = await supabase
      .from('projects')
      .select('title')
      .eq('featured', true);

    if (!featuredError && featuredProjects) {
      console.log('⭐ Featured projects:');
      featuredProjects.forEach((p, i) => {
        console.log(`   ${i + 1}. ${p.title}`);
      });
    }

    // Show project types breakdown
    const { data: typeData } = await supabase
      .from('projects')
      .select('type');

    if (typeData) {
      const typeCounts = typeData.reduce((acc: any, p) => {
        acc[p.type] = (acc[p.type] || 0) + 1;
        return acc;
      }, {});

      console.log('\n📂 Projects by type:');
      Object.entries(typeCounts).forEach(([type, count]) => {
        console.log(`   ${type}: ${count} projects`);
      });
    }

    console.log('\n🎉 Project seeding completed successfully!');
  } catch (error) {
    console.error('\n❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedProjects();
