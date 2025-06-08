import { LogIn, Calendar, Info, Mail } from "lucide-react"
import { ModeToggle } from "@/components/modeToggle"

const NavRibbon = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 bg-background/80 backdrop-blur-lg border border-border rounded-2xl p-4 shadow-lg">
      <div className="flex space-x-4">
        {/* Login Link */}
        <div className="relative group">
          <div className="bg-background border border-border rounded-xl p-3 cursor-pointer transition-all duration-500 hover:scale-110 hover:border-transparent overflow-hidden group-hover:bg-gradient-to-br group-hover:from-[#F35B04] group-hover:to-[#FF8A00] group-hover:shadow-lg group-hover:shadow-[#F35B04]/25">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F35B04] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <LogIn className="relative z-10 w-6 h-6 text-foreground group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
          </div>
        </div>

        {/* Working Link */}
        <div className="relative group">
          <div className="bg-background border border-border rounded-xl p-3 cursor-pointer transition-all duration-500 hover:scale-110 hover:border-transparent overflow-hidden group-hover:bg-gradient-to-br group-hover:from-[#F35B04] group-hover:to-[#FF8A00] group-hover:shadow-lg group-hover:shadow-[#F35B04]/25">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F35B04] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <Calendar className="relative z-10 w-6 h-6 text-foreground group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
          </div>
        </div>

        {/* About Link */}
        <div className="relative group">
          <div className="bg-background border border-border rounded-xl p-3 cursor-pointer transition-all duration-500 hover:scale-110 hover:border-transparent overflow-hidden group-hover:bg-gradient-to-br group-hover:from-[#F35B04] group-hover:to-[#FF8A00] group-hover:shadow-lg group-hover:shadow-[#F35B04]/25">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F35B04] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <Info className="relative z-10 w-6 h-6 text-foreground group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-180" />
          </div>
        </div>

        {/* Contact Link */}
        <div className="relative group">
          <div className="bg-background border border-border rounded-xl p-3 cursor-pointer transition-all duration-500 hover:scale-110 hover:border-transparent overflow-hidden group-hover:bg-gradient-to-br group-hover:from-[#F35B04] group-hover:to-[#FF8A00] group-hover:shadow-lg group-hover:shadow-[#F35B04]/25">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F35B04] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <Mail className="relative z-10 w-6 h-6 text-foreground group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="relative group">
          <div className="bg-background border border-border rounded-xl p-3 transition-all duration-500 hover:scale-110 hover:border-transparent overflow-hidden group-hover:bg-gradient-to-br group-hover:from-[#F35B04] group-hover:to-[#FF8A00] group-hover:shadow-lg group-hover:shadow-[#F35B04]/25">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F35B04] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavRibbon
