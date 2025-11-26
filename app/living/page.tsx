import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteNav from "@/components/site-nav"
import { livingMetadata } from "@/lib/metadata"
import {
  ExternalLink,
  Building2,
  MapPin,
  MessageCircle,
  Home,
  Euro,
  Book,
  Users,
  FileText,
  AlertCircle,
} from "lucide-react"

export const metadata = livingMetadata

export default function LivingInAustriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav currentPage="living" />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-background dark:from-red-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Living in Austria</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A Practical Guide for International Students: Cost, Lifestyle, Rules, and Tips
          </p>
        </div>
      </section>

      {/* University System Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Book className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-bold text-foreground">University System & Study Environment</h2>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground mb-6">
                Austria is home to top-ranked universities like{" "}
                <strong>TU Wien, University of Vienna, Graz University of Technology, JKU Linz</strong>, and FH
                campuses offering applied programs.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-red-600" />
                    Public Universities
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Research-heavy curriculum</li>
                    <li>• Require more self-study and independent learning</li>
                    <li>• Greater flexibility in course selection</li>
                    <li>• Focus on theoretical foundations</li>
                  </ul>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-red-600" />
                    Fachhochschule (FH)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• More structured programs</li>
                    <li>• Mandatory attendance requirements</li>
                    <li>• Smaller class sizes</li>
                    <li>• Applied, industry-focused approach</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> Professors are approachable, but academic expectations are high—especially in
                  engineering, computing, and applied sciences.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost of Living Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Euro className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-bold text-foreground">Cost of Living</h2>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground mb-6">
                Living cost varies by city; <strong>Vienna is the most expensive</strong>, while{" "}
                <strong>Graz and Linz are cheaper</strong>.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Expense</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">Student Housing</td>
                      <td className="border border-border p-3 text-foreground font-medium">€300–€600</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-muted-foreground">Private Room</td>
                      <td className="border border-border p-3 text-foreground font-medium">€450–€800</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        Health Insurance (mandatory)
                      </td>
                      <td className="border border-border p-3 text-foreground font-medium">
                        €66–€75 per month (ÖGK student plan)
                      </td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-muted-foreground">Groceries</td>
                      <td className="border border-border p-3 text-foreground font-medium">€200–€300</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">Public Transport</td>
                      <td className="border border-border p-3 text-foreground font-medium">
                        €15–€30 (with student semester ticket)
                      </td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-muted-foreground">Phone/Internet</td>
                      <td className="border border-border p-3 text-foreground font-medium">€10–€25</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        Misc. (laundry, sports, etc.)
                      </td>
                      <td className="border border-border p-3 text-foreground font-medium">€100–€150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-5 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-800 dark:text-green-200 text-xl mb-2">
                  💰 Total Estimate: €750–€1,200 per month
                </h3>
                <div className="flex items-start gap-2 mt-3">
                  <AlertCircle className="h-5 w-5 text-green-700 dark:text-green-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-700 dark:text-green-300">
                    <strong>Note:</strong> Grocery costs can be significantly reduced if you cook your own meals at
                    home instead of eating out.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Home className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-bold text-foreground">Find Your Accommodation</h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Comprehensive list of housing platforms and student dormitories across Austria to help you find the perfect
            place to stay.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* General Housing Platforms */}
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">General Housing Platforms</CardTitle>
                </div>
                <CardDescription>
                  Popular websites for finding apartments, rooms, and flat shares across Austria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">WG-gesucht</h4>
                        <p className="text-sm text-muted-foreground">
                          Flat shares (Germany-wide but widely used in Austria)
                        </p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.wg-gesucht.de" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">HousingAnywhere</h4>
                        <p className="text-sm text-muted-foreground">International student sublets</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://housinganywhere.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Willhaben</h4>
                        <p className="text-sm text-muted-foreground">Huge classifieds site (rooms, flats, houses)</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.willhaben.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Immosuchmaschine</h4>
                        <p className="text-sm text-muted-foreground">Apartment aggregator</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.immosuchmaschine.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Wohnnet</h4>
                        <p className="text-sm text-muted-foreground">Real estate listings</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.wohnnet.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Der Standard Immobilien</h4>
                        <p className="text-sm text-muted-foreground">Listings via newspaper</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://immobilien.derstandard.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Jobwohnen</h4>
                        <p className="text-sm text-muted-foreground">Student-friendly, often fewer agent fees</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.jobwohnen.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Bazar</h4>
                        <p className="text-sm text-muted-foreground">Classifieds, especially rooms & flat shares</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.bazar.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="p-3 border border-border rounded-lg bg-blue-50 dark:bg-blue-950/20">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="h-4 w-4 text-blue-600" />
                        <h4 className="font-medium text-foreground">Facebook Groups</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Search for "WG-Zimmer Wien/Graz/Salzburg" or similar groups for your city
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Dorm Providers */}
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Student Dorm Providers</CardTitle>
                </div>
                <CardDescription>Official student housing providers with dormitories across Austria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">OeAD Student Housing</h4>
                        <p className="text-sm text-muted-foreground">Official Austrian exchange/student housing</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://oeadstudenthousing.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Home4students</h4>
                        <p className="text-sm text-muted-foreground">
                          Dorms in Vienna, Graz, Klagenfurt, Salzburg, Innsbruck
                        </p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://home4students.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Akademikerhilfe</h4>
                        <p className="text-sm text-muted-foreground">38+ residences across Austria</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://akademikerhilfe.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">ÖJAB</h4>
                        <p className="text-sm text-muted-foreground">
                          23 dorms in Vienna, Graz, Salzburg, Eisenstadt, Krems
                        </p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://oejab.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">STUWO</h4>
                        <p className="text-sm text-muted-foreground">Modern dorms, all-inclusive, multiple states</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://stuwo.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Viennabase</h4>
                        <p className="text-sm text-muted-foreground">Mainly Vienna, modern residences</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://viennabase.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Wihast</h4>
                        <p className="text-sm text-muted-foreground">Multiple student residences across Vienna</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.wihast.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">WIST Haus</h4>
                        <p className="text-sm text-muted-foreground">Mainly in Styria (Steiermark)</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://wist.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">Kolpinghaus</h4>
                        <p className="text-sm text-muted-foreground">Dorms in Vienna, Salzburg, Linz, etc.</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://kolping.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">ISH Innsbruck</h4>
                        <p className="text-sm text-muted-foreground">Internationales Studentenhaus - Tyrol-specific</p>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://ish.or.at" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">💡 Pro Tip</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Apply to student dorms early as they fill up quickly. Many have application deadlines months
                      before the semester starts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50 dark:bg-red-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need More Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our WhatsApp community to connect with fellow Indian students and get real-time support!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join WhatsApp Community
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
