import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, GraduationCap, Home, FileText, MessageCircle, Instagram, Linkedin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl text-foreground">Study Austria</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                Process
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Complete Guide to
            <span className="text-red-600 block">Studying in Austria</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A comprehensive guide for Indian students. Get step-by-step guidance on applications and visa in Austria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700">
              Get Started
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join WhatsApp Community
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Join Our Indian Students WhatsApp Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {"Connect with fellow Indian students and get real-time support throughout your Austria journey. "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Main Group
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <a href="https://chat.whatsapp.com/EQemXIsKUtQBw9xBK7ut5p" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Secondary Group
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Essential Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Find Your Program</CardTitle>
                <CardDescription>Search for programs in Austrian universities</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="https://studienwahl.at/en" target="_blank" rel="noopener noreferrer">
                    Browse Programs
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Residence Permit Checklist</CardTitle>
                <CardDescription>Updated document checklist for RP application</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a
                    href="https://docs.google.com/document/d/1YWANPgzAqGdk4CaQAwDmBtjl3hkeayL2/edit?usp=drivesdk&ouid=100317896469215815070&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Checklist
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>OEAD Requirements</CardTitle>
                <CardDescription>Official residence permit requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a
                    href="https://oead.at/en/to-austria/entry-and-residence/residence-permit-student-no-mobility-programme/#checklists"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Requirements
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Summaries */}
      <section id="process" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Study Visa Process Summary</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="apostille" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="text-lg font-semibold">Apostille & University Application</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>First step: Get your documents apostilled and apply to universities.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Apostille your degree and transcripts from Ministry of External Affairs (MEA)</li>
                    <li>Apply to your desired courses</li>
                    <li>Get an admission letter from a university</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="embassy-email" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="text-lg font-semibold">Embassy Email & Appointment</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>Contact the Austrian Embassy for residence permit appointment.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Send email to NEW-DELHI-KA@bmeia.gv.at</li>
                    <li>Include: name, DOB, passport number</li>
                    <li>Attach admission letter and passport pages (first & last)</li>
                    <li>Request residence permit appointment</li>
                    <li>Reply with preferred date when they respond</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="documents" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="text-lg font-semibold">Document Preparation</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>Prepare all required documents as per OEAD checklist.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Follow the complete document list from OEAD</li>
                    <li>Ensure all documents are properly apostilled</li>
                    <li>Get financial proof documents ready</li>
                  </ul>
                  <div className="flex gap-2 pt-2">
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://oead.at/en/to-austria/entry-and-residence/residence-permit-student-no-mobility-programme/#checklists"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OEAD Checklist
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="embassy-visit" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <span className="text-lg font-semibold">Embassy Visit</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>Visit Austrian Embassy in Delhi for document submission.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Go to Austrian Embassy in Delhi on appointment date</li>
                    <li>Submit all documents including application form (received via email)</li>
                    <li>Pay equivalent of 180 euros in Indian rupees</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rp-approval" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <span className="text-lg font-semibold">RP Approval & Visa-D</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>Wait for residence permit approval and visa application permission.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Wait for email mentioning "RP approved"</li>
                    <li>Wait for follow-up email: "you can apply for a visa-D"</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vfs" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  <span className="text-lg font-semibold">VFS Application</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>Apply for visa at VFS center.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Walk-in or take appointment at nearest VFS</li>
                    <li>Submit documents (list mentioned in embassy email)</li>
                    <li>Fill application form</li>
                    <li>Pay 140€ or ~₹16,700</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="travel" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    7
                  </div>
                  <span className="text-lg font-semibold">Travel to Austria</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>Once visa is stamped, you can travel to Austria.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Wait for passport with visa stamp</li>
                    <li>Book flight to Austria</li>
                    <li>Enroll at the university upon arrival</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="arrival-tasks" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    8
                  </div>
                  <span className="text-lg font-semibold">After Arrival in Austria</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4 text-muted-foreground">
                  <p>Essential tasks to complete after reaching Austria.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email prospective Magistrate for RP card collection in advance</li>
                    <li>
                      <strong>Meldezettel</strong> (City registration) - within 3 days
                    </li>
                    <li>
                      <strong>University Enrollment</strong>
                    </li>
                    <li>
                      <strong>Open Austrian Bank account</strong> in Erste or Bank Austria
                    </li>
                    <li>
                      <strong>ÖGK Insurance</strong>
                    </li>
                  </ul>
                  <p className="text-sm italic">
                    Note: Take all above documents during RP card collection (except bank account docs)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#process" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Visa Process
                </a>
                <a href="#community" className="block text-muted-foreground hover:text-foreground transition-colors">
                  WhatsApp Community
                </a>
                <a
                  href="https://studienwahl.at/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Find Programs
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Community
                </a>
                <a
                  href="https://www.instagram.com/umang_miishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/umang-mishra2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              Developed by <strong>Umang Mishra</strong>, MSc CS student at Uni Wien
            </p>
            <p className="mt-2">© 2025 Study Austria Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
