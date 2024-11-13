"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const handleDownload = () => {
    const resumeUrl = "./Naveed_Islam.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Naveed_Islam_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
   <div className="h-screen flex justify-center items-center">
     <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-[#8B5CF6]">Hire Me</CardTitle>
        <CardDescription>Let&apos;s create amazing digital experiences together</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-gray-600">
          I&apos;m Waleed Awan, a web developer passionate about transforming ideas into stunning web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Link href={"/contact"} className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white border rounded-md px-2 font-semibold py-1"> 
            Contact Me
          </Link>
        </div>
      </CardContent>
    </Card>
   </div>
  )
}