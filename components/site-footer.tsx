import { GraduationCap, Mail, ExternalLink } from "lucide-react"

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="h-6 w-6 text-red-600" />
              <span className="font-extrabold text-lg text-foreground">Study Austria</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive guide to studying in Austria. We help international students navigate the visa process, find universities, and settle in Austria.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="/contact" className="hover:text-red-600 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/visa" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Study Visa
                </a>
              </li>
              <li>
                <a href="/living" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Living in Austria
                </a>
              </li>
              <li>
                <a href="/universities" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Universities
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-red-600 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://studienwahl.at/en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-red-600 transition-colors inline-flex items-center gap-1"
                >
                  Find Programs
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://oead.at/en/to-austria/entry-and-residence/residence-permit-student-no-mobility-programme/#checklists" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-red-600 transition-colors inline-flex items-center gap-1"
                >
                  OEAD Info
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-red-600 transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp Community
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Trusted by students:</strong> Helping hundreds of international students pursue their dreams of studying in Austria.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <p>
              © {currentYear} Study Austria Guide. All rights reserved.
            </p>
            <p className="text-xs">
              Made with ❤️ for international students
            </p>
          </div>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            <p>
              Developed by <strong className="text-foreground">Umang Mishra</strong>, MSc CS student at University of Vienna
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
