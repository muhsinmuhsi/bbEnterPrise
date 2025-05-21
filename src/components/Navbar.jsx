import React, { useState } from 'react'
import Logo from '../assets/logo 1.png'
import { Link } from 'react-router-dom'
import Button from './Ui/button'
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="BB Enterprise Logo"
            className=" w-50"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <HashLink smooth to="/#services" className="text-sm font-medium text-gray-700 hover:text-violet-950 transition-colors">
            Services
          </HashLink>
          <HashLink smooth to="/#about" className="text-sm font-medium text-gray-700 hover:text-violet-950 transition-colors">
            About
          </HashLink>
          <HashLink smooth to="/#work" className="text-sm font-medium text-gray-700 hover:text-violet-950 transition-colors">
            Work
          </HashLink>
          <HashLink smooth to="/#testimonials" className="text-sm font-medium text-gray-700 hover:text-violet-950 transition-colors">
            Testimonials
          </HashLink>
          <HashLink smooth to="/#contact" className="text-sm font-medium text-gray-700 hover:text-violet-950 transition-colors">
            Contact
          </HashLink>
        </nav>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <Button variant="outline" size="icon" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // Close icon
              ) : (
                <>
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2">
          <nav className="flex flex-col gap-4">
            <HashLink smooth to="/#services" className="text-md font-bold text-gray-700 hover:text-violet-950">
              Services
            </HashLink>
            <HashLink smooth to="/#about" className="text-md font-bold text-gray-700 hover:text-violet-950">
              About
            </HashLink>
            <HashLink smooth to="/#work" className="text-md font-bold text-gray-700 hover:text-violet-950">
              Work
            </HashLink>
            <HashLink smooth to="/#testimonials" className="text-md font-bold text-gray-700 hover:text-violet-950">
              Testimonials
            </HashLink>
            <HashLink smooth to="/#contact" className="text-md font-bold text-gray-700 hover:text-violet-950">
              Contact
            </HashLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
