import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learning German from A1 to B1 While Studying (Coming Soon) | Study Austria Blog",
  description:
    "Upcoming guide on balancing university studies with German progress: resource stack, spaced repetition, immersion tactics, and milestone tracking.",
  keywords: ["learn German Austria", "A1 to B1 journey", "German student tips", "language learning Vienna"],
  openGraph: {
    title: "German Learning Journey (Coming Soon)",
    description: "Resource stack & habit system for sustainable progress.",
    type: "article",
  },
}

export default function GermanLanguageLearningStub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: "German Language Learning" }
        ]} />
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="bg-red-100 dark:bg-red-950 text-red-600 px-3 py-1 rounded-md font-medium">Language & Culture</span>
            <span>•</span>
            <Calendar className="h-4 w-4" /> <span>Coming Soon</span>
            <span>•</span>
            <Clock className="h-4 w-4" /> <span>—</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Learning German While Studying: My 6-Month Journey from A1 to B1</h1>
          <p className="text-lg text-muted-foreground">Full breakdown in progress—course selection, daily micro-habits, Anki deck strategy, and immersion leverage from part-time work.</p>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 border border-border rounded-lg p-6">
            <h2 className="font-semibold mb-2">Coming Soon</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
              <li>Weekly milestone tracking template</li>
              <li>Pronunciation + listening pairing method</li>
              <li>Flashcard batching vs cramming</li>
              <li>Restaurant job as practice loop</li>
              <li>Plateau handling strategy</li>
              <li>Exam preparation sequence</li>
            </ul>
            <p className="text-muted-foreground mt-4 text-sm">Want early access? Reach out via contact page.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
