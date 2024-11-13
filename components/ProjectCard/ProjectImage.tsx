"use client"
import Image from "next/image"

interface ProjectImageProps {
  imageUrl: string
  title: string
}

export default function ProjectImage({ imageUrl, title }: ProjectImageProps) {
  return (
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={imageUrl}
        alt={`${title} project thumbnail`}
        layout="fill"
        objectFit="cover"
        className="transition-all duration-300 hover:scale-105"
      />
    </div>
  )
}