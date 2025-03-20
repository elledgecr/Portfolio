import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import BanningSimulator1 from "../../assets/BanningSimulator1.png";
import BanningSimulator2 from "../../assets/BanningSimulator2.png";
import BanningSimulatorX from "../../assets/BanningSimulatorX.png";
import ScienceSimulator from "../../assets/ScienceSimulator.png";

interface Project {
  title: string;
  description: string;
  image: string;
  details?: string[];
}

const projects: Project[] = [
  {
    title: "Banning Simulator",
    description: `
          The first project my team and I worked on, spanning from October 2018 to March of 2019. <br /><br />
          This was an introduction project of course, being my first experience developing client and server logic. <br /><br />
          Working alongside my team, we created a fun and engaging game with little to no prior experience in game development, obtaining over 10 million game visits in just a few months. <br /><br />
          This project was sponsored on the front page of Roblox for nearly a month, and helped my team get our start. <br /><br />
          This game became the first of a series of Banning Simulator games.
      `,
    image: BanningSimulator1,
    details: [
      "Implemented features such as item trading, leveling, unlocking new items, exploration of new items and areas, item inventory, item index, item tracking, item fusing, etc.",
      "Developed entirely in Lua.",
      "Engaged a community of thousands of users.",
      "Developed under a CI/CD workflow with unit and integration testing and automatic deployment to development and QA environments.",
    ],
  },
  {
    title: "Banning Simulator 2",
    description: `
          Building on the success of the original, Banning Simulator 2 was launched in late 2019. <br /><br />
          This game introduced a more sophisticated leveling and trading system, giving players more ways to interact and collaborate. <br /><br />
          With brand-new maps, improved user interfaces, and new features requested by the community, this sequel quickly built upon the momentum of the original game and exceeded expectations. <br /><br />
          The game gained great traction, garnering over 12 million visits within the first few months of its release and receiving high player ratings.
      `,
    image: BanningSimulator2,
    details: [
      "Developed entirely in Lua.",
      "Introduced new maps, environments, and an improved leveling system.",
      "Built a complex trading system that enabled players to trade items safely.",
      "Implemented a player feedback system, using PlayFab analytics to refine game mechanics.",
      "Created a rebirthing experience for players, adding new challenges and content to keep them engaged.",
      "Developed under a CI/CD workflow with unit and integration testing and automatic deployment to development and QA environments.",
    ],
  },
  {
    title: "Science Simulator",
    description: `
          Science Simulator followed a trend on the platform at the time, a trend of clicker games. In this game, you would click or tap to gain "research", and then use that research to purchase companions and character upgrades.
          Companions and character upgrades gave players multipliers, which increased the amount of research they obtained per click/tap. <br /><br />
          There were various different worlds and challenges to be completed, each costing currencies to unlock. The stronger the player got, the more content they unlocked. The more content they unlocked, the stronger they could become. <br /><br />
          Players could also rebirth to gain special currency for exclusive account upgrades. Players could trade items. Science Simulator bolstered an incredibly active in-game trading economy from the start to the finish of development. <br /><br />
          Many players participated in leaderboard competition, which was a feature that kept track of player statistics globally over increments of time (weekly, monthly, and annually), which granted them cosmetic and practical ways to boost their gameplay.
          Players sought after the most prestigious titles and highest scores. Many wanted to become cemented as the best by obtaining top spots on the permanent leaderboard, which kept track of all-time high player statistics globally. <br /><br />
          But the most significant feature in this game, of course, was a feature our team referred to as "Global Trading". A system we developed and named, "Raptor", allowed players in any server to post a trade offer for 24 hours and obtain offers from other
          players across the world, in any server, in live time, and all of this without having to leave the game. The player who posted the original trade offer could then review the offers made on their trade over the previous 24 hours, and decline trades or accept a final trade. <br /><br />
          Science Simulator was launched in January of 2020, obtained and remained on the platforms overall trending games list for multiple months, and concluded development mid-2022 after obtaining 20 million game visits, 65,000 approval ratings, and 100,000 game favorites.
      `,
    image: ScienceSimulator,
    details: [
      "Developed entirely with TypeScript and Luau.",
      `Global Trading "Raptor" system developed in TypeScript, hosted on a secure Ubuntu server, handled many thousands of connections, and handled hundreds of trades per day.`,
      "Over 50,000 lines of code, fully documented via JSDoc.",
      "Bolsters various custom middlewares to improve server-side security during API calls, as well as middlewares to verify the integrity of actions being dispatched to player data stores.",
      "Grew the Interbyte brand exponentially - Nearly 800,000 group members and thousands of subscribers across social media platforms/networks.",
      "Developed under a CI/CD workflow with unit and integration testing and automatic deployment to development and QA environments.",
    ],
  },
  {
    title: "Banning Simulator X",
    description: `
          Banning Simulator X was the culmination of everything we learned from the previous Banning Simulator games. <br /><br />
          Released in mid 2023, this version featured a significant overhaul of the graphics, mechanics, and gameplay, introducing both non-cosmetic and cosmetic item upgrade systems, massively upgraded character and item leveling systems, complete access to inventory trading, trading logs, and so much more. <br /><br />
          Players could explore freely, engage in various new features such as weapon-prestige and companion-prestige, and enjoy a more immersive experience. The game retained popular features while introducing new systems for player growth, community-driven events, and in-game achievements. <br /><br />
          Banning Simulator X reached over 10 million game visits and was featured on Roblox's trending games list for multiple weeks.
      `,
    image: BanningSimulatorX,
    details: [
      "Developed entirely in TypeScript, utilizing a ported version of React.JS and Redux to handle front-end development.",
      "Developed new community-driven events and achievements to keep the player base engaged.",
      "Integrated advanced graphics and animation techniques to create a more visually appealing experience.",
      "Over 25,000 lines of code, fully documented via JSDoc.",
      "Bolsters various custom middlewares to improve server-side security during API calls, as well as middlewares to verify the integrity of actions being dispatched to player data stores.",
      "Grew the Interbyte brand exponentially - Nearly 1 million group members and tens of thousands across social media platforms/networks.",
      "Developed under a CI/CD workflow with unit and integration testing and automatic deployment to development and QA environments.",
    ],
  },
];

const ProjectsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="bg-darkTwo text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 1.25 }, // Tablets
            1024: { slidesPerView: 1.5 }, // Desktop
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={150}
          navigation
          pagination={{ clickable: true }}
          className="mb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="w-[350px] md:w-[400px] lg:w-[450px]"
            >
              <div className="bg-darkThree p-6 rounded-lg shadow-lg mx-auto hover:opacity-100 transition-opacity duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p
                  className="text-sm text-gray-400 mb-4"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition duration-300 mb-4"
                >
                  {expandedIndex === index ? "Show Less" : "Show More"}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {expandedIndex === index && project.details && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination flex justify-center mt-10"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
