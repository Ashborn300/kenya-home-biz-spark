import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">← Back to Home</Link>
      
      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">1. Information We Collect</h2>
          <p>When you purchase our guide, we collect your phone number (for M-Pesa payment processing), email address, and WhatsApp number (for guide delivery). We do not collect any other personal information.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">2. How We Use Your Information</h2>
          <p>Your information is used solely to process your payment via M-Pesa and deliver the purchased digital guide to you via email or WhatsApp. We do not use your information for any other purpose.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">3. Data Sharing</h2>
          <p>We do not sell, trade, or share your personal information with third parties. Payment processing is handled securely through M-Pesa.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at the email address below.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-foreground">6. Contact</h2>
          <p>For any privacy-related questions, contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:joshuamakizo@gmail.com" className="text-primary hover:underline">joshuamakizo@gmail.com</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/254712345678" className="text-primary hover:underline">+254 712 345 678</a></p>
        </section>
      </div>
    </div>
  </main>
);

export default PrivacyPolicy;
