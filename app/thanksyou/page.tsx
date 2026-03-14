'use client'

import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-success-gradient pointer-events-none"></div>
      <div className="max-w-[640px] w-full bg-white border border-gray-100 rounded-xl shadow-2xl p-8 md:p-16 flex flex-col items-center text-center z-10">
        <div className="mb-8 flex items-center justify-center size-20 rounded-full bg-primary/10 border-2 border-primary/30">
          <span className="material-symbols-outlined text-primary text-5xl font-bold">
            check_circle
          </span>
        </div>
        <div className="mb-2">
          <h4 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
            Message Sent
          </h4>
        </div>
        <h1 className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight pb-4">
          Thanks for reaching out.
        </h1>
        <p className="text-gray-600 text-lg font-normal leading-relaxed mb-10 max-w-md">
          We’ve received your message and will get back to you within 1 business day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/"
            className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border-2 border-[#483e23] text-gray-900 gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span className="truncate">Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  )
}