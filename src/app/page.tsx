"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Zap, Sparkles, Plus, Cloud, Mail, FileText } from "lucide-react";
import ScrollRevealText from "../components/ScrollRevealText";

interface Project {
  id: number;
  title: string;
  image: string;
  detailImage?: string;
  tags: string[];
  description: string;
}

interface Certificate {
  id: number;
  title: string;
  file: string;
  type: "image" | "pdf";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Worksim AI Platform",
    image: "/Project/Worksim.png",
    tags: ["Next.js", "AI", "SaaS"],
    description: "Worksim is an AI-powered career simulation platform that helps users find their ideal career path through interactive scenarios and skill assessments."
  },
  {
    id: 2,
    title: "Lehan Farma App",
    image: "/Project/LehanFarmaNew.png",
    tags: ["E-Commerce", "React"],
    description: "A comprehensive pharmacy e-commerce platform and product catalog system with dynamic routing and WhatsApp checkout integration."
  },
  {
    id: 3,
    title: "Elevra Agency",
    image: "/Project/LandingPageElevra.png",
    tags: ["Web Design", "Tailwind"],
    description: "A modern, premium landing page for Elevra Agency featuring scroll-triggered animations, fluid typography, and a glassmorphism floating navbar."
  },
  {
    id: 4,
    title: "Picka Photobooth",
    image: "/Project/LandinPagePickaPhotobooth.png",
    tags: ["Landing Page", "Next.js"],
    description: "An elegant promotional landing page for a photobooth rental service, heavily focused on mobile responsiveness and visual aesthetics."
  },
  {
    id: 5,
    title: "Jatim Innovator",
    image: "/Project/JatimInnovatorWebsite.png",
    tags: ["Portal", "CMS"],
    description: "A regional innovation portal designed to showcase local talents and manage innovation submissions securely with a custom CMS."
  },
  {
    id: 6,
    title: "Z-Learn LMS",
    image: "/Project/Z-Learn.png",
    tags: ["LMS", "Fullstack"],
    description: "A complete Learning Management System featuring course enrollments, video tracking, and interactive quizzes for students and instructors."
  },
  {
    id: 7,
    title: "86 Photo Studio",
    image: "/Project/86PhotoStudioWebsite.png",
    tags: ["Landing Page", "Photography"],
    description: "A visually engaging website for a professional photo studio to showcase their portfolio and book clients."
  },
  {
    id: 8,
    title: "Assignment AI",
    image: "/Project/AsigmentManagementAi.png",
    tags: ["SaaS", "AI"],
    description: "An AI-driven platform for managing assignments, helping students and educators streamline their workflows."
  },
  {
    id: 9,
    title: "Desa Sawotratap",
    image: "/Project/DesaSawotratap.png",
    tags: ["Gov", "Information"],
    description: "A modern digital portal for Desa Sawotratap, providing transparent information and digital services to citizens."
  },
  {
    id: 10,
    title: "Desa Watu Pari",
    image: "/Project/DesaWatuPariWebsite.png",
    tags: ["Gov", "Portal"],
    description: "An interactive village website promoting local tourism and managing administrative services."
  },
  {
    id: 11,
    title: "Facility Helpdesk",
    image: "/Project/FacilityHeldeskAdmin.png",
    tags: ["Admin Dashboard", "Management"],
    description: "An internal helpdesk administration dashboard for facility management and ticketing."
  },
  {
    id: 12,
    title: "Jeep Tour Company",
    image: "/Project/JeepTourCompanyProfile.png",
    tags: ["Company Profile", "Tourism"],
    description: "A thrilling company profile website for a Jeep tour adventure business."
  },
  {
    id: 13,
    title: "LHI Fun Run",
    image: "/Project/LhiFunRunWebsite.png",
    tags: ["Event", "Ticketing"],
    description: "A promotional and registration website for the LHI Fun Run marathon event."
  },
  {
    id: 14,
    title: "NDJ Jok Mobil",
    image: "/Project/NdjJokMobilCompanyProfile.png",
    tags: ["Business", "Automotive"],
    description: "A premium digital presence for an automotive interior and seat modification company."
  },
  {
    id: 15,
    title: "Iman Portfolio",
    image: "/Project/PorfolioIman.png",
    tags: ["Portfolio", "Creative"],
    description: "A personalized creative portfolio website designed for an independent professional."
  },
  {
    id: 16,
    title: "Posyandu Bayi",
    image: "/Project/PosyanduBayiWebsite.png",
    tags: ["Health", "Information"],
    description: "An informational web app for monitoring toddler health and posyandu scheduling."
  },
  {
    id: 17,
    title: "Telkom Wave",
    image: "/Project/TelkomWaveWebsite.png",
    tags: ["Corporate", "Tech"],
    description: "A corporate digital platform showcasing connectivity solutions and tech innovations."
  }
];

