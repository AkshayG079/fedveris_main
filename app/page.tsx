'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    company: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!form.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!form.terms) {
      newErrors.terms = "You must accept the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      router.push("/thanksyou");
    }
  };

  return (
    <div className="mx-auto sm:w-[90%] lg:max-w-360 w-full px-2 py-12 lg:py-0">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 px-4 lg:px-16 min-h-screen">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
          <div className="space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="h-[1.75px] w-20 bg-brand-gold"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue-muted">
                Strategic Technology Partner
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-primary-text">
              <span className="font-serif italic text-brand-blue">Reliable </span>
              Technology Solutions for Businesses Ready to
              <span className="font-serif italic text-brand-gold"> Grow</span>
            </h1>
            <p className="max-w-xl text-lg lg:text-xl leading-relaxed text-slate-500 font-light mx-auto lg:mx-0">
              Clear communication. Custom solutions. Real results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <Link
              href="/contact"
              className="gold-hover flex h-16 items-center justify-center border border-transparent bg-brand-blue px-10 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-full"
            >
              Discuss Your Growth Plan
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end lg:flex">
          <div className="relative w-full max-w-125 sm:max-w-150 aspect-square flex items-center justify-center">
            <div className="relative w-[85%] h-[85%] rounded-full shadow-[0_0_80px_-20px_rgba(78,93,148,0.3)] overflow-hidden border border-slate-200/50">
              <Image
                alt="Globe Visual"
                className="w-full h-full object-cover opacity-90 scale-110"
                width={600}
                height={600}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTjtSngLSTxtqc88FoHSNngQY_09kg4HPCFQigkwJXInQuVt6js3re4YoDX3eXr_b4EsavnGA4sgPVWJzFTmHUeF1NMAEG8gMppymp2hFuIKVRv-ABEtMpcdtdAem4aBBMvwS0iYi5_qbg7fZuVQEiieh6mQXhdOBgXLCdemcxEwvfUrC66UCmoUwATEJtIfrmL0YpdWyDwAMvOklbnjZvA2-rE3Q9ox6coSVzt3bVZBqTKmPP7LxICsCUxqx89-3SvgxVa1S6ivM"
              />
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <path className="connection-arc" d="M 100 200 Q 200 100 300 200" fill="none" />
                <path className="connection-arc" d="M 150 280 Q 200 200 280 120" fill="none" />
                <path className="connection-arc" d="M 120 150 Q 250 250 350 200" fill="none" />
                <path className="dotted-path" d="M 50 100 C 150 20 300 50 380 120" id="planePath" />
              </svg>
              <div className="absolute top-[15%] left-[65%] -rotate-12">
                <span className="material-symbols-outlined text-brand-gold text-4xl! drop-shadow-lg">flight</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative min-h-screen flex items-center px-4 lg:px-16 overflow-hidden"> */}

        {/* Background Image (Old Right Column Image) */}
        {/* <div className="absolute inset-0 -z-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTjtSngLSTxtqc88FoHSNngQY_09kg4HPCFQigkwJXInQuVt6js3re4YoDX3eXr_b4EsavnGA4sgPVWJzFTmHUeF1NMAEG8gMppymp2hFuIKVRv-ABEtMpcdtdAem4aBBMvwS0iYi5_qbg7fZuVQEiieh6mQXhdOBgXLCdemcxEwvfUrC66UCmoUwATEJtIfrmL0YpdWyDwAMvOklbnjZvA2-rE3Q9ox6coSVzt3bVZBqTKmPP7LxICsCUxqx89-3SvgxVa1S6ivM"
            alt="Globe Visual"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div> */}
        {/* <div className="absolute inset-0 -z-10 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
        </div> */}

        {/* Optional Dark Overlay for Better Text Visibility */}
        {/* <div className="absolute inset-0 -z-10 bg-white/80"></div> */}

        {/* Content */}
        {/* <div className="w-full max-w-5xl mx-auto space-y-8 text-center lg:text-left">

          <div className="space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="h-[1.75px] w-20 bg-brand-gold"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue-muted">
                Strategic Technology Partner
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-primary-text">
              <span className="font-serif italic text-brand-blue">Reliable </span>
              Technology Solutions for Businesses Ready to
              <span className="font-serif italic text-brand-gold"> Grow</span>
            </h1>

            <p className="max-w-xl text-lg lg:text-xl leading-relaxed text-slate-500 font-light mx-auto lg:mx-0">
              Clear communication. Custom solutions. Real results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <Link
              href="/contact"
              className="gold-hover flex h-16 items-center justify-center bg-brand-blue px-10 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-full"
            >
              Discuss Your Growth Plan
            </Link>
          </div>

        </div> */}

      {/* </div> */}

      {/* Value Proposition Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-40 py-12 sm:py-16 lg:py-32">
        <div className="max-w-250 mx-auto flex flex-col items-center gap-y-10">
          <div className="layout-content-container flex flex-col mb-10">
            <h1 className="text-[#0d121b] tracking-tight text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold leading-snug sm:leading-tight text-center pb-6 max-w-212.5 mx-auto">
              Most businesses don&apos;t fail online because of design —
              <span className="text-primary">
                they fail because their digital systems don&apos;t support how
                the business actually works.
              </span>
            </h1>
          </div>

          <div className="layout-content-container flex flex-col mb-16 sm:mb-20">
            <p className="text-[#4c669a] text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-center max-w-175 mx-auto px-2 sm:px-4">
              Here in FIDVERIS, we focus on building technology aligned with
              real workflows, operations and growth goals not just
              good-looking interfaces.
            </p>
          </div>

          {/* Solution Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full mt-4">
            {[
              {
                icon: 'settings',
                title: 'Operational Efficiency',
                desc: 'Systems built to reduce manual work and operational friction, allowing your team to focus on high-value tasks.'
              },
              {
                icon: 'trending_up',
                title: 'Scalable Growth',
                desc: 'Scalable platforms designed to support business growth without the need for constant, expensive rebuilding.'
              },
              {
                icon: 'extension',
                title: 'Seamless Integration',
                desc: 'Custom solutions replacing fragmented tools and processes with unified, data-driven architecture.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 sm:gap-6 rounded-xl border border-[#cfd7e7] bg-[#f8f9fc] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group text-center sm:text-left"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mx-auto sm:mx-0">
                  <span className="material-symbols-outlined text-2xl! sm:text-3xl!">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-[#0d121b] text-lg sm:text-xl font-bold leading-tight">{item.title}</h3>
                  <p className="text-[#4c669a] text-sm sm:text-base font-normal leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center">
        <h1 className="text-[#111218] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-12 sm:mb-24 leading-snug sm:leading-tight">
          How We Help Businesses Grow <br className="hidden md:block" />
          with <span className="text-primary">Technology</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We don&apos;t just build software — we design systems that support real
          workflows, solve core problems, and drive measurable results.
          Here&apos;s how we do it.
        </p>
      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="hidden lg:block absolute top-[50%] left-0 w-full h-1px bg-gray-300 journey-line z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {[
            { number: '01', icon: 'search', title: 'Discover', desc: 'We listen first. We study your business, users and current pain points to uncover what\'s truly holding growth back before proposing any solution.' },
            { number: '02', icon: 'architecture', title: 'Design', desc: 'We translate insights into clear product strategy and intuitive UX. Every screen is designed with purpose not decoration.' },
            { number: '03', icon: 'code_blocks', title: 'Build', desc: 'Our team turns approved designs into fast, secure, production-ready systems focused on performance, reliability and real-world usability.' },
            { number: '04', icon: 'insights', title: 'Scale', desc: 'After launch, we optimize, support and evolve your product so it keeps improving as your business grows, not breaking under pressure.' }
          ].map((step, idx) => (
            <div key={idx} className="relative group overflow-hidden">
              <div className="bg-white border-l-4 border-primary p-6 sm:p-8 rounded-xl shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="step-number-bg">{step.number}</span>
                <div className="relative z-10 mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                  </div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">Step {step.number}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-primary text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Capabilities</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy-dark dark:text-white mb-8 sm:mb-12">
            What We Offer
          </h1>
          <p className="text-navy-dark/70 dark:text-white/70 text-base sm:text-lg leading-relaxed">
            Comprehensive technical and creative solutions tailored for your
            business growth. We combine strategy, design, and engineering to
            deliver high-impact digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            className="bg-white dark:bg-[#2d281a] p-6 sm:p-8 rounded-xl border border-[#f4f0e7] dark:border-[#3a3526] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3">
              <div className="bg-light-gold/20 p-2 sm:p-3 rounded-lg text-light-gold">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">brush</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-dark dark:text-white">
                UI/UX Design
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-navy-dark/70 dark:text-white/70">
              Elevating user experiences through research-driven design and
              intuitive interfaces.
            </p>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Wireframing & Prototyping</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Creating blueprints for seamless user journeys and rapid
                  validation.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">User Research</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Data-driven insights to understand user needs and pain
                  points.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Design Systems</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Scalable visual languages for consistent brand
                  experiences.
                </p>
              </li>
            </ul>
          </div>

          <div
            className="bg-white dark:bg-[#2d281a] p-6 sm:p-8 rounded-xl border border-[#f4f0e7] dark:border-[#3a3526] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3">
              <div className="bg-light-gold/20 p-2 sm:p-3 rounded-lg text-light-gold">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">code</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-dark dark:text-white">
                Web Development
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-navy-dark/70 dark:text-white/70">
              Building high-performance websites and web applications with
              cutting-edge tech.
            </p>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">PWA Development</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Fast, app-like web experiences that work offline and scale
                  across all devices.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">E-commerce Engines</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  High-conversion online stores with secure payment
                  integration.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Custom CMS</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Tailored content management systems for complete
                  flexibility.
                </p>
              </li>
            </ul>
          </div>

          <div
            className="bg-white dark:bg-[#2d281a] p-6 sm:p-8 rounded-xl border border-[#f4f0e7] dark:border-[#3a3526] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3">
              <div className="bg-light-gold/20 p-2 sm:p-3 rounded-lg text-light-gold">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">dashboard</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-dark dark:text-white">
                Web Portals
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-navy-dark/70 dark:text-white/70">
              Creating centralized hubs for information management and
              communication.
            </p>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Corporate Portals</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Unified platforms for organizational operations and
                  resources.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Client Portals</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Secure self-service environments for your valuable
                  customers.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Enterprise Intranets</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Internal networks to boost employee collaboration and
                  productivity.
                </p>
              </li>
            </ul>
          </div>

          <div
            className="bg-white dark:bg-[#2d281a] p-6 sm:p-8 rounded-xl border border-[#f4f0e7] dark:border-[#3a3526] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3">
              <div className="bg-light-gold/20 p-2 sm:p-3 rounded-lg text-light-gold">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">phone_iphone</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-dark dark:text-white">
                App Development
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-navy-dark/70 dark:text-white/70">
              Developing mobile and desktop applications for a multi-device
              world.
            </p>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">API & Backend Development</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Secure server logic, databases, authentication and
                  integrations that power your apps.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Cross-Platform Apps</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Single codebase solutions for iOS, Android, and Desktop.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Enterprise Software</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Custom software to automate and streamline business
                  workflows.
                </p>
              </li>
            </ul>
          </div>

          <div
            className="bg-white dark:bg-[#2d281a] p-6 sm:p-8 rounded-xl border border-[#f4f0e7] dark:border-[#3a3526] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3">
              <div className="bg-light-gold/20 p-2 sm:p-3 rounded-lg text-light-gold">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">support_agent</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-dark dark:text-white">
                Maintenance
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-navy-dark/70 dark:text-white/70">
              Long-term partnerships to ensure your digital assets remain
              secure and fast.
            </p>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Security Updates</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Regular patches and vulnerability scans to protect your
                  data.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Performance Monitoring</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Continuous optimization to ensure maximum speed and
                  uptime.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-light-gold"></span>
                  <span className="font-bold text-xs sm:text-sm">Technical Support</span>
                </div>
                <p className="text-[10px] sm:text-xs text-navy-dark/60 dark:text-white/60 ml-3.5">
                  Reliable 24/7 assistance for all your platform-related
                  queries.
                </p>
              </li>
            </ul>
          </div>

          <div
            className="bg-light-gold p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center text-center gap-3 shadow-sm mt-6 sm:mt-12 lg:col-span-3">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-dark">
              Ready to Start?
            </h3>
            <p className="text-navy-dark/80 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              Let's discuss how we can bring your project to life with our
              expert team.
            </p>
            <button
              className="w-full sm:w-auto bg-navy-dark text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-navy-dark/90 transition-all flex items-center justify-center gap-2 group"
              onClick={() => router.push("/contact")}
            >
              Turn Your Idea Into Reality
              <span
                className="material-symbols-outlined text-sm sm:text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="w-full max-w-300 px-4 sm:px-6 lg:px-8 py-12 md:py-32 mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-2 sm:mb-4">
            Our Featured Projects
          </h1>
          <div className="w-16 h-1 bg-gold mb-4 sm:mb-6"></div>
          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Explore our work of high-impact solutions, from global rebrands
            to bespoke digital architectures. We build experiences that
            matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative group w-full">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-brand-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-6 bg-gray-100 flex items-center px-3 gap-1.5 border-b border-gray-200">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="aspect-16/10 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/GOLDEN_SPICE_VENTURE/GSV_design.png')" }}></div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight sm:tracking-normal">
              Turmeric Business Digital Transformation
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Empowering producers to connect directly with the world
              building transparent systems that turn hard work into real
              opportunity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/work/case-study-golden-spice-venture"
                className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold group transition-all gap-2"
              >
                <span>Know More</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-36! sm:mt-24 bg-primary rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg height="100%" width="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)"></path>
              <defs>
                <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                </pattern>
              </defs>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 relative z-10">
            Ready to start your project?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto relative z-10">
            Let's build something extraordinary together. Our team is ready
            to transform your vision into reality.
          </p>
          <div className="flex justify-center relative z-10">
            <button
              className="flex min-w-[160px] sm:min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 sm:px-8 bg-white text-primary text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary dark:text-white mb-8">
            What Our Clients Say About Working With Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            These are real words from real clients who trusted us with their
            ideas, timelines, and budgets and watched them turn into working
            products.
          </p>
        </div>


        <div className="overflow-x-auto -mx-4 px-4 py-12 flex items-center justify-center">
          <div className="flex gap-8 w-max ">
            <div
              className="relative bg-card-light dark:bg-card-dark p-8 pt-16 rounded-3xl card-shadow border border-gray-100 dark:border-gray-800 mx-auto w-full lg:max-w-md max-w-[18rem]">
              <div className="absolute -top-6 -left-4 z-10">
                <div
                  className="bg-primary text-white py-4 pl-10 pr-12 rounded-tr-3xl rounded-br-3xl rounded-tl-3xl ribbon-shadow z-10">
                  <h4 className="font-semibold text-xs leading-tight">
                    Mahajan Gumte
                  </h4>
                  <p className="text-xs opacity-90">
                    Founder, Golden Spice Venture
                  </p>
                </div>
                <div className="ribbon-fold"></div>
              </div>
              <div className="absolute -top-12 right-6 z-40">
                <div
                  className="w-24 h-24 sm:w-12 sm:h-12 md:w-28 md:h-28 rounded-full border-4 border-white dark:border-gray-700 shadow-lg overflow-hidden bg-gray-200">
                  <img alt="Client" className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWSL3wmJQAerglcG30-xESp_UQpSO1k1NQkW-uR6d8RuHBvtfdPJk6lA1vP5sC-AnIHOCxVJtUD3xlC3_4Yubov6pUdAxwr-3DVUKGAH6ntQ-R0kj42rn-LDaW7Tujrt73U3JAbTdwBIhGWaLtfHNWqaJPyfgy6sCj6QzVDEFfPstP1uDzwblvMLmDh3FyuCOJmKiTHpMQOpHOOw9osMw_afVau6KKIdXvydaTfS9nUEaHpAVKGkoVyOY0gYUow2zzPidXjAPDnbEm" />
                </div>
              </div>
              <div className="mt-4 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-6">
                  <span className="material-icons text-brand-gold">star</span>
                  <span className="material-icons text-brand-gold">star</span>
                  <span className="material-icons text-brand-gold">star</span>
                  <span className="material-icons text-brand-gold">star</span>
                  <span className="material-icons text-brand-gold">star</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary dark:bg-brand-gold rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic sm:text-xs">
                    "Fidveris took the time to understand our export
                    business and built a website that reflects our brand
                    properly. The team was responsive, professional and easy
                    to work with. We’re very satisfied with the outcome."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-primary dark:text-white leading-tight">
                Still have questions?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                Everything you need to know about working with FIDVERIS. If
                you can't find the answer you're looking for, please reach
                out.
              </p>
            </div>
            <div className="flex flex-col border-t border-gray-200 dark:border-gray-800">

              <details className="group py-6 border-b border-gray-200 dark:border-gray-800" open={true}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 group">
                  <h3
                    className="text-[#121118] dark:text-white text-lg font-semibold transition-colors group-hover:text-primary dark:group-hover:text-brand-gold">
                    Our Process
                  </h3>
                  <div className="text-brand-gold group-open:rotate-45 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl font-light">add</span>
                  </div>
                </summary>
                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our process follows a structured methodology ensuring
                    quality and timely delivery for every agency partner. We
                    begin with a deep-dive discovery phase, followed by
                    strategic mapping, execution, and iterative refinements.
                  </p>
                </div>
              </details>

              <details className="group py-6 border-b border-gray-200 dark:border-gray-800">
                <summary className="flex cursor-pointer items-center justify-between gap-6 group">
                  <h3
                    className="text-[#121118] dark:text-white text-lg font-semibold transition-colors group-hover:text-primary dark:group-hover:text-brand-gold">
                    Working Period
                  </h3>
                  <div className="text-brand-gold group-open:rotate-45 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl font-light">add</span>
                  </div>
                </summary>
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Typically, a standard engagement spans 8-12 weeks,
                    depending on the scope. We maintain strict milestones to
                    ensure projects stay on track while providing regular
                    progress updates every Friday.
                  </p>
                </div>
              </details>

              <details className="group py-6 border-b border-gray-200 dark:border-gray-800">
                <summary className="flex cursor-pointer items-center justify-between gap-6 group">
                  <h3
                    className="text-[#121118] dark:text-white text-lg font-semibold transition-colors group-hover:text-primary dark:group-hover:text-brand-gold">
                    Budgeting
                  </h3>
                  <div className="text-brand-gold group-open:rotate-45 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl font-light">add</span>
                  </div>
                </summary>
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We offer transparent, value-based pricing models
                    tailored to your specific goals. Our budgeting process
                    includes a detailed breakdown of resources and
                    deliverables with no hidden costs.
                  </p>
                </div>
              </details>
              <details className="group py-6 border-b border-gray-200 dark:border-gray-800">
                <summary className="flex cursor-pointer items-center justify-between gap-6 group">
                  <h3
                    className="text-[#121118] dark:text-white text-lg font-semibold transition-colors group-hover:text-primary dark:group-hover:text-brand-gold">
                    Ongoing Support
                  </h3>
                  <div className="text-brand-gold group-open:rotate-45 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl font-light">add</span>
                  </div>
                </summary>
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Beyond the launch, we offer dedicated maintenance
                    retainers and strategic support to ensure your long-term
                    success. Our team is available for quarterly reviews and
                    immediate troubleshooting.
                  </p>
                </div>
              </details>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div
              className="bg-white dark:bg-background-dark/50 p-8 md:p-12 rounded-2xl form-shadow border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                We'll get back to you within 24 business hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary dark:text-gray-300" htmlFor="full_name">Full
                      Name</label>
                    <input
                      className={`w-full h-14 px-4 rounded-lg border 
  ${errors.full_name
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                          : "border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary"
                        } 
  bg-gray-50 dark:bg-gray-800/50 text-[#121118] dark:text-white outline-none transition-all`}
                      id="full_name"
                      placeholder="John Doe"
                      type="text"
                      value={form.full_name}
                      onChange={(e) =>
                        setForm({ ...form, full_name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary dark:text-gray-300" htmlFor="email">Email
                      Address</label>
                    <input
                      className={`w-full h-14 px-4 rounded-lg border 
  ${errors.email
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary"
                        } 
  bg-gray-50 dark:bg-gray-800/50 text-[#121118] dark:text-white outline-none transition-all`}
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />

                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary dark:text-gray-300" htmlFor="company">Company Name
                    (Optional)</label>
                  <input
                    className="w-full h-14 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-[#121118] dark:text-white focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    id="company" placeholder="Acme Corp" type="text" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary dark:text-gray-300" htmlFor="message">Your
                    Message</label>
                  <textarea
                    rows={4}
                    className={`w-full p-4 rounded-lg border resize-none 
  ${errors.message
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary"
                      } 
  bg-gray-50 dark:bg-gray-800/50 text-[#121118] dark:text-white outline-none transition-all`}
                    id="message"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
                {/* <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary dark:text-gray-300">
                    Attachments (Optional)
                  </p>
                  <div
                    className="group relative border-2 border-dashed border-brand-gold/40 rounded-xl p-8 text-center bg-brand-gold/5 hover:bg-brand-gold/10 hover:border-brand-gold transition-all cursor-pointer">
                    <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" />
                    <div className="flex flex-col items-center">
                      <span className="material-symbols-outlined text-brand-gold text-4xl mb-2">cloud_upload</span>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        Drag &amp; drop files here or
                        <span className="text-primary dark:text-brand-gold underline font-bold">click to browse</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        PDF, DOC, JPG (Max 10MB)
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5">
                    <input className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary brand-gold-primary"
                      id="terms" type="checkbox" checked={form.terms}
                      onChange={(e) =>
                        setForm({ ...form, terms: e.target.checked })
                      } />

                  </div>
                  <label className="text-sm text-gray-600 dark:text-gray-400 leading-tight" htmlFor="terms">
                    I agree to the
                    <a className="text-primary dark:text-brand-gold hover:underline font-semibold" href="#">Terms &amp;
                      Conditions</a>
                    and

                    <a className="text-primary dark:text-brand-gold hover:underline font-semibold" href="#">privacy
                      policy</a>
                    .
                  </label>
                </div>


                <button
                  type="submit"

                  className="w-full bg-primary hover:bg-brand-gold hover:text-primary text-white h-14 rounded-lg font-bold text-lg tracking-wide shadow-xl transition-all flex items-center justify-center gap-2 group"

                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}