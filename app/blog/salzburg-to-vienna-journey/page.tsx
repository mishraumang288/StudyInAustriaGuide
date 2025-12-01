import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "From Salzburg to Vienna: Switching Universities, Learning German, and Finding My First Job | Study Austria Blog",
  description:
    "A real student journey: starting MSc Data Science in Salzburg, switching to MSc Computer Science in Vienna, navigating residence permit timelines, job hunting without German, and saving money as an international student.",
  keywords: [
    "Salzburg to Vienna",
    "switching universities Austria",
    "Austrian residence permit timeline",
    "student job Vienna",
    "learn German Austria",
    "save money Austria",
    "Hofer budget tips",
    "Bauernmarkt Vienna",
  ],
  openGraph: {
    title: "From Salzburg to Vienna: My Student Journey",
    description:
      "Started Data Science in Salzburg, moved to Vienna for Computer Science, learned German, and found a first student job—here is the full story and advice.",
    type: "article",
  },
}

// Approximate reading time: 8 minutes

export default function SalzburgToViennaJourneyPost() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BreadcrumbSchema items={[
        { name: "Blog", url: "/blog" },
        { name: "Salzburg to Vienna Journey", url: "/blog/salzburg-to-vienna-journey" }
      ]} />
      <SiteNav />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: "Salzburg to Vienna Journey" }
        ]} />
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="bg-red-100 dark:bg-red-950 text-red-600 px-3 py-1 rounded-md font-medium">Student Life</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>November 26, 2025</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From Salzburg to Vienna: Switching Universities, Learning German, and Finding My First Job
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I began my Austrian journey in Salzburg studying Data Science, applied later to the University of Vienna for Computer Science, moved cities, learned German under pressure, and hunted for my first job while trying to stretch every euro. This is the honest timeline and what I would tell new students.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Coming for the summer intake to the University of Salzburg (MSc Data Science) felt like a dream start: new country, clean air, and a focused program. But deep down I wanted a broader Computer Science foundation. While handling residence permit (RP) paperwork that dragged to nearly four months, I simultaneously prepared a new application—this time for MSc Computer Science at the University of Vienna. Balancing paperwork, uncertainty, and academic goals was the first real test.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Residence Permit (RP) Timeline Reality</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My RP process stretched to roughly four months. Bureaucracy in Austria is systematic but slow: you submit once, then you wait. Use the waiting period productively—collect extra documents, research city housing, and draft applications for plan B (like I did for Vienna). Do not panic if friends get approvals earlier; processing time varies by district and workload.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Month 1: Submission, missing-info anxiety, refreshing email too often.</li>
            <li>Month 2: Silence—focused on academic routine and German basics.</li>
            <li>Month 3: Follow-up email, minor clarification, continued preparation for Vienna shift.</li>
            <li>Month 4: Approval finally arrives; immediate planning for relocation.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Tip: Keep organized folders (digital + printed). Every stamped document becomes leverage for the next step (bank, housing, university, job). Make duplicates early.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Applying to University of Vienna</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I applied in January while still enrolled in Salzburg. Motivation: broader curriculum, bigger academic ecosystem, and networking in a capital city. The overlap between handling RP issues and preparing application materials was stressful, but having clarity about why I wanted the switch kept me moving. If you consider switching: list concrete reasons (curriculum difference, research groups, career proximity) rather than vague dissatisfaction.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Relocating to Vienna (April Move)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Moving in April meant housing competition + academic transition. Expect higher rents and faster turnover than Salzburg. Start with temporary options (student dorm offers, short-term flats) while searching for stable accommodation. Track listings daily early morning and late evening; respond quickly and professionally.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Emotional adjustment matters: Salzburg is calm and compact, Vienna is layered and busy. Give yourself 2–3 weeks to adapt your rhythm—especially public transport and administrative office locations.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Job Hunting Without German</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            It is objectively hard to secure a part-time job in Vienna without German. I focused first on survival—basic phrases, polite customer interactions, and menu vocabulary. It took about two months of steady searching before I landed a restaurant position. Persistence beats randomness: keep a simple spreadsheet logging application date, place, contact person, follow-up status.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Learn sector-specific mini-vocabulary (e.g., restaurant items, payment phrases).</li>
            <li>Walk-ins with a printed CV still work in hospitality.</li>
            <li>Follow up after 5–7 days—many managers are overwhelmed.</li>
            <li>Be transparent about your German level but show active learning effort.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Once employed, immersion accelerates your German more than apps—every shift is free speaking practice. Combine that with one structured course for grammar foundation.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Learning German Under Pressure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I began with survival phrases, then built up through repetition at work and daily errands. Focus order I recommend: greetings → numbers → food items → directions → polite questions. Delay perfection; target comprehension confidence first. Track weekly progress in a notebook—small wins keep motivation alive.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Resources that helped: free university course allocation, YouTube short grammar explainers, Anki flashcards for spaced repetition, and live context at the restaurant.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Stretching Every Euro: My Budget Habits</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Saving while relocating is a parallel challenge. I leaned on discounters and avoided impulse purchases early. Primary strategies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li><strong>Hofer & Lidl:</strong> Base grocery runs—consistent pricing and good quality.</li>
            <li><strong>Bauernmarkt (farmer's market):</strong> Cheaper fresh produce & occasional better deals on meat/non-veg compared to supermarkets.</li>
            <li><strong>Compare per-kilo labels:</strong> Austrian stores display unit prices—train yourself to read them.</li>
            <li><strong>Cook bulk:</strong> Batch meals for 2–3 days to reduce energy/time costs.</li>
            <li><strong>Delay furniture upgrades:</strong> Essentials first; comfort items later.</li>
            <li><strong>Track monthly fixed vs variable:</strong> Split rent, insurance, transport, food, discretionary—it reveals leaks.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mindset shift: “I can't afford that yet” is temporary—view it as a timeline, not a wall. Budget discipline made the university switch financially survivable.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What I Would Do Differently</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Start German earlier—makes job hunt less stressful.</li>
            <li>Prepare Vienna housing leads before RP approval to reduce overlap chaos.</li>
            <li>Automate document backups (cloud + local) sooner.</li>
            <li>Ask peers for Salzburg → Vienna relocation tips earlier—crowd knowledge saves time.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Encouragement for New Students</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Switching paths, waiting months for paperwork, and searching jobs without fluent language feels heavy—but it is all navigable. Take steady, small, daily actions: one email, one vocabulary set, one application. Progress compounds quietly until suddenly the city feels like yours.
          </p>
          <p className="text-muted-foreground leading-relaxed font-medium mb-6">
            If you are in that waiting phase now—you are not stuck, you are building momentum underneath the surface.
          </p>
          <p className="text-muted-foreground leading-relaxed font-medium">Keep going. Vienna rewards patience and persistence. 🇦🇹</p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              An international student who transitioned from MSc Data Science in Salzburg to MSc Computer Science in Vienna—sharing practical lessons on bureaucracy, budgeting, language, and work.
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Questions about switching programs or budgeting your move?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
