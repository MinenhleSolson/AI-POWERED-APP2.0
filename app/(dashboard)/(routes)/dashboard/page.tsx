'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import {
   MessageSquare,
   ImageIcon,
   VideoIcon, 
   Code,
   Music,
   Settings
 } from "lucide-react"


export default function DashboardPage() {

  const router = useRouter()

  const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-[#ff5e00]",
      bgColor: "text-[#ff5e00]/10",
      href: "/conversation"
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-[#ff5e00]",
      bgColor: "text-[#ff5e00]/10",
      href: "/image"
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-[#ff5e00]",
      bgColor: "text-[#ff5e00]/10",
      href: "/code"
    },

  ]

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Hi am Jarvis how may I be of service
        </h2>
        <p className='text-muted-foreground font-light text-sm 
        md:text-lg text-center'>
            Your wish is my command...
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) =>  (
            <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center
            justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
               <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)}/>
               </div>
               <div className="font-semibold">
                  {tool.label}
               </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
          ))}
      </div>
    </div>
  )
}