const cloudProjects: Project[] = [
  {
    id: 101,
    title: "Deployment Laravel + Redis dengan Docker",
    image: "/ProjectCloud/Deployment Laravel + Redis Menggunakan Docker/Deployment Laravel + Redis Menggunakan Docker.png",
    detailImage: "/ProjectCloud/Deployment Laravel + Redis Menggunakan Docker/Deployment Laravel + Redis Menggunakan Docker2.png",
    tags: ["Docker", "Laravel", "Redis", "Cloud"],
    description: "Proyek deployment aplikasi Laravel dengan Redis sebagai cache layer menggunakan containerisasi Docker. Meliputi konfigurasi docker-compose, jaringan antar container, serta optimasi performa aplikasi berbasis cloud."
  },
  {
    id: 102,
    title: "Manajemen Branch & Merge Conflict dengan Git",
    image: "/ProjectCloud/Manajemen Branch dan Penyelesaian Merge Conflict Menggunakan Git dan Lazygit/Manajemen Branch dan Penyelesaian Merge Conflict Menggunakan Git dan Lazygit.png",
    detailImage: "/ProjectCloud/Manajemen Branch dan Penyelesaian Merge Conflict Menggunakan Git dan Lazygit/Manajemen Branch dan Penyelesaian Merge Conflict Menggunakan Git dan Lazygit2.png",
    tags: ["Git", "Lazygit", "DevOps", "Version Control"],
    description: "Praktik manajemen branch dan penyelesaian merge conflict menggunakan Git dan Lazygit. Mencakup strategi branching, resolusi konflik, dan alur kerja kolaborasi tim yang efisien."
  },
  {
    id: 103,
    title: "Website Profil Statis + Multi-Stage Docker + CI/CD",
    image: "/ProjectCloud/Website profil Statis sederhana + Multi-Stage Docker + GitHub Actions/Website profil Statis sederhana + Multi-Stage Docker + GitHub Actions1.png",
    detailImage: "/ProjectCloud/Website profil Statis sederhana + Multi-Stage Docker + GitHub Actions/Website profil Statis sederhana + Multi-Stage Docker + GitHub Actions2.png",
    tags: ["Docker", "GitHub Actions", "CI/CD", "Static Site"],
    description: "Membangun dan mendeploy website profil statis menggunakan Multi-Stage Docker build untuk mengoptimalkan ukuran image, serta GitHub Actions untuk pipeline CI/CD otomatis dari push ke deployment."
  },
  {
    id: 104,
    title: "Deploying Website with Load Balancer + NFS",
    image: "/ProjectCloud/Deploying Website Use Load balancer + NFS/Deploying Website Use Load balancer + NFS1.png",
    detailImage: "/ProjectCloud/Deploying Website Use Load balancer + NFS/Deploying Website Use Load balancer + NFS2.png",
    tags: ["Load Balancer", "NFS", "Nginx", "Linux"],
    description: "Implementasi deployment website menggunakan load balancer untuk distribusi traffic antar server, dikombinasikan dengan NFS (Network File System) untuk berbagi resource file secara terpusat antar node."
  },
  {
    id: 105,
    title: "Konfigurasi Web Server Menggunakan NGINX",
    image: "/ProjectCloud/Konfiguration Webserver Using NGINX/Konfiguration Webserver Using NGINX1.png",
    detailImage: "/ProjectCloud/Konfiguration Webserver Using NGINX/Konfiguration Webserver Using NGINX2.png",
    tags: ["NGINX", "Web Server", "Linux", "Cloud"],
    description: "Konfigurasi dan optimasi web server menggunakan NGINX sebagai reverse proxy dan static file server. Mencakup pengaturan virtual host, SSL termination, dan tuning performa untuk lingkungan produksi."
  },
  {
    id: 106,
    title: "Setup Home Lab STB Indihome ke Linux Server",
    image: "/ProjectCloud/Setup Home Lab Stb Indihome To Use Linux Server/Setup Home Lab Stb Indihome To Use Linux Server1.png",
    detailImage: "/ProjectCloud/Setup Home Lab Stb Indihome To Use Linux Server/Setup Home Lab Stb Indihome To Use Linux Server2.png",
    tags: ["Linux", "Home Lab", "Server", "Debian"],
    description: "Mengubah STB (Set-Top Box) Indihome menjadi Linux server fungsional untuk keperluan home lab. Meliputi instalasi sistem operasi Linux, konfigurasi jaringan, dan setup layanan server dasar."
  },
  {
    id: 107,
    title: "Deployment Laravel + MySQL & Cloudflare Tunnel",
    image: "/ProjectCloud/Deployment Laravel + Mysql And Configuration Cloudflare Tunnel/Deployment Laravel + Mysql And Configuration Cloudflare Tunnel1.png",
    detailImage: "/ProjectCloud/Deployment Laravel + Mysql And Configuration Cloudflare Tunnel/Deployment Laravel + Mysql And Configuration Cloudflare Tunnel2.png",
    tags: ["Laravel", "MySQL", "Cloudflare", "Linux"],
    description: "Deployment aplikasi Laravel dengan MySQL sebagai database, dikonfigurasi dengan Cloudflare Tunnel untuk akses publik yang aman tanpa membuka port langsung ke internet."
  },
  {
    id: 108,
    title: "Laravel Backend + Next.js Frontend via Cloudflare Tunnel",
    image: "/ProjectCloud/Deployment Laravel Backend And Nextjs Frontend Using API And Setup Cloudflare Tunnel/Deployment Laravel Backend And Nextjs Frontend Using API And Setup Cloudflare Tunnel1.png",
    detailImage: "/ProjectCloud/Deployment Laravel Backend And Nextjs Frontend Using API And Setup Cloudflare Tunnel/Deployment Laravel Backend And Nextjs Frontend Using API And Setup Cloudflare Tunnel2.png",
    tags: ["Laravel", "Next.js", "API", "Cloudflare"],
    description: "Deployment full-stack dengan Laravel sebagai REST API backend dan Next.js sebagai frontend, terintegrasi melalui Cloudflare Tunnel untuk keamanan dan aksesibilitas optimal."
  },
  {
    id: 109,
    title: "Node.js API untuk IoT Sensor + Cloudflare Tunnel",
    image: "/ProjectCloud/Deployment Node Js Api For IOT Sensor And Configuration With Cloudflare Tunnel/Deployment Node Js Api For IOT Sensor And Configuration With Cloudflare Tunnel1.png",
    detailImage: "/ProjectCloud/Deployment Node Js Api For IOT Sensor And Configuration With Cloudflare Tunnel/Deployment Node Js Api For IOT Sensor And Configuration With Cloudflare Tunnel2.png",
    tags: ["Node.js", "IoT", "API", "Cloudflare"],
    description: "Deployment Node.js REST API yang dirancang untuk menerima data dari sensor IoT, dikonfigurasi dengan Cloudflare Tunnel agar sensor dapat mengirim data secara aman dari mana saja."
  },
  {
    id: 110,
    title: "NodeJs + AI + Restforge + PostgreSQL di VPS",
    image: "/ProjectCloud/Deployment NodeJs + Ai + Frontend Restforge + Postgresql In VPS With Cloudflare Tunnel/Deployment NodeJs + Ai + Frontend Restforge In VPS With Cloudflare Tunnel1.png",
    detailImage: "/ProjectCloud/Deployment NodeJs + Ai + Frontend Restforge + Postgresql In VPS With Cloudflare Tunnel/Deployment NodeJs + Ai + Frontend Restforge In VPS With Cloudflare Tunnel2.png",
    tags: ["Node.js", "AI", "PostgreSQL", "VPS"],
    description: "Deployment stack lengkap di VPS: Node.js backend, integrasi AI, frontend Restforge, dan PostgreSQL sebagai database, semua diekspos aman menggunakan Cloudflare Tunnel."
  },
  {
    id: 111,
    title: "Docker Compose: MySQL + NGINX + Laravel + Redis",
    image: "/ProjectCloud/Setup Docker Compose To Start Mysql + Web Server Nginx Laravel + Redis/Setup Docker Compose To Start Mysql + Web Server Nginx Laravel + Redis1.png",
    detailImage: "/ProjectCloud/Setup Docker Compose To Start Mysql + Web Server Nginx Laravel + Redis/Setup Docker Compose To Start Mysql + Web Server Nginx Laravel + Redis2.png",
    tags: ["Docker Compose", "MySQL", "NGINX", "Redis"],
    description: "Setup Docker Compose untuk menjalankan stack lengkap: MySQL sebagai database, NGINX sebagai web server, Laravel sebagai aplikasi backend, dan Redis untuk caching — semua dalam satu environment terkontainerisasi."
  }
];

