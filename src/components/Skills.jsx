import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRazorpay } from "react-icons/si";
// import { SiNodemailer } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-blue-400" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
  { name: "SQL", icon: <FaDatabase />, color: "text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
  { name: "Socket.io", icon: <SiSocketdotio />, color: "text-white" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-600" },
  { name: "Razorpay API", icon: <SiRazorpay />, color: "text-blue-600" },
//   { name: "Nodemailer", icon: <SiNodemailer />, color: "text-red-500" },
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex animate-bounce flex-col items-center p-4 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-gray-800 ${skill.color}`}
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
