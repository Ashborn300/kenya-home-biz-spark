import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">← Back to Home</Link>

      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-10">Last updated: February 17, 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">1. Introduction</h2>
          <p>Welcome to <strong>Learn How</strong> ("we", "us", "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it when you visit our website or purchase our digital products.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">2. Information We Collect</h2>
          <p>We collect the following personal information when you make a purchase:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Phone number</strong> — required for M-Pesa payment processing</li>
            <li><strong>Email address</strong> — used for guide delivery and order confirmation</li>
            <li><strong>WhatsApp number</strong> — used as an alternative delivery channel for your purchased guide</li>
            <li><strong>Country of residence</strong> — used to determine applicable pricing</li>
          </ul>
          <p>We also automatically collect certain technical data when you visit our website:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referral source (how you found our website)</li>
            <li>Device type and screen resolution</li>
          </ul>
          <p>We do <strong>not</strong> collect passwords, financial account details, or any sensitive personal information beyond what is listed above.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">3. How We Use Your Information</h2>
          <p>Your personal information is used exclusively for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Processing your payment securely through M-Pesa</li>
            <li>Delivering the purchased digital guide to you via email or WhatsApp</li>
            <li>Sending order confirmations and purchase receipts</li>
            <li>Providing customer support related to your purchase</li>
            <li>Improving our website experience through anonymized analytics</li>
          </ul>
          <p>We do <strong>not</strong> use your information for unsolicited marketing, automated decision-making, or profiling.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">4. Legal Basis for Processing</h2>
          <p>We process your personal data based on the following legal grounds:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contractual necessity</strong> — to fulfill the purchase of the digital guide you ordered</li>
            <li><strong>Legitimate interest</strong> — to improve our services and prevent fraud</li>
            <li><strong>Consent</strong> — where you have given explicit consent for specific processing activities</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">5. Data Sharing & Third Parties</h2>
          <p>We do <strong>not</strong> sell, rent, or trade your personal information to any third party. Your data may be shared only with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>M-Pesa / Safaricom</strong> — to process mobile money payments securely</li>
            <li><strong>Hosting & infrastructure providers</strong> — who store data on our behalf under strict confidentiality agreements</li>
          </ul>
          <p>All third-party providers are contractually bound to protect your data and use it only for the specified purposes.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">6. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, typically:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Transaction records</strong> — retained for 2 years for accounting and dispute resolution</li>
            <li><strong>Contact information</strong> — retained until you request deletion</li>
            <li><strong>Analytics data</strong> — anonymized and retained indefinitely for statistical purposes</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">7. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>SSL/TLS encryption for all data transmitted between your browser and our servers</li>
            <li>Secure, encrypted database storage</li>
            <li>Access controls limiting who can view personal data</li>
            <li>Regular security reviews of our systems</li>
          </ul>
          <p>While we strive to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">8. Cookies & Tracking</h2>
          <p>Our website uses essential cookies required for the site to function properly. We also use basic analytics to understand how visitors interact with our site. We do <strong>not</strong> use advertising cookies or tracking pixels from social media platforms.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">9. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Rectification</strong> — request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion</strong> — request that we delete your personal data</li>
            <li><strong>Restriction</strong> — request that we limit how we use your data</li>
            <li><strong>Portability</strong> — request your data in a structured, machine-readable format</li>
            <li><strong>Objection</strong> — object to the processing of your data for certain purposes</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the details below. We will respond within 30 days.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">10. Children's Privacy</h2>
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">12. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:</p>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <p><strong>Joshua Makizo</strong> — Learn How</p>
            <p>📧 Email: <a href="mailto:joshuamakizo@gmail.com" className="text-primary hover:underline">joshuamakizo@gmail.com</a></p>
            <p>💬 WhatsApp: <a href="https://wa.me/243834126748" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+243 834 126 748</a></p>
          </div>
        </section>

      </div>
    </div>
  </main>
);

export default PrivacyPolicy;
