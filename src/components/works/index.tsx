import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

interface WorkExperienceListing {
  title: string;
  company: string;
  date: string;
  description: Array<string>;
}

const works: Array<WorkExperienceListing> = [
  {
    title: "Software Engineering Prompt Engineer",
    company: "Outlier AI",
    date: "October 5, 2024 - PRESENT",
    description: [
      "Improved various models thinking capabilities and utilizations in end-to-end oversight projects using mock APIs, Python, and JavaScript.",
      "Worked closely with team members to improve data analysis and provide actionable insights.",
      "Engineered methodical prompts to outsmart SOTA (State of The Art) models, identifying and correcting failures.",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Self Contract | Roblox",
    date: "October 28 2018 - January 12, 2024",
    description: [
      "Built and maintained various features and interfaces for various experiences using TypeScript and React.",
      "Worked closely with teams to ensure the best possible user experience by implenting data-driven solutions analyzed via PlayFab and other analytics software.",
      "Developed and maintained unit tests for various components and features.",
      "Developed various middlewares to handle data processing and caching for game performance, including middlewares for redux actions.",
      "Contributed to the development of numerous client-server architectures, including but not limited too event-driven architectures.",
      "Contributed to 50,000,000+ game visits, 300,000+ game favorites, and 180,000+ approval ratings across all experiences.",
    ],
  },
  {
    title: "Wing Certified Trainer",
    company: "Buffalo Wild Wings",
    date: "March 6, 2022 - PRESENT",
    description: [
      "Provided training to over 20 employees in the Buffalo Wild Wings franchise.",
      "Ensured morning and night shifts were properly stocked and had clean equipment for each shift.",
      "Lead Grill Employee on deal nights (Tuesdays and Thursdays), due to near perfect order accuracy.",
      "Closed the kitchen 2 nights a week and worked 3 additional days from 2pm to 10pm (MST).",
    ],
  },
];

/**
 * @returns The section of the page describing my work experience.
 */
const WorksSection: React.FC = () => {
  return (
    <section id="about" className="bg-darkTwo text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={125}
        navigation
        pagination={{ clickable: true }}
        className="max-w-5xl mx-auto"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="bg-darkOne p-8 rounded-lg shadow-lg mx-auto">
              <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
              <p className="text-lg font-semibold mb-2">{work.company}</p>
              <p className="text-sm text-gray-400 mb-6">{work.date}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {work.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination flex justify-center mt-10"></div>
      </Swiper>

      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #f66b4b;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #5DE2E7;
        }

        .swiper-pagination-bullet {
          background-color: #888;
          width: 10px;
          height: 10px;
          opacity: 0.7;
          transition: background-color 0.3s, transform 0.3s;
        }

        .swiper-pagination-bullet-active {
          background-color: #f66b4b;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};

export default WorksSection;