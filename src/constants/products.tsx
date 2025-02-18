import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://social-web-lake.vercel.app/",
    title: "Social-Web",
    description:
      "A design and development studio that focuses on building quality apps.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <p>
        Social-app adalah aplikasi media sosial inovatif yang saya kembangkan menggunakan teknologi 
        Next.js, Tailwind CSS, dan Prisma. Aplikasi ini dirancang untuk menyediakan platform 
        interaktif di mana pengguna dapat terhubung, berbagi konten, dan berinteraksi dalam 
        komunitas yang dinamis. yang dimana pengguna dapat terhubung, berbagi konten, dan berinteraksi dalam komunitas yang dinamis{" "}
        </p>
        <p>
        Selama pengembangan Social-app, saya menghadapi berbagai tantangan teknis seperti 
        optimisasi performa untuk rendering sisi server dan pengelolaan skema basis data yang 
        kompleks. Melalui proyek ini, saya memperdalam pemahaman saya tentang arsitektur front-end dan back-end, 
        serta praktik terbaik dalam desain antarmuka pengguna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://algochurn.com",
    title: "chat app",
    description:
      "Practice for technical interviews with hands on coding challenges.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "algochurn",
    content: (
      <div>
        <p>
        Chat-app adalah aplikasi pesan instan yang saya kembangkan menggunakan stack teknologi MERN 
        (MongoDB, Express.js, React, Node.js). Aplikasi ini dirancang untuk menyediakan platform komunikasi 
        real-time yang cepat dan aman bagi penggunanya.{" "}
        </p>
        <p>
        Selama pengembangan Chat-app, saya menghadapi berbagai tantangan teknis seperti memastikan latensi rendah 
        untuk pesan real-time dan implementasi enkripsi end-to-end untuk keamanan data. Melalui proyek ini, saya 
        memperdalam pemahaman saya tentang arsitektur full-stack dan teknik optimisasi performa untuk aplikasi real-time.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://gomoonbeam.com",
    title: "movie searching",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["ReactJs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          SMovie Searching adalah aplikasi pencarian film yang saya kembangkan 
          menggunakan ReactJS dan API dari The Movie Database (TMDb). Aplikasi ini dirancang 
          untuk memungkinkan pengguna mencari informasi tentang berbagai film, melihat tren 
          terbaru, dan menemukan film yang sesuai dengan minat mereka.{" "}
        </p>
        <p>
        Selama pengembangan Movie Searching, saya menghadapi berbagai tantangan teknis seperti 
        integrasi API dengan komponen React dan pengelolaan state yang efisien untuk memastikan performa 
        aplikasi tetap optimal. Melalui proyek ini, saya memperdalam pemahaman saya tentang pengembangan 
        front-end dan teknik terbaik dalam konsumsi API.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Doctor Appointment",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
        Doctor Appointment adalah aplikasi manajemen janji temu dokter yang saya kembangkan menggunakan 
        Next.jsdan Tailwind CSS. Aplikasi ini dirancang untuk memudahkan pasien dalam membuat janji temu 
        dengan dokter, mengelola jadwal, dan mendapatkan informasi tentang layanan kesehatan yang tersedia.{" "}
        </p>
        <p>
        Selama pengembangan Doctor Appointment, saya menghadapi berbagai tantangan teknis seperti integrasi 
        kalender interaktif dan optimisasi performa untuk pengalaman pengguna yang mulus. 
        Melalui proyek ini, saya memperdalam pemahaman saya tentang pengembangan front-end dan back-end serta 
        praktik terbaik dalam desain antarmuka pengguna dan pengalaman pengguna.
        </p>{" "}
      </div>
    ),
  },
];
