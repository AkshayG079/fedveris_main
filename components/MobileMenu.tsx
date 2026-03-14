'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname()
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      onClose()
      setTimeout(() => {
        window.location.href = href
      }, 200)
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
  ]

  return (
    <div
      className={`lg:hidden fixed top-15 left-0 bg-white w-full h-dvh border-t border-brand-blue/10 px-4 py-4
  transition-all duration-500 ease-in-out
  ${isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
    // style={{
    //   backgroundColor: 'rgba(247, 248, 252, 0.95)',
    //   backdropFilter: 'blur(8px)',
    // }}
    >
      <nav className="flex flex-col space-y-2">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              className={`text-base py-3 px-4 rounded-lg uppercase tracking-widest 
      transition-all duration-500 transform
   ${isOpen
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 -translate-y-4'
                }
      ${isActive
                  ? 'bg-brand-blue/10 text-brand-blue font-bold'
                  : 'font-medium text-slate-600 hover:text-brand-blue hover:bg-brand-blue/10'
                }`}
            >
              {link.label}
            </Link>
          )
        })}

        {/* Mobile Contact Button */}
        <Link
          href="/contact"
          onClick={handleLinkClick}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          className={`w-full mt-4 border-2 border-brand-blue text-brand-blue py-3 text-xs font-bold uppercase tracking-widest 
  rounded-full text-center transition-all duration-500
${isOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 -translate-y-4'
            }`}
        >
          Get In Touch
        </Link>
      </nav>
    </div>
  )
}

export default MobileMenu