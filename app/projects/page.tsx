'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobile, FaVideo, FaHashtag, FaBullhorn, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  // Web Development Projects
  {
    src: "/assets/og-image.avif",
    live: "https://rising-soul.vercel.app/",
    gitHubLink: "#",
    alt: "Rising Soul School",
    tools: "Next.js, React, Tailwind CSS",
    title: "Rising Soul School (Full‑stack direction)",
    description:
      "Modern school website with clear navigation for admissions, staff, and contact — built for speed, clarity, and trust.",
    highlights: [
      "Information architecture that makes admissions + contact easy to find",
      "Responsive layout and SEO-friendly structure for discoverability",
      "Clean UI with consistent spacing and accessible interaction states",
    ],
    category: "web-development",
    featured: true,
  },
  {
    src: '/assets/b-k numbers images.png',
    live: 'https://b-k-numbers.vercel.app/',
    gitHubLink: 'https://github.com/Bright-Anyawe/B-K-Numbers',
    alt: 'B-K-Numbers',
    tools: `HTML 5, Tailwind(CSS3), React(Next.js), PostgreSQL, Prisma ORM, Neon db`,
    title: 'B-K-Numbers(Full-Stack)',
    description:
      "Full‑stack platform for buying virtual numbers with login/signup, wallet flow, and an admin-friendly dashboard.",
    highlights: [
      "Auth + protected dashboard experience",
      "Orders + wallet management UI for a clear user flow",
      "PostgreSQL + Prisma-backed data layer (Neon)",
    ],
    category: 'web-development',
    featured: true
  },
  {
    src: '/assets/Quiz-gaurd image.png',
    live: 'https://quizguard-pro.vercel.app/',
    gitHubLink: 'https://github.com/Bright-Anyawe/QuizGuard-Pro',
    alt: 'QuizGuard-Pro',
    tools: `HTML 5, Tailwind(CSS3), React(Next.js), PostgreSQL, Prisma ORM, Neon db`,
    title: 'QuizGuard-Pro(Full-Stack)',
    description: "QuizGuard-Pro is a web application that allows users to create and take quizzes.",
    category: 'web-development',
    featured: true
  },
  {
    src: '/assets/devato-institute-image.png',
    live: 'https://devato-computing-training-institue.vercel.app/',
    gitHubLink: 'https://github.com/Bright-Anyawe/Devato-Computing-Training-Institute',
    alt: 'Devato-Computing-Training-Institute',
    tools: `HTML 5, Tailwind(CSS3), React(Next.js)`,
    title: 'Devato-Computing-Training-Institute(Frontend)',
    description: "Devato-Computing-Training-Institute is a web application that allows users to enroll in courses, view courses, and more.",
    category: 'web-development',
    featured: false
  },

  {
    src: '/assets/EHR.jpg',
    live: 'https://akorabo-l-6kmyiauh6-bright-anyawes-projects.vercel.app/',
    gitHubLink: 'https://github.com/Bright-Anyawe/Akorabo-L.EHR',
    alt: 'Electronic Health Record (EHR) system',
    tools: `HTML 5, Tailwind(CSS3), React(Next.js)`,
    title: ' Electronic Health Record (EHR) system',
    description: 'Developed a lightweight Electronic Health Record (EHR) system for a clinic, designed to streamline the management of patient data. The application allows staff to securely create, update, and retrieve patient records, ensuring data privacy and integrity.',
    category: 'web-development',
    featured: false
  },
  {
    src: '/assets/not-authorized.png',
    live: 'https://inde-book.vercel.app/',
    gitHubLink: 'https://inde-book.vercel.app/',
    alt: 'E-books',
    tools: `HTML 5, CSS3, React, Nextjs`,
    title: 'E-Books Website(IndE-books)',
    description: 'As a Frontend Intern at University of Phoenix Group (UPG), I contributed to developing an E-book website. I implemented an AI-powered chatbot to enhance user engagement with real-time feedback and designed a responsive carousel to improve interface interaction',
    category: 'web-development',
    featured: false
  },
  {
    src: '/assets/e-commerce-platform-landing-page.avif',
    live: 'https://tech-spark-phi.vercel.app/',
    gitHubLink: 'https://github.com/Bright-Anyawe/trendy-cart-spark',
    alt: 'E-commerce website',
    tools: `HTML 5, CSS3, React`,
    title: 'E-commerce Store',
    description: 'Scalable React application with dynamic product pages, cart functionality, and authentication.',
    category: 'web-development',
    featured: false
  },
  {
    src: '/assets/image.png',
    alt: 'Figma design',
    live: 'https://phinance-management-app.netlify.app/',
    gitHubLink: 'https://github.com/Bright-Anyawe/Figma_design',
    tools: `HTML 5, CSS3`,
    title: 'Figma Design Website',
    description: 'This project is a figma design website that was designed for Yottanet company clients',
    category: 'graphic-design',
    featured: false
  },
  {
    src: '/assets/golf-estate-assembly.jpg',
    live: 'https://golf-estate-assembly.vercel.app/',
    gitHubLink: 'https://github.com/Bright-Anyawe/faith-hub-manager',
    alt: 'Golf Estate Assembly(Pentecostal Church)',
    tools: `HTML 5, CSS3, React`,
    title: 'Golf Estate Assembly',
    description: 'This project was designed to showcase my skills in web development in Css3, Html5, and React, Nextjs, and Tailwindcss to create CMS for the church of pentecost',
    category: 'web-development',
    featured: false
  },
  
  // Graphic Design Projects (Placeholder - Add real projects)
  {
    src: '/assets/brand-identity-mockup.jpg',
    live: '#',
    gitHubLink: '#',
    alt: 'Brand Identity Design',
    tools: 'Adobe Illustrator, Photoshop, Figma',
    title: 'Tech Startup Brand Identity',
    description: 'Complete brand identity package including logo, business cards, and brand guidelines for innovative tech startup.',
    category: 'graphic-design',
    featured: true
  },
  
  // Video Editing Projects (Placeholder - Add real projects)
  {
    src: '/assets/video-editing-thumbnail.jpg',
    live: '#',
    gitHubLink: '#',
    alt: 'Promotional Video',
    tools: 'Adobe Premiere Pro, After Effects',
    title: 'Product Launch Video',
    description: 'Engaging promotional video for product launch with motion graphics and professional editing.',
    category: 'video-editing',
    featured: true
  },
  
  // Social Media Projects (Placeholder - Add real projects)
  {
    src: '/assets/social-media-campaign.jpg',
    live: '#',
    gitHubLink: '#',
    alt: 'Social Media Campaign',
    tools: 'Canva, Hootsuite, Facebook Business Manager',
    title: 'Social Media Campaign',
    description: 'Comprehensive social media campaign that increased engagement by 200% and followers by 150%.',
    category: 'social-media',
    featured: true
  },
  
  // Digital Marketing Projects (Placeholder - Add real projects)
  {
    src: '/assets/marketing-dashboard.jpg',
    live: '#',
    gitHubLink: '#',
    alt: 'Digital Marketing Campaign',
    tools: 'Google Ads, Analytics, SEMrush',
    title: 'Lead Generation Campaign',
    description: 'Digital marketing campaign that generated 300+ qualified leads with 400% ROI.',
    category: 'digital-marketing',
    featured: true
  }


];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaCode /> },
    { id: 'web-development', name: 'Web Development', icon: <FaCode /> },
    { id: 'graphic-design', name: 'Graphic Design', icon: <FaPaintBrush /> },
    { id: 'mobile-apps', name: 'Mobile Apps', icon: <FaMobile /> },
    { id: 'video-editing', name: 'Video Editing', icon: <FaVideo /> },
    { id: 'social-media', name: 'Social Media', icon: <FaHashtag /> },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: <FaBullhorn /> }
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">My</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Explore my diverse portfolio showcasing expertise across web development, 
            graphic design, mobile apps, video editing, social media, and digital marketing.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="flex flex-col xl:flex-row xl:gap-[30px] mb-16">
          <div className="w-full xl:w-[50%]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
              // Optional: Add responsive breakpoints
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group bg-pink-50/20 aspect-video">
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        style={{ objectFit: 'contain' }}
                        quality={100}
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full xl:w-[50%] xl:h-[40px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="projectCount text-8xl leading-none font-extrabold text-red-500 text-outline">
                {String(activeIndex + 1).padStart(2, '0')}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[activeIndex].title}
              </h2>
              <p className="description text-white/60">{projects[activeIndex].description}</p>

              {Array.isArray((projects as any)[activeIndex]?.highlights) && (
                <ul className="mt-4 space-y-2 text-white/70 list-disc pl-5">
                  {(projects as any)[activeIndex].highlights.map((h: string) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <ul className="flex gap-4 text-red-500">
                <li className="text-xl text-accent">{projects[activeIndex].tools},</li>
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {projects[activeIndex].live && projects[activeIndex].live !== "#" && (
                  <a target="_blank" rel="noopener noreferrer" href={`${projects[activeIndex].live}`}>
                  <button className="relative w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-300 hover:bg-accent">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-white text-3xl transition-all duration-300 group-hover:text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      ></path>
                    </svg>
                    {}
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-sm mt-14">
                      Live
                    </span>
                  </button>
                  </a>
                )}

                {projects[activeIndex].gitHubLink &&
                  projects[activeIndex].gitHubLink !== "#" &&
                  projects[activeIndex].gitHubLink !== projects[activeIndex].live && (
                    <a target="_blank" rel="noopener noreferrer" href={`${projects[activeIndex].gitHubLink}`}>
                  <button className="relative w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-300 hover:bg-accent">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-white text-3xl transition-all duration-300 group-hover:text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                    </svg>
                    {}
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-sm mt-14">
                      GitHub
                    </span>
                  </button>
                    </a>
                  )}
              </div>
            </div>
          </div>

          <style>
            {`
    .swiper-button-next, .swiper-button-prev {
      color: red !important;
    }
  `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default Projects;
