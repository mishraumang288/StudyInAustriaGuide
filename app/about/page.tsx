import { GraduationCap, Heart, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl text-foreground">Study Austria</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/about" className="text-foreground font-medium">
                About
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Study Austria</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Your trusted companion for navigating the journey of studying in Austria as an Indian student.
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Study In Austria Guide was created by Umang Mishra, an MSc Computer Science student at the University of Vienna, who
            experienced firsthand the challenges of navigating the Austrian student visa process from India. After
            successfully completing his own journey and helping numerous fellow students along the way, Umang decided to
            create a comprehensive resource that would make this process easier for future Indian students.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            What started as a simple guide shared among friends has grown into a complete platform that provides
            step-by-step guidance, connects students through WhatsApp communities, and offers practical resources for
            every stage of the journey—from university applications to finding accommodation in Austria.
          </p>
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
