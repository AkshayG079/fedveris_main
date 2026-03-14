'use client'

import Image from 'next/image'
import Link from 'next/link'


import { SiNextdotjs, SiTailwindcss, SiMui } from "react-icons/si";
import { FaCloud } from "react-icons/fa";

export default function CaseStudyPage() {
  return (
    <div className="mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-12">
      {/* <Link
        href="/work"
        className="inline-flex items-center gap-2 text-primary hover:text-brand-gold transition-colors mb-8"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Work
      </Link> */}

      <section className="max-w-[1440px] mx-auto mt-4">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
            Golden Spice Venture
          </h1>
          <a href="https://goldenspiceventure.com/" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-block border border-brand-blue text-brand-blue px-8 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-blue hover:text-white transition-all">
            View Live Site
          </a>
        </div>
        <p className="text-xl text-gray-600 mb-12">
          Work / Golden Spice Venture
        </p>

        <div className="aspect-video w-full bg-gray-200 rounded-xl mb-16">
          <div
            className="w-full h-full bg-center bg-cover rounded-xl"
            style={{ backgroundImage: "url('/images/GOLDEN_SPICE_VENTURE/turmic_Screen.png')" }}
          ></div>
          {/* <div
            className="w-full h-full bg-center bg-cover rounded-xl"
            style={{ backgroundImage: "url('/images/GOLDEN_SPICE_VENTURE/GSV_design.png')" }}
          ></div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">The Challenge</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Golden Spice Venture needed a digital presence that could connect their turmeric export business with international buyers. They required a website that would showcase their products, build trust, and facilitate business inquiries.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Our Solution</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We built a modern, responsive website that highlights their product quality and export capabilities. The design reflects the premium nature of their spices while maintaining a professional, trustworthy appearance.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-brand-gold">check_circle</span>
                <span className="text-gray-600">Custom product gallery with detailed descriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-brand-gold">check_circle</span>
                <span className="text-gray-600">Inquiry form for international buyers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-brand-gold">check_circle</span>
                <span className="text-gray-600">Mobile-responsive design for global accessibility</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl h-fit">
            <h3 className="font-bold text-primary mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Client</p>
                <p className="font-medium">Golden Spice Venture</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Services</p>
                <p className="font-medium">Web Design & Development</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Year</p>
                <p className="font-medium">2024</p>
              </div>
            </div>
          </div>
        </div>

        <section
          className="py-12 sm:py-16 lg:py-12"
          aria-labelledby="project-case-study"
        >
          <div className="flex flex-col gap-12 lg:gap-16">

            <h2
              id="project-case-study"
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Golden Spice Venture Website Case Study
            </h2>

            {/* Problem */}
            <article className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-1/3">
                <h3 className="text-lg font-semibold uppercase tracking-wider">
                  01. Problem
                </h3>
              </div>

              <div className="md:w-2/3">
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 ">
                  Golden Spice Venture required a professional website to showcase
                  their turmeric products and build credibility in the global export
                  market. The company needed a clear and easy-to-navigate platform
                  where international buyers could learn about their turmeric
                  offerings and connect with the business efficiently.
                </p>
              </div>
            </article>

            {/* Solution */}
            <article className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-1/3">
                <h3 className="text-lg font-semibold uppercase tracking-wider">
                  02. Solution
                </h3>
              </div>

              <div className="md:w-2/3">
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 ">
                  We designed and developed a modern, responsive website for Golden
                  Spice Venture that highlights their turmeric products, export
                  expertise, and company strengths. The site structure ensures
                  intuitive navigation and delivers a consistent experience across
                  mobile, tablet, and desktop devices.
                </p>
              </div>
            </article>

            {/* Value Delivered */}
            <article className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-1/3">
                <h3 className="text-lg font-semibold uppercase tracking-wider">
                  03. Value Delivered
                </h3>
              </div>

              <div className="md:w-2/3">
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 ">
                  The new website provides Golden Spice Venture with a strong digital
                  presence, improving visibility in international markets and helping
                  build trust with global buyers. With a clear product presentation
                  and professional design, the company can now connect more easily
                  with potential export clients.
                </p>
              </div>
            </article>

          </div>
        </section>
      </section>

      <section className="py-12">
        <div className='flex lg:flex-row flex-col gap-8'>
          <div className="flex-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-6 tracking-wide">
              About Golden Spice Venture
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Golden Spice Venture is a trusted turmeric export company based in
              India, dedicated to supplying high-quality turmeric to international
              markets. With a strong focus on reliable sourcing, processing and
              global logistics, the company helps businesses worldwide access
              premium spices directly from the farm.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Their team ensures every order meets strict quality standards, while
              a streamlined export process enables timely delivery and excellent
              customer service. From farm to shipment, Golden Spice Venture
              combines expertise and care to connect buyers with authentic
              turmeric products.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The company focuses on building long-term partnerships with
              businesses across the globe, supporting clients with consistent
              quality, transparency, and reliable export operations.
            </p>

          </div>

          <div className="flex-1 bg-gray-50 rounded-xl h-fit text-right">
             <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-6 tracking-wide">
              Project Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg  text-gray-500 font-semibold">Client</p>
                <p className="font-medium">Golden Spice Venture</p>
              </div>
              <div>
                <p className="text-lg  text-gray-500 font-semibold">Services</p>
                <p className="font-medium">Web Design & Development</p>
              </div>
              <div>
                <p className="text-lg  text-gray-500 font-semibold">Year</p>
                <p className="font-medium">2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/GOLDEN_SPICE_VENTURE/GSV_design.png"
            alt="Golden Spice Venture turmeric export website design"
            width={1400}
            height={800}
            className="w-full h-auto object-cover rounded-lg shadow-md"
            priority
          />
        </div>
      </section>

      <section className="my-20 lg:my-32 flex flex-col lg:flex-row justify-between gap-12">

        {/* Left Column */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl text-brand-blue font-semibold mb-6 tracking-wide">
            Visual Language & Specs
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Visual Language & Specs define the design system including colors,
            typography, and interface elements to ensure a consistent and
            intuitive user experience across the entire website.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col gap-8">

          {/* Color Palette */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Color Palette
            </h3>

            <div className="flex flex-wrap gap-6 mb-4">

              {[
                "#6D4C41",
                "#FFC107",
                "#2E7D32",
                "#F5F5F5"
              ].map((color) => (
                <div key={color} className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-full border border-gray-200 shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs font-mono font-medium text-gray-500">
                    {color}
                  </span>
                </div>
              ))}

            </div>

            <p className="text-sm italic text-gray-500 max-w-lg">
              <span className="font-bold not-italic text-gray-700">
                Why we chose this:
              </span>{" "}
              The earthy palette reflects the natural origin of turmeric,
              combining deep brown for reliability, amber for warmth, green for
              freshness and soft neutral tones for clarity.
            </p>
          </div>

          {/* Typography */}
          <div>
            <p className="text-lg font-bold leading-tight mb-2">
              Poppins <span className="mx-2">|</span> DM Sans
            </p>

            <p className="text-sm text-gray-400">
              Regular | Medium | Semibold
            </p>
          </div>

        </div>
      </section>

      <section className="my-20 lg:my-32 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Wireframe */}
        <div className="lg:w-1/2 flex justify-center">

          <div className="relative group transition-transform duration-300 hover:-translate-y-2">

            <div className="bg-zinc-800 p-2 rounded-xl shadow-2xl">

              <div className="bg-white aspect-[16/10] rounded-lg overflow-hidden border-4 border-zinc-900 p-6 flex flex-col gap-4">

                <div className="flex justify-between items-center mb-4">
                  <div className="w-20 h-4 bg-zinc-300 rounded"></div>

                  <div className="flex gap-2">
                    <div className="w-8 h-2 bg-zinc-300 rounded"></div>
                    <div className="w-8 h-2 bg-zinc-300 rounded"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 flex-1">

                  <div className="flex flex-col gap-3 justify-center">
                    <div className="w-full h-6 bg-zinc-300 rounded"></div>
                    <div className="w-2/3 h-4 bg-zinc-200 rounded"></div>
                    <div className="w-1/2 h-8 bg-zinc-300 rounded mt-4"></div>
                  </div>

                  <div className="border-2 border-dashed border-zinc-300 rounded flex items-center justify-center">
                    <span className="text-zinc-300 text-5xl">🖼</span>
                  </div>

                </div>

              </div>

              <div className="h-3 w-[104%] -ml-[2%] bg-zinc-700 rounded-b-xl shadow-lg mt-1"></div>

            </div>

          </div>

        </div>

        {/* Right Description */}
        <div className="lg:w-1/2 flex flex-col justify-center gap-4">

          <h2 className="text-2xl sm:text-3xl text-brand-blue font-semibold tracking-wide">
            Wireframe & Structure
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We created a clean wireframe to define the structure of the
            Golden Spice Venture website and organize content effectively.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Each section was designed to guide visitors through company
            information, export capabilities, and contact opportunities.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The layout adapts seamlessly across desktop, tablet, and mobile
            devices to maintain usability and clarity.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            This wireframe provided the foundation for the final interface,
            combining natural color tones, clean typography, and a
            professional minimal design style.
          </p>

        </div>

      </section>

      <section className="my-20 lg:my-12 flex flex-col lg:flex-row justify-between gap-10">

        {/* Overview */}
        <div className="lg:w-[48%] w-full">
          <h2 className="text-2xl sm:text-3xl text-brand-blue font-bold mb-4 tracking-wide">
            Overview
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Golden Spice Venture needed a professional web presence to showcase
            their turmeric products and connect with global buyers. We designed
            and developed a clean, business-focused website that builds trust,
            highlights export capabilities, and makes it easy for partners to
            get in touch.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">Key Outcomes</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-gold">check_circle</span>
              <span className="text-gray-600">Clear presentation of products and business information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-gold">check_circle</span>
              <span className="text-gray-600">Responsive layout for desktop, tablet and mobile</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-gold">check_circle</span>
              <span className="text-gray-600">Simple navigation for faster user access</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-gold">check_circle</span>
              <span className="text-gray-600">SiImproved online visibility for global buyers</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="lg:w-[48%] w-full">

          <h2 className="text-2xl sm:text-3xl text-brand-blue font-bold mb-4 tracking-wide">
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Next.js */}
            <div className="p-6 border border-gray-100  rounded-xl bg-white hover:scale-105 transition-transform duration-300">
              <SiNextdotjs className="text-light-blue mb-4 text-3xl" />
              <h4 className="font-bold text-lg mb-2">Next.js</h4>
              <p className="text-gray-500  text-sm leading-relaxed">
                High-performance framework with server rendering and strong SEO support.
              </p>
            </div>

            {/* Tailwind */}
            <div className="p-6 border border-gray-100  rounded-xl bg-white hover:scale-105 transition-transform duration-300">
              <SiTailwindcss className="text-light-blue mb-4 text-3xl" />
              <h4 className="font-bold text-lg mb-2">Tailwind CSS</h4>
              <p className="text-gray-500  text-sm leading-relaxed">
                Utility-first CSS framework for fast and scalable UI development.
              </p>
            </div>

            {/* MUI */}
            <div className="p-6 border border-gray-100  rounded-xl bg-white hover:scale-105 transition-transform duration-300">
              <SiMui className="text-light-blue mb-4 text-3xl" />
              <h4 className="font-bold text-lg mb-2">MUI (Material UI)</h4>
              <p className="text-gray-500  text-sm leading-relaxed">
                Reliable UI component library for accessible and consistent design.
              </p>
            </div>

            {/* Deployment */}
            <div className="p-6 border border-gray-100  rounded-xl bg-white hover:scale-105 transition-transform duration-300">
              <FaCloud className="text-light-blue mb-4 text-3xl" />
              <h4 className="font-bold text-lg mb-2">Deployment</h4>
              <p className="text-gray-500  text-sm leading-relaxed">
                Secure hosting with reliable scaling and automated deployment.
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="my-24 text-center border-t border-gray-100  pt-16">

        <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-wide">
          Ready to build your digital presence?
        </h2>

        <p className="text-lg text-gray-500  mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Let’s create a professional website that helps your business connect
          with customers and grow online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">

          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all w-full sm:w-auto text-center"
          >
            Start Your Project
          </Link>

          <Link
            href="/work"
            className="bg-white  text-[#0d121b]  px-8 py-4 rounded-xl text-lg font-bold border border-gray-200 d hover:bg-gray-50 transition-all w-full sm:w-auto text-center"
          >
            View More Work
          </Link>

        </div>

      </section>

    </div>
  )
}