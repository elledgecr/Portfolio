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
    title: "Software Engineer | Prompt Engineer",
    company: "Scale AI",
    date: "October 5, 2024 - PRESENT",
    description: [
      "Engineered hundreds of precise and c reative prompts to improve STOA (State of the Art) AI models, enhancing response accuracy and data integrity.",
      "Reviewed and refined peer-generated prompts to ensure alignment with company standards and maintain high-quality data models.",
      "Collaborated with global, cross-functional teams to implement AI-driven solutions, leveraging JavaScript, Python, and industry-leading libraries.",
      "Utilized continuous feedback loops to refine prompt strategies, resulting in measurable improvement to model performance.",
    ],
  },
  {
    title: "Shift Manager",
    company: "Buffalo Wild Wings",
    date: "March 6, 2022 - PRESENT",
    description: [
      "In charge of over 15 employees across different departments on my shifts, overseeing daily operations, inventory management, and labor hour allocations to maintain staffing levels.",
      "Conducted first-round interviews for potential hires, providing input on staffing decisions.",
      "Mentored new employees on safety, cleanliness, and brand standards, contributing to a consistent guest experience.",
      "Ensured morning and night shifts were properly equipped with the stock and clean equipment necessary for each shift, at minimum 4 days a week.",
      "Both closed and opened store kitchens, maintaining cleanliness and ticket times throughout each shift, ensuring food quality and guest experience."
    ],
  },
  {
    title: "Game Developer",
    company: "Self Contract | Roblox",
    date: "October 28, 2018 - January 12, 2024",
    description: [
      "Developed and maintained features and user interfaces using TypeScript and React to enhance gameplay experiences.",
      "Collaborated with teams to integrate data-driven solutions using PlayFab and analytics tools, optimizing user experience and game performance.",
      "Implemented comprehensive unit tests to ensure the reliability and quality of game components.",
      "Designed middleware for data processing and caching, improving performance and responsiveness of client-server interactions.",
      "Contributed to the design and development of scalable, event-driven client-server architectures.",
      "Supported the overall success of multiple experiences, contributing to significant user engagement metrics."
    ],
  }  
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
        slidesPerView={"auto"}
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 1.5 }, // Tablets
          1024: { slidesPerView: 2 }, // Desktop
        }}
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
          <SwiperSlide key={index} className="w-full md:w-[400px] lg:w-[450px]">
            <div className="bg-darkOne p-6 rounded-lg shadow-lg mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {work.title}
              </h3>
              <p className="text-base md:text-lg font-semibold mb-2">
                {work.company}
              </p>
              <p className="text-xs md:text-sm text-gray-400 mb-6">
                {work.date}
              </p>
              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-gray-300 leading-tight md:leading-normal">
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
