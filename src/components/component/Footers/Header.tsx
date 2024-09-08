'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault()
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMenuOpen(false) // Close mobile menu on click
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/icon.png" alt="FitCoach Logo" width={60} height={40} className="mr-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink href="#about" onClick={handleScroll}>About</NavLink>
            <NavLink href="#services" onClick={handleScroll}>Services</NavLink>
            <NavLink href="#contact" onClick={handleScroll}>Contact</NavLink>
          </nav>

          {/* Burger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-2">
          <MobileNavLink href="#about" onClick={handleScroll}>About</MobileNavLink>
          <MobileNavLink href="#services" onClick={handleScroll}>Services</MobileNavLink>
          <MobileNavLink href="#contact" onClick={handleScroll}>Contact</MobileNavLink>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, onClick, children }: { href: string, onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void, children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-600 hover:text-gray-900" onClick={(e) => onClick(e, href)}>
      {children}
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void, children: React.ReactNode }) {
  return (
    <a href={href} className="block py-2 text-gray-600 hover:text-gray-900" onClick={(e) => onClick(e, href)}>
      {children}
    </a>
  )
}
