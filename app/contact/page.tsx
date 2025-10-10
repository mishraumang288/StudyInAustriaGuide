import { GraduationCap, Mail, MessageCircle, Instagram, Linkedin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl text-foreground">Study Austria</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/contact" className="text-foreground font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Have questions about studying in Austria? We're here to help! Connect with us through any of these channels.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>WhatsApp Community</CardTitle>
              <CardDescription>Join our active community of Indian students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Get instant answers from fellow students and stay updated with the latest information.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI" target="_blank" rel="noopener noreferrer">
                    Join Main Group
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <a href="https://chat.whatsapp.com/EQemXIsKUtQBw9xBK7ut5p" target="_blank" rel="noopener noreferrer">
                    Join Secondary Group
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Instagram className="h-8 w-8 text-pink-600 mb-2" />
              <CardTitle>Instagram</CardTitle>
              <CardDescription>Follow for updates and tips</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Get daily tips, updates, and connect with Umang directly on Instagram.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a
                  href="https://www.instagram.com/umang_miishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  @umang_miishra
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Linkedin className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>LinkedIn</CardTitle>
              <CardDescription>Professional networking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Connect professionally and stay updated with career opportunities in Austria.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a
                  href="https://www.linkedin.com/in/umang-mishra2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Umang Mishra
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Email</CardTitle>
              <CardDescription>For detailed inquiries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                For detailed questions or collaboration opportunities, reach out via email.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="mailto:mishraumang288@gmail.com" className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  mishraumang288@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">How quickly can I expect a response?</h3>
              <p className="text-muted-foreground">
                WhatsApp community responses are usually instant. For email inquiries, we typically respond within 24-48
                hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Is this service free?</h3>
              <p className="text-muted-foreground">
                Yes! All our resources, guides, and community support are completely free. We're students helping
                students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Can you help with visa applications?</h3>
              <p className="text-muted-foreground">
                We provide comprehensive guides and community support, but we don't offer paid consultation services.
                Our community members share their experiences and help each other.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Do you offer accommodation booking services?</h3>
              <p className="text-muted-foreground">
                We provide a comprehensive list of housing platforms and student dorms, but we don't book accommodation
                directly. All bookings are done through the official platforms we recommend.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-6">
            Join hundreds of Indian students who have successfully made Austria their study destination.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="/">Explore Our Guide</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
