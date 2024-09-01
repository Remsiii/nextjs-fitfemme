'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image' // Import the Image component from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/icon.png" alt="FitCoach Logo" width={60} height={40} className="mr-2" />
              {/* <span className="text-xl font-bold text-gray-800">FitCoach</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
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
          <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
          <MobileNavLink href="#pricing" onClick={toggleMenu}>Pricing</MobileNavLink>
          <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-gray-900">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link href={href} className="block py-2 text-gray-600 hover:text-gray-900" onClick={onClick}>
      {children}
    </Link>
  )
}