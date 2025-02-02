"use client"; 

import { useState, useRef } from "react";
import { PersonalImage } from "@/app/components/PersonalImage";
import "@/app/styles/about.css";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); 

  return (
    <section className="container h-full py-12 xl:py-24">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
        {}
        <PersonalImage />

        {}
        <div className="text-center xl:text-left order-2 xl:order-none max-w-2xl mb-14">
          <div className="webType text-xl text-accent">Web Developer</div>
          <h1 className="h1 mb-6 font-medium text-5xl">
            Get to know <br />{" "}
            <span className="text-accent text-red-500">Anyawe :)</span>
          </h1>

          {}
          <p className="text-white text-xl leading-relaxed">
            My name is <span className="identity">Anyawe Bright</span>, and I am
            a passionate front-end developer based in Ghana. I am dedicated to
            continuously improving my skills through study and practical
            application, using code to solve real-world problems—a pursuit that
            brings me immense satisfaction.
          </p>

          {}
          <div
            ref={contentRef}
            className="overflow-hidden transition-max-height duration-700 ease-in-out"
            style={{
              maxHeight: expanded
                ? `${contentRef.current?.scrollHeight}px`
                : "0px",
            }}
          >
            <p className="text-white text-xl leading-relaxed">
              <br />
              From a young age, I have been fascinated by how modern software
              and games function. This curiosity drove me to ask questions,
              conduct research, and leverage available resources, ultimately
              leading me to pursue a career in web development. I have worked on
              various projects, including a Todo List app, an E-commerce
              website, and a CV Builder application. Each project has honed my
              technical abilities and strengthened my commitment to building
              innovative, user-friendly solutions. I am eager to contribute to
              impactful development projects and grow within the industry.
              <br />
              <br />I aim to master JavaScript to craft unique, creative, and
              innovative solutions that address real-world challenges through
              code. If you&apos;re intrigued by my portfolio or seeking an
              enthusiastic developer to join your team, I&apos;m open to
              opportunities and ready to contribute.
            </p>
          </div>

          {}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 px-6 py-2 border border-accent text-accent rounded-full text-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}
