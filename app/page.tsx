import Link from "next/link";
import { PersonalImage } from "./components/PersonalImage";

export default function Home() {
  const stats = [
    { value: "12", label: "Months of experience" },
    { value: "6", label: "Projects completed" },
    { value: "6", label: "Languages Learnt" },
  ];
  return (
    <>
      <section className="flex flex-col items-center xl:items-start xl:flex-row gap-8 p-6 xl:p-12">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-2xl">Web Developer</span>
          <h1 className="h1 mb-6 text-6xl font-medium">
            Hello I am <br /> <span className="text-accent text-5xl text-red-500 font-extrabold">Anyawe Bright</span>
          </h1>
          {/* <p className="max-w-[500px] mb-9 text-black">
          I am committed to pushing the boundaries of what is possible in technology and human interaction,
          aiming to create impactful and user-centric solutions. Connect with me to explore how we can make
          a difference together in the tech industry.
        </p> */}
          <h2 className="text-red-500">I EMBRACE THE DIGITAL WORLD</h2>
          <p className="max-w-[500px] mb-9 text-white">
            Searching for someone who is eager to learn, proficient in
            communicating clients, who thinks of new and better methods to solve
            problems, and enjoys using his tech talents to assist others in
            solving difficulties? You&apos;re in the correct place. I can assist
            you with developing features, projects, or accessible and
            user-friendly websites as well as testing your web application.
            Explore my work to witness my inventiveness! Should you be
            interested, I am available for employment.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors bg-transparent text-accent border border-accent hover:bg-accent-hover h-[56px] px-8 text-sm tracking-[2px] uppercase flex items-center gap-2"
            >
              <span>Download Resume</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-6">
              {/* GitHub */}
              <Link
                href="https://github.com/pasiama"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
                  </svg>
                </div>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/phoebe-asiama-8a6134205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Personal Image */}
        <PersonalImage />
      </section>

      <section className="py-12 xl:py-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <span className="text-4xl font-extrabold xl:text-6xl text-accent">
                  {stat.value}
                </span>
                <p className="max-w-[150px] leading-snug text-black/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
