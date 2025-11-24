"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { GraduationCap, Search, Menu, X } from "lucide-react"

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
}

const searchItems: SearchItem[] = [
  // Home page
  { title: "Home", description: "Main landing page", href: "/", category: "Pages" },
  { title: "Get Started", description: "Begin your Austria journey", href: "/#process", category: "Quick Links" },
  { title: "WhatsApp Community", description: "Join Indian students group", href: "https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI", category: "Community" },
  
  // Visa page
  { title: "Study Visa", description: "Complete visa process guide", href: "/visa", category: "Pages" },
  { title: "Residence Permit", description: "RP application checklist", href: "/visa#residence-permit", category: "Visa" },
  { title: "Embassy Appointment", description: "Book embassy appointment", href: "/visa#embassy", category: "Visa" },
  
  // Living page
  { title: "Living in Austria", description: "Cost, lifestyle, and tips", href: "/living", category: "Pages" },
  { title: "Cost of Living", description: "Monthly expenses breakdown", href: "/living#cost", category: "Living" },
  { title: "Accommodation", description: "Housing platforms and dorms", href: "/living#accommodation", category: "Living" },
  { title: "University System", description: "Public vs FH universities", href: "/living#universities", category: "Living" },
  
  // Resources
  { title: "Find Programs", description: "Search Austrian study programs", href: "https://studienwahl.at/en", category: "Resources" },
  { title: "OEAD Requirements", description: "Official residence permit info", href: "https://oead.at/en/to-austria/entry-and-residence/residence-permit-student-no-mobility-programme/#checklists", category: "Resources" },
  { title: "RP Checklist Document", description: "Updated document checklist", href: "https://docs.google.com/document/d/1YWANPgzAqGdk4CaQAwDmBtjl3hkeayL2/edit?usp=drivesdk&ouid=100317896469215815070&rtpof=true&sd=true", category: "Resources" },
  
  // Other pages
  { title: "About", description: "About this guide", href: "/about", category: "Pages" },
  { title: "Contact", description: "Get in touch", href: "/contact", category: "Pages" },
  { title: "Privacy Policy", description: "Privacy information", href: "/privacy", category: "Legal" },
  { title: "Terms of Service", description: "Terms and conditions", href: "/terms", category: "Legal" },
  
  // Housing platforms
  { title: "WG-gesucht", description: "Flat shares platform", href: "https://www.wg-gesucht.de", category: "Housing" },
  { title: "HousingAnywhere", description: "International student housing", href: "https://housinganywhere.com", category: "Housing" },
  { title: "Willhaben", description: "Austrian classifieds", href: "https://www.willhaben.at", category: "Housing" },
  { title: "OeAD Student Housing", description: "Official student housing", href: "https://oeadstudenthousing.at", category: "Housing" },
  { title: "Home4students", description: "Student dorms", href: "https://home4students.at", category: "Housing" },
  { title: "STUWO", description: "Modern student residences", href: "https://stuwo.at", category: "Housing" },
  { title: "Universities in Austria", description: "List of all major Austrian universities with links", href: "/universities", category: "Pages" },
  { title: "Blog", description: "Student experiences and practical guides", href: "/blog", category: "Pages" },
]

