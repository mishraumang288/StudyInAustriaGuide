"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            ← Back to Home
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Privacy Policy</CardTitle>
              <CardDescription>Our privacy policy is hosted externally for your convenience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To view our complete Privacy Policy, please visit the link below. This policy outlines how we collect,
                use, and protect your personal information.
              </p>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href="https://www.termsfeed.com/live/84c3f173-7c21-4da6-b655-ea0a160317ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View Privacy Policy
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>

              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-2">Quick Summary</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• We respect your privacy and are committed to protecting your personal data</li>
                  <li>• We collect minimal information necessary to provide our services</li>
                  <li>• We use cookies and similar technologies as described in our policy</li>
                  <li>• We comply with applicable data protection laws</li>
                  <li>• You have rights regarding your personal information</li>
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  For questions about our privacy practices, please contact us at{" "}
                  <a href="mailto:mishraumang288@gmail.com" className="text-primary hover:underline">
                    mishraumang288@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
