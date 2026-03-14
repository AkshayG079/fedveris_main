'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const validationErrors = validate();
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     router.push("/thanksyou");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      try {

        // await emailjs.send(
        //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        //   {
        //     name: form.name,
        //     email: form.email,
        //     company: form.company,
        //     message: form.message,
        //   },
        //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        // );

        toast.success("Message sent successfully!");

        router.push("/thanksyou");

      } catch (error) {

        toast.error("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <div className="mx-auto max-w-[1440px] w-full px-4 lg:px-16 py-4 lg:py-6">
      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="font-serif text-primary text-5xl md:text-6xl font-black leading-tight mb-14">
          Let’s discuss your project
        </h1>
        <p className="text-lg sm:text-xs md:text-xl text-gray-600 font-normal leading-relaxed">
          Tell us what you’re building.
          <span className="text-primary font-semibold underline decoration-brand-gold/50">
            No sales pressure
          </span>, just a focused conversation about your business goals.
        </p>
        <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed">
          We work directly with founders and teams, so you’ll always speak
          with the people actually involved in your project.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full my-32">
        {/* Left: Process */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2 mb-10">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-lg">Our Process</span>
            <h2 className="text-primary text-3xl font-bold font-serif">Here’s how it works</h2>
          </div>

          <div className="space-y-8">
            {[
              { icon: 'send', title: 'Reach out', desc: 'Send us a message using the form below or email us directly. Share whatever you know so far — goals, scope, timeline, or budget. If things aren’t fully defined yet, that’s completely fine. We’ll help you clarify them.' },
              { icon: 'quickreply', title: 'You hear back quickly', desc: 'We’ll review your message and one of our project managers will get back to you within 24 hours. You’ll speak directly with the person who evaluates and manages your project — not a sales representative. This keeps communication clear and avoids information loss.' },
              { icon: 'description', title: 'Clear proposal', desc: 'After an introductory call, we’ll send you a detailed proposal outlining scope, timeline, and cost. Once you’re comfortable and approve it, we begin work immediately.' }
            ].map((step, idx) => (
              <div key={idx} className="grid grid-cols-[60px_1fr] gap-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center text-brand-gold bg-white shadow-sm">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  {idx < 2 && <div className="w-0.5 bg-brand-gold/20 h-36 my-2"></div>}
                </div>
                <div className="pt-2">
                  <h3 className="text-primary text-lg font-bold">{step.title}</h3>
                  <p className="text-gray-500 text-sm pt-2 leading-relaxed tracking-wide">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-2xl border border-gray-100 relative">
            <h2 className="text-2xl font-bold mb-8 text-primary">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full h-14 px-4 rounded-lg border 
  ${errors.name
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                        : "border-gray-200 focus:ring-primary focus:border-primary"
                      } 
  bg-gray-50 text-[#121118]  outline-none transition-all`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full h-14 px-4 rounded-lg border 
  ${errors.email
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                        : "border-gray-200 focus:ring-primary focus:border-primary"
                      } 
  bg-gray-50 text-[#121118]  outline-none transition-all`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Company Name</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full h-14 px-4 rounded-lg border border-gray-200 bg-gray-50 text-[#121118]  focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400"
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">How can we help?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project goals and timeline..."
                  // className="w-full p-4 rounded-lg bg-background-light border-transparent focus:border-brand-gold  transition-all placeholder:text-gray-400"
                  className={`w-full p-4 rounded-lg border 
  ${errors.message
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                      : "border-gray-200 focus:ring-primary focus:border-primary"
                    } 
  bg-gray-50 text-[#121118]  outline-none transition-all`}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              {/* 
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Project Brief (Optional)</label>
                <div className="w-full border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center hover:border-brand-gold/50 transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-brand-gold mb-2">upload_file</span>
                  <span className="text-sm text-gray-500">
                    Drop files here or <span className="text-brand-gold font-bold">browse</span>
                  </span>
                  <span className="text-xs text-gray-400 mt-1">PDF, DOCX up to 10MB • Secure Upload</span>
                </div>
              </div> */}

              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-opacity-90 text-primary font-black text-lg h-14 rounded-full shadow-lg transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <span className="material-symbols-outlined text-brand-gold text-lg">verified</span>
              <span>Expect a response within 1 business day.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 w-full mt-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-black text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Everything you need to know before we start.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What is your typical project timeline?', a: 'Most MVPs take between 8 to 12 weeks. Complex enterprise systems can take 4-6 months depending on the scope and integrations required.' },
              { q: 'Do you offer fixed-price or hourly billing?', a: 'We prefer fixed-price contracts for clearly defined scopes to provide you with budget certainty. For evolving projects, we offer flexible monthly retainers.' },
              { q: 'Which technologies do you specialize in?', a: 'Our core stack includes React, Node.js, Python, and AWS. We choose the best tool for your specific problem, ensuring scalability and maintainability.' },
              { q: 'Will I own the source code?', a: 'Absolutely. Upon final payment, you own 100% of the intellectual property and source code. No vendor lock-in, ever.' },
              { q: 'How involved will I need to be?', a: 'We practice agile development. This means a weekly 30-minute sync to review progress and gather feedback, keeping the project aligned with your vision.' },
              { q: 'Do you provide post-launch support?', a: 'Yes, we offer ongoing maintenance and support packages to ensure your software stays secure, updated, and bug-free as your user base grows.' }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 py-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h4 className="text-lg font-bold">{faq.q}</h4>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="mt-4 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}