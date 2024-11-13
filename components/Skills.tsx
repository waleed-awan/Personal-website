'use client'

import { motion } from "framer-motion"

const skills = [
  { name: "HTML", level: 95 },     
  { name: "Next.js", level: 85 },     
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Tailwind", level: 80 },
  { name: "Bootstrap", level: 70 },
  { name: "SQL", level: 75 },
  { name: "MongoDB", level: 75 },
  { name: "Express.js", level: 80 },
  { name: "JavaScript", level: 90 }
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
        >       
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-indigo-600"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Proficiency</span>
                      <span className="font-semibold text-purple-600">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}