import Image from "next/image"

const Hero = () => {
  return (
    <div className="max-w-8/10">
      <Image
        src="/propro.png"
        alt="ProPro"
        width={1200}
        height={800}
        className="w-full h-auto rounded-xl"
        priority
      />
    </div>
  )
}

export default Hero