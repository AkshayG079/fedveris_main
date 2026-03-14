'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] w-full">
      {/* Hero */}
      <section className="min-h-screen w-full max-w-screen-md lg:max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center px-8 lg:px-16">
        <h1 className="text-4xl md:text-6xl text-brand-blue leading-[1.1] mb-10">
          We like to keep things simple and work fast.
        </h1>
        <h2 className="text-2xl font-medium text-brand-blue leading-[1.1] my-7">
          About FIDVERIS
        </h2>
        <p className="text-md text-gray-500 font-light leading-relaxed max-w-4xl border-l-2 border-brand-gold pl-8">
          Technology Built Around How Your Business Actually Works. FIDVERIS
          helps businesses design and implement technology that supports
          real operations — not just good-looking interfaces. Most digital
          problems don't come from bad design; they come from systems that
          don't match how a business runs day to day. We exist to fix that
          gap by building clear, dependable solutions aligned with
          workflows, goals, and long-term growth.
        </p>
      </section>

      {/* Belief */}
      <section className="bg-background-light pt-8 pb-40 flex items-center justify-center px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold font-medium uppercase tracking-[0.4em] text-md mb-12 block">
            Our Belief
          </span>
          <blockquote className="font-display text-4xl md:text-6xl text-brand-blue leading-[1.2] italic">
            “We believe technology should
            <span className="text-brand-blue/70"> simplify work</span>, reduce
            friction, and enable growth — not add complexity.”
          </blockquote>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-32 bg-white px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-8">Our Mission</h2>
              <p className="text-2xl md:text-3xl text-brand-blue font-display leading-relaxed mb-6">
                To provide the structural foundation for sustainable digital
                transformation.
              </p>
              <p className="text-navy-dark leading-relaxed text-lg font-light opacity-80">
                We bridge the gap between complex engineering requirements
                and strategic business outcomes through rigorous systems
                thinking and uncompromised technical integrity.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-8">Our Vision</h2>
              <p className="text-2xl md:text-3xl text-brand-blue font-display leading-relaxed mb-6">
                Architecting a future where systems are resilient by design.
              </p>
              <p className="text-navy-dark leading-relaxed text-lg font-light opacity-80">
                Our goal is to redefine the standard of technical
                consultancy, ensuring that every piece of infrastructure we
                touch serves as a catalyst for long-term scalability and
                operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 border-t border-gray-100 px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-brand-gold font-medium uppercase tracking-[0.4em] text-sm mb-4 block">
              Foundations
            </span>
            <h2 className="text-4xl sm:text-xl font-bold text-brand-blue">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: 'flare', title: 'Clarity Over Complexity', desc: 'We strip away the unnecessary. Our approach prioritizes readable architectures and transparent processes that anyone in your organization can understand.' },
              { icon: 'verified', title: 'Reliability & Accountability', desc: 'Systems must work when it matters most. We take full ownership of our engineering decisions, ensuring they stand up to real-world operational pressure.' },
              { icon: 'insights', title: 'Business-Driven Decisions', desc: 'Technology is a means, not an end. Every line of code and architectural shift is evaluated against its ability to drive your specific business objectives.' }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="mb-6 flex items-center gap-4">
                  <span className="material-symbols-outlined text-brand-gold text-3xl">{value.icon}</span>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-sans uppercase tracking-wider text-brand-blue">
                  {value.title}
                </h3>
                <p className="text-navy-dark/70 leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="w-full bg-background-dark">
        <div className="w-full">
          <Image
            src="/images/team.png"
            width={1920}
            height={600}
            className="w-full"
            alt="Our Team"
          />
        </div>
        <div className="max-w-4xl mx-auto text-white p-6 lg:py-14 text-center md:text-left">
          <h1 className="lg:text-2xl md:text-xl text-md mb-6 leading-relaxed font-light tracking-wide">
            We Build Digital Products — And Support Them for the Long Run
          </h1>
          <p className="lg:text-sm text-xs leading-relaxed font-light tracking-wide">
            We build scalable digital products and provide continuous
            maintenance — helping businesses grow with reliable technology
            and creative execution.
          </p>
        </div>
      </section>

      {/* Strategic Alignment */}
      <section className="max-w-[1200px] mx-auto w-full px-8 lg:px-16 sm:px-10 py-16">
        <div className="max-w-3xl">
          <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4 block">
            Strategic Alignment
          </span>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.1] text-primary mb-6">
            A deliberate approach to <br />digital excellence.
          </h1>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            We don't just write code. We architect solutions that bridge the
            gap between complex operations and seamless technology.
          </p>
        </div>
      </section>

      {/* WHO/WHY/HOW */}
      <section className="bg-background-light py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto w-full">
          {[
            { title: 'WHO', sub: 'we work with', icon: 'groups', headline: 'Founders, startups and growing teams building real products', desc: 'We partner with people who take their business seriously. Whether launching a new idea or improving an existing platform, we work with clients who want reliable systems — no shortcuts. If you care about quality, clarity, and long-term growth, you’ll feel at home with us.' },
            { title: 'WHY', sub: 'choose us', icon: 'verified', headline: 'Because delivery matters more than promises', desc: 'Most agencies focus on visuals. We focus on outcomes. At Fidveris, every decision is driven by business logic, performance, and usability. We don’t overpromise and we don’t disappear mid-project. You get honest timelines, clear communication, and products that actually work in the real world.' },
            { title: 'HOW', sub: 'we deliver', icon: 'precision_manufacturing', headline: 'A clear, structured process from idea to launch', desc: 'Every project follows a transparent workflow: discovery, planning, design, development, testing, and deployment. You receive regular updates, milestone reviews, and opportunities to give feedback along the way. No guessing. No chaos. Just steady progress and predictable delivery.' }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${idx < 2 ? 'mb-24' : 'mb-0'}`}
            >
              <div className={`md:col-span-5 ${idx === 1 ? 'md:order-last' : ''}`}>
                <h2 className={`font-serif text-[80px] md:text-[100px] leading-none text-primary opacity-90 select-none ${idx === 1 ? 'text-right' : ''}`}>
                  {item.title}
                </h2>
                <p className={`mt-2 text-brand-gold font-bold tracking-widest text-sm uppercase ${idx === 1 ? 'text-right' : ''}`}>
                  {item.sub}
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="bg-white p-10 md:p-12 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group">
                  <div className={`absolute top-0 ${idx === 1 ? 'left-0 w-24 h-24 bg-brand-gold/5 rounded-br-full -ml-4 -mt-4' : 'right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -mr-4 -mt-4'} transition-all group-hover:bg-brand-gold/10`}></div>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="material-symbols-outlined text-brand-gold text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {item.headline}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="border border-gray-100 rounded-xl p-4 md:p-16">
            <div className="max-w-2xl mb-16">
              <span className="text-brand-gold font-medium uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Security & Trust
              </span>
              <h2 className="text-4xl mb-6 italic text-primary">How We Reduce Client Risk</h2>
              <p className="text-navy-dark/60 font-light">
                We replace uncertainty with structured accountability at
                every layer of the engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: 'Scope Clarity', desc: 'Transparent deliverables and clear boundaries to prevent budget creep and timeline shifts.' },
                { title: 'Communication', desc: 'Direct access to lead engineers with weekly status reports that prioritize honesty over optics.' },
                { title: 'Phase Reviews', desc: 'Mandatory technical audits at each milestone to ensure alignment with the initial architecture.' },
                { title: 'Ownership', desc: 'Complete IP transfer and documentation that ensures your internal team can take over seamlessly.' }
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-brand-blue uppercase tracking-widest text-xs mb-4">{item.title}</h4>
                  <p className="text-xs text-navy-dark/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 lg:py-24 bg-white px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20">
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm mb-4 block">
              Methodology
            </span>
            <h2 className="text-4xl">Our Business Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { num: '01', title: 'Understand', desc: 'Deep immersion into your business logic, identifying bottlenecks and latent opportunities before a single line of code is written.' },
              { num: '02', title: 'Plan', desc: 'Architecting scalable blueprints. We define the technical stack and roadmap that aligns with your 5-year vision, not just today\'s needs.' },
              { num: '03', title: 'Build', desc: 'Agile execution with rigorous QA. We develop in transparent sprints, ensuring structural integrity and clean, maintainable codebases.' },
              { num: '04', title: 'Support', desc: 'Post-launch monitoring and optimization. We remain your technical partners, ensuring the system evolves as your business scales.' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className='flex justify-between items-end w-full flex-row'>
                  <h3 className="text-lg font-bold uppercase tracking-widest text-brand-blue">
                    {step.title}
                  </h3>
                  <span className="text-3xl font-display text-brand-gold  select-none">
                    {step.num}
                  </span>
                </div>
                <div className="pt-4 lg:pt-8">

                  <p className="text-navy-dark/70 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="my-14 text-center">
            <p
              className="text-2xl font-display text-brand-blue italic max-w-2xl mx-auto leading-relaxed"
            >
              “Clear communication. Honest delivery.
              <span className="text-brand-gold">We build solutions that move your business forward.</span>”
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}