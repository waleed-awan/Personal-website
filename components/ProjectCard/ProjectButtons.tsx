"use client"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectButtonsProps {
  websiteUrl: string
  sourceCodeUrl: string
}

export default function ProjectButtons({ websiteUrl, sourceCodeUrl }: ProjectButtonsProps) {
  return (
    <div className="flex space-x-2 mt-4">
      <Button variant="default" asChild>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Website
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Github className="w-4 h-4 mr-2" />
          View Source
        </a>
      </Button>
    </div>
  )
}