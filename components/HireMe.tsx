'use client'

import Image from "next/image"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlus, FaMinus } from "react-icons/fa"

const hireDetails = [
  {
    title: "Why should you hire me?",
    desc: "As a skilled web developer with expertise in modern technologies like React, Next.js, and Node.js, I bring a blend of technical proficiency and creative problem-solving to every project. My commitment to delivering high-quality, user-centric solutions ensures that your web applications will not only meet but exceed expectations."
  },
  {
    title: "What's my development process?",
    desc: "My development process is iterative and collaborative. I start with a thorough understanding of your requirements, create wireframes and prototypes, develop the solution using agile methodologies, and continuously refine based on feedback. This approach ensures a final product that aligns perfectly with your vision."
  },
  {
    title: "How do I ensure project success?",
    desc: "Project success is ensured through clear communication, meticulous planning, and rigorous testing. I use project management tools to track progress, conduct regular check-ins, and implement comprehensive testing strategies. My goal is to deliver a robust, scalable solution that meets all your business objectives."
  },
  {
    title: "What makes me stand out?",
    desc: "My passion for staying current with the latest web technologies, combined with my ability to translate complex technical concepts into user-friendly interfaces, sets me apart. I don't just code; I create digital experiences that drive engagement and deliver results."
  }
]

export default function HireMe() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Why Should You <span className="text-purple-600">Hire Me?</span>
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <Image
              src="/business.svg"
              alt="Naveed Islam"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3 space-y-4"
          >
            {hireDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{ backgroundColor: expandedIndex === index ? "white" : "rgba(255, 255, 255, 0.7)" }}
                className="rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none gap-3"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{detail.title}</h3>
                  {expandedIndex === index ? (
                    <FaMinus className="text-purple-600" />
                  ) : (
                    <FaPlus className="text-purple-600" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-700">{detail.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}