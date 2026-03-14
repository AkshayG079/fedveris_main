'use client'

import Link from 'next/link'

export default function ProcessPage() {
  return (
    <div className="mx-auto sm:w-[90%] lg:max-w-360 w-full px-4">
      {/* Hero */}
      <section className="min-h-screen w-full max-w-screen-md lg:max-w-7xl mx-auto flex flex-col justify-center">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Process
          </h1>
          <div className="w-20 h-1 bg-brand-gold mb-6"></div>
          <p className="max-w-2xl text-lg text-gray-600 mb-4">
            Digital Solutions Built to Grow Real Businesses.
          </p>
          <p className="max-w-2xl text-lg text-gray-600">
            We design, develop, and maintain high-performance websites,
            applications, and platforms that help businesses scale with
            confidence.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary lg:py-32 py-16">
        <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto">
            "Every great product starts with a clear process"
          </h2>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
          Our Methodology
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight">
          Our Development Process
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          We combine technical excellence with strategic foresight to ensure
          your project exceeds expectations at every stage.
        </p>
        <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded"></div>
      </section>

      {/* Timeline */}
      <section className="relative max-w-7xl mx-auto px-4 lg:pb-24">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full vertical-line top-0 hidden md:block"></div>

        {[
          { step: '01', icon: 'search', title: 'Discovery', color: 'primary', desc: 'We begin by immersing ourselves in your business world. Understanding your objectives, target audience, and market challenges forms the foundation of our strategy.', side: 'right' },
          { step: '02', icon: 'description', title: 'Research & Planning', color: 'brand-gold', desc: 'Mapping the technical architecture and user flow. We create a roadmap that ensures scalability, security, and a seamless integration of your business logic.', side: 'left' },
          { step: '03', icon: 'palette', title: 'Design', color: 'primary', desc: 'Where utility meets aesthetics. Our design team crafts intuitive interfaces that reflect your brand identity while providing an exceptional user experience across all devices.', side: 'right' },
          { step: '04', icon: 'code', title: 'Development', color: 'brand-gold', desc: 'Turning designs into reality. Our engineers utilize modern tech stacks to build robust, high-performance applications with clean, maintainable codebases.', side: 'left' },
          { step: '05', icon: 'bug_report', title: 'Testing', color: 'primary', desc: 'Quality assurance is paramount. We conduct comprehensive unit, integration, and user acceptance testing to ensure every feature works flawlessly before launch.', side: 'right' },
          { step: '06', icon: 'rocket_launch', title: 'Deployment', color: 'brand-gold', desc: 'Go-live with confidence. We handle the CI/CD pipeline and cloud orchestration to ensure a smooth transition from staging to production environments.', side: 'left' },
          { step: '07', icon: 'favorite', title: 'Support', color: 'primary', desc: 'Deployment is just the beginning. We provide continuous monitoring, regular updates, and technical support to ensure your platform grows alongside your business.', side: 'right' }
        ].map((item, idx) => (
          <div key={idx} className={`relative mb-24 md:mb-16 ${item.side === 'left' ? 'flex flex-col md:flex-row items-center' : 'flex flex-col md:flex-row items-center'}`}>
            {item.side === 'left' ? (
              <>
                <div className="md:w-1/2 md:pr-16 flex flex-col items-center md:items-end text-center md:text-right">
                  <div className="relative group text-left">
                    <div className="flex items-center justify-start gap-4 mb-3">
                      <span className="text-5xl font-display font-black text-brand-gold/50">{item.step}</span>
                      <span className={`material-symbols-outlined text-4xl text-${item.color}`}>{item.icon}</span>
                    </div>
                    <h3 className={`text-xs font-bold tracking-[0.2em] text-${item.color} bg-${item.color}/10 inline-block px-3 py-1 mb-4 uppercase`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background-light bg-slate-500 z-10 hidden md:block"></div> */}
                <div className="md:w-1/2"></div>
              </>
            ) : (
              <>
                <div className="md:w-1/2"></div>
                {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background-light bg-primary z-10 hidden md:block"></div> */}
                <div className="md:w-1/2 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="relative group text-right">
                    <div className="flex items-center gap-4 mb-3 justify-end">
                      <span className={`material-symbols-outlined text-4xl text-${item.color}`}>{item.icon}</span>
                      <span className="text-5xl font-display font-black text-primary/50">{item.step}</span>
                    </div>
                    <h3 className={`text-xs font-bold tracking-[0.2em] text-${item.color} bg-${item.color}/10 inline-block px-3 py-1 mb-4 uppercase`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="py-4 lg:py-24 bg-background-light" id="faq">
        <div className="w-full lg:max-w-7xl mx-auto lg:px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            <div>
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">
                Project Lifecycle FAQ
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue mt-6 font-serif leading-tight">
                Everything you need to know before we start
              </h2>
              <p className="text-slate-600 mt-8 text-lg leading-relaxed">
                We believe in radical transparency. Our process is designed
                to eliminate ambiguity and build confidence at every
                milestone.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                open
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    1.What happens after I share my idea? How do you get
                    started?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  <strong></strong> We begin with 
                  <strong> discovery</strong> understanding your
                  <strong> goals, users</strong> and
                  <strong> constraints</strong>. Then we move into
                  <strong> detailed planning</strong> where we define
                  <strong> features, technical approach</strong> and
                  <strong> milestones.</strong>

                  This ensures everyone is <strong>aligned</strong> before
                  any design or development begins — and prevents
                  <strong>scope creep</strong> later.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    2. When do I see designs? Can I review before
                    development?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  Yes. Once strategy is approved, we create
                  <strong> high-fidelity UI/UX prototypes </strong> that you
                  can <strong> review and interact </strong> with before
                  development begins. Nothing moves into development until
                  you’re
                  <strong>comfortable with the design direction.</strong>
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    3. When does development actually start?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  Development begins only after
                  <strong></strong> design approval. Our engineers review the
                  finalized designs to confirm
                  <strong> performance, scalability</strong> and
                  <strong> technical feasibility</strong> before writing
                  <strong> production code</strong>. This avoids
                  <strong> rework</strong> and <strong>surprises</strong>.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    4. How long does a typical project take?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  Most projects fall between <strong> 2–8 weeks</strong>,
                  depending on scope. Smaller MVPs usually take around
                  <strong> 6 - 8 weeks</strong> . Larger systems may take
                  longer. Before starting, you receive a
                  <strong> clear roadmap</strong> so timelines are never
                  ambiguous.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    5. What exactly do I receive at each stage?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  You get real <strong> deliverables</strong> at every step:
                  <ul>
                    <li>
                      Discovery → <strong> requirements & direction</strong>
                    </li>
                    <li>
                      Design → <strong> interactive prototypes</strong>
                    </li>
                    <li>Development → <strong> staging builds</strong></li>
                    <li>Testing → <strong> optimized product</strong></li>
                    <li>Launch →<strong> live system</strong></li>
                    <li></li>
                  </ul>
                  You always see <strong> progress</strong> — not just status
                  updates.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    6. How involved do I need to be during the process?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  You’re involved through
                  <strong> scheduled demos</strong> and
                  <strong> weekly updates</strong>. We gather feedback at
                  <strong> key milestones</strong> without overwhelming you
                  with daily technical decisions. You stay in
                  <strong> control</strong> without micromanaging.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    7. What if I want changes midway through?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  Changes are handled <strong> transparently</strong>. We
                  explain how each change affects
                  <strong> timeline and budget</strong> before proceeding so
                  you always make informed decisions. No hidden
                  <strong> surprises</strong>.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    8. How do you ensure quality before launch?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  Every project goes through a
                  <strong> dedicated QA phase</strong>. We test
                  <strong> functionality, performance, security</strong> and
                  <strong> responsiveness</strong> across devices before
                  deployment. Your product doesn’t go live
                  <strong> unfinished</strong>.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    9. What happens after launch? Do you disappear?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  <strong> No.</strong>
                  <br />

                  We provide <strong> post-launch support</strong>, fixes and
                  improvements. We monitor
                  <strong> real-world usage</strong> and help stabilize the
                  system as users come onboard. Launch is the beginning —
                  not the end.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    10. What if my idea isn’t fully clear yet?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  That’s normal.
                  <br />

                  Many projects start as <strong> rough concepts</strong>.
                  Our discovery process helps turn unclear ideas into
                  <strong> structured product plans</strong>. You don’t need
                  everything figured out on <strong> day one</strong>.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    11. How does this process protect my investment?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  Each phase <strong> validates</strong> the previous one.
                  This reduces <strong> wasted development</strong>, catches
                  problems <strong> early</strong> and ensures you build the
                  <strong> right product</strong> not just any product.
                </div>
              </details>
              <details
                className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                >
                  <h4 className="font-bold text-brand-blue lg:text-lg text-sm">
                    12. Why does this process work?
                  </h4>
                  <span
                    className="material-symbols-outlined text-brand-gold transition-transform duration-300 toggle-icon"
                  >expand_more</span>
                </summary>
                <div
                  className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
                >
                  Because it removes<strong> guesswork</strong>.

                  <strong> Structured planning, early validation, clear
                    milestones</strong>
                  and <strong> continuous feedback</strong> dramatically
                  reduce <strong> risk</strong> and increase
                  <strong> ROI</strong>.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 lg:py-20">
        <div className="w-full lg:max-w-7xl mx-auto px-2 lg:px-12">
          <div className="bg-primary rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-md md:text-3xl lg:text-5xl font-extrabold text-white mb-8 lg:mb-12 leading-tight">
                Ready to Scale Your Technology?
              </h2>
              <Link
                href="/contact"
                className="bg-brand-gold text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-xs md:text-lg md:text-xl hover:bg-white hover:scale-105 hover:text-primary transition-all duration-300"
              >
                Let's Talk Strategy
              </Link>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0 100 C 20 0 50 0 100 100" fill="transparent" stroke="white"></path>
                <path d="M0 80 C 30 20 60 20 100 80" fill="transparent" stroke="white"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}