"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaUniversity, FaBookOpen, FaLaptopCode } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Education</h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            date="2017 - 2018"
            iconStyle={{ background: "#3B82F6", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="text-xl font-semibold">10th - Bhai Joga Singh Public School</h3>
            <p>Meerut, 92%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            date="2019 - 2020"
            iconStyle={{ background: "#3B82F6", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="text-xl font-semibold">12th - L.T.R. Public School</h3>
            <p>Meerut, 96.8%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            date="2020 - 2021"
            iconStyle={{ background: "#3B82F6", color: "#fff" }}
            icon={<FaBookOpen />}
          >
            <h3 className="text-xl font-semibold">JEE Exam</h3>
            <p>Rank: 68,064</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            date="2021 - 2025"
            iconStyle={{ background: "#3B82F6", color: "#fff" }}
            icon={<FaUniversity />}
          >
            <h3 className="text-xl font-semibold">B.Tech - BIT Meerut</h3>
            <p>Computer Science & Engineering</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
