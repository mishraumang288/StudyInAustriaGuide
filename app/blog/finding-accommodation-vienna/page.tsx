import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finding Affordable Accommodation in Vienna (Coming Soon) | Study Austria Blog",
  description:
    "Strategies to secure student housing in Vienna within weeks: platforms, timing, application messages, and red flags. Full article coming soon.",
  keywords: ["Vienna student accommodation", "find housing Vienna", "WG Vienna tips", "affordable housing Austria"],
  openGraph: {
    title: "Finding Accommodation in Vienna (Coming Soon)",
    description: "Guide coming soon: platforms, strategies, red flags, budgeting.",
    type: "article",
  },
}

export default function FindingAccommodationViennaStub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: "Finding Accommodation in Vienna" }
        ]} />
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="bg-red-100 dark:bg-red-950 text-red-600 px-3 py-1 rounded-md font-medium">Accommodation</span>
            <span>•</span>
            <Calendar className="h-4 w-4" /> <span>Coming Soon</span>
            <span>•</span>
            <Clock className="h-4 w-4" /> <span>—</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">How I Found Affordable Accommodation in Vienna Within 2 Weeks</h1>
          <p className="text-lg text-muted-foreground">Full story and tactics are being drafted. This will include outreach templates, timing windows, and budget tracking methods.</p>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 border border-border rounded-lg p-6">
            <h2 className="font-semibold mb-2">Coming Soon</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
              <li>Daily search schedule & platform rotation</li>
              <li>Best hours to message landlords</li>
              <li>Sample introduction messages</li>
              <li>Scam detection checklist</li>
              <li>Dorm vs shared flat decision factors</li>
              <li>Budget spreadsheet starter</li>
            </ul>
            <p className="text-muted-foreground mt-4 text-sm">Want this faster? Ping us via contact form.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
