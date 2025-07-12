"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { IoMdDownload } from "react-icons/io"
import download from '@/app/utils/downloadResume'

export default function Title() {
  return (
    <div className="py-32 md:py-48 lg:py-56">
      <div className="container mx-auto px-4">
        <div className="bg-background/60 backdrop-blur-sm">
          <div className="p-6 md:px-28 md:py-16">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-48 h-48 md:w-64 md:h-64"
              >
                <Avatar className="w-full h-full">
                  <AvatarImage src="/profile-rounded.jpg" alt="Tushar Sharma" />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
                  Hi!<br />I am Tushar Sharma
                </h1>
                <div className="h-20 md:h-24 flex items-center justify-center md:justify-start">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      1000,
                      'Software Engineer',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
                    repeat={Infinity}
                  />
                </div>
                <div className="flex justify-center md:justify-start mt-6">
                  <Button 
                    onClick={download}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Download Resume
                    <IoMdDownload size={20}/>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}