export default function SiteNav({ currentPage = "" }: { currentPage?: string }) {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement
        if (searchInput) {
          searchInput.focus()
        }
        setOpen(true)
      }
      if (e.key === "Escape") {
        setOpen(false)
        setSearchQuery("")
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredItems = searchQuery
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchItems

  const handleSelect = (href: string) => {
    setOpen(false)
    setSearchQuery("")
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer")
    } else {
      router.push(href)
    }
  }

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, SearchItem[]>)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-sm supports-[backdrop-filter]:bg-background/75 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Row: Title, Nav Links, and Search */}
          <div className="flex items-center justify-between h-16 gap-8">
            {/* Title/Logo */}
            <a href="/" className="flex items-center gap-2.5 flex-shrink-0 group transition-all">
              <GraduationCap className="h-7 w-7 text-red-600 group-hover:text-red-700 transition-colors" />
              <span className="font-extrabold text-xl text-foreground group-hover:text-red-600 transition-colors">Study Austria</span>
            </a>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
              <a
                href="/visa"
                className={`${
                  currentPage === "visa" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                Study Visa
              </a>
              <a
                href="/living"
                className={`${
                  currentPage === "living" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                Living
              </a>
              <a
                href="/#resources"
                className={`${
                  currentPage === "resources" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                Resources
              </a>
              <a
                href="/#community"
                className={`${
                  currentPage === "community" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                Community
              </a>
              <a
                href="/universities"
                className={`${
                  currentPage === "universities" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                Universities
              </a>
              <a
                href="/blog"
                className={`${
                  currentPage === "blog" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                Blog
              </a>
              <a
                href="/about"
                className={`${
                  currentPage === "about" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                About
              </a>
              <a
                href="/contact"
                className={`${
                  currentPage === "contact" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                } transition-colors text-sm`}
              >
                Contact Us
              </a>
            </div>

            {/* Search Bar - Compact (Desktop) */}
            <div className="hidden md:block relative w-56 flex-shrink-0">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setOpen(true)}
                className="w-full pl-8 pr-14 py-2 text-sm bg-muted/50 hover:bg-muted focus:bg-muted rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-colors"
              />
              <kbd className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-6 select-none items-center justify-center gap-1 rounded-md border border-border bg-muted px-2 font-sans text-xs font-semibold text-muted-foreground shadow-sm">
                {/* <img src="/window_logo.png" alt="Windows" className="h-3 w-auto align-middle" /> */}
                <span className="leading-none">Ctrl +</span>
                <span className="leading-none">K</span>
              </kbd>
              
              {/* Search Results Dropdown */}
              {open && searchQuery && (
                <div className="absolute top-full mt-2 right-0 z-50 w-full">
                  <div className="bg-popover border border-border rounded-lg shadow-lg">
                    <div className="max-h-[400px] overflow-y-auto p-2">
                      {filteredItems.length === 0 ? (
                        <div className="py-6 text-center text-sm text-muted-foreground">No results found.</div>
                      ) : (
                        <div className="space-y-4">
                          {Object.entries(groupedItems).map(([category, items]) => (
                            <div key={category}>
                              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                                {category}
                              </div>
                              {items.map((item) => (
                                <button
                                  key={item.href}
                                  onClick={() => handleSelect(item.href)}
                                  className="w-full flex flex-col items-start px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                                >
                                  <span className="font-medium">{item.title}</span>
                                  <span className="text-xs text-muted-foreground">{item.description}</span>
                                </button>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-red-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/50 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="/visa"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "visa" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  Study Visa
                </a>
                <a
                  href="/living"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "living" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  Living
                </a>
                <a
                  href="/#resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "resources" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  Resources
                </a>
                <a
                  href="/#community"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "community" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  Community
                </a>
                <a
                  href="/universities"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "universities" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  Universities
                </a>
                <a
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "blog" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  Blog
                </a>
                <a
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "about" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  About
                </a>
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    currentPage === "contact" ? "text-red-600 font-bold" : "text-foreground font-semibold hover:text-red-600"
                  } transition-colors text-sm px-4`}
                >
                  Contact Us
                </a>
                
                {/* Search Bar - Mobile */}
                <div className="px-4 pt-2">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setOpen(true)}
                      className="w-full pl-8 pr-3 py-2 text-sm bg-muted/50 hover:bg-muted focus:bg-muted rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-colors"
                    />
                    
                    {/* Mobile Search Results Dropdown */}
                    {open && searchQuery && (
                      <div className="absolute top-full mt-2 left-0 right-0 z-50 w-full">
                        <div className="bg-popover border border-border rounded-lg shadow-lg">
                          <div className="max-h-[300px] overflow-y-auto p-2">
                            {filteredItems.length === 0 ? (
                              <div className="py-6 text-center text-sm text-muted-foreground">No results found.</div>
                            ) : (
                              <div className="space-y-4">
                                {Object.entries(groupedItems).map(([category, items]) => (
                                  <div key={category}>
                                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                                      {category}
                                    </div>
                                    {items.map((item) => (
                                      <button
                                        key={item.href}
                                        onClick={() => {
                                          handleSelect(item.href)
                                          setMobileMenuOpen(false)
                                        }}
                                        className="w-full flex flex-col items-start px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                                      >
                                        <span className="font-medium">{item.title}</span>
                                        <span className="text-xs text-muted-foreground">{item.description}</span>
                                      </button>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Background Overlay */}
      {open && searchQuery && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
