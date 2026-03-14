'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WorkPage() {
  return (
    <div className="mx-auto sm:w-[90%] lg:max-w-360 w-full px-4 lg:px-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto pt-16 md:pt-24 text-center">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Work
          </h1>
          <div className="w-20 h-1 bg-brand-gold mb-6"></div>
          <p className="max-w-2xl text-lg text-gray-600">
            Work that speaks through results.
          </p>
          <p className="max-w-2xl text-lg text-gray-600">
            Designed and built to help businesses establish, scale and
            succeed online.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="w-full lg:max-w-7xl mx-auto lg:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Link
            href="/work/case-study-golden-spice-venture"
            className="group cursor-pointer"
          >
            <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-cover"
                  style={{ backgroundImage: "url('/images/GOLDEN_SPICE_VENTURE/GSV_design.png')" }}
                ></div>
              </div>
              <div className="px-4 py-4 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  Golden Spice Venture
                </h3>
                <p className="text-gray-500 text-sm">
                  Turmeric Export Company
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}