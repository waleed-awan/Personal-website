// "use client"
// import React from "react";
// import Card from "./Card";
//   import { cardData } from "../data/cardLinks";
// import { IconType } from "react-icons";
// import { motion } from "framer-motion";

// interface CardTypes {
//   Icon: IconType,
//   title: string,
//   desc: string,
//   bgColor: string
//   padd: string,
//   textColor?: string
//   titleColor?: string
//   iconSize?: string
//   iconColor?: string
// }

// import { CgScreen } from "react-icons/cg";

// // export const cardData = [
// //     {
// //       Icon: CgScreen,
// //       title: "This is a title",
// //       desc: "This is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus",
// //       bgColor: "bg-[#FBEDE9]",
// //       padd: "mt-[0px]",
// //       textColor: "text-[#727288]",
// //       titleColor: "text-[#000]",
// //       iconSize: "text-[40px]",
// //       iconColor: "text-[#6C42FF]",
// //     },
// //     {
// //       Icon: CgScreen,
// //       title: "This is a title",
// //       desc: "This is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus",
// //       bgColor: "bg-[#FAEBFF]",
// //       padd: "mt-[100px]",
// //       textColor: "text-[#727288]",
// //       titleColor: "text-[#000]",
// //       iconSize: "text-[40px]",
// //       iconColor: "text-[#6C42FF]",
// //     },
// //     {
// //       Icon: CgScreen,
// //       title: "This is a title",
// //       desc: "This is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus",
// //       bgColor: "bg-[#6C42FF]",
// //       padd: "mt-[200px]",
// //       textColor: "text-[#fff]",
// //       titleColor: "text-[#fff]",
// //       iconSize: "text-[40px]",
// //       iconColor: "text-[#fff]",
// //     },
// //     {
// //       Icon: CgScreen,
// //       title: "This is a title",
// //       desc: "This is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus",
// //       bgColor: "bg-[#FFFFFF]",
// //       padd: "mt-[300px]",
// //       textColor: "text-[#727288]",
// //       titleColor: "text-[#000]",
// //       iconSize: "text-[40px]",
// //       iconColor: "text-[#6C42FF]",
// //     },
// //   ];

// const Skills = () => {
//   return (
//     <section className="h-full w-full">
//      <div className="flex justify-center">
//      <h1 className="relative mt-10 font-[700] text-[50px] font-pop text-center after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[3px] after:bg-[#6B41FE] after:transition-all after:duration-300 after:ease-in-out after:hover:w-full after:hover:left-0 max-sm:text-[30px]">
//         About Me
//       </h1>
//      </div>

// <div className="m-10">
//   <motion.h1 className="text-[50px] font-[700] font-pop max-sm:text-[30px]"
//   initial = {{opacity: 0, y: 100}}
//   transition={{ duration: 1.5 }}
//   whileInView={{opacity: 1, y:0}}
//   viewport={{once: true}}
//   >
//     My Superpower Is <br />
//     Creating Interactive <br /> <p className="text-[#6B41FE]">Website</p>
//   </motion.h1>
//   <motion.p className="w-[500px] text-[18px] my-4 text-[#5A5A5A] max-sm:w-full"
//    initial = {{opacity: 0, y: 100}}
//    transition={{ duration: 1.5 }}
//    whileInView={{opacity: 1, y:0}}
//    viewport={{once: true}}
//   >
//     I love to do develop for every category of websites whether it be an
//     online eCommerce store, an event page or even a product landing page.
//   </motion.p>
// </div>
//       <div className="flex justify-center gap-2 flex-wrap max-sm:gap-6">
//         {cardData && cardData.map((card: CardTypes , index: number) => (
//           <motion.div
//           initial = {{ y: 200}}
//           transition={{ duration: 1, delay: index * 0.3 }}
//           whileInView={{y:0}}
//           viewport={{once: true}}
//           key={index}
//           >
//             <Card key={index} {...card} />
//           </motion.div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default Skills;

"use client";

import { motion } from "framer-motion";
import { MonitorIcon, ServerIcon, DatabaseIcon, CodeIcon } from "lucide-react";

const cards = [
  {
    title: "Frontend Developer",
    icon: MonitorIcon,
    description:
      "I'm a frontend developer skilled in crafting user interfaces and experiences for websites and applications. Using technologies like HTML, CSS, Tailwind, and JavaScript, I create responsive, interactive, and visually appealing designs. I'm proficient in modern frameworks like React and Next.js, focusing on optimizing performance and ensuring accessibility. I collaborate closely with designers and backend teams to bring concepts to life in the browser.",
    color: "bg-pink-100",
  },
  {
    title: "Backend Developer",
    icon: ServerIcon,
    description:
      "I'm a backend developer who works with Node.js, Express.js to build and maintain the server-side of web applications. I manage data flow, implement business logic, and create APIs. My expertise includes working with databases like MongoDB , and MySQL. I ensure that applications are scalable, secure, and efficient.",
    color: "bg-purple-100",
  },
  {
    title: "Database Specialist",
    icon: DatabaseIcon,
    description:
      "I'm a database specialist skilled in designing, implementing, and managing relational databases using SQL. I focus on data modeling, query optimization, and ensuring data integrity and security. My experience includes performance optimization, backup and recovery strategies, and maintaining data consistency across applications.",
    color: "bg-blue-100",
  },
  {
    title: "Full Stack Developer",
    icon: CodeIcon,
    description:
      "I'm a full stack developer with a comprehensive understanding of both frontend and backend technologies. I can work on all layers of web applications, from user interface design to server-side logic and database management. With expertise in React, Next.js, Node.js, MongoDB,  I'm capable of handling diverse project requirements efficiently.",
    color: "bg-green-100",
  },
];

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <div className="m-10 py-10">
        <motion.h1
          className="text-[50px] font-[700] font-pop max-sm:text-[30px] leading-tight"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Superpower Is <br />
          Creating Interactive <br /> <p className="text-[#6B41FE]">Website</p>
        </motion.h1>
        <motion.p
          className="w-[500px] text-[18px] my-4 text-[#5A5A5A] max-sm:w-full"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I love to do develop for every category of websites whether it be an
          online eCommerce store, an event page or even a product landing page.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5 px-4 lg:px-10 md:px-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className={`${card.color} rounded-lg shadow-lg overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <card.icon className="w-12 h-12 mb-4 text-gray-700" />
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-4">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
