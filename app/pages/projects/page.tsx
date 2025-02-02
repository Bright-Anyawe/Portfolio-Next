"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

 const Projects = () => {
  const projects = [
    {
      src: "/assets/Figma design.png",
      alt: "Figma design",
      live: "https://phinance-management-app.netlify.app/",
      gitHubLink: "https://github.com/Bright-Anyawe/Figma_design",
      title: "Figma Design Website",
      description:
        "This project is a figma design website that was designed for Yottanet company clients",
    },
    {
      src: "/assets/e-commerce-platform-landing-page.avif",
      live: "https://ecommerce-frontend-livid-mu.vercel.app/",
      gitHubLink: "https://github.com/Bright-Anyawe/Ecommerce_fireBase",
      alt: "E-commerce website",
      title: "E-commerce Store",
      description:
        "Scalable React application with dynamic product pages, cart functionality, and authentication.",
    },
    {
      src: "/assets/cop logo.jpeg",
      live: "https://golf-estate-ministry-cop.vercel.app/",
      gitHubLink: "https://github.com/Bright-Anyawe/Golf_Estate_Ministry_Cop",
      alt: "COP",
      title: "Golf Estate Assembly(COP) Website",
      description:
        "A website for the Golf Estate Assembly(COP) to help members learn more about the church.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {}
          <div className="w-full xl:w-[50%] xl:h-[40px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="projectCount text-8xl leading-none font-extrabold text-red-500 text-outline">
                {String(activeIndex + 1).padStart(2, "0")}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[activeIndex].title}
              </h2>
              <p className="description text-white/60">
                {projects[activeIndex].description}
              </p>
              <ul className="flex gap-4 text-red-500">
                <li className="text-xl text-accent">HTML 5,</li>
                <li className="text-xl text-accent">CSS 3,</li>
                <li className="text-xl text-accent">JavaScript</li>
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {}
                <a target="_blank" href={`${projects[activeIndex].live}`}>
                  <button className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-white text-3xl group-hover:text-accent"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      ></path>
                    </svg>
                  </button>
                </a>
                <a target="_blank" href={`${projects[activeIndex].gitHubLink}`}>
                  <button className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-white text-3xl group-hover:text-accent"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {}
          <div className="w-full xl:w-[50%]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
