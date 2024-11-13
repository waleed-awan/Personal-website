import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-100 p-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5CF6] mb-2">About Waleed Awan</h1>
          <p className="text-xl text-gray-600">Crafting Digital Experiences with Passion</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-700">
            My name is Waleed Awan, and I am an accomplished web developer who enjoys turning concepts into beautiful web applications. I have a very good grasp of aesthetics, while writing clean codes and developing applications is an added advantage. As a result, I design digital experiences that are unforgettable.
            </p>
            <p className="text-gray-700">
              My journey in web development has equipped me with a diverse skill set and a problem-solving mindset. I believe in the power of technology to create meaningful connections and drive innovation.
            </p>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
              View My Projects
            </Button>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">My Expertise</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Code className="text-[#8B5CF6] mr-2" />
                  <span>Front-end Development (React, Next.js)</span>
                </li>
                <li className="flex items-center">
                  <Code className="text-[#8B5CF6] mr-2" />
                  <span>Backend-end Development (Node js)</span>
                </li>
                <li className="flex items-center">
                  <Palette className="text-[#8B5CF6] mr-2" />
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <Zap className="text-[#8B5CF6] mr-2" />
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">My Approach</h2>
          <p className="text-gray-700 mb-6">
            I believe in creating web applications that are not only visually appealing but also intuitive and user-friendly. My goal is to bridge the gap between aesthetics and functionality, ensuring that every project I undertake delivers exceptional value to its users.
          </p>
          <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white">
            Let&apos;s Work Together
          </Button>
        </div>
      </div>
    </div>
  )
}