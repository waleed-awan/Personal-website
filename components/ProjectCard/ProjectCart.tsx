"use client"
import { Card, CardContent } from "@/components/ui/card"
import ProjectImage  from "@/components/ProjectCard/ProjectImage"
import ProjectInfo  from "@/components/ProjectCard/ProjectInfo"
import ProjectButtons from "@/components/ProjectCard/ProjectButtons"

interface Project {
  title: string
  description: string
  imageUrl: string
  websiteUrl: string
  sourceCodeUrl: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <ProjectImage imageUrl={project.imageUrl} title={project.title} />
      <CardContent className="p-4">
        <ProjectInfo title={project.title} description={project.description} />
        <ProjectButtons websiteUrl={project.websiteUrl} sourceCodeUrl={project.sourceCodeUrl} />
      </CardContent>
    </Card>
  )
}