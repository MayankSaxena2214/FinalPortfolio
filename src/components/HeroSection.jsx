"use client";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly px-8 py-16 bg-[#26202d] text-white md:min-h-[80vh]">
      {/* Left Side - Typewriter Text */}
      <div className="md:w-[40%] text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Mayank Saxena</span>
        </h1>
        <h2 className="text-3xl">
          I'm a{" "}
          <span className="text-blue-400">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Enthusiast",
                "Next.js Expert",
                "Reactjs Developer",
                "Frontend Developer",
                "Backend Developer"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <a href="https://drive.google.com/file/d/1iq00VZyNP3Ith-Psa4cgPerRDF4VAfuk/view?usp=drive_link" target="blank">
        <button className="px-6 py-3 bg-blue-900 mt-5 rounded-3xl animate-pulse">Resume</button>
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-[40%] flex justify-center mt-8 md:mt-0">
        <img
          src="/code.gif"
          alt="Profile"
          className=" h-64 object-cover  border-2 border-blue-400"
        />
      </div>
    </section>
  );
};

export default HeroSection;
