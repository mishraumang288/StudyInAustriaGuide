import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Complete Austrian Student Visa Timeline (Coming Soon) | Study Austria Blog",
  description:
    "Detailed month-by-month Austrian student visa application timeline. Article coming soon – will cover submission, embassy communication, delays, and approval tips.",
  keywords: [
    "Austrian student visa timeline",
    "Austria visa application months",
    "Visa D process Austria",
    "residence permit student Austria",
  ],
  openGraph: {
    title: "Austrian Student Visa Timeline (Coming Soon)",
    description: "Month-by-month breakdown coming soon. Stay tuned.",
    type: "article",
  },
}

export default function VisaApplicationTimelineStub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: "Visa Application Timeline" }
        ]} />
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="bg-red-100 dark:bg-red-950 text-red-600 px-3 py-1 rounded-md font-medium">Visa Guide</span>
            <span>•</span>
            <Calendar className="h-4 w-4" /> <span>Coming Soon</span>
            <span>•</span>
            <Clock className="h-4 w-4" /> <span>—</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Complete Austrian Student Visa Timeline</h1>
          <p className="text-lg text-muted-foreground">This article is being written. It will include a real chronological breakdown with dates, delays, and actionable checkpoints.</p>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 border border-border rounded-lg p-6">
            <h2 className="font-semibold mb-2">Coming Soon</h2>
            <p className="text-muted-foreground mb-2">Planned sections:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
              <li>Document preparation + sequencing</li>
              <li>Submission → silence phase management</li>
              <li>Embassy email patterns & response templates</li>
              <li>Financial proof timing strategy</li>
              <li>Common delay reasons & prevention checklist</li>
              <li>Appeal vs clarification decision path</li>
            </ul>
            <p className="text-muted-foreground mt-4 text-sm">Need this urgently? Reach out via the contact page and we can prioritize.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
