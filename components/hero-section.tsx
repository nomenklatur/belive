import Image from "next/image"
import ScrollArrow from "./scroll-arrow"
import type React from "react"

interface HeroSectionProps {
  nextSectionRef: React.RefObject<HTMLElement | null>
}

const HeroSection: React.FC<HeroSectionProps> = ({ nextSectionRef }) => {
  return (
    <section className="h-screen flex flex-col relative">
      <div className="flex flex-col items-center">
        <div>
          <Image 
            src="/mockup.png"
            alt="Belive App Image"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        <div>
            <div className="flex justify-center mb-4">
              <div className="flex gap-4 items-center">
                <Image
                  src="/logo.png"
                  alt="Belive Logo"
                  width={55}
                  height={55}
                  className="object-contain"
                />
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-[#5843bf] to-[#ff9375] text-transparent bg-clip-text font-manrope">Belive</h1>
                  <p className="text-gray-400">by Dimas Eka Putra</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 md:mt-0 md:ml-8 px-12">
              <p>Belive is an open source software that provides a platform for users to rent rooms, houses, and apartments.</p>
            </div>
          </div>
      </div>
      {/* <div className="relative z-10 text-purple-500 text-center w-full max-w-4xl mx-auto px-4">
              
        <h1 className="text-6xl font-bold mb-8 text-center">TESLA</h1>
        
      </div> */}
      <ScrollArrow targetRef={nextSectionRef} />
    </section>
  )
}

export default HeroSection
