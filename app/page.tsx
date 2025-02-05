import "./styles/home.css";
import { PersonalImage } from "./components/PersonalImage";
import HomeButton from "./components/Button";

export default function Home() {
  const stats = [
    { value: "25", label: "Months of experience" },
    { value: "6", label: "Projects completed" },
    { value: "1", label: "Language Learnt" },
  ];
  
  return (
    <>
      {}
      <section className="flex flex-col items-center xl:items-start xl:flex-row gap-8 p-6 xl:p-12 max-w-screen-2xl mx-auto">
        {}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <div className="webType text-2xl xl:text-3xl 2xl:text-4xl">
            Web Developer
          </div>
          <h1 className="devTextEl h1 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-medium leading-tight">
            Hello I am <br />
            <div className="home-name text-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-gradient font-extrabold tracking-wide uppercase">
              Anyawe Bright
            </div>
          </h1>

          <h2 className="text-red-500 text-xl xl:text-2xl 2xl:text-3xl">
            I EMBRACE THE DIGITAL WORLD
          </h2>
          <p className="IntroType max-w-[80vw] xl:max-w-[500px] 2xl:max-w-[600px] mb-9 text-white text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
            Searching for someone who is eager to learn, proficient in
            communicating with clients, who thinks of new and better methods to
            solve problems, and enjoys using his tech talents to assist others
            in solving difficulties? You&apos;re in the correct place. I can assist
            you with developing features, projects, or accessible and
            user-friendly websites as well as testing your web application.
            Explore my work to witness my inventiveness! Should you be
            interested, I am available for employment.
          </p>

          <HomeButton />
        </div>

        {}
        <PersonalImage />
      </section>

      {}
      <section className="py-12 xl:py-0">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center xl:justify-start">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <span className="text-4xl xl:text-6xl 2xl:text-7xl font-extrabold text-accent">
                  {stat.value}
                </span>
                <p className="max-w-[200px] leading-snug text-red-500 text-lg xl:text-xl 2xl:text-2xl">
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