const certificates: Certificate[] = [
  { id: 1, title: "Finalis Web Programming - SMART TELKOM", file: "/Sertifikat/SMART TELKOM FINALIS_Web Programing.jpg", type: "image" },
  { id: 2, title: "Sefest Web Design", file: "/Sertifikat/Sefest Web Design-Radhiyya Alea Akbar.png", type: "image" },
  { id: 3, title: "Juara 1 Pionering Tegak Tangguh", file: "/Sertifikat/Juara1PioneringLombaTegakTangguh.PNG", type: "image" },
  { id: 4, title: "Lomba Baris Berbaris Pandawa - Juara Perintis 2", file: "/Sertifikat/Lomba Baris Berbaris Pandawa - Juara Perintis 2.png", type: "image" },
  { id: 5, title: "Lomba Baris Berbaris Sejati - Juara Bina 2", file: "/Sertifikat/Lomba Baris Berbaris Sejati- Juara Bina 2.png", type: "image" },
  { id: 6, title: "Olimpiade Informatika OSN 2025", file: "/Sertifikat/Olimpiade_Informatika - OSN 2025_page-0001.jpg", type: "image" },
  { id: 7, title: "Olimpiade Informatika OSSN 2025", file: "/Sertifikat/Olimpiade_Informatika - OSSN 2025_page-0001.jpg", type: "image" },
  { id: 8, title: "Olimpiade Informatika KOMPAS 2025", file: "/Sertifikat/Olimpiade_Informatika - KOMPAS 2025_page-0001.jpg", type: "image" },
  { id: 9, title: "Olimpiade PKN OSN 2025", file: "/Sertifikat/Olimpiade_PKN - OSSN 2025 (1)_page-0001.jpg", type: "image" },
  { id: 10, title: "Olimpiade PKN KOMPAS 2025", file: "/Sertifikat/Olimpiade_PKN - KOMPAS 2025_page-0001 (2).jpg", type: "image" },
  { id: 11, title: "Olimpiade Sejarah OSN 2025", file: "/Sertifikat/Olimpiade_Sejarah - OSN 2025_page-0001.jpg", type: "image" },
  { id: 12, title: "Olimpiade Sejarah KOMPAS 2025", file: "/Sertifikat/Olimpiade_Sejarah - KOMPAS 2025_page-0001.jpg", type: "image" },
  { id: 13, title: "Coursera: AWS S3 Basic", file: "/Sertifikat/Coursera Aws S3 Basic Certificates.jpg", type: "image" },
  { id: 14, title: "Coursera: Build App With Google Sheets On Glide", file: "/Sertifikat/Coursera Build App With Google Sheets On Glide Certificates.jpg", type: "image" },
  { id: 15, title: "Coursera: Build a Full Website Using Wordpress", file: "/Sertifikat/Coursera Build a Full Website Using Wordprees Certificates.jpg", type: "image" },
  { id: 16, title: "Coursera: Google Ads", file: "/Sertifikat/Coursera Google Ads Certificates.jpg", type: "image" },
  { id: 17, title: "Coursera: Microsoft Excel", file: "/Sertifikat/Coursera Microsoft Excel Certificates.jpg", type: "image" },
  { id: 18, title: "Coursera: SEO Optimization", file: "/Sertifikat/Coursera SEO Optimazion Certificates.jpg", type: "image" },
  { id: 19, title: "Pelatihan Artificial Intelligence", file: "/Sertifikat/Pelatihan Artifisial Intelegent.jpg", type: "image" },
  { id: 20, title: "Pelatihan Cyber Security", file: "/Sertifikat/Sertifikat Attendance Pelatihan Cyber Security.pdf.png", type: "image" },
  { id: 21, title: "Microsoft Azure", file: "/Sertifikat/Microsoft Azure Certificates.pdf", type: "pdf" },
  { id: 22, title: "Computational Thinking", file: "/Sertifikat/Sertifikat_RADHIYYA ALEA AKBAR_Computational Thinking _ Cara Berpikir Logis untuk Mengatasi Masalah (Jenjang SMA).pdf", type: "pdf" },
  { id: 23, title: "Dasar-Dasar Implementasi Kecerdasan Artifisial", file: "/Sertifikat/Sertifikat_RADHIYYA ALEA AKBAR_Dasar-Dasar Implementasi Kecerdasan Artifisial.pdf", type: "pdf" },
  { id: 24, title: "Memahami Aspek Pengembangan Produk AI", file: "/Sertifikat/Sertifikat_RADHIYYA ALEA AKBAR_Memahami Aspek Pengembangan Produk AI.pdf", type: "pdf" },
  { id: 25, title: "Wordpress Certificates", file: "/Sertifikat/Wordpress Certivicates.pdf", type: "pdf" },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCloud, setShowAllCloud] = useState(false);
  const [activeTab, setActiveTab] = useState<"website" | "cloud">("website");
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showAllProjects, showAllCloud, activeTab, showAllCertificates]);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);
  const displayedCloudProjects = showAllCloud ? cloudProjects : cloudProjects.slice(0, 6);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 6);

  const techStack = [
    { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Ubuntu", icon: "https://cdn.simpleicons.org/ubuntu/E95420" },
    { name: "Debian", icon: "https://cdn.simpleicons.org/debian/A81D33" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Apache", icon: "https://cdn.simpleicons.org/apache/D22128" },
    { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
    { name: "Claude", icon: "https://cdn.simpleicons.org/claude/D97757" }
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#f4f7f6] flex flex-col items-center pt-8 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="animate-fade-in opacity-0 [animation-delay:100ms] relative w-full max-w-[1300px] px-6 lg:px-16 mx-auto flex justify-between items-center z-50">
        <h1 className="text-2xl font-playfair font-medium italic text-slate-800 relative z-50">
          Radhiyya
        </h1>
        
        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-500">
          <a href="#" className="hover:text-black hover:-translate-y-0.5 transition-all duration-300">Home</a>
          <a href="#projects" className="hover:text-black hover:-translate-y-0.5 transition-all duration-300">Work</a>
          <a href="#about" className="hover:text-black hover:-translate-y-0.5 transition-all duration-300">About</a>
          <a href="#contact" className="hover:text-black hover:-translate-y-0.5 transition-all duration-300">Contact</a>
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer active:scale-95 relative z-50"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-14 right-0 w-48 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl p-4 flex flex-col gap-4 z-40 md:hidden">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-black px-2 py-1 rounded-md hover:bg-slate-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-black px-2 py-1 rounded-md hover:bg-slate-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-black px-2 py-1 rounded-md hover:bg-slate-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-black px-2 py-1 rounded-md hover:bg-slate-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* Main Hero Content */}
      <div className="relative flex-1 w-full max-w-[1300px] px-6 lg:px-16 mx-auto flex flex-col items-center mt-8 md:mt-12 z-10">
        
        {/* Large Text */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:200ms] text-center z-20 flex flex-col items-center gap-2 mb-2 md:mb-0 relative md:-bottom-12">
          <h2 className="text-5xl md:text-[5rem] font-outfit font-medium tracking-tight text-slate-900 leading-none">
            Hi I&apos;m Radhiyya
          </h2>
          <h3 className="text-5xl md:text-[5.5rem] font-playfair italic font-medium text-slate-900 leading-none">
            Web & Cloud Engineer
          </h3>
        </div>

        {/* Center Container for Image and Background Blur */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:400ms] relative flex justify-center w-full max-w-[900px] mt-0 md:mt-0 flex-1 min-h-[320px] md:min-h-[500px]">
          
          {/* U-Shape Background Blur (Hollow circle border placed upwards) */}
          <div className="absolute top-[-700px] md:top-[-1050px] left-1/2 -translate-x-1/2 w-[900px] md:w-[1300px] h-[900px] md:h-[1300px] rounded-full border-[80px] md:border-[120px] border-[#00B4FF] blur-[60px] md:blur-[100px] opacity-75 pointer-events-none -z-10" />

          {/* User Photo */}
          <div className="relative z-10 h-full flex items-end">
            <Image
              src="/fotoku.png"
              alt="Radhiyya"
              width={600}
              height={700}
              className="object-contain max-h-[55vh] md:max-h-[65vh] object-bottom grayscale transition-all duration-500 hover:grayscale-0"
              priority
            />
            {/* Fade at bottom to blend into background */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f7f6] to-transparent z-20 pointer-events-none" />
          </div>

          {/* Absolute Floating Elements - Desktop */}
          
          {/* 1. Open for work badge (Left Middle) */}
          <div className="hidden md:flex absolute left-[-60px] top-[30%] bg-white/90 backdrop-blur-md border border-white/50 rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center gap-3 animate-fade-in-up opacity-0 [animation-delay:600ms] z-30">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c8ff72]"></span>
            </div>
            <span className="text-sm font-medium text-slate-800">
              Open for freelance & full-time work
            </span>
          </div>

          {/* 2. Text paragraph (Right Middle) */}
          <div className="hidden md:block absolute right-[-40px] top-[35%] max-w-[220px] animate-fade-in-up opacity-0 [animation-delay:700ms] z-30">
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              I design intuitive digital products that solve real problems and deliver meaningful user experiences.
            </p>
          </div>
          
          {/* 3. Clients (Bottom Left) */}
          <div className="hidden md:flex absolute left-[-40px] bottom-[15%] flex-row items-center gap-4 animate-fade-in-up opacity-0 [animation-delay:800ms] z-30">
            <div className="flex -space-x-3">
              <img src="https://ui-avatars.com/api/?name=A&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=B&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=C&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            </div>
            <p className="text-xs font-medium text-slate-600 leading-snug max-w-[120px]">
              Trusted by <span className="font-bold text-black">100+ happy clients</span> across industries.
            </p>
          </div>

          {/* 4. Get in Touch button (Bottom Right) */}
          <div className="hidden md:block absolute right-[20px] bottom-[20%] z-30 animate-fade-in-up opacity-0 [animation-delay:900ms]">
            <a href="#projects" className="group flex items-center gap-3 bg-[#0f0f0f] text-white px-6 py-4 rounded-[2rem] text-sm font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white/70 group-hover:text-white" />
              View Project
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Mobile Floating Elements */}
      <div className="w-full md:hidden flex flex-col items-center gap-6 pb-12 z-20 mt-4 animate-fade-in-up opacity-0 [animation-delay:1000ms]">
         <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c8ff72]"></span>
            </div>
            <span className="text-sm font-medium text-slate-800">
              Open for freelance & full-time work
            </span>
          </div>

          <p className="text-sm font-medium text-slate-800 leading-relaxed text-center max-w-[280px]">
            I design intuitive digital products that solve real problems and deliver meaningful user experiences.
          </p>

          <div className="flex flex-col items-center gap-3 mt-2">
            <div className="flex -space-x-3">
              <img src="https://ui-avatars.com/api/?name=A&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=B&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=C&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            </div>
            <p className="text-xs font-medium text-slate-600 leading-tight text-center max-w-[200px]">
              Trusted by <span className="font-bold text-black">100+ happy clients</span> across industries.
            </p>
          </div>

          <a href="#projects" className="mt-4 flex items-center justify-center gap-2 bg-[#0f0f0f] text-white px-6 py-4 rounded-[2rem] text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-2xl w-full max-w-[280px]">
            <ArrowRight size={18} className="text-white/70" />
            View Project
          </a>
      </div>

      {/* Principals Section */}
      <section className="relative w-full max-w-[1300px] mx-auto pt-16 md:pt-24 pb-12 md:pb-16 px-6 flex flex-col items-center justify-center z-20">
        <h3 className="text-4xl md:text-5xl font-playfair italic font-medium text-slate-800 mb-8 md:mb-12">
          My Principals
        </h3>
        
        {/* Floating Badges Container */}
        <div className="relative w-full flex justify-center items-center">
          
          {/* Left Badges */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-10">
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[100ms]">
              <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-3 transform -rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                 <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white"><Zap size={14} fill="currentColor"/></div>
                 <span className="font-semibold text-sm text-slate-800">Frontend Dev</span>
              </div>
            </div>
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[300ms]">
              <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-3 transform rotate-2 -ml-8 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                 <div className="bg-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-white"><Zap size={14} fill="currentColor"/></div>
                 <span className="font-semibold text-sm text-slate-800">Backend Dev</span>
              </div>
            </div>
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[500ms]">
              <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-3 transform -rotate-2 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                 <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white"><Zap size={14} fill="currentColor"/></div>
                 <span className="font-semibold text-sm text-slate-800">Cloud Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Badges */}
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-10 items-end">
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms]">
              <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-3 transform rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                 <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-white"><Sparkles size={14} fill="currentColor"/></div>
                 <span className="font-semibold text-sm text-slate-800">CI/CD Pipelines</span>
              </div>
            </div>
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms]">
              <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-3 transform -rotate-2 -mr-8 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                 <div className="bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-white"><Sparkles size={14} fill="currentColor"/></div>
                 <span className="font-semibold text-sm text-slate-800">Database Design</span>
              </div>
            </div>
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[600ms]">
              <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-3 transform rotate-2 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                 <div className="bg-green-400 rounded-full w-8 h-8 flex items-center justify-center text-white"><Plus size={16} strokeWidth={3}/></div>
                 <span className="font-semibold text-sm text-slate-800">API Development</span>
              </div>
            </div>
          </div>

          {/* Center Scroll Reveal Text */}
          <ScrollRevealText />

          {/* Mobile Badges */}
          <div className="lg:hidden absolute bottom-[-20px] left-0 right-0 flex justify-between px-2 md:px-12 w-full">
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms]">
              <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-2 transform -rotate-6 transition-transform hover:rotate-0">
                 <div className="bg-orange-500 rounded-full w-7 h-7 flex items-center justify-center text-white"><Zap size={14} fill="currentColor"/></div>
                 <span className="font-semibold text-xs text-slate-800">Frontend Dev</span>
              </div>
            </div>
            <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms] relative top-8">
              <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-2 transform rotate-6 transition-transform hover:rotate-0">
                 <div className="bg-yellow-400 rounded-full w-7 h-7 flex items-center justify-center text-white"><Sparkles size={14} fill="currentColor"/></div>
                 <span className="font-semibold text-xs text-slate-800">CI/CD Pipelines</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative w-full max-w-[1300px] px-6 lg:px-16 mx-auto pt-16 pb-24 flex flex-col items-center justify-center z-20">
        <h3 className="text-3xl md:text-4xl font-playfair italic font-medium text-slate-800 mb-4 reveal-animate opacity-0 translate-y-12 transition-all duration-1000">
          Tech Stack & Tools
        </h3>
        <p className="text-slate-500 mb-12 text-center max-w-xl font-medium reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms]">
          A constantly expanding toolkit that I use to build robust, scalable, and beautiful digital products.
        </p>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] bg-blue-300/20 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms]">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="group relative flex items-center justify-center bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-full h-14 px-4 hover:px-6 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] transition-all duration-300 cursor-default overflow-hidden"
            >
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain flex-shrink-0" />
              <span className="font-outfit font-medium text-slate-700 max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* My Process Section */}
      <section className="relative w-full max-w-[1300px] px-6 lg:px-16 mx-auto pt-8 md:pt-12 pb-48 flex flex-col items-center justify-center z-20">
        
        {/* Background Blue Glows (between cards) */}
        <div className="absolute top-[60%] left-[33%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-[60%] left-[66%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-sky-300/20 rounded-full blur-[100px] pointer-events-none z-0" />

        <h3 className="text-2xl md:text-3xl font-playfair italic font-medium text-slate-800 mb-2 relative z-10">
          My Process
        </h3>
        <h2 className="text-4xl md:text-[3.5rem] font-outfit font-medium tracking-tight text-slate-900 mb-16 md:mb-24 relative z-10">
          Here&apos;s how I work
        </h2>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 w-full z-10">
          
          {/* Card 1: Architect */}
          <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms] relative bg-[#f6f7f9] border border-white rounded-[2rem] p-10 w-full max-w-[380px] h-[360px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform md:-rotate-[4deg] hover:!rotate-0 hover:!scale-105 z-30 flex flex-col">
            
            {/* SVG Connector to Card 2 (Desktop) */}
            <svg className="hidden md:block absolute right-[-60px] top-[25%] w-[120px] h-[60px] overflow-visible z-[50]" viewBox="0 0 120 60">
              <path d="M0,40 C 50,40 70,10 120,10" stroke="#3b82f6" strokeWidth="3" fill="none" />
              <circle cx="0" cy="40" r="6" fill="#3b82f6" />
              <circle cx="120" cy="10" r="6" fill="#3b82f6" />
            </svg>

            {/* SVG Connector to Card 2 (Mobile) */}
            <svg className="md:hidden absolute bottom-[-40px] left-[30%] w-[40px] h-[60px] overflow-visible z-[50]" viewBox="0 0 40 60">
              <path d="M10,0 C 10,30 30,30 30,60" stroke="#3b82f6" strokeWidth="3" fill="none" />
              <circle cx="10" cy="0" r="6" fill="#3b82f6" />
              <circle cx="30" cy="60" r="6" fill="#3b82f6" />
            </svg>

            <span className="text-[3.5rem] font-outfit font-medium text-slate-800 mb-auto leading-none">01</span>
            <div>
              <h4 className="text-3xl font-outfit font-medium text-slate-900 mb-4">Architect</h4>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Designing scalable web architectures, database schemas, and robust cloud infrastructures tailored to business needs.
              </p>
            </div>
          </div>

          {/* Card 2: Develop */}
          <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms] relative bg-[#f6f7f9] border border-white rounded-[2rem] p-10 w-full max-w-[380px] h-[360px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform md:rotate-[3deg] md:translate-y-6 hover:!rotate-0 hover:!scale-105 z-20 flex flex-col">
            
            {/* SVG Connector to Card 3 (Desktop) */}
            <svg className="hidden md:block absolute right-[-90px] bottom-[-10px] w-[130px] h-[80px] overflow-visible z-[50]" viewBox="0 0 130 80">
              <path d="M10,10 C 30,100 100,100 120,40" stroke="#3b82f6" strokeWidth="3" fill="none" />
              <circle cx="10" cy="10" r="6" fill="#3b82f6" />
              <circle cx="120" cy="40" r="6" fill="#3b82f6" />
            </svg>

            {/* SVG Connector to Card 3 (Mobile) */}
            <svg className="md:hidden absolute bottom-[-40px] right-[30%] w-[40px] h-[60px] overflow-visible z-[50]" viewBox="0 0 40 60">
              <path d="M30,0 C 30,30 10,30 10,60" stroke="#3b82f6" strokeWidth="3" fill="none" />
              <circle cx="30" cy="0" r="6" fill="#3b82f6" />
              <circle cx="10" cy="60" r="6" fill="#3b82f6" />
            </svg>

            <span className="text-[3.5rem] font-outfit font-medium text-slate-800 mb-auto leading-none">02</span>
            <div>
              <h4 className="text-3xl font-outfit font-medium text-slate-900 mb-4">Develop</h4>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Writing clean, maintainable code for frontend and backend systems, integrating APIs, and setting up CI/CD pipelines.
              </p>
            </div>
          </div>

          {/* Card 3: Deploy */}
          <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[600ms] relative bg-[#f6f7f9] border border-white rounded-[2rem] p-10 w-full max-w-[380px] h-[360px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform md:-rotate-[2deg] hover:!rotate-0 hover:!scale-105 z-10 flex flex-col">
            <span className="text-[3.5rem] font-outfit font-medium text-slate-800 mb-auto leading-none">03</span>
            <div>
              <h4 className="text-3xl font-outfit font-medium text-slate-900 mb-4">Deploy</h4>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Deploying to modern cloud platforms, monitoring performance, optimizing resources, and ensuring high availability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Selected Works Section */}
      <section id="projects" className="relative w-full max-w-[1300px] px-6 lg:px-16 mx-auto pt-12 pb-32 flex flex-col items-center justify-center z-20">
        <h3 className="text-2xl md:text-3xl font-playfair italic font-medium text-slate-800 mb-2 reveal-animate opacity-0 translate-y-12 transition-all duration-1000">
          Selected Works
        </h3>
        <h2 className="text-4xl md:text-[3.5rem] font-outfit font-medium tracking-tight text-slate-900 mb-8 reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms]">
          My Recent Project
        </h2>

        {/* Category Tabs */}
        <div className="flex items-center gap-4 mb-16 md:mb-20 reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[300ms]">
          <button 
            onClick={() => setActiveTab("website")}
            className={`px-8 py-3 rounded-full font-outfit font-medium transition-all duration-300 ${activeTab === "website" ? "bg-slate-900 text-white shadow-[0_8px_30px_rgb(0,0,0,0.15)]" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
          >
            Website
          </button>
          <button 
            onClick={() => setActiveTab("cloud")}
            className={`px-8 py-3 rounded-full font-outfit font-medium transition-all duration-300 ${activeTab === "cloud" ? "bg-slate-900 text-white shadow-[0_8px_30px_rgb(0,0,0,0.15)]" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
          >
            Cloud
          </button>
        </div>
        
        {activeTab === "website" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {displayedProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className={`reveal-animate opacity-0 translate-y-12 transition-all duration-1000 cursor-pointer group flex flex-col`}
                  style={{ transitionDelay: `${(index % 3) * 150 + 100}ms` }}
                >
                  {/* Card Image Wrapper */}
                  <div className="relative bg-[#f6f7f9] border border-white/60 p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-2 overflow-hidden">
                    <div className="relative w-full aspect-[16/10] md:h-[260px] md:aspect-auto rounded-2xl overflow-hidden bg-slate-200">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
                    <h4 className="text-xl font-outfit font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            {!showAllProjects && projects.length > 6 && (
              <div className="mt-16 flex justify-center w-full">
                <button 
                  onClick={() => setShowAllProjects(true)}
                  className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms] px-8 py-4 bg-slate-900 text-white rounded-full font-outfit font-medium hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Show All
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {displayedCloudProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 cursor-pointer group flex flex-col"
                  style={{ transitionDelay: `${(index % 3) * 150 + 100}ms` }}
                >
                  <div className="relative bg-[#f6f7f9] border border-white/60 p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-2 overflow-hidden">
                    <div className="relative w-full aspect-[16/10] md:h-[260px] md:aspect-auto rounded-2xl overflow-hidden bg-slate-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-3 px-2">
                    <h4 className="text-lg font-outfit font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show All Cloud Button */}
            {!showAllCloud && cloudProjects.length > 6 && (
              <div className="mt-16 flex justify-center w-full">
                <button
                  onClick={() => setShowAllCloud(true)}
                  className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms] px-8 py-4 bg-slate-900 text-white rounded-full font-outfit font-medium hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 flex items-center gap-2"
                >
                  Show All
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* About Me Section */}
      {/* Certificates Section */}
      <section id="certificates" className="relative w-full max-w-[1300px] px-6 lg:px-16 mx-auto pt-12 pb-32 flex flex-col items-center justify-center z-20">
        <h3 className="text-2xl md:text-3xl font-playfair italic font-medium text-slate-800 mb-2 reveal-animate opacity-0 translate-y-12 transition-all duration-1000">
          Achievements
        </h3>
        <h2 className="text-4xl md:text-[3.5rem] font-outfit font-medium tracking-tight text-slate-900 mb-16 reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms]">
          My Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {displayedCertificates.map((cert, index) => (
            <div 
              key={cert.id} 
              onClick={() => setSelectedCertificate(cert)}
              className={`reveal-animate opacity-0 translate-y-12 transition-all duration-1000 cursor-pointer group flex flex-col`}
              style={{ transitionDelay: `${(index % 3) * 150 + 100}ms` }}
            >
              <div className="relative bg-[#f6f7f9] border border-white/60 p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-2 overflow-hidden">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                  {cert.type === "image" ? (
                    <Image 
                      src={cert.file} 
                      alt={cert.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 group-hover:scale-105 transition-transform duration-700 text-slate-400">
                      <FileText size={48} strokeWidth={1.5} className="mb-2 text-blue-400/70" />
                      <span className="text-sm font-medium text-slate-500">PDF Document</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 z-20 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      View Certificate
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 px-2 text-center">
                <h4 className="text-lg font-outfit font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {!showAllCertificates && certificates.length > 6 && (
          <div className="mt-16 flex justify-center w-full">
            <button 
              onClick={() => setShowAllCertificates(true)}
              className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms] px-8 py-4 bg-slate-900 text-white rounded-full font-outfit font-medium hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Show All
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </section>

      <section id="about" className="relative w-full max-w-[1300px] px-6 lg:px-16 mx-auto pt-12 pb-32 flex flex-col items-center justify-center z-20">
        <h3 className="text-2xl md:text-3xl font-playfair italic font-medium text-slate-800 mb-2 reveal-animate opacity-0 translate-y-12 transition-all duration-1000">
          Who am i
        </h3>
        <h2 className="text-4xl md:text-[3.5rem] font-outfit font-medium tracking-tight text-slate-900 mb-16 md:mb-24 reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms]">
          Getting to Know me
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 w-full max-w-[1000px] mx-auto">
          {/* Left: Photo Frame */}
          <div className="w-full lg:w-[45%] reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[300ms]">
            <div className="relative p-2 bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative p-1 border-2 border-slate-100 rounded-2xl bg-white overflow-hidden">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
                  <Image src="/AboutMePhoto.png" alt="Radhiyya Alea" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>
            
            {/* Name & Socials */}
            <div className="flex flex-row items-center justify-between mt-8 px-2">
              <div className="flex gap-4 text-slate-800">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-600 transition-colors"><Mail size={20} /></a>
              </div>
              <div className="text-right">
                <h4 className="font-outfit font-bold text-slate-900 text-[17px]">Radhiyya Alea</h4>
                <p className="text-[13px] font-medium text-slate-500 mt-0.5">Web & Cloud Engineer</p>
              </div>
            </div>
          </div>

          {/* Right: Description & Timeline */}
          <div className="w-full lg:w-[55%] reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[500ms] pt-4">
            <p className="text-[17px] md:text-[19px] text-slate-800 leading-relaxed font-outfit mb-12 font-medium">
              I&apos;m a Web & Cloud Engineer passionate about learning, exploring ideas, and building digital experiences that solve real problems.
            </p>

            <div className="flex flex-col gap-6 w-full">
              {/* Timeline Item 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-5">
                <span className="font-bold text-slate-900 text-[15px]">Founder</span>
                <div className="flex items-center justify-between sm:justify-end sm:gap-12 w-full sm:w-auto">
                  <span className="text-slate-500 text-[14px] font-medium">Elevra Digitalera</span>
                  <span className="text-slate-400 font-semibold text-[14px] w-20 text-right">2025</span>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-5">
                <span className="font-bold text-slate-900 text-[15px]">Finalis Web Developer</span>
                <div className="flex items-center justify-between sm:justify-end sm:gap-12 w-full sm:w-auto">
                  <span className="text-slate-500 text-[14px] font-medium">JYCC, Jatim Innovator</span>
                  <span className="text-slate-400 font-semibold text-[14px] w-20 text-right">2025</span>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-5">
                <span className="font-bold text-slate-900 text-[15px]">Cloud Engineer</span>
                <div className="flex items-center justify-between sm:justify-end sm:gap-12 w-full sm:w-auto">
                  <span className="text-slate-500 text-[14px] font-medium">Skomda</span>
                  <span className="text-slate-400 font-semibold text-[14px] w-20 text-right">2025-2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevra Promotion Section */}
      <section id="services" className="relative w-full max-w-[1300px] px-6 lg:px-16 mx-auto pt-16 pb-32 flex flex-col items-center justify-center z-20 border-t border-slate-200/50">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 w-full max-w-[1100px] mx-auto">
          
          {/* Left: Text Promotion */}
          <div className="w-full lg:w-[50%] reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms] flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl font-outfit font-medium tracking-tight text-slate-900 mb-6 leading-tight">
              Bring Your Ideas to Life with <span className="font-playfair italic">Elevra Digitalera</span>
            </h2>
            <p className="text-[17px] md:text-lg text-slate-600 leading-relaxed font-outfit mb-10">
              Need a professional, modern, and high-performing website? Elevra Digitalera offers premium web development services tailored to your business needs. Elevate your brand&apos;s digital presence today.
            </p>
            
            <a 
              href="https://elevra-digitalera.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-outfit font-medium hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              Visit Elevra Digitalera
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Tilted Photo Frame */}
          <div className="w-full lg:w-[50%] reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms] lg:delay-[400ms]">
            <a 
              href="https://elevra-digitalera.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative p-3 bg-white border border-slate-100 rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.06)] transform rotate-3 hover:rotate-0 active:rotate-0 hover:shadow-[0_20px_50px_rgb(59,130,246,0.3)] active:shadow-[0_20px_50px_rgb(59,130,246,0.3)] transition-all duration-500 group"
            >
              <div className="relative p-2 border-2 border-slate-100 rounded-3xl bg-white overflow-hidden">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-200">
                  <Image 
                    src="/ELEVRA-LANDINGPAGE.png" 
                    alt="Elevra Digitalera Landing Page" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors duration-500"></div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Scattered Collage Section */}
      <section className="relative w-full min-h-[80vh] md:min-h-[140vh] flex flex-col items-center justify-center py-10 md:py-56 overflow-hidden z-10 border-t border-slate-200/50 bg-[#f4f7f6]">
        
        {/* Central Text */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl reveal-animate opacity-0 translate-y-12 transition-all duration-1000 pointer-events-none">
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-outfit font-semibold tracking-tight text-slate-900 mb-4 leading-tight">
            On a quest to craft <br className="hidden md:block" />
            something awesome
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-playfair italic text-slate-500 mt-2">
            to hone my skills or just for fun
          </p>
        </div>

        {/* Scattered Images */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          
          {/* 1. Top Left Corner */}
          <div className="absolute top-[18%] left-[-5%] md:top-[15%] md:left-[4%] w-[180px] md:w-[420px] transform -rotate-[12deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[100ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[0].image} alt="Project 1" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 2. Top Mid-Left */}
          <div className="absolute top-[14%] left-[25%] md:top-[12%] md:left-[28%] w-[180px] md:w-[400px] transform rotate-[4deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[150ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[1].image} alt="Project 2" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 3. Top Mid-Right */}
          <div className="absolute top-[16%] right-[5%] md:top-[14%] md:right-[28%] w-[180px] md:w-[420px] transform -rotate-[6deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[200ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[2].image} alt="Project 3" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 4. Top Right Corner (Picka Photobooth) */}
          <div className="absolute top-[25%] right-[-25%] md:top-[18%] md:right-[5%] w-[180px] md:w-[440px] transform rotate-[10deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[250ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[3].image} alt="Project 4" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 5. Mid-Upper Far Left (Web Jatim) */}
          <div className="absolute top-[35%] left-[-40%] md:top-[35%] md:left-[2%] w-[180px] md:w-[450px] transform rotate-[8deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[300ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[4].image} alt="Project 5" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 6. Mid-Lower Far Left (Z-Learn) */}
          <div className="absolute top-[48%] left-[-35%] md:top-[55%] md:left-[2%] w-[180px] md:w-[400px] transform -rotate-[10deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[350ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[5].image} alt="Project 6" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 7. Mid-Upper Far Right */}
          <div className="absolute top-[35%] right-[-35%] md:top-[32%] md:right-[2%] w-[180px] md:w-[460px] transform -rotate-[5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[400ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[6].image} alt="Project 7" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 8. Mid-Lower Far Right (Assignment Management) */}
          <div className="absolute top-[50%] right-[-35%] md:top-[52%] md:right-[2%] w-[180px] md:w-[430px] transform rotate-[12deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[450ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[7].image} alt="Project 8" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 9. Bottom Left Corner */}
          <div className="absolute bottom-[18%] left-[-10%] md:bottom-[10%] md:left-[8%] w-[180px] md:w-[450px] transform rotate-[6deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[500ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[8].image} alt="Project 9" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 10. Bottom Mid (Watu Pari) */}
          <div className="absolute bottom-[8%] left-[20%] md:bottom-[6%] md:left-[35%] w-[180px] md:w-[440px] transform -rotate-[3deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[550ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[9].image} alt="Project 10" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* 11. Bottom Right Corner (Dashboard) */}
          <div className="absolute bottom-[15%] right-[-10%] md:bottom-[8%] md:right-[10%] w-[180px] md:w-[470px] transform rotate-[4deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] pointer-events-auto rounded-xl md:rounded-[2rem] border-[6px] md:border-[12px] border-white shadow-xl bg-white reveal-animate opacity-0 translate-y-12 delay-[600ms] group p-1 md:p-2">
            <div className="w-full h-auto overflow-hidden rounded-lg md:rounded-2xl">
              <Image src={projects[10].image} alt="Project 11" width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl z-10 animate-fade-in-up flex flex-col max-h-[90vh]">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white backdrop-blur-md p-2 rounded-full transition-all shadow-sm">
              <X size={20} className="text-slate-800" />
            </button>
            <div className="w-full relative bg-slate-900 shrink-0 flex items-center justify-center">
              <Image
                src={selectedProject.detailImage ?? selectedProject.image}
                alt={selectedProject.title}
                width={900}
                height={600}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>
            <div className="p-8 sm:p-10 overflow-y-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl sm:text-4xl font-outfit font-semibold text-slate-900 mb-6">{selectedProject.title}</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedCertificate(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl z-10 animate-fade-in-up flex flex-col max-h-[90vh]">
            <button onClick={() => setSelectedCertificate(null)} className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white backdrop-blur-md p-2 rounded-full transition-all shadow-sm">
              <X size={20} className="text-slate-800" />
            </button>
            <div className="w-full relative bg-slate-100 shrink-0 flex items-center justify-center p-8 min-h-[50vh]">
              {selectedCertificate.type === "image" ? (
                <Image
                  src={selectedCertificate.file}
                  alt={selectedCertificate.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[75vh] object-contain shadow-md rounded-xl"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <iframe 
                    src={`${selectedCertificate.file}#view=FitH`} 
                    className="w-full h-[75vh] rounded-xl shadow-md bg-white border-0 hidden md:block" 
                    title={selectedCertificate.title}
                  />
                  <div className="w-full md:hidden flex flex-col items-center justify-center py-12 px-4 bg-white rounded-xl shadow-sm border border-slate-200">
                    <FileText size={64} className="text-blue-500 mb-4" />
                    <h4 className="text-xl font-semibold text-slate-800 mb-2 text-center">PDF Document</h4>
                    <p className="text-slate-500 mb-8 text-center text-sm px-4">Tap the button below to open and view the PDF document in your browser.</p>
                    <a href={selectedCertificate.file} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md flex items-center gap-2 active:scale-95">
                      <FileText size={18} />
                      Open PDF Document
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 sm:p-8 bg-white border-t border-slate-100 text-center">
              <h3 className="text-2xl sm:text-3xl font-outfit font-semibold text-slate-900">{selectedCertificate.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section id="contact" className="relative w-full pt-32 pb-40 flex flex-col items-center justify-center text-center z-20 mt-10">
        {/* Top Blue Noise/Glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[350px] bg-blue-400/30 blur-[100px] md:blur-[120px] rounded-[100%] pointer-events-none -z-10" />
        
        <div className="w-full px-6 flex flex-col items-center">
          <h2 className="text-5xl md:text-[5rem] font-outfit font-medium tracking-tight text-slate-900 mb-6 reveal-animate opacity-0 translate-y-12 transition-all duration-1000">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-[17px] md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[200ms]">
            Open to new opportunities, collaborations, and meaningful projects. Let&apos;s build something impactful together.
          </p>
          <div className="reveal-animate opacity-0 translate-y-12 transition-all duration-1000 delay-[400ms]">
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-outfit font-medium hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300">
              <ArrowRight size={20} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-200/60 bg-[#f4f7f6]">
        <div className="max-w-[1300px] px-6 lg:px-16 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[15px] font-medium">
            © {new Date().getFullYear()} Radhiyya Alea. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[15px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-[15px] font-semibold text-slate-500 hover:text-pink-600 transition-colors">Instagram</a>
            <a href="#" className="text-[15px] font-semibold text-slate-500 hover:text-green-600 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
