'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import About from '@/components/About'
import Skills from '@/components/Skills'
import HireMe from '@/components/HireMe'
import Footer from '@/components/Footer'

export default function Page() {
  const buttonBaseStyle = 'relative px-8 py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 ease-in-out'
  const buttonHoverStyle = 'hover:bg-purple-600 hover:text-white hover:shadow-lg'

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-purple-50 to-indigo-100">
      <main className="">
        <section className="py-20 md:py-32 container sm:px-6 lg:px-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Crafting Digital <span className="text-purple-600">Experiences</span>
              </h1>
              <p className="text-xl text-gray-600">
                Hi, I&apos;m Waleed Awan. I transform ideas into stunning web applications.
              </p>
              <div className="flex space-x-4">
                <Link href="/contact" className={`${buttonBaseStyle} ${buttonHoverStyle}`}>
                  Get in Touch
                </Link>
                <Link href="/projects" className={`${buttonBaseStyle} ${buttonHoverStyle} bg-purple-600 text-black`}>
                  View Projects
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full filter blur-3xl opacity-70"></div>
              <Image
                src="/main.svg"
                alt="Profile picture of Naveed"
                width={500}
                height={500}
                className="relative rounded-full shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-20 bg-white rounded-3xl shadow-xl px-4 lg:mx-12 md:mx-8 mx-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Web Developer Extraordinaire</h2>
            <p className="text-xl text-gray-600 mb-8">
              Passionate about creating seamless user experiences and robust web applications. 
              I thrive on challenges and continuously push the boundaries of web development.
            </p>
            <div className="flex justify-center items-center space-x-6">
              <Link href="tel:03094998608" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800">
                <FaPhoneAlt className="w-6 h-6" />
                <span>03094998608</span>
              </Link>
              <div className="flex space-x-4">
                <Link href="https://github.com/waleed-awan" target='_blank' className="text-gray-600 hover:text-purple-600 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/waleed-awan-a13002312/"  target='_blank' className="text-gray-600 hover:text-purple-600 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link href="#"  className="text-gray-600 hover:text-purple-600 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <About />
        <Skills />
        <HireMe />
      </main>
      <Footer />
    </div>
  )
}