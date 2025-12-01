"use client"

import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show after 3 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // Check if user previously dismissed
    const dismissed = localStorage.getItem("whatsapp-float-dismissed")
    if (dismissed) {
      setIsDismissed(true)
    }

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem("whatsapp-float-dismissed", "true")
  }

  if (isDismissed || !isVisible) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Join WhatsApp Community"
      >
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Main button */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110">
            <MessageCircle className="h-7 w-7" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
              Join 1000+ Students
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              handleDismiss()
            }}
            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-colors duration-200"
            aria-label="Dismiss WhatsApp button"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </a>

      {/* Mobile-optimized tooltip banner (shows on small screens) */}
      <div className="fixed bottom-24 left-4 right-4 z-40 md:hidden">
        <div className="bg-green-500 text-white rounded-lg p-3 shadow-xl animate-slide-up">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <MessageCircle className="h-5 w-5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold">Join Our Community</p>
                <p className="text-xs opacity-90">1000+ Indian students in Austria</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  )
}
