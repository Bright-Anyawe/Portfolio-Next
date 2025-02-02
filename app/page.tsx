import "./styles/home.css";
import { PersonalImage } from "./components/PersonalImage";
import HomeButton from "./components/Button";

export default function Home() {
  const stats = [
    { value: "24", label: "Months of experience" },
    { value: "6", label: "Projects completed" },
    { value: "1", label: "Languages Learnt" },
  ];
  return (
    <>
      <section className="flex flex-col items-center xl:items-start xl:flex-row gap-8 p-6 xl:p-12">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <div className="typing text-2xl">Web Developer</div>
          <h1 className=" devTextEl h1 mb-6 text-6xl font-medium">
            Hello I am <br />{" "}
            <span className=" text-accent text-5xl text-red-500 font-extrabold">
              Anyawe Bright
            </span>
          </h1>

          <h2 className="text-red-500">I EMBRACE THE DIGITAL WORLD</h2>
          <p className="IntroType max-w-[500px] mb-9 text-white text-lg">
            <span className="line" style={{ animationDelay: "0s" }}>
              Searching for someone who is eager to learn, proficient in
              communicating clients,
            </span>
            <span className="line" style={{ animationDelay: "1.5s" }}>
              who thinks of new and better methods to solve problems,
            </span>
            <span className="line" style={{ animationDelay: "3s" }}>
              and enjoys using his tech talents to assist others in solving
              difficulties?
            </span>
            <span className="line" style={{ animationDelay: "4.5s" }}>
              You&apos;re in the correct place. I can assist you with developing
              features,
            </span>
            <span className="line" style={{ animationDelay: "6s" }}>
              projects, or accessible and user-friendly websites as well as
              testing your web application.
            </span>
            <span className="line" style={{ animationDelay: "7.5s" }}>
              Explore my work to witness my inventiveness! Should you be
              interested, I am available for employment.
            </span>
          </p>

          <HomeButton />
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
                <p className="max-w-[150px] leading-snug text-red-500">
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
