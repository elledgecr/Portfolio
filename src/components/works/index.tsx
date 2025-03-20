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
    title: "Shift Manager",
    company: "Buffalo Wild Wings",
    date: "March 6, 2022 - PRESENT",
    description: [
      "Led over 15 employees across different departments, overseeing daily operations, inventory management, and labor hour allocations to maintain staffing levels.",
      "Ran daily server/bartender and cash drawer checkouts, completed daily safe counts, and ensured smooth shifts.",
      "Conducted first-round interviews for potential hires, providing input on staffing decisions.",
      "Trained numerous newly hired employees over 2 years on safety, company core values, guest service, cleanliness, teamwork,communication, and the roles those things play during a shift.",
      "Ensured morning and night shifts were properly equipped with the stock and clean equipment necessary for each shift, at minimum 4 days a week.",
      "Both closed and opened store kitchens, maintaining cleanliness and ticket times throughout each shift, ensuring food quality and guest experience.",
    ],
  },
  {
    title: "Software Engineer | Prompt Engineer",
    company: "Scale AI",
    date: "October 5, 2024 - March 6th, 2025",
    description: [
      "Engineered hundreds of precise and creative prompts to improve SOTA (State of the Art) AI models, enhancing response accuracy and data integrity.",
      "Reviewed and refined peer-generated prompts to ensure alignment with company standards and maintain high-quality data models.",
      "Collaborated with global, cross-functional teams to implement AI-driven solutions, leveraging JavaScript, Python, and industry-leading libraries.",
      "Utilized continuous feedback loops to refine prompt strategies, resulting in measurable improvement to model performance.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Interbyte Studios | Contract",
    date: "October 28, 2018 - January 12, 2024",
    description: [
      "Operated within a CI/CD workflow using unit and integration testing, development, testing, and production environments.",
      "Managed team workflow via GitHub for version control.",
      "Developed projects entirely in TypeScript for scalability and readability, utilized React to foster a fast and responsive frontend.",
      "Oversaw project timelines, ensuring timely delivery and consistency in quality, contributing to over 50,000 lines of peer-reviewed code.",
      "Evaluated user feedback to refine interfaces, leading to enhanced user satisfaction and performance improvements across multiple projects.",
      "Developed and implemented unique UI designs, balancing aesthetic appeal with functionality to elevate the overall user experience.",
      "Engaged in constant learning and adaptation of new technologies, enhancing skills in TypeScript, Rust, and PostgreSQL for project success."
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
