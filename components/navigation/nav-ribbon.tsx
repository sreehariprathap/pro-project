import { LogIn, Calendar, Info, Mail } from "lucide-react"
import { ModeToggle } from "@/components/modeToggle"

const NavRibbon = () => {
  return (    <div className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff] dark:shadow-[10px_10px_30px_#0f172a,-10px_-10px_30px_#1e293b] hover:shadow-[15px_15px_40px_#bebebe,-15px_-15px_40px_#ffffff] dark:hover:shadow-[15px_15px_40px_#0f172a,-15px_-15px_40px_#1e293b] transition-shadow duration-300">
      <div className="flex space-x-4">
        {/* Login Link */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-3 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] dark:shadow-[5px_5px_15px_#0f172a,-5px_-5px_15px_#334155] hover:shadow-[inset_5px_5px_15px_#bebebe,inset_-5px_-5px_15px_#ffffff] dark:hover:shadow-[inset_5px_5px_15px_#0f172a,inset_-5px_-5px_15px_#334155] transition-all duration-300 cursor-pointer group">
          <LogIn className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-300" />
        </div>

        {/* Working Link */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-3 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] dark:shadow-[5px_5px_15px_#0f172a,-5px_-5px_15px_#334155] hover:shadow-[inset_5px_5px_15px_#bebebe,inset_-5px_-5px_15px_#ffffff] dark:hover:shadow-[inset_5px_5px_15px_#0f172a,inset_-5px_-5px_15px_#334155] transition-all duration-300 cursor-pointer group">
          <Calendar className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-300" />
        </div>

        {/* About Link */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-3 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] dark:shadow-[5px_5px_15px_#0f172a,-5px_-5px_15px_#334155] hover:shadow-[inset_5px_5px_15px_#bebebe,inset_-5px_-5px_15px_#ffffff] dark:hover:shadow-[inset_5px_5px_15px_#0f172a,inset_-5px_-5px_15px_#334155] transition-all duration-300 cursor-pointer group">
          <Info className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-300" />
        </div>

        {/* Contact Link */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-3 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] dark:shadow-[5px_5px_15px_#0f172a,-5px_-5px_15px_#334155] hover:shadow-[inset_5px_5px_15px_#bebebe,inset_-5px_-5px_15px_#ffffff] dark:hover:shadow-[inset_5px_5px_15px_#0f172a,inset_-5px_-5px_15px_#334155] transition-all duration-300 cursor-pointer group">
          <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-300" />
        </div>

        {/* Mode Toggle */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-3 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] dark:shadow-[5px_5px_15px_#0f172a,-5px_-5px_15px_#334155] hover:shadow-[inset_5px_5px_15px_#bebebe,inset_-5px_-5px_15px_#ffffff] dark:hover:shadow-[inset_5px_5px_15px_#0f172a,inset_-5px_-5px_15px_#334155] transition-all duration-300">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default NavRibbon
