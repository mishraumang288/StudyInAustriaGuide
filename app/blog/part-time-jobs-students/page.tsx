import SiteNav from "@/components/site-nav"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finding Your First Part-Time Job in Austria (Coming Soon) | Study Austria Blog",
  description:
    "Guide coming soon: student job search strategies, CV customization for Austrian employers, legal work hour limits, and interview prep.",
  keywords: ["Austria part-time student job", "student work Vienna", "Austrian CV tips", "international student job"],
  openGraph: {
    title: "Student Part-Time Job Guide (Coming Soon)",
    description: "Restaurant, retail, campus roles: how to get hired without advanced German.",
    type: "article",
  },
}

export default function PartTimeJobsStudentsStub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="bg-red-100 dark:bg-red-950 text-red-600 px-3 py-1 rounded-md font-medium">Work & Finance</span>
            <span>•</span>
            <Calendar className="h-4 w-4" /> <span>Coming Soon</span>
            <span>•</span>
            <Clock className="h-4 w-4" /> <span>—</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Landing Your First Part-Time Job as an International Student</h1>
          <p className="text-lg text-muted-foreground">Full actionable guide in progress—will include CV structure, walk-in etiquette, follow-up timing, and German learning prioritization.</p>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 border border-border rounded-lg p-6">
            <h2 className="font-semibold mb-2">Coming Soon</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
              <li>Restaurant vs retail vs campus roles</li>
              <li>Weekly application batching system</li>
              <li>Minimal German phrase set for interviews</li>
              <li>Legal working hours & insurance notes</li>
              <li>Follow-up message template</li>
              <li>How to track applications efficiently</li>
            </ul>
            <p className="text-muted-foreground mt-4 text-sm">Need job help now? Contact us directly.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
