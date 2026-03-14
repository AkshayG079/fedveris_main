'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ServicesPage() {
  const [activeQuestion, setActiveQuestion] = useState<String | null>('answer-1')

  const router = useRouter();

  const services = [
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: 'design_services',
      bgImage: '/images/ui_ux_bg_1.jpg',
      tagline: 'Design Excellence',
      headline: 'User-Centric Experiences',
      description: 'We craft intuitive digital interfaces through deep research and pixel-perfect execution to ensure your users stay engaged.',
      tags: ['Figma', 'Wireframing', 'Prototypes']
    },
    {
      id: 'webdev',
      title: 'Web Development',
      icon: 'code',
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
      tagline: 'Clean Code',
      headline: 'Modern Web Engineering',
      description: 'Scalable, high-performance websites built with the latest frameworks to give your business a competitive edge.',
      tags: ['React', 'Next.js', 'Tailwind']
    },
    {
      id: 'portals',
      title: 'Web Portals',
      icon: 'hub',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tagline: 'Unified Access',
      headline: 'Enterprise Portals',
      description: 'Custom-built dashboards and portals designed for seamless data management and internal team collaboration.',
      tags: ['Dashboards', 'SaaS', 'CRM']
    },
    {
      id: 'appdev',
      title: 'App Development',
      icon: 'stay_current_portrait',
      bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      tagline: 'Mobile First',
      headline: 'iOS & Android Solutions',
      description: 'Developing robust mobile applications that offer native performance and stunning visuals on every device.',
      tags: ['Flutter', 'Native', 'Hybrid']
    },
    {
      id: 'support',
      title: 'Support',
      icon: 'settings_suggest',
      bgImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
      tagline: 'Reliability',
      headline: 'Maintenance & Optimization',
      description: 'Continuous updates, security patches, and performance monitoring to keep your digital assets running smoothly.',
      tags: ['24/7 Support', 'Security', 'Updates']
    }
  ]

  const questions = [
    {
      id: 'answer-1',
      question: 'How do we ensure the project stays on track?',
      category: 'Project Management',
      title: 'The FIDVERIS Milestone Approach',
      content: 'We utilize a rigorous milestone-based approach to ensure transparency and timely delivery. Every project is mapped out from day one with clear deliverables, deadlines, and a dedicated project manager acting as your single point of contact.',
      bullets: [
        'Weekly Sync Meetings: A 30-minute status update every Monday to review progress and upcoming blockers.',
        'Real-time Dashboard Access: You get a private invite to our project board to see exactly which task is currently being worked on.',
        'Milestone Sign-offs: No work proceeds to the next stage until you\'ve approved the previous phase\'s deliverables.',
        'Dedicated Slack Channel: Instant communication with our design and development leads throughout the business day.'
      ],
      quote: 'Our goal is zero surprises. By the time we launch, you\'ll know every pixel and line of code because you\'ve been a partner in the process.'
    },
    {
      id: 'answer-2',
      question: 'What happens if we need to change the scope mid-build?',
      category: 'Scope Management',
      title: 'Flexible Scope Management',
      content: 'We accommodate changes through our agile change request process. Minor adjustments are handled within sprints, while significant scope changes are evaluated and quoted separately.'
    },
    {
      id: 'answer-3',
      question: 'What is our post-launch support policy?',
      category: 'Support',
      title: '90-Day Warranty & Beyond',
      content: 'We provide 90 days of bug fixes and critical updates post-launch. Optional maintenance retainer available for ongoing support and feature additions.'
    },
    {
      id: 'answer-4',
      question: 'How do we handle intellectual property and ownership?',
      category: 'IP Rights',
      title: 'Full Ownership Transfer',
      content: 'Upon final payment, you receive complete ownership of all deliverables including source code, designs, and assets. No licensing fees or hidden restrictions.'
    },
    {
      id: 'answer-5',
      question: 'How does the billing and payment schedule work?',
      category: 'Payments',
      title: 'Milestone-Based Payments',
      content: '30% upfront to begin, followed by milestone payments tied to deliverables. Final 20% due upon launch. Flexible payment plans available for longer engagements.'
    }
  ]

  return (
    <div className="mx-auto max-w-[1440px] w-full lg:px-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto pt-16 px-8 md:pt-24 pb-12 md:pb-14">
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Services
          </h1>
          <div className="w-20 h-1 bg-brand-gold mb-6"></div>
          <p className="max-w-2xl sm:text-xs text-md lg:text-lg text-gray-600">
            Digital Solutions Built to Grow Real Businesses.
          </p>
          <p className="max-w-2xl sm:text-xs text-md lg:text-lg text-gray-600">
            We design, develop, and maintain high-performance websites, applications, and platforms that help
            businesses scale with confidence.
          </p>
        </div>
      </section>

      {/* Service Columns */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-[90vh] w-full border-y border-white/5 overflow-hidden bg-slate-900">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-column relative group border-r border-white/5 cursor-pointer flex-1 transition-all duration-700 hover:flex-3 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-cover bg-center"
              style={{ backgroundImage: `url('${service.bgImage}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 lg:vertical-text transition-opacity duration-500 group-hover:opacity-0">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 lg:mb-8">{service.icon}</span>
              <h3 className="text-xl font-bold uppercase tracking-widest text-white/60">{service.title}</h3>
            </div>

            <div className="expanded-content relative h-full flex flex-col justify-end p-8 lg:p-12 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="text-brand-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">{service.tagline}</span>
              <h2 className="text-4xl font-extrabold text-white mb-6">{service.headline}</h2>
              <p className="text-slate-300 max-w-md mb-8 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Service Details */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 space-y-32">
        {/* UI/UX Design */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center" id="uiux">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-100 aspect-video bg-white">
              <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("/images/ui_ux_bg_1.jpg")' }}></div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">Innovation First</span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary leading-[1.1]"> UI/UX Architecture</h2>
              <p className="text-lg text-gray-600 max-w-xl">We transcend aesthetics to build human-centric digital experiences that convert. Our design process is rooted in data and validated by real user behavior.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-gold pl-4 space-y-1">
                <h4 className="font-bold text-primary">User Research</h4>
                <p className="text-sm text-gray-500">Behavioral analysis and persona mapping.</p>
              </div>
              <div className="border-l-2 border-brand-gold pl-4 space-y-1">
                <h4 className="font-bold text-primary">Prototyping</h4>
                <p className="text-sm text-gray-500">High-fidelity mocks for stakeholder testing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center" id="webdev">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">Performance Driven</span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary leading-[1.1]">Strategic Web Development</h2>
              <p className="text-lg text-gray-600 max-w-xl">Enterprise-grade codebases optimized for speed, security, and scalability. We build the engine that powers your digital growth.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-brand-gold">bolt</span>
                <div>
                  <h4 className="font-bold text-primary">Next.js & React</h4>
                  <p className="text-sm text-gray-500">Modern frameworks for lightning-fast load times.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-brand-gold">security</span>
                <div>
                  <h4 className="font-bold text-primary">Secure API Design</h4>
                  <p className="text-sm text-gray-500">Robust backend structures with encrypted data.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-brand-gold/5 rounded-2xl group-hover:bg-brand-gold/10 transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-100 aspect-video bg-[#0f111a]">
              <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000")' }}></div>
            </div>
          </div>
        </div>

        {/* Custom web portal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-1 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-brand-gold/5 rounded-2xl group-hover:bg-brand-gold/10 transition-all duration-500"></div>

            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-100 aspect-video bg-[#0f111a]">
              <div
                className="w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000")',
                }}
              ></div>
            </div>
          </div>
          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">
                Data Intelligent
              </span>

              <h2 className="text-4xl lg:text-5xl font-black text-primary leading-[1.1]">
                Custom Web Portals
              </h2>

              <p className="text-lg text-gray-600 max-w-xl">
                Centralize your business logic with bespoke internal portals.
                We build sophisticated interfaces that make complex data actionable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-brand-gold">
                  verified_user
                </span>
                <div>
                  <h4 className="font-bold text-primary ">
                    Role-based Access Control (RBAC)
                  </h4>
                  <p className="text-sm text-gray-500 ">
                    Secure permissions tailored for teams and departments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-brand-gold">
                  monitoring
                </span>
                <div>
                  <h4 className="font-bold text-primary ">
                    Real-time Data Visualization
                  </h4>
                  <p className="text-sm text-gray-500 ">
                    Interactive dashboards for actionable business insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile first */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center" id="appdev">

          {/* Image Column */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-brand-gold/5 rounded-2xl group-hover:bg-brand-gold/10 transition-all duration-500"></div>

            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-100 aspect-video bg-white">
              <div
                className="w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000')",
                }}
              ></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-2 lg:order-1 space-y-8">

            <div className="space-y-4">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">
                Mobile First
              </span>

              <h2 className="text-4xl lg:text-5xl font-black text-primary leading-[1.1]">
                Native App Experiences
              </h2>

              <p className="text-lg text-gray-600 max-w-xl">
                High-performance apps for iOS and Android. We bridge the gap
                between complex functionality and seamless mobile interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-brand-gold text-3xl">
                  terminal
                </span>
                <div>
                  <h4 className="font-bold text-lg text-primary">
                    Cross-platform
                  </h4>
                  <p className="text-sm text-gray-500">
                    Unified codebases using Flutter or React Native.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-brand-gold text-3xl">
                  cloud_sync
                </span>
                <div>
                  <h4 className="font-bold text-lg text-primary">
                    API Integrations
                  </h4>
                  <p className="text-sm text-gray-500">
                    Connecting your mobile ecosystem with powerful third-party APIs
                    and existing software architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Maintaince support */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          id="support"
        >

          {/* Image Column */}
          <div className="relative group order-1 lg:order-1">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-all duration-500"></div>

            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-100 aspect-video bg-white">
              <div
                className="w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000')",
                }}
              ></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 order-2 lg:order-2">

            <div className="space-y-4">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">
                Reliability Always
              </span>

              <h2 className="text-4xl lg:text-5xl font-black text-primary leading-[1.1]">
                Maintenance & Support
              </h2>

              <p className="text-lg text-gray-600 max-w-xl">
                We don't just build and leave. Our dedicated support team ensures
                your platform stays secure, updated, and optimized 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                <span className="material-symbols-outlined text-brand-gold">
                  update
                </span>
                <div>
                  <h4 className="font-bold text-sm">
                    Regular Updates
                  </h4>
                  <p className="text-xs text-gray-500">
                    Continuous patches and feature improvements.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                <span className="material-symbols-outlined text-brand-gold">
                  speed
                </span>
                <div>
                  <h4 className="font-bold text-sm">
                    Optimization
                  </h4>
                  <p className="text-xs text-gray-500">
                    Proactive performance tuning and monitoring.
                  </p>
                </div>
              </div>

            </div>

            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => router.push("/contact")}
            >
              Contact Support
            </button>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Methodology
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
            Our Workflow
          </h1>
          <p className="text-lg text-slate-600 ">
            We combine strategy, design and technology to bring your product to market — the right way.
          </p>
        </div>

        <div className="relative">
          <div className="block absolute left-1/2 top-0 h-full w-[2px] bg-primary/20"></div>
          <div className="space-y-16 lg:space-y-24">
            {[
              {
                title: "01. Discovery",
                desc: "Defining project goals, vision, and core requirements through collaborative workshops.",
              },
              {
                title: "02. Research & Plan",
                desc: "Strategic architecture and technical mapping to ensure a scalable foundation.",
              },
              {
                title: "03. Design",
                desc: "High-fidelity visual UI/UX prototyping that breathes life into your brand identity.",
              },
              {
                title: "04. Development",
                desc: "Clean, functional coding with a focus on performance, security and accessibility.",
              },
              {
                title: "05. Testing",
                desc: "Rigorous QA, bug hunting, and performance checks across all devices and browsers.",
              },
              {
                title: "06. Deployment",
                desc: "Final delivery, go-live support and post-launch monitoring for total success.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center mb-5 md:mb-10 lg:mb-15 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
              // key={index}
              // className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              //   }`}
              >

                {/* Dot */}
                <div className="block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-gold rounded-full border-4 border-white z-10"></div>

                {/* Card */}
                <div className="bg-white lg:p-6 p-3 rounded-xl shadow-lg border-t-4 border-brand-gold max-w-[45%] w-full">
                  <h3 className="font-bold mb-2 lg:text-lg md:text-sm text-[12px]">{step.title}</h3>
                  <p className="lg:text-sm md:text-sm text-[12px] text-slate-600 ">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>


      </section>

      {/* Portfolio */}
      <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        <div className="container mx-auto px-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Portfolio</span>
              <h1 className="text-6xl md:text-8xl font-extrabold text-primary tracking-tight leading-none">
                Selected Works
              </h1>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto no-scrollbar gap-8 px-5 pb-12 cursor-pointer">
            {[1].map((i) => (
              <div key={i} className="flex-shrink-0 w-[18.75rem] md:w-[23.75rem]">
                <div className="card-shape group overflow-hidden relative">
                  <Image
                    src="/images/GOLDEN_SPICE_VENTURE/GSV_design.png"
                    width={380}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                    alt=""
                  />
                  <div className="mt-5 transition-opacity duration-500 flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                      Golden Spice Venture
                    </span>

                    <div className="notch-connector">
                      <a className="action-btn" href="/work/case-study-golden-spice-venture">
                        <span className="material-symbols-outlined">arrow_outward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="mb-12 md:mb-20 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 md:mb-6 leading-tight">
            Everything You Need to Know Before Working With Us
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-body max-w-3xl mx-auto">
            We believe in complete transparency. Here you'll find clear answers about our process, pricing, timelines
            and how we work, so you can make confident decisions before starting your project with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8 lg:mt-20">

          {/* Questions */}
          <div className="lg:col-span-5 flex flex-col gap-3 lg:sticky lg:top-28">
            {questions.map((q) => (
              <div
                key={q.id}
                className={`rounded-xl border border-slate-100 transition-all ${activeQuestion === q.id ? "bg-white shadow-md" : "bg-white/60"
                  }`}
              >
                {/* Question */}
                <div
                  className="p-4 sm:p-6 cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setActiveQuestion(activeQuestion === q.id ? null : q.id)
                  }
                >
                  <h3
                    className={`text-base sm:text-lg font-bold ${activeQuestion === q.id
                        ? "text-primary"
                        : "text-slate-700"
                      }`}
                  >
                    {q.question}
                  </h3>

                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${activeQuestion === q.id ? "rotate-180" : ""
                      }`}
                  >
                    expand_more
                  </span>
                </div>

                {/* ✅ Mobile Answer */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-500 ${activeQuestion === q.id
                      ? "max-h-[800px] p-4 pt-0"
                      : "max-h-0"
                    }`}
                >
                  <p className="text-slate-600 text-sm">{q.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Desktop Answer Panel */}
          <div className="hidden lg:block lg:col-span-7 bg-white rounded-xl shadow-xl border border-slate-100 p-8 md:p-12">
            {questions.map((q) => (
              <div
                key={q.id}
                className={activeQuestion === q.id ? "block" : "hidden"}
              >
                <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest mb-4">
                  <span className="h-px w-8 bg-brand-gold"></span>
                  {q.category}
                </div>

                <h2 className="text-primary text-3xl font-bold mb-8">
                  {q.title}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {q.content}
                </p>

                {q.bullets && (
                  <ul className="space-y-3 pl-5 mb-6">
                    {q.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-slate-700">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {q.quote && (
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-brand-gold italic text-slate-600">
                    "{q.quote}"
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-8">
            What Our Clients Say About Working With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            These are real words from real clients who trusted us with their
            ideas, timelines and budgets and watched them turn into
            working products.
          </p>
        </div>
        <div className="flex justify-center gap-y-24 gap-x-8 mt-12 place-items-center w-full">
          <div className="relative bg-white p-8 pt-16 rounded-3xl card-shadow border border-gray-100 mx-auto w-full max-w-md">
            <div className="absolute -top-6 -left-4 ">
              <div className="bg-primary text-white py-4 pl-10 pr-12 rounded-tr-3xl rounded-br-3xl rounded-tl-3xl ribbon-shadow">
                <h4 className="font-semibold text-xs leading-tight">Mahajan Gumte</h4>
                <p className="text-xs opacity-90">Founder, Golden Spice Venture</p>
              </div>
              <div className="ribbon-fold"></div>
            </div>
            <div className="absolute lg:-top-12 lg:right-6 -top-8 right-6">
              <div className="w-18 h-18 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200 z-40">
                <Image
                  alt="Client"
                  className="w-full h-full object-cover z-40"
                  width={112}
                  height={112}
                  src={"/images/profile-png-Photoroom.png"}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col h-full">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons text-brand-gold">star</span>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed italic">
                  "Fidveris took the time to understand our export business
                  and built a website that reflects our brand properly. The
                  team was responsive, professional and easy to work with.
                  We're very satisfied with the outcome."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mb-20 mx-auto px-6 pt-16 pb-8 md:pb-14">
        <div className="p-10 bg-primary rounded-2xl flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to start your next project?
            </h2>
            <p className="text-white/80">
              Let's build something amazing together that grows your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Schedule a Free Call
          </Link>
        </div>
      </section>
    </div>
  )
}