"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteNav from "@/components/site-nav"
import Image from "next/image"
import {
  ExternalLink,
  Home,
  FileText,
  MessageCircle,
  Instagram,
  Linkedin,
  Building2,
  MapPin,
} from "lucide-react"



export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav currentPage="home" />

      {/* Hero Section with Static Background */}
      <section className="relative min-h-[450px] sm:h-[550px] -mt-16 pt-16 flex items-center justify-center overflow-hidden">
        {/* Static TU Graz Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/universities/tu_graz.jpg"
            alt="TU Graz"
            fill
            style={{ objectFit: "cover" }}
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Your Complete Guide to
            <span className="text-red-500 block">Studying in Austria</span>
          </h1>
          <p className="text-base sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            A comprehensive guide for Indian students. Get step-by-step guidance on applications and visa in Austria.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-red-600 hover:bg-red-700 shadow-lg">
              <a href="#process">
                Get Started
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-white text-white hover:bg-white hover:text-red-600 bg-white/10 backdrop-blur-sm shadow-lg"
            >
              <a href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                <span className="whitespace-nowrap">Join WhatsApp Community</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Join Our Indian Students WhatsApp Community</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
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

      {/* Study Visa CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Study Visa Process</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Access the full, step-by-step Austrian student residence permit (RP) and Visa-D guide including document
            preparation, embassy appointment, VFS submission and post-arrival tasks.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="/visa">Open Full Visa Guide</a>
          </Button>
        </div>
      </section>

      {/* Living in Austria CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Living in Austria</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover everything about living in Austria as an international student including cost of living, university system, accommodation options, and practical tips.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="/living">Explore Living Guide</a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Quick answers to common questions about studying in Austria
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How long does the visa process take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The entire visa process typically takes 3-6 months from submission to receiving your Visa-D. Embassy appointments 
                can take 2-4 weeks to schedule, and the residence permit processing time is usually 8-12 weeks. We recommend 
                starting your application at least 6 months before your intended travel date.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What is the minimum bank balance required?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                For the residence permit application, you need to show proof of funds covering at least €12,000 per year 
                (approximately €1,000 per month) through a blocked bank account in Austria. This can be opened with banks like 
                Erste Bank, Bank Austria, or specialized services like Expatrio. Some students also use scholarship letters 
                or parental income proof as alternatives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do I need to know German to study in Austria?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                It depends on your program. Many Master's programs, especially in technical fields, are offered entirely in 
                English and don't require German proficiency for admission. However, learning German is highly recommended for 
                daily life, part-time jobs, and integration. Most universities offer free or low-cost German courses for 
                international students. For Bachelor's programs, German proficiency (usually B2 or C1 level) is typically required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How much does it cost to live in Austria as a student?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Monthly living costs typically range from €800-€1,200 depending on your city and lifestyle. Vienna is more 
                expensive (€900-€1,200), while cities like Graz or Innsbruck are slightly cheaper (€800-€1,000). This includes 
                rent (€350-€600), food (€200-€300), transport (€20 with student discount), health insurance (€65), and personal 
                expenses. Students can work part-time (20 hours/week during semester, full-time during breaks) to offset costs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can I work while studying in Austria?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! International students from non-EU countries can work up to 20 hours per week during the semester and 
                full-time during semester breaks (summer and winter holidays). The average student job pays €12-€15 per hour. 
                Common student jobs include working in cafes, supermarkets, libraries, or as research assistants at universities. 
                You don't need a separate work permit—your residence permit for studies allows this.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                When should I start looking for accommodation?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Start looking 2-3 months before your arrival. The Austrian housing market, especially in Vienna, is competitive. 
                Apply to student dorms (OEAD Student Housing, Home4Students, STUWO) as soon as you receive your admission letter. 
                For private accommodation, check platforms like WG-gesucht, HousingAnywhere, and Willhaben 1-2 months before 
                arrival. Many students initially book temporary accommodation (Airbnb, hostels) for the first 2-4 weeks while 
                they search for permanent housing on the ground.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Are there tuition fees for public universities?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Austrian and EU/EEA students pay no tuition fees at public universities (just €21.20 per semester for student 
                union fees). Non-EU international students pay approximately €1,500 per year (€726.72 per semester) plus the 
                student union fee. This is significantly lower than most other European countries. Some Fachhochschulen (Universities 
                of Applied Sciences) charge higher fees (€363-€400 per semester for all students).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What documents do I need for the visa application?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Key documents include: (1) Valid passport (minimum 6 months validity), (2) University admission letter, 
                (3) Completed residence permit application form, (4) Proof of financial means (blocked account with €12,000 or 
                equivalent), (5) Health insurance coverage (minimum €30,000), (6) Proof of accommodation in Austria, 
                (7) Birth certificate, (8) Academic transcripts and certificates, (9) Passport photos, (10) Police clearance 
                certificate. All documents must be original or certified copies, and translated to German if not in English or German. 
                Check our detailed visa guide for the complete checklist and step-by-step instructions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
