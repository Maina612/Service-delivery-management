'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold neon-text">Fixora</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#dashboard"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Dashboard
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-cyan-400" aria-label="Open navigation menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

