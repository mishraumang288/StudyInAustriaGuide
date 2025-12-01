"use client"

import { Mail, MessageCircle, Instagram, Linkedin, Send } from "lucide-react"
import { contactMetadata } from "@/lib/metadata"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import SiteNav from "@/components/site-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formspree.io/f/manzjyga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BreadcrumbSchema items={[
        { name: "Contact", url: "/contact" }
      ]} />
      <SiteNav currentPage="contact" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Have questions about studying in Austria? We're here to help! Connect with us through any of these channels.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-red-600" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your question or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-md p-4 text-green-800 dark:text-green-200">
                      ✓ Thank you for your message! We'll get back to you within 24-48 hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-md p-4 text-red-800 dark:text-red-200">
                      ✗ Something went wrong. Please try again or contact us via email directly.
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-6">
            <Card className="h-fit">
              <CardHeader>
                <MessageCircle className="h-6 w-6 text-green-600 mb-2" />
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Get instant answers from 1000+ students.
                </p>
                <Button asChild size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://chat.whatsapp.com/EVGlfyIsJ3BL3N9L8G6FFI" target="_blank" rel="noopener noreferrer">
                    Join Community
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardHeader>
                <Instagram className="h-6 w-6 text-pink-600 mb-2" />
                <CardTitle className="text-lg">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Daily tips and updates.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href="https://www.instagram.com/umang_miishra/" target="_blank" rel="noopener noreferrer">
                    Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardHeader>
                <Linkedin className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-lg">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Professional networking.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href="https://www.linkedin.com/in/umang-mishra2002/" target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardHeader>
                <Mail className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  For detailed inquiries.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href="mailto:mishraumang288@gmail.com">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-6">
            Join hundreds of Indian students who have successfully made Austria their study destination.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="/">Explore Our Guide</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
