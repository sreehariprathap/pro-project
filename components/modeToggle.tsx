"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { toast } from "sonner"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const longPressTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const [isLongPress, setIsLongPress] = React.useState(false)

  const handleMouseDown = () => {
    setIsLongPress(false)
    longPressTimeoutRef.current = setTimeout(() => {
      setIsLongPress(true)
      setTheme("system")
      toast.success("Theme set to System Default", {
        description: "Theme will follow your system preference",
      })
    }, 500) // 500ms for long press
  }

  const handleMouseUp = () => {
    if (longPressTimeoutRef.current) {
      clearTimeout(longPressTimeoutRef.current)
    }
    
    if (!isLongPress) {
      // Toggle between light and dark
      if (theme === "dark") {
        setTheme("light")
        toast.success("Light Mode Activated", {
          description: "Switched to light theme",
        })
      } else {
        setTheme("dark")
        toast.success("Dark Mode Activated", {
          description: "Switched to dark theme",
        })
      }
    }
  }
  const handleMouseLeave = () => {
    if (longPressTimeoutRef.current) {
      clearTimeout(longPressTimeoutRef.current)
    }
    setIsLongPress(false)
  }

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="w-6 h-6 text-gray-600 dark:text-gray-300 transition-all" />
    }
    return (
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun className="w-6 h-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-gray-600 dark:text-gray-300" />
        <Moon className="absolute w-6 h-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-gray-600 dark:text-gray-300" />
      </div>
    )
  }
  return (
    <div 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      className="cursor-pointer transition-all duration-200 hover:scale-105"
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
