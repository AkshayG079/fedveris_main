import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  // const socialLinks = [
  //   { href: '#', icon: 'link', label: 'LinkedIn', color: 'text-brand-blue' },
  //   { href: '#', icon: 'close', label: 'X', color: 'text-primary-text' },
  //   { href: '#', icon: 'photo_camera', label: 'Instagram', color: 'text-brand-gold' },
  //   { href: '#', icon: 'terminal', label: 'GitHub', color: 'text-brand-blue' },
  // ]

  const socialLinks = [
    {
      href: "mailto:fedveristech@gmail.com",
      icon: FaEnvelope,
      label: "Gmail",
      color: "text-red-500",
    },
    {
      href: "https://www.instagram.com/fedveris?igsh=aHdvNTVpOTJ2MzNn",
      icon: FaInstagram,
      label: "Instagram",
      color: "text-pink-500",
    },
    {
      href: "tel:+9156073686",
      icon: FaPhone,
      label: "Phone",
      color: "text-green-600",
    },
    {
      href: "https://wa.me/919156073686",
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "text-green-500",
    },
  ];

  return (
    <footer aria-label="Site Footer" className="bg-background-light border-t border-[#e2e8f0]">
      <div className="w-full h-1 bg-linear-to-r from-primary via-brand-gold to-primary"></div>
      <div className="max-w-360 mx-auto px-8 lg:px-16 py-6">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-4">
            <h2 className="text-brand-blue text-4xl font-serif font-bold tracking-tight">
              FIDVERIS
            </h2>
            <p className="text-brand-blue/80 font-medium text-sm">
              👋 Have an idea? We'd love to help you build it.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <nav aria-label="Footer Navigation" className="flex flex-col space-y-4">
              <Link href="/services" className="text-primary-text/70 font-medium text-base hover:text-primary transition">
                Services
              </Link>
              <Link href="/process" className="text-primary-text/70 font-medium text-base hover:text-primary transition">
                Process
              </Link>
              <Link href="/about" className="text-primary-text/70 font-medium text-base hover:text-primary transition">
                About
              </Link>
              <Link href="/work" className="text-primary-text/70 font-medium text-base hover:text-primary transition">
                Work
              </Link>
              <Link href="/contact" className="text-primary-text/70 font-medium text-base hover:text-primary transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Description + Social */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col justify-between">
            <p className="text-brand-blue text-xl leading-relaxed font-medium mb-8">
              We build digital products that solve real business problems — from websites to enterprise software.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group bg-white dark:bg-gray-800 p-3 rounded-full shadow hover:scale-110 transition"
                    aria-label={link.label}
                  >
                    <Icon className={`text-xl ${link.color}`} />

                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-[#e2e8f0] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">© 2026 FIDVERIS. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">
              Premium Digital Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer