import SiteNav from "@/components/site-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Study Austria Guide | Tips, Guides & Student Experiences",
  description:
    "Read real experiences, practical tips, and comprehensive guides about studying in Austria. From visa applications to student life, accommodation hunting to cultural integration.",
  keywords: [
    "Austria student blog",
    "study abroad experiences",
    "Vienna student life",
    "visa application tips",
    "international student Austria",
  ],
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    slug: "first-month-in-vienna",
    title: "My First Month in Vienna: What I Wish I Knew Before Arriving",
    excerpt:
      "From navigating public transport to opening a bank account, here are the essential tips that would have made my first month in Vienna much smoother.",
    date: "November 20, 2024",
    readTime: "8 min read",
    category: "Student Life",
  },
  {
    slug: "salzburg-to-vienna-journey",
    title: "From Salzburg to Vienna: Switching Universities, Surviving on a Budget, and Finding My First Job",
    excerpt:
      "I started MSc Data Science in Salzburg, shifted to Vienna for Computer Science, learned German while job hunting, and stretched every euro—here is the honest journey and practical tips.",
    date: "November 26, 2025",
    readTime: "8 min read",
    category: "Student Life",
  },
  {
    slug: "missed-intake-visa-miscommunication",
    title: "Missing an Intake After Visa Miscommunication: How Persistence Led to Approval",
    excerpt:
      "A student lost an intake due to embassy–magistrate miscommunication about extra financial proof, faced rejection, pushed for clarification, and finally secured approval in early November to start MSc Computer Science at Uni Wien.",
    date: "November 26, 2025",
    readTime: "7 min read",
    category: "Visa Guide",
  },
  {
    slug: "visa-application-timeline",
    title: "Complete Austrian Student Visa Timeline: A Month-by-Month Breakdown",
    excerpt:
      "Detailed timeline of my visa application process from submitting documents to receiving my Visa-D, including exact dates and unexpected delays.",
    date: "November 15, 2024",
    readTime: "10 min read",
    category: "Visa Guide",
  },
  {
    slug: "finding-accommodation-vienna",
    title: "How I Found Affordable Accommodation in Vienna Within 2 Weeks",
    excerpt:
      "The practical strategies and platforms I used to secure a good student flat in Vienna's competitive housing market without breaking the bank.",
    date: "November 10, 2024",
    readTime: "7 min read",
    category: "Accommodation",
  },
  {
    slug: "part-time-jobs-students",
    title: "Landing Your First Part-Time Job as an International Student",
    excerpt:
      "A comprehensive guide to finding, applying for, and securing part-time work in Austria, including tips on CVs, interviews, and legal requirements.",
    date: "November 5, 2024",
    readTime: "9 min read",
    category: "Work & Finance",
  },
  {
    slug: "german-language-learning",
    title: "Learning German While Studying: My 6-Month Journey from A1 to B1",
    excerpt:
      "How I learned German alongside my studies, the resources I used, mistakes I made, and why it's worth the effort for your time in Austria.",
    date: "October 28, 2024",
    readTime: "6 min read",
    category: "Language & Culture",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav currentPage="blog" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences, practical tips, and comprehensive guides from students who've walked the path to studying
            in Austria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-red-600 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="bg-red-100 dark:bg-red-950 text-red-600 px-2 py-1 rounded-md font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-red-600 transition-colors">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-red-600 font-medium text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Want to Share Your Story?</h2>
          <p className="text-muted-foreground mb-6">
            If you're a student in Austria and would like to share your experiences or tips with the community, we'd
            love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
