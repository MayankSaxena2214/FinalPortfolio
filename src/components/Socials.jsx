import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaStackOverflow, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";

const socials = [
  { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/MayankSaxe59906", color: "text-blue-400" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/mayanksaxena2214", color: "text-pink-400" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mayank-saxena-419388239/", color: "text-blue-600" },
  { name: "Email", icon: <FaEnvelope />, link: "mailto:mayanksaxena2214@gmail.com", color: "text-red-400" },
  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/mayanksaxena2214", color: "text-yellow-400" },
  { name: "GFG", icon: <SiGeeksforgeeks />, link: "https://www.geeksforgeeks.org/user/mayanksaxena2114", color: "text-green-500" },
  { name: "Code360", icon: <SiCodingninjas />, link: "https://www.naukri.com/code360/profile/c5bda087-b028-45a8-b194-ddc0ce93bd8f", color: "text-orange-500" },
  { name: "Phone", icon: <FaPhone />, link: "tel:9259525543", color: "text-gray-400" },
  { name: "Github", icon: <FaGithub/>, link: "https://github.com/MayankSaxena2214", color: "text-gray-200" },
  { name: "Stack Overflow", icon: <FaStackOverflow />, link: "https://stackoverflow.com/users/27854361/mayank-saxena", color: "text-amber-600" },

];

const Socials = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-blue-800 ">
      <h2 className="text-2xl font-bold text-center text-white mb-10">Connect With Me</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 animate-bounce rounded-xl flex flex-col items-center justify-center space-y-2 transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gray-800"
          >
            <div className={`text-4xl ${social.color}`}>{social.icon}</div>
            <span className="text-white text-sm font-semibold">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
