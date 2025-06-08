"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import ScrambledText from "../textAnimations/ScrambledText/ScrambledText"

const Hero = () => {
  const { resolvedTheme } = useTheme()

  // Determine which image to show based on theme
  // In light mode: show propro.png
  // In dark mode: show propro-light.png
  const imageSrc = resolvedTheme === "dark" ? "/propro-light.png" : "/propro.png"

  return (
    <div className="p-20">
      <Image
        src={imageSrc}
        alt="ProPro"
        width={1200}
        height={800}
        className="w-full h-auto rounded-xl"
        priority
      />      
      <ScrambledText
        className=""
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        Stop dreaming and start building. Pro-Project provides the structure, guidance, and tools to turn your side project ideas into reality.
      </ScrambledText>
    </div >
  )
}

export default Hero