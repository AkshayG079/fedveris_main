'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
  ]
  return (
    <header className="fixed top-0 z-50 w-full bg-primary-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 sm:px-6 lg:px-16 py-3 sm:py-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center">
            <Image
              src="/images/logo.svg"
              alt="Fidveris Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'18\' fill=\'%2326326E\'/%3E%3Ctext x=\'20\' y=\'28\' font-size=\'20\' text-anchor=\'middle\' fill=\'%23C9B88A\' font-weight=\'bold\'%3EF%3C/text%3E%3C/svg%3E'
              }}
            />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-brand-blue uppercase">
            Fidveris
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm  transition-colors uppercase tracking-widest ${
                pathname === link.href
                  ? 'text-brand-blue font-bold'
                  : 'text-slate-600 hover:text-brand-blue font-medium'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/contact"
            className="hidden sm:block border border-brand-blue text-brand-blue px-4 md:px-6 lg:px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all rounded-full whitespace-nowrap"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg border border-brand-blue/20 hover:bg-brand-blue/5 transition-colors relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <span
              className={`material-symbols-outlined text-brand-blue text-2xl transition-all duration-300 group-hover:scale-110 ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
            >
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default Header