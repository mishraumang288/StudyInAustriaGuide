import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "My First Month in Vienna: What I Wish I Knew Before Arriving | Study Austria Blog",
  description:
    "Essential tips for your first month in Vienna as an international student. Learn about public transport, bank accounts, registration, and settling into student life in Austria.",
  keywords: [
    "first month Vienna",
    "Vienna student tips",
    "Meldezettel Austria",
    "bank account Vienna",
    "Wiener Linien",
    "settling in Austria",
  ],
}

export default function FirstMonthBlogPost() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BreadcrumbSchema items={[
        { name: "Blog", url: "/blog" },
        { name: "First Month in Vienna", url: "/blog/first-month-in-vienna" }
      ]} />
      <SiteNav />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: "First Month in Vienna" }
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
            <span className="bg-red-100 dark:bg-red-950 text-red-600 px-3 py-1 rounded-md font-medium">
              Student Life
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>November 20, 2024</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My First Month in Vienna: What I Wish I Knew Before Arriving
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            From navigating public transport to opening a bank account, here are the essential tips that would have
            made my first month in Vienna much smoother.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Landing in Vienna as an international student is both exciting and overwhelming. I arrived in September 2023
            with my admission letter, a suitcase full of hope, and absolutely no idea what the first few weeks would
            actually be like. Now, over a year later, I'm sharing the practical lessons I learned—often the hard
            way—during those crucial first 30 days.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Week 1: Immediate Priorities</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Get a Local SIM Card Immediately</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This should be your first stop after landing. Head to any Hofer (the Austrian Aldi) or electronics store
            and get a prepaid SIM card. I recommend:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>HoT (Hofer Telekom):</strong> €10/month for 20GB data + unlimited calls
            </li>
            <li>
              <strong>Magenta Wertkarte:</strong> €15/month for 30GB + EU roaming
            </li>
            <li>
              <strong>Drei (3):</strong> €15/month for 30GB, good coverage
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Pro tip:</strong> You'll need your passport and sometimes proof of address. Don't wait until you
            have your Meldezettel—prepaid cards can be purchased immediately.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            2. Register Your Address (Meldezettel) Within 3 Days
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This is legally required and absolutely critical for everything else. You must register at the local
            district office (MA 35 in Vienna) within 3 days of moving in. You'll need:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Your passport</li>
            <li>Rental contract or landlord's confirmation (signed Meldezettel form)</li>
            <li>Sometimes your admission letter</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The process is free and takes 10-15 minutes. You'll receive a stamped Meldezettel certificate on the
            spot—keep multiple copies; you'll need them for everything (bank, residence permit, contracts).
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Get Your Öffi (Public Transport) Pass</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Vienna's public transport is incredible, and the student discount makes it even better. As a student under
            26, you can get:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>Semester ticket:</strong> €75 for 4 months (September-February or March-June)
            </li>
            <li>
              <strong>Regular annual pass:</strong> €365/year (€1/day!)
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Buy it at any Wiener Linien ticket office with your student ID and Meldezettel. Download the WienMobil app
            for real-time schedules and route planning.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Week 2: Setting Up Your Life</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Open a Bank Account</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You'll need an Austrian bank account for rent, tuition fees, and student jobs. Popular options for
            students:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>Erste Bank or Sparkasse:</strong> Often have student accounts with €0 monthly fees
            </li>
            <li>
              <strong>Bank Austria:</strong> Wide network, €0 fees for students under 27
            </li>
            <li>
              <strong>N26 or Revolut:</strong> Good backup accounts for travel, but not accepted everywhere in Austria
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">Documents needed:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Passport</li>
            <li>Meldezettel</li>
            <li>Student ID or admission letter</li>
            <li>Sometimes proof of income (blocked account statement works)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Important:</strong> The appointment might take 1-2 weeks, so book it as soon as you have your
            Meldezettel. The account opening process takes 30-45 minutes, and you'll receive your debit card by mail
            within 1-2 weeks.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Get Health Insurance Sorted</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you're under 27, you can get student health insurance through ÖGK (Austrian Health Insurance) for about
            €65/month. Visit the ÖGK office near you with your Meldezettel, admission letter, and passport. You'll
            receive your e-card (health insurance card) by mail within 2 weeks. This covers all public healthcare,
            doctor visits, and most medications.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Weeks 3-4: Getting Comfortable</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Find Your Grocery Routine</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Budget-friendly supermarkets:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>Hofer:</strong> Cheapest option, great quality
            </li>
            <li>
              <strong>Lidl:</strong> Also very affordable, good variety
            </li>
            <li>
              <strong>Billa Plus or Spar:</strong> More expensive but wider selection
            </li>
            <li>
              <strong>DM and Müller:</strong> For toiletries and household items
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Money-saving tip:</strong> Shop in the evening (after 7 PM) for 50% discounts on items nearing
            expiration. Turkish/Asian grocery stores (found in every district) are great for spices, rice, and
            vegetables at much lower prices.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            7. Join Student Communities and WhatsApp Groups
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This was a game-changer for me. Join:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Your university's international student groups</li>
            <li>Indian/South Asian student communities (like our WhatsApp group with 1000+ members)</li>
            <li>Facebook groups for your city (Vienna Expats, Vienna Housing, etc.)</li>
            <li>Meetup groups for hobbies and language exchange</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These communities helped me find furniture, understand bureaucracy, make friends, and feel less alone during
            tough days.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8. Learn Basic German Phrases</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Even in Vienna, where many people speak English, knowing basics makes life easier:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>Grüß Gott</strong> (Hello - very Austrian)
            </li>
            <li>
              <strong>Entschuldigung</strong> (Excuse me/Sorry)
            </li>
            <li>
              <strong>Ich verstehe nicht</strong> (I don't understand)
            </li>
            <li>
              <strong>Sprechen Sie Englisch?</strong> (Do you speak English?)
            </li>
            <li>
              <strong>Die Rechnung, bitte</strong> (The bill, please)
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most universities offer free German courses starting at A1 level—sign up immediately as spots fill quickly.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Common Mistakes to Avoid</h2>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-foreground mb-3">Don't make these mistakes I made:</h4>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Waiting too long to register:</strong> Register within 3 days—it's the law and delays
                everything else.
              </li>
              <li>
                <strong>Not keeping copies of documents:</strong> Make multiple copies of your Meldezettel, passport,
                admission letter, etc.
              </li>
              <li>
                <strong>Assuming everyone speaks English:</strong> Many government offices require German or have
                limited English support.
              </li>
              <li>
                <strong>Overspending in the first week:</strong> Austria is expensive. Budget carefully and find the
                discount supermarkets.
              </li>
              <li>
                <strong>Not asking for help:</strong> Austrians can seem reserved, but they're usually happy to help
                when asked politely.
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The first month is intense, bureaucratic, and sometimes frustrating. But it gets better—much better. By
            week 4, you'll have your routine, know your way around, and start enjoying Vienna's incredible quality of
            life. The key is to tackle bureaucracy systematically and not get overwhelmed.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Remember: every international student goes through this. You're not alone, and there's a whole community
            (including our WhatsApp group) ready to help. Take it one step at a time, keep copies of everything, and
            don't hesitate to ask questions.
          </p>

          <p className="text-muted-foreground leading-relaxed font-medium">
            Welcome to Vienna—your Austrian adventure is just beginning! 🇦🇹
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              Umang Mishra is an MSc Computer Science student at the University of Vienna and the founder of Study
              Austria Guide. He has been helping international students navigate their journey to Austria since 2023.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Have questions or want to share your own experience?</p>
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
