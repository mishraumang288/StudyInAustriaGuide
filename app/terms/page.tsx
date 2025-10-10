import { GraduationCap } from "lucide-react"

export default function TermsPage() {
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
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">TERMS AND CONDITIONS</h1>
        <p className="text-muted-foreground mb-8">
          <strong>Last updated</strong> October 10, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section id="agreement">
            <h2 className="text-2xl font-bold text-foreground mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
            <p className="leading-relaxed mb-4">
              We are <strong>Study Austria</strong> (&apos;<strong>Company</strong>&apos;, &apos;<strong>we</strong>
              &apos;, &apos;<strong>us</strong>&apos;, or &apos;<strong>our</strong>&apos;).
            </p>
            <p className="leading-relaxed mb-4">
              We operate the website{" "}
              <a
                href="https://studyinaustriaguide.onrender.com/"
                className="text-red-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://studyinaustriaguide.onrender.com/
              </a>{" "}
              (the &apos;<strong>Site</strong>&apos;), as well as any other related products and services that refer or
              link to these legal terms (the &apos;<strong>Legal Terms</strong>&apos;) (collectively, the &apos;
              <strong>Services</strong>&apos;).
            </p>
            <p className="leading-relaxed mb-4">
              You can contact us by email at{" "}
              <a href="mailto:mishraumang288@gmail.com" className="text-red-600 hover:underline">
                mishraumang288@gmail.com
              </a>
              .
            </p>
            <p className="leading-relaxed mb-4">
              These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf
              of an entity (&apos;<strong>you</strong>&apos;), and Study Austria, concerning your access to and use of
              the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound
              by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY
              PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p className="leading-relaxed mb-4">
              Supplemental terms and conditions or documents that may be posted on the Services from time to time are
              hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make
              changes or modifications to these Legal Terms from time to time. We will alert you about any changes by
              updating the &apos;Last updated&apos; date of these Legal Terms, and you waive any right to receive
              specific notice of each such change. It is your responsibility to periodically review these Legal Terms to
              stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to
              have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date
              such revised Legal Terms are posted.
            </p>
            <p className="leading-relaxed mb-4">
              All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must
              have the permission of, and be directly supervised by, their parent or guardian to use the Services. If
              you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you
              using the Services.
            </p>
            <p className="leading-relaxed">We recommend that you print a copy of these Legal Terms for your records.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">TABLE OF CONTENTS</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <a href="#services" className="text-red-600 hover:underline">
                  OUR SERVICES
                </a>
              </li>
              <li>
                <a href="#ip" className="text-red-600 hover:underline">
                  INTELLECTUAL PROPERTY RIGHTS
                </a>
              </li>
              <li>
                <a href="#userreps" className="text-red-600 hover:underline">
                  USER REPRESENTATIONS
                </a>
              </li>
              <li>
                <a href="#prohibited" className="text-red-600 hover:underline">
                  PROHIBITED ACTIVITIES
                </a>
              </li>
              <li>
                <a href="#ugc" className="text-red-600 hover:underline">
                  USER GENERATED CONTRIBUTIONS
                </a>
              </li>
              <li>
                <a href="#license" className="text-red-600 hover:underline">
                  CONTRIBUTION LICENCE
                </a>
              </li>
              <li>
                <a href="#services-management" className="text-red-600 hover:underline">
                  SERVICES MANAGEMENT
                </a>
              </li>
              <li>
                <a href="#ppyes" className="text-red-600 hover:underline">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#terms" className="text-red-600 hover:underline">
                  TERM AND TERMINATION
                </a>
              </li>
              <li>
                <a href="#modifications" className="text-red-600 hover:underline">
                  MODIFICATIONS AND INTERRUPTIONS
                </a>
              </li>
              <li>
                <a href="#law" className="text-red-600 hover:underline">
                  GOVERNING LAW
                </a>
              </li>
              <li>
                <a href="#disputes" className="text-red-600 hover:underline">
                  DISPUTE RESOLUTION
                </a>
              </li>
              <li>
                <a href="#corrections" className="text-red-600 hover:underline">
                  CORRECTIONS
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-red-600 hover:underline">
                  DISCLAIMER
                </a>
              </li>
              <li>
                <a href="#liability" className="text-red-600 hover:underline">
                  LIMITATIONS OF LIABILITY
                </a>
              </li>
              <li>
                <a href="#indemnification" className="text-red-600 hover:underline">
                  INDEMNIFICATION
                </a>
              </li>
              <li>
                <a href="#userdata" className="text-red-600 hover:underline">
                  USER DATA
                </a>
              </li>
              <li>
                <a href="#electronic" className="text-red-600 hover:underline">
                  ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                </a>
              </li>
              <li>
                <a href="#misc" className="text-red-600 hover:underline">
                  MISCELLANEOUS
                </a>
              </li>
              <li>
                <a href="#contact" className="text-red-600 hover:underline">
                  CONTACT US
                </a>
              </li>
            </ol>
          </section>

          <section id="services">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. OUR SERVICES</h2>
            <p className="leading-relaxed">
              The information provided when using the Services is not intended for distribution to or use by any person
              or entity in any jurisdiction or country where such distribution or use would be contrary to law or
              regulation or which would subject us to any registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from other locations do so on their own
              initiative and are solely responsible for compliance with local laws, if and to the extent local laws are
              applicable.
            </p>
          </section>

          <section id="ip">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Our intellectual property</h3>
            <p className="leading-relaxed mb-4">
              We are the owner or the licensee of all intellectual property rights in our Services, including all source
              code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics
              in the Services (collectively, the &apos;Content&apos;), as well as the trademarks, service marks, and
              logos contained therein (the &apos;Marks&apos;).
            </p>
            <p className="leading-relaxed mb-4">
              Our Content and Marks are protected by copyright and trademark laws (and various other intellectual
              property rights and unfair competition laws) and treaties around the world.
            </p>
            <p className="leading-relaxed">
              The Content and Marks are provided in or through the Services &apos;AS IS&apos; for your personal,
              non-commercial use or internal business purpose only.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Your use of our Services</h3>
            <p className="leading-relaxed mb-4">
              Subject to your compliance with these Legal Terms, including the &apos;PROHIBITED ACTIVITIES&apos; section
              below, we grant you a non-exclusive, non-transferable, revocable licence to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>access the Services; and</li>
              <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
            </ul>
            <p className="leading-relaxed mb-4">
              solely for your personal, non-commercial use or internal business purpose.
            </p>
            <p className="leading-relaxed mb-4">
              Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content
              or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed,
              encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial
              purpose whatsoever, without our express prior written permission.
            </p>
            <p className="leading-relaxed mb-4">
              If you wish to make any use of the Services, Content, or Marks other than as set out in this section or
              elsewhere in our Legal Terms, please address your request to:{" "}
              <a href="mailto:mishraumang288@gmail.com" className="text-red-600 hover:underline">
                mishraumang288@gmail.com
              </a>
              . If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or
              Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure
              that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our
              Content.
            </p>
            <p className="leading-relaxed mb-4">
              We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
            </p>
            <p className="leading-relaxed">
              Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and
              your right to use our Services will terminate immediately.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Your submissions</h3>
            <p className="leading-relaxed mb-4">
              Please review this section and the &apos;PROHIBITED ACTIVITIES&apos; section carefully prior to using our
              Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any
              content through the Services.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or
              other information about the Services (&apos;Submissions&apos;), you agree to assign to us all intellectual
              property rights in such Submission. You agree that we shall own this Submission and be entitled to its
              unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment
              or compensation to you.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any
              part of the Services you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                confirm that you have read and agree with our &apos;PROHIBITED ACTIVITIES&apos; and will not post, send,
                publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful,
                harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group,
                sexually explicit, false, inaccurate, deceitful, or misleading;
              </li>
              <li>
                to the extent permissible by applicable law, waive any and all moral rights to any such Submission;
              </li>
              <li>
                warrant that any such Submission are original to you or that you have the necessary rights and licences
                to submit such Submissions and that you have full authority to grant us the above-mentioned rights in
                relation to your Submissions; and
              </li>
              <li>warrant and represent that your Submissions do not constitute confidential information.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all
              losses that we may suffer because of your breach of (a) this section, (b) any third party&apos;s
              intellectual property rights, or (c) applicable law.
            </p>
          </section>

          <section id="userreps">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. USER REPRESENTATIONS</h2>
            <p className="leading-relaxed mb-4">
              By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to
              comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside, or if a
              minor, you have received parental permission to use the Services; (3) you will not access the Services
              through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the
              Services for any illegal or unauthorised purpose; and (5) your use of the Services will not violate any
              applicable law or regulation.
            </p>
            <p className="leading-relaxed">
              If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right
              to suspend or terminate your account and refuse any and all current or future use of the Services (or any
              portion thereof).
            </p>
          </section>

          <section id="prohibited">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. PROHIBITED ACTIVITIES</h2>
            <p className="leading-relaxed mb-4">
              You may not access or use the Services for any purpose other than that for which we make the Services
              available. The Services may not be used in connection with any commercial endeavours except those that are
              specifically endorsed or approved by us.
            </p>
            <p className="leading-relaxed mb-4">As a user of the Services, you agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Systematically retrieve data or other content from the Services to create or compile, directly or
                indirectly, a collection, compilation, database, or directory without written permission from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
                information such as user passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with security-related features of the Services, including
                features that prevent or restrict the use or copying of any Content or enforce limitations on the use of
                the Services and/or the Content contained therein.
              </li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorised framing of or linking to the Services.</li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material,
                including excessive use of capital letters and spamming (continuous posting of repetitive text), that
                interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs,
                disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the
                Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts to send comments or messages, or using
                any data mining, robots, or similar data gathering and extraction tools.
              </li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active
                information collection or transmission mechanism, including without limitation, clear graphics
                interchange formats (&apos;gifs&apos;), 1×1 pixels, web bugs, cookies, or other similar devices
                (sometimes referred to as &apos;spyware&apos; or &apos;passive collection mechanisms&apos; or
                &apos;pcms&apos;).
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected
                to the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion
                of the Services to you.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services,
                or any portion of the Services.
              </li>
              <li>
                Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or
                other code.
              </li>
              <li>
                Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the
                software comprising or in any way making up a part of the Services.
              </li>
              <li>
                Except as may be the result of standard search engine or Internet browser usage, use, launch, develop,
                or distribute any automated system, including without limitation, any spider, robot, cheat utility,
                scraper, or offline reader that accesses the Services, or use or launch any unauthorised script or other
                software.
              </li>
              <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
              <li>
                Make any unauthorised use of the Services, including collecting usernames and/or email addresses of
                users by electronic or other means for the purpose of sending unsolicited email, or creating user
                accounts by automated means or under false pretences.
              </li>
              <li>
                Use the Services as part of any effort to compete with us or otherwise use the Services and/or the
                Content for any revenue-generating endeavour or commercial enterprise.
              </li>
            </ul>
          </section>

          <section id="ugc">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. USER GENERATED CONTRIBUTIONS</h2>
            <p className="leading-relaxed">
              The Services does not offer users to submit or post content. We may provide you with the opportunity to
              create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials
              to us or on the Services, including but not limited to text, writings, video, audio, photographs,
              graphics, comments, suggestions, or personal information or other material (collectively,
              &apos;Contributions&apos;). Contributions may be viewable by other users of the Services and through
              third-party websites. When you create or make available any Contributions, you thereby represent and
              warrant that:
            </p>
          </section>

          <section id="license">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. CONTRIBUTION LICENCE</h2>
            <p className="leading-relaxed">
              You and Services agree that we may access, store, process, and use any information and personal data that
              you provide and your choices (including settings). By submitting suggestions or other feedback regarding
              the Services, you agree that we can use and share such feedback for any purpose without compensation to
              you.
            </p>
          </section>

          <section id="services-management">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. SERVICES MANAGEMENT</h2>
            <p className="leading-relaxed">
              We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal
              Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or
              these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3)
              in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or
              disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in
              our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in any way burdensome to our systems; and
              (5) otherwise manage the Services in a manner designed to protect our rights and property and to
              facilitate the proper functioning of the Services.
            </p>
          </section>

          <section id="ppyes">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. PRIVACY POLICY</h2>
            <p className="leading-relaxed">
              We care about data privacy and security. Please review our Privacy Policy:{" "}
              <a
                href="https://www.termsfeed.com/live/84c3f173-7c21-4da6-b655-ea0a160317ba"
                className="text-red-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.termsfeed.com/live/84c3f173-7c21-4da6-b655-ea0a160317ba
              </a>
              . By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these
              Legal Terms. Please be advised the Services are hosted in Austria. If you access the Services from any
              other region of the world with laws or other requirements governing personal data collection, use, or
              disclosure that differ from applicable laws in Austria, then through your continued use of the Services,
              you are transferring your data to Austria, and you expressly consent to have your data transferred to and
              processed in Austria.
            </p>
          </section>

          <section id="terms">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. TERM AND TERMINATION</h2>
            <p className="leading-relaxed mb-4">
              These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY
              OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
              OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY
              PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
              WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED
              AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
            </p>
            <p className="leading-relaxed">
              If we terminate or suspend your account for any reason, you are prohibited from registering and creating a
              new account under your name, a fake or borrowed name, or the name of any third party, even if you may be
              acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without limitation pursuing civil, criminal, and
              injunctive redress.
            </p>
          </section>

          <section id="modifications">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p className="leading-relaxed mb-4">
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any
              reason at our sole discretion without notice. However, we have no obligation to update any information on
              our Services. We will not be liable to you or any third party for any modification, price change,
              suspension, or discontinuance of the Services.
            </p>
            <p className="leading-relaxed">
              We cannot guarantee the Services will be available at all times. We may experience hardware, software, or
              other problems or need to perform maintenance related to the Services, resulting in interruptions, delays,
              or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You agree that we have no liability
              whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services
              during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to
              obligate us to maintain and support the Services or to supply any corrections, updates, or releases in
              connection therewith.
            </p>
          </section>

          <section id="law">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. GOVERNING LAW</h2>
            <p className="leading-relaxed">
              These Legal Terms shall be governed by and defined following the laws of Austria. Study Austria and
              yourself irrevocably consent that the courts of Austria shall have exclusive jurisdiction to resolve any
              dispute which may arise in connection with these Legal Terms.
            </p>
          </section>

          <section id="disputes">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. DISPUTE RESOLUTION</h2>
            <p className="leading-relaxed">
              You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship
              established by these Legal Terms to the jurisdiction of the Austria courts. Study Austria shall also
              maintain the right to bring proceedings as to the substance of the matter in the courts of the country
              where you reside or, if these Legal Terms are entered into in the course of your trade or profession, the
              state of your principal place of business.
            </p>
          </section>

          <section id="corrections">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. CORRECTIONS</h2>
            <p className="leading-relaxed">
              There may be information on the Services that contains typographical errors, inaccuracies, or omissions,
              including descriptions, pricing, availability, and various other information. We reserve the right to
              correct any errors, inaccuracies, or omissions and to change or update the information on the Services at
              any time, without prior notice.
            </p>
          </section>

          <section id="disclaimer">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. DISCLAIMER</h2>
            <p className="leading-relaxed">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL
              BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
              IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
              WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR
              RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY
              OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3)
              ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
              FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
              SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
              SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
              LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
              OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED
              WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT
              BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
              PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN
              ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </p>
          </section>

          <section id="liability">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. LIMITATIONS OF LIABILITY</h2>
            <p className="leading-relaxed">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
              DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
              PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section id="indemnification">
            <h2 className="text-2xl font-bold text-foreground mb-4">16. INDEMNIFICATION</h2>
            <p className="leading-relaxed">
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of
              our respective officers, agents, partners, and employees, from and against any loss, damage, liability,
              claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to
              or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your
              representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third
              party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any
              other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we
              reserve the right, at your expense, to assume the exclusive defence and control of any matter for which
              you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such
              claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is
              subject to this indemnification upon becoming aware of it.
            </p>
          </section>

          <section id="userdata">
            <h2 className="text-2xl font-bold text-foreground mb-4">17. USER DATA</h2>
            <p className="leading-relaxed">
              We will maintain certain data that you transmit to the Services for the purpose of managing the
              performance of the Services, as well as data relating to your use of the Services. Although we perform
              regular routine backups of data, you are solely responsible for all data that you transmit or that relates
              to any activity you have undertaken using the Services. You agree that we shall have no liability to you
              for any loss or corruption of any such data, and you hereby waive any right of action against us arising
              from any such loss or corruption of such data.
            </p>
          </section>

          <section id="electronic">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </h2>
            <p className="leading-relaxed">
              Visiting the Services, sending us emails, and completing online forms constitute electronic
              communications. You consent to receive electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you electronically, via email and on the
              Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE
              OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
              POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive
              any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or retention of non-electronic records, or to
              payments or the granting of credits by any means other than electronic means.
            </p>
          </section>

          <section id="misc">
            <h2 className="text-2xl font-bold text-foreground mb-4">19. MISCELLANEOUS</h2>
            <p className="leading-relaxed">
              These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the
              Services constitute the entire agreement and understanding between you and us. Our failure to exercise or
              enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or
              provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of
              our rights and obligations to others at any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or
              part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that
              provision or part of the provision is deemed severable from these Legal Terms and does not affect the
              validity and enforceability of any remaining provisions. There is no joint venture, partnership,
              employment or agency relationship created between you and us as a result of these Legal Terms or use of
              the Services. You agree that these Legal Terms will not be construed against us by virtue of having
              drafted them. You hereby waive any and all defences you may have based on the electronic form of these
              Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold text-foreground mb-4">20. CONTACT US</h2>
            <p className="leading-relaxed mb-4">
              In order to resolve a complaint regarding the Services or to receive further information regarding use of
              the Services, please contact us at:
            </p>
            <p className="leading-relaxed">
              <strong>Study Austria</strong>
              <br />
              <a href="mailto:mishraumang288@gmail.com" className="text-red-600 hover:underline">
                mishraumang288@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
