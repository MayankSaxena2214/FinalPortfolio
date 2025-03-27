import React from "react";

const Navbar = ({ refs }) => {
  const handleScroll = (section) => {
    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex z-20 justify-between items-center px-4 py-3 bg-gray-900 text-white text-xl sticky top-0 left-0">
      <div className="text-blue-500 font-bold shadow-blue-400 text-3xl px-4 py-2">
        PORTFOLIO
      </div>
      <ul className="flex gap-6">
        <li className="cursor-pointer" onClick={() => handleScroll("home")}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("education")}>
          Education
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("skills")}>
          Skills
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("experience")}>
          Experience
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("projects")}>
          Projects
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("socials")}>
          Socials
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("certificates")}>
          Certificates
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("contact")}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex z-20 justify-between items-center px-4 py-3 bg-gray-900 text-white text-xl sticky top-0 left-0'>
//       <div className=' text-blue-600 shadow-blue-400 text-3xl px-4 py-2 '>PORTFOLIO</div>
//       <ul className='flex gap-6 '>
//         <li className='cursor-pointer '>Home</li>
//         <li className='cursor-pointer '>Education</li>
//         <li className='cursor-pointer '>Skills</li>
//         <li className='cursor-pointer '>Experience</li>
//         <li className='cursor-pointer '>Projects</li>
//         <li className='cursor-pointer '>Socials</li>
//         <li className='cursor-pointer '>Certificates</li>
//         <li className='cursor-pointer '>Contact</li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar
