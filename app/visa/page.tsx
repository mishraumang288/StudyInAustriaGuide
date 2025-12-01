import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { ExternalLink } from "lucide-react"
import { visaMetadata } from "@/lib/metadata"

export const metadata = visaMetadata

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: "Study Visa", url: "/visa" }
      ]} />
      <SiteNav currentPage="visa" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={[{ label: "Study Visa" }]} />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Austrian Study Visa & Residence Permit Guide</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Complete step-by-step breakdown for Indian students: from apostilling documents and securing university admission
          to embassy appointment, Visa-D application at VFS, travel and mandatory post-arrival tasks in Austria.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="apostille" className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <span className="text-lg font-semibold">Apostille & University Application</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Start by validating your academic documents and applying to Austrian universities.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Apostille degree + transcripts via MEA (outsourcing agents or direct)</li>
                  <li>Research programs (English-taught & deadlines)</li>
                  <li>Submit applications & obtain official admission letter</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="embassy-email" className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <span className="text-lg font-semibold">Embassy Email & Appointment</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Request a residence permit submission slot at the Austrian Embassy (New Delhi).</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: NEW-DELHI-KA@bmeia.gv.at</li>
                  <li>Include: Name, DOB, Passport No., intended course & university</li>
                  <li>Attach: Admission letter + passport (first & last page)</li>
                  <li>Respond promptly with preferred dates when they propose options</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="documents" className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <span className="text-lg font-semibold">Document Preparation</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Compile residence permit documents exactly per OEAD checklist.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Financial proof (blocked account / scholarship / savings)</li>
                  <li>Health insurance (temporary travel insurance acceptable initially)</li>
                  <li>Accommodation proof (booking / dorm confirmation)</li>
                  <li>Passport photos (biometric, Austrian spec)</li>
                  <li>Apostilled academic documents & translations if needed</li>
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
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <span className="text-lg font-semibold">Embassy Submission</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Attend your scheduled appointment with complete originals + copies.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Arrive early; security + verification</li>
                  <li>Submit RP application form (sent by embassy or downloadable)</li>
                  <li>Pay fee (~€180 equivalent in INR)</li>
                  <li>Receive acknowledgement / reference number</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rp-approval" className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <span className="text-lg font-semibold">RP Approval & Visa-D Permission</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Monitor email for dual-stage confirmation.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email 1: Residence Permit approved</li>
                  <li>Email 2: Authorisation to apply for Visa-D (travel entry)</li>
                  <li>Gather visa-specific docs (photos, insurance, passport)</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vfs" className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                <span className="text-lg font-semibold">Visa-D at VFS</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Submit Visa-D (long stay) application enabling travel to Austria.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Walk-in or appointment (city dependent)</li>
                  <li>Pay ~€140 (INR approximation varies with FX)</li>
                  <li>Provide biometrics if requested</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="travel" className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
                <span className="text-lg font-semibold">Travel & Arrival</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Prepare for entry and initial administrative tasks.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Book flights (flexible fare recommended)</li>
                  <li>Carry document folder (copies + originals)</li>
                  <li>Pre-arrange temporary accommodation if long-term not ready</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="arrival-tasks" className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</div>
                <span className="text-lg font-semibold">Post-Arrival Tasks</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-4 text-muted-foreground">
                <p>Mandatory and recommended tasks within first weeks.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Meldezettel (city registration) within 3 days</li>
                  <li>University enrollment & student ID pickup</li>
                  <li>Open Austrian bank account (Erste / Bank Austria)</li>
                  <li>ÖGK public health insurance activation / switch from travel</li>
                  <li>Collect physical RP card at Magistrate (bring originals)</li>
                </ul>
                <p className="text-sm italic">Keep all documents organized; they will be needed for renewals.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
