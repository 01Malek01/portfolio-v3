export const fullProjects = [
  {
    slug: "financial-operations-suite",
    name: "Financial Operations Suite",
    description:
      "A comprehensive financial operations platform consisting of 3 integrated modules for crypto P2P trading, live FX rate tracking, and transaction management, all powered by Supabase + React 18 + TypeScript + shadcn/ui. Module breakdown: Bybit P2P Explorer — Multi-account Bybit API integration with real-time trade fetching, dashboard stats, advanced filtering, and CSV/PDF export. FX Terminal — Multi-source live exchange rate aggregation with real-time USDT/NGN tracking, cost price calculator, and analytics charts (Recharts). Transaction Spreadsheet — AG Grid-powered Excel-like CRUD interface with auto-calculated P&L/margin %, counterparty management, and inline editing. Achieved ~50% faster data entry via auto-calculated fields and real-time multi-source rate refresh, reducing manual rate lookup time by ~70%. All modules share a consistent shadcn/ui design system with dark mode support. Freelance project.",
    image: "/projectsImages/oneremit/Screenshot 2026-07-21 160559.png",
    images: [
      "/projectsImages/oneremit/Screenshot 2026-07-21 160559.png",
      "/projectsImages/oneremit/Screenshot 2026-07-21 160641.png",
      "/projectsImages/oneremit/Screenshot 2026-07-22 135242.png",
      "/projectsImages/oneremit/Screenshot 2026-07-22 135259.png",
      "/projectsImages/oneremit/Screenshot 2026-07-22 135313.png",
      "/projectsImages/oneremit/Screenshot 2026-07-22 135407.png",
    ],
    techs: ["React", "TypeScript", "Supabase", "shadcn/ui", "AG Grid", "Recharts"],
  },
  {
    slug: "lms-platform",
    name: "LMS Platform",
    description:
      "A complete, multi-role Learning Management System built from scratch using React 18 + TypeScript + Tailwind CSS. The platform supports 3 user roles (Admin, Instructor, Student) with role-based dashboards and access control. Key highlights include an Admin Panel for user/course management and analytics, an Instructor Panel for course creation, video uploads, quiz builder, and live session scheduling (Zoom/Google Meet), and a Student Portal for course enrollment, video player with module tracking, and progress stats. The public website features an Arabic-first RTL landing page with course catalog filtering and authentication. Achieved ~40% reduction in page load via lazy-loaded routes + Suspense. Fully responsive with 100% RTL Arabic support, integrated with a RESTful .NET API. Freelance project.",
    image: "/projectsImages/lms/Screenshot 2026-07-22 114908.png",
    images: [
      "/projectsImages/lms/Screenshot 2026-07-22 114908.png",
      "/projectsImages/lms/Screenshot 2026-07-22 114921.png",
      "/projectsImages/lms/Screenshot 2026-07-22 114933.png",
      "/projectsImages/lms/Screenshot 2026-07-22 115018.png",
      "/projectsImages/lms/Screenshot 2026-07-22 115340.png",
      "/projectsImages/lms/Screenshot 2026-07-22 115427.png",
    ],
    techs: ["React", "TypeScript", "Tailwind CSS", ".NET", "RTL", "Zoom API"],
  },
  {
    slug: "elnawam",
    name: "Elnawam",
    description:
      "An e-commerce website for selling and receiving orders for fabrics. Orders go through a Telegram bot which sends the order details and pictures to the owner for automation and easy order management. Includes an admin dashboard for managing products, orders, and customers. SEO optimized for better search visibility. Deployed on Hostinger VPS with security hardening. Freelance project.",
    image: "/projectsImages/elnawam/Screenshot 2026-07-26 010820.png",
    images: [
      "/projectsImages/elnawam/Screenshot 2026-07-26 010820.png",
      "/projectsImages/elnawam/Screenshot 2026-07-22 114134.png",
      "/projectsImages/elnawam/Screenshot 2026-07-22 122457.png",
      "/projectsImages/elnawam/Screenshot 2026-07-22 122514.png",
      "/projectsImages/elnawam/Screenshot 2026-07-22 131406.png",
    ],
    techs: ["React", "Node.js", "Telegram Bot API", "Hostinger VPS"],
    liveLink: "https://elnawamfabrics.com/",
  },
  {
    slug: "tasks-master",
    name: "Tasks Master",
    description:
      "A comprehensive task and note management application built with the MERN stack. Features AI-powered task suggestions and automatic subtask generation to streamline your workflow. The app includes an intelligent AI assistant that helps organize, prioritize, and break down complex tasks into manageable steps. Users can create, track, and manage their tasks and notes in one centralized platform, with smart categorization and prioritization features to boost productivity.",
    image: "/tasksmaster/tasks-master.png",
    images: [
      "/tasksmaster/tasks-master.png",
      "/tasksmaster/Screenshot 2026-07-22 135628.png",
      "/tasksmaster/Screenshot 2026-07-22 135643.png",
      "/tasksmaster/Screenshot 2026-07-22 135700.png",
    ],
    techs: ["React", "Node.js", "Express", "MongoDB", "OpenAI", "JWT"],
    liveLink: "https://ai-integrated-task-master-frontend.vercel.app/",
    githubLink:
      "https://github.com/01Malek01/AI-integrated-task-master-frontend",
    githubLink2:
      "https://github.com/01Malek01/AI-integrated-task-master-backend",
  },
  {
    slug: "homyz-real-estate",
    name: "Homyz-Real Estate",
    description:
      "A full-stack real estate application built with the MERN stack, featuring animations with Framer Motion and UI components from Mantine. Authentication is handled using Auth0 SDKs. Users can book visits to residencies or post their own, with Leaflet for maps.",
    image: "/projectsImages/Screenshot 2024-07-13 114355.webp",
    images: ["/projectsImages/Screenshot 2024-07-13 114355.webp"],
    techs: ["React", "Node.js", "Express", "MongoDB", "Auth0", "Mantine", "Leaflet", "Prisma"],
    liveLink: "https://fullstack-real-estate-one.vercel.app/",
    githubLink: "https://github.com/01Malek01/fullstack-real-estate",
  },
  {
    slug: "meats",
    name: "MEats",
    description:
      "A MERN stack web application designed for food ordering and restaurant management. Features user authentication and authorization using Auth0 SDKs. Customers can browse menus, place orders, and track them in real-time, while restaurant owners can manage menus and track orders.",
    image: "/projectsImages/meats.webp",
    images: ["/projectsImages/meats.webp"],
    techs: ["React", "Node.js", "Express", "MongoDB", "Auth0", "Shadcn", "React Query"],
    liveLink: "https://food-ordering-app-frontend-mstf.onrender.com",
    githubLink: "https://github.com/01Malek01/food-ordering-app-frontend",
    githubLink2: "https://github.com/01Malek01/food-ordering-app-backend",
  },
  {
    slug: "sheet-to-chart",
    name: "Sheet To Chart",
    description:
      "A fullstack MERN app that allows users to upload key-value Excel sheets and transform them into stunning charts with ease. Users can store their files in a secure database for future use, export the visualizations as PDFs, add notes to each project, and download their work later.",
    image: "/projectsImages/sheettochart.webp",
    images: ["/projectsImages/sheettochart.webp"],
    techs: ["React", "Node.js", "Express", "MongoDB", "ExcelJS", "Chart.js", "PDFKit"],
    liveLink: "https://data-analysis-frontend-wine.vercel.app/",
    githubLink: "https://github.com/01Malek01/data-analysis-frontend",
    githubLink2: "https://github.com/01Malek01/data-analysis-backend",
  },
  {
    slug: "gym-management",
    name: "Gym Website and System",
    description:
      "A complete gym management system built with the MERN stack that offers online membership purchases and comprehensive member management. The platform includes a user-friendly member dashboard for tracking membership status and workout progress. Administrators benefit from a powerful dashboard to manage memberships, track attendance, and monitor member progress.",
    image: "/projectsImages/gym.png",
    images: ["/projectsImages/gym.png"],
    techs: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    liveLink: "https://gym-front-end-azure.vercel.app/",
    githubLink: "https://github.com/01Malek01/gym-front-end",
    githubLink2: "https://github.com/01Malek01/gym-back-end",
  },
];

export const frontProjects = [
  {
    slug: "artisan-bakes",
    name: "Artisan Bakes",
    description:
      "A modern e-commerce platform built with Next.js for 'The Daily Crumb', an artisan bakery. Showcases daily selections of freshly baked goods including artisanal breads, delicate pastries, and flaky croissants.",
    image: "/projectsImages/art-bakes.webp",
    images: ["/projectsImages/art-bakes.webp"],
    techs: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://artisan-bakes.vercel.app/",
    githubLink: "https://github.com/01Malek01/Artisan-Bakes",
  },
  {
    slug: "digital-business",
    name: "Digital Business",
    description:
      "A Next.js app showcasing a digital business with smooth animations created using modern front-end techniques.",
    image: "/projectsImages/d-business.webp",
    images: ["/projectsImages/d-business.webp"],
    techs: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveLink: "https://digital-business-opal.vercel.app/",
    githubLink: "https://github.com/01Malek01/digital-business",
  },
];

export function getAllProjects() {
  return [...fullProjects, ...frontProjects];
}

export function getProjectBySlug(slug) {
  return getAllProjects().find((p) => p.slug === slug) || null;
}
