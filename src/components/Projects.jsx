import React from "react";

const projects = [
    {
        image: "/assets/more-daliya.png",
        heading: "More Daliya & Associates",
        info: "Employee, task, and project management system with a dashboard, real-time chat using Socket.io, WhatsApp & email notifications. AI-integrated chat.",
        deploy: "https://more-daliya-web.netlify.app/"
      },
      {
        image: "/assets/makhana-ecommerce.png",
        heading: "Makhana E-commerce",
        info: "Developed and optimized the client's Makhana E-commerce platform for a seamless shopping experience.",
        deploy: "https://mmplweb.netlify.app/"
      },
      {
        image: "/assets/makhana-board.png",
        heading: "Makhana Board Website",
        info: "Developed and optimized the Makhana Board website, enhancing usability and online presence.",
        deploy: "http://makhana-board.netlify.app/"
      },
      {
        image: "/assets/realtime-editor.png",
        heading: "Real-Time Code Editor",
        info: "Real-time collaborative code editor with , live updates using WebSockets, and multi-user editing.",
        deploy: "https://real-time-code-editor-di4p.onrender.com"
      },
      {
        image: "/assets/learning.png",
        heading: "E-Learning Platform",
        info: "An e-learning website offering interactive courses, quizzes, and certifications with personalized progress tracking.",
        deploy: "https://e-learning-frontend-5eycc3lo5-mayanksaxena2214s-projects.vercel.app/"
      },
      
  {
    image: "/assets/JobPortal.png",
    heading: "Job Portal",
    info: "Built a job portal with MongoDB, Express, React, and Node, featuring job postings, authentication, and job applications.",
    deploy: "https://jobportalfrontend-1-0zvc.onrender.com/"
  },
  {
    image: "/assets/blog.png",
    heading: "Blog Website",
    info: "Developed a full-featured blog application with user authentication, CRUD operations, image upload, and form validation.",
    deploy: "https://blog-frontend-hy4a.onrender.com/"
  },
  {
    image: "/assets/airbnb.png",
    heading: "Airbnb Clone",
    info: "Developed a responsive Airbnb-like website, integrating user authentication, dynamic listings, and booking functionalities.",
    deploy: "https://airbnb-8pav.onrender.com/listings"
  },
  
  {
    image: "/assets/handlingimages.png",
    heading: "Image Handling",
    info: "Integrated Cloudinary for efficient image handling. Implemented features for image upload, ensuring files on both the front-end and back-end.",
    deploy: "https://imageassignment-frontend.onrender.com/"
  },
  {
    image: "/assets/figma.png",
    heading: "React Landing Page",
    info: "Developed a responsive landing page in React based on a Figma design, ensuring attention to design details and responsive styling.",
    deploy: "https://react-assignment-h1pb.onrender.com/"
  },
  {
    image: "/assets/spotify.png",
    heading: "Spotify UI",
    info: "Recreated Spotify’s user interface using HTML, CSS, and JavaScript. Implemented interactive elements such as play/pause and volume control.",
    deploy: "https://spotifyclone-kgia.onrender.com/"
  },
  {
    image: "/assets/Authentication.png",
    heading: "Authentication JWT",
    info: "Developed an authentication system using JWT for token-based authentication, integrated with a React frontend. Implemented user login and registration.",
    deploy: "https://assignment-naukri-frontend.onrender.com/"
  },
  

  
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <h1 className="text-center text-4xl font-bold mb-10">Projects</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ image, heading, info, deploy }) => {
  return (
    <div className="bg-gray-800 hover:translate-1.5 hover:transform-3d flex flex-col justify-between p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img src={image} alt={heading} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{heading}</h3>
      <p className="text-gray-400 mb-4">{info}</p>
      <a href={deploy} target="_blank" rel="noopener noreferrer" className="block bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition">Check Here</a>
    </div>
  );
};

export default Projects;
