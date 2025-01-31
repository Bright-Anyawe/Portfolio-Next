import { PersonalImage } from "@/app/components/PersonalImage";

export default function About() {
  return (
    <section className="container h-full py-12 xl:py-24">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        {/* Image Section */}
        <PersonalImage />

        {/* Text Section */}
        <div className="text-center xl:text-left order-2 xl:order-none max-w-2xl">
          <span className="text-xl text-accent">Web Developer</span>
          <h1 className="h1 mb-6">
            Get to know <br /> <span className="text-accent">Anyawe :)</span>
          </h1>
          <p className="text-black leading-relaxed">
            My name is <span className="identity">Anyawe Bright</span>, and I am
            a passionate front-end developer based in Ghana. I am dedicated to
            continuously improving my skills through study and practical
            application, using code to solve real-world problems—a pursuit that
            brings me immense satisfaction. From a young age, I have been
            fascinated by how modern software and games function.
            <br />
            <br />
            This curiosity drove me to ask questions, conduct research, and
            leverage available resources, ultimately leading me to pursue a
            career in web development. I have worked on various projects,
            including a Todo List app, an E-commerce website, and a CV Builder
            application. Each project has honed my technical abilities and
            strengthened my commitment to building innovative, user-friendly
            solutions. I am eager to contribute to impactful development
            projects and grow within the industry.
            <br />
            <br />I aim to master JavaScript to craft unique, creative, and
            innovative solutions that address real-world challenges through
            code. If you&apos;re intrigued by my portfolio or seeking an
            enthusiastic developer to join your team, I&apos;m open to
            opportunities and ready to contribute.
          </p>
        </div>
      </div>
    </section>
  );
}
