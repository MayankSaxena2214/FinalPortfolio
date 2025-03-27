import { FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row px-6">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Mayank Saxena. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/mayank-saxena-419388239/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a href="https://portfolio-router.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center">
            <FaGlobe className="mr-2" /> Portfolio
          </a>
          <a href="mailto:mayanksaxena2214@gmail.com" className="hover:text-blue-400 flex items-center">
            <FaEnvelope className="mr-2" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
