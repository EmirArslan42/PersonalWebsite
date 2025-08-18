"use client";
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";


const Header = () => {
 const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

 if (!mounted) return null

  return (
    <header className='flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent'>
        <span></span>
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className='px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase cursor-pointer'>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    </header>
  )
}

export default Header
