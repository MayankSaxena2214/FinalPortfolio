import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Aitra Tech",
    date: "Nov 2024 - Present",
    location: "Noida",
  },
  {
    title: "Backend Developer Intern",
    company: "Ricoz",
    date: "Oct 2024 - Feb 2025",
    location: "Remote",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Zidio",
    date: "May 2024 - June 2024",
    location: "1 Month Internship",
  },
  {
    title: "Web Developer Intern",
    company: "Octanet",
    date: "April 2024 - May 2024",
    location: "Remote - 1 Month",
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-black">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1a202c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1a202c" }}
            date={exp.date}
            iconStyle={{ background: "#4a5568", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <h4 className="text-sm text-gray-300">{exp.company}</h4>
            <p className="text-sm text-gray-400">{exp.location}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
