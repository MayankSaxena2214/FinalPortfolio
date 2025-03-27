"use client";
import { useRef } from "react";
import Certificate from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const socialsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    education: educationRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    socials: socialsRef,
    certificates: certificatesRef,
    contact: contactRef,
  };

  return (
    <div>
      <Navbar refs={sectionRefs} />
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={socialsRef}>
        <Socials />
      </div>
      <div ref={certificatesRef}>
        <Certificate />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
// "use client"
// import Certificate from "@/components/Certificates";
// import Contact from "@/components/Contact";
// import Education from "@/components/Education";
// import Experience from "@/components/Experience";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/HeroSection";
// import Navbar from "@/components/Navbar";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import Socials from "@/components/Socials";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <Navbar/>
//       <HeroSection/>
//       <Education/>
//       <Skills/>
//       <Experience/>
//       <Projects/>
//       <Socials/>
//       <Certificate/>
//       <Contact/>
//       <Footer/>
//     </div>
//   );
// }
