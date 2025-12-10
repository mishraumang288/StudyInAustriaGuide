"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 10, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Study Austria Guide ("we", "us", "our") operates https://studyinaustriaguide.onrender.com (the "Site"). 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact us via email or contact form (name, email address, message content)</li>
              <li>Subscribe to our updates or newsletters</li>
              <li>Participate in our WhatsApp community (voluntary)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our Site, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect and track information and improve our services. 
              Types of cookies we use:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand how visitors use our site</li>
              <li><strong>Advertising Cookies:</strong> Google AdSense for displaying relevant advertisements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, 
              if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use third-party services that may collect information used to identify you:
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Google Analytics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Google Analytics to analyze website traffic and user behavior. Google Analytics collects 
              information such as how often users visit our site, what pages they visit, and what other sites 
              they used prior to coming to our site. Google's ability to use and share information collected 
              by Google Analytics is restricted by the{" "}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Google Analytics Terms of Service
              </a>{" "}
              and the{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Google Privacy Policy
              </a>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Google AdSense</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve 
              ads based on your prior visits to our website or other websites. You may opt out of personalized 
              advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Google Ads Settings
              </a>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Formspree</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our contact form is powered by Formspree. Information submitted through the contact form is 
              processed according to Formspree's privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and support</li>
              <li>Send you updates and information about studying in Austria</li>
              <li>Display advertisements (via Google AdSense)</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required by law. Analytics data is 
              typically retained for 26 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Objection:</strong> Object to processing of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:mishraumang288@gmail.com" className="text-red-600 hover:underline">
                mishraumang288@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site is intended for users who are at least 18 years old or the age of majority in their 
              jurisdiction. We do not knowingly collect personal information from children under 18. If you 
              are a parent or guardian and believe your child has provided us with personal information, 
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state, 
              province, country, or other governmental jurisdiction where data protection laws may differ. 
              By using our Site, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical, and physical security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure. While 
              we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Links to Other Websites</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site contains links to third-party websites (university websites, government portals, etc.). 
              We are not responsible for the privacy practices of these external sites. We encourage you to 
              review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to 
              review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li><strong>Email:</strong>{" "}
                <a href="mailto:mishraumang288@gmail.com" className="text-red-600 hover:underline">
                  mishraumang288@gmail.com
                </a>
              </li>
              <li><strong>Website:</strong>{" "}
                <a href="https://studyinaustriaguide.onrender.com" className="text-red-600 hover:underline">
                  https://studyinaustriaguide.onrender.com
                </a>
              </li>
            </ul>
          </section>

          <section className="border-t pt-8 mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our website, you consent to our use of cookies and tracking technologies as described 
              in this Privacy Policy. You can manage your cookie preferences through your browser settings.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
