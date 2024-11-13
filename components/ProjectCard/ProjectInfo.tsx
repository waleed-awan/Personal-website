"use client"
interface ProjectInfoProps {
    title: string
    description: string
  }
  
  export default function ProjectInfo({ title, description }: ProjectInfoProps) {
    return (
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }