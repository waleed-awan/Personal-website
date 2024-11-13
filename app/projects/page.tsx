"use client"
import ProjectCard from "@/components/ProjectCard/ProjectCart"

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  websiteUrl: string
  sourceCodeUrl: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Digital Agency Website",
    description: "Heapware offers expert-led IT courses that equip you with the skills to succeed in the ever-evolving tech industry.",
    imageUrl: "/heapware.png",
    websiteUrl: "https://www.heapware.com/",
    sourceCodeUrl: "https://github.com/callmeharis/heapware-official",
  },
  {
    id: "2",
    title: "Animated Landing Page",
    description: "An engaging animated landing page that makes project management simple and intuitive for teams.",
    imageUrl: "/landify.png",
    websiteUrl: "https://landing-page-nine-bay-34.vercel.app/",
    sourceCodeUrl: "https://github.com/waleed-awan/Landing-Page",
  },
  {
    id: "3",
    title: "Scroll-Animation website",
    description: "Scroll-triggered animations enhance interactivity and create a dynamic experience.",
    imageUrl: "/scroll-animation.png",
    websiteUrl: "https://scroll-animation-kohl.vercel.app/",
    sourceCodeUrl: "https://github.com/waleed-awan/Scroll-animation",
  },
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}