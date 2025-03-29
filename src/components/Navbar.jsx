"use client";
import React, { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = ({ refs }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  const handleScroll = (section) => {
    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Triggers when the section is in the middle of the viewport
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id"));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);

  return (
    <div className="flex z-20 justify-between items-center px-4 py-3 bg-gray-900 text-white text-xl sticky top-0 left-0">
      <div className="text-blue-500 font-bold shadow-blue-400 text-3xl px-4 py-2">
        PORTFOLIO
      </div>
      <ul className="hidden md:flex gap-6">
        {Object.keys(refs).map((section) => (
          <li
            key={section}
            className={`cursor-pointer transition-colors ${
              activeSection === section ? "text-blue-400" : "text-white"
            }`}
            onClick={() => handleScroll(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
      <FiAlignJustify
        onClick={() => setOpen((prev) => !prev)}
        className="block text-2xl md:hidden"
      />
      {open && (
        <ul className="md:hidden absolute top-18 left-0 bg-gray-800 w-full flex justify-center items-center py-2 flex-col gap-2">
          {Object.keys(refs).map((section) => (
            <li
              key={section}
              className={`cursor-pointer transition-colors ${
                activeSection === section ? "text-blue-400" : "text-white"
              }`}
              onClick={() => {
                handleScroll(section);
                setOpen(false);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

// "use client"
// import React, { useState } from "react";
// import { FiAlignJustify } from "react-icons/fi";
// const Navbar = ({ refs }) => {
//   const handleScroll = (section) => {
//     if (refs[section] && refs[section].current) {
//       refs[section].current.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const [open,setOpen]=useState(false);

//   console.log(refs)

//   return (
//     <div className="flex z-20 justify-between items-center px-4 py-3 bg-gray-900 text-white text-xl sticky top-0 left-0">
//       <div className="text-blue-500 font-bold shadow-blue-400 text-3xl px-4 py-2">
//         PORTFOLIO
//       </div>
//       <ul className="hidden md:flex gap-6">
//         <li className="cursor-pointer" onClick={() => handleScroll("home")}>
//           Home
//         </li>
//         <li className="cursor-pointer" onClick={() => handleScroll("education")}>
//           Education
//         </li>
//         <li className="cursor-pointer" onClick={() => handleScroll("skills")}>
//           Skills
//         </li>
//         <li className="cursor-pointer" onClick={() => handleScroll("experience")}>
//           Experience
//         </li>
//         <li className="cursor-pointer" onClick={() => handleScroll("projects")}>
//           Projects
//         </li>
//         <li className="cursor-pointer" onClick={() => handleScroll("socials")}>
//           Socials
//         </li>
//         <li className="cursor-pointer" onClick={() => handleScroll("certificates")}>
//           Certificates
//         </li>
//         <li className="cursor-pointer" onClick={() => handleScroll("contact")}>
//           Contact
//         </li>
//       </ul>
//       <FiAlignJustify onClick={()=>open==true?setOpen(false):setOpen(true)} className="block text-2xl md:hidden"/>
//       {
//         open && <ul className="md:hidden absolute top-18 left-0 bg-gray-800 w-full flex justify-center items-center py-2 flex-col gap-2">
//         <li className="cursor-pointer" onClick={() => {handleScroll("home");
//           setOpen(false)
//         }}>
//           Home
//         </li>
//         <li className="cursor-pointer" onClick={() => {handleScroll("education");
//           setOpen(false)
//         }}>
//           Education
//         </li>
//         <li className="cursor-pointer" onClick={() => {handleScroll("skills");
//           setOpen(false)
//         }}>
//           Skills
//         </li>
//         <li className="cursor-pointer" onClick={() => {handleScroll("experience");
//           setOpen(false)
//         }}>
//           Experience
//         </li>
//         <li className="cursor-pointer" onClick={() => {handleScroll("projects");
//           setOpen(false)
//         }}>
//           Projects
//         </li>
//         <li className="cursor-pointer" onClick={() => {handleScroll("socials");
//           setOpen(false)
//         }}>
//           Socials
//         </li>
//         <li className="cursor-pointer" onClick={() => {handleScroll("certificates");
//           setOpen(false)
//         }}>
//           Certificates
//         </li>
//         <li className="cursor-pointer" onClick={() => {handleScroll("contact");
//           setOpen(false)
//         }}>
//           Contact
//         </li>
//       </ul>
//       }
//     </div>
//   );
// };

// export default Navbar;

// // import React from 'react'

// // const Navbar = () => {
// //   return (
// //     <div className='flex z-20 justify-between items-center px-4 py-3 bg-gray-900 text-white text-xl sticky top-0 left-0'>
// //       <div className=' text-blue-600 shadow-blue-400 text-3xl px-4 py-2 '>PORTFOLIO</div>
// //       <ul className='flex gap-6 '>
// //         <li className='cursor-pointer '>Home</li>
// //         <li className='cursor-pointer '>Education</li>
// //         <li className='cursor-pointer '>Skills</li>
// //         <li className='cursor-pointer '>Experience</li>
// //         <li className='cursor-pointer '>Projects</li>
// //         <li className='cursor-pointer '>Socials</li>
// //         <li className='cursor-pointer '>Certificates</li>
// //         <li className='cursor-pointer '>Contact</li>
// //       </ul>
// //     </div>
// //   )
// // }

// // export default Navbar
