import { Heart, Users, Target, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SiteNav from "@/components/site-nav"
import { aboutMetadata } from "@/lib/metadata"

export const metadata = aboutMetadata

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav currentPage="about" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Study Austria</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Your trusted companion for navigating the journey of studying in Austria as an Indian student.
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Study Austria Guide was founded by Umang Mishra, an MSc Computer Science student at the University of Vienna, who
            experienced firsthand the challenges and uncertainties of navigating the Austrian student visa process from India. 
            Like many aspiring students, Umang faced countless questions: Which documents are really needed? How long does 
            the process take? Where should I look for accommodation? What are the actual costs of living?
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            After successfully completing his own journey in 2023 and helping dozens of fellow students along the way through 
            WhatsApp groups and personal consultations, Umang realized there was a critical need for a centralized, reliable, 
            and up-to-date resource specifically tailored for Indian students. The existing information was scattered across 
            forums, outdated blog posts, and word-of-mouth advice—much of it contradictory or no longer relevant.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            In early 2024, Study Austria Guide was born. What started as a simple Google Doc shared among friends quickly 
            evolved into a comprehensive platform. Today, we serve over 1,000 Indian students through our active WhatsApp 
            communities, providing step-by-step guidance, answering real-time questions, and fostering connections that 
            last beyond the application process.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">What Makes Us Different</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Unlike commercial education consultants who charge thousands of rupees, we offer completely free, unbiased 
            information. We're not affiliated with any university, housing provider, or visa agency. Our only goal is to 
            help you make informed decisions about your education in Austria.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Every piece of information on this platform is:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Based on real, recent experiences from students who've gone through the process</li>
            <li>Verified against official sources (OEAD, Austrian Embassy, university websites)</li>
            <li>Updated regularly to reflect the latest policy changes and requirements</li>
            <li>Written specifically for Indian students, addressing India-specific challenges</li>
            <li>Backed by an active community ready to answer your questions</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Our Impact</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Since our launch, we've helped hundreds of Indian students successfully navigate their journey to Austria:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li><strong>1000+</strong> active members in our WhatsApp communities</li>
            <li><strong>500+</strong> students assisted with visa applications</li>
            <li><strong>200+</strong> successful visa approvals in 2024</li>
            <li><strong>50+</strong> students connected with accommodation before arrival</li>
            <li><strong>24/7</strong> community support for urgent questions</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To simplify the complex process of studying in Austria for Indian students by providing accurate,
                up-to-date information and fostering a supportive community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in transparency, community support, and making quality education accessible. Every piece of
                information we share is based on real experiences and official sources.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With over 1000+ Indian students in our WhatsApp communities, we've built a network where students help
                each other navigate challenges, share experiences, and celebrate successes together.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Where We Help</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive visa guides, accommodation resources, active student communities, and continuous support
                from application to arrival in Austria.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Trust Us?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span>Created by a current student who went through the entire process</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span>Information verified with official sources (OEAD, Austrian Embassy)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span>Regularly updated based on latest policy changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span>Backed by a community of 1000+ Indian students in Austria</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span>Free, unbiased information with no hidden agendas</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Growing Community</h2>
          <p className="text-muted-foreground mb-6">
            Connect with fellow Indian students, get your questions answered, and stay updated with the latest
            information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Back to Home
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
