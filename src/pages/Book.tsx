import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Phone, Shield, Clock } from "lucide-react";
import { NICHES, STATES } from "@/lib/types";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const callBenefits = [
  "Discover your niche-specific growth opportunities",
  "Get a custom pricing recommendation for your market",
  "See a live demo of the LeadVerse AI platform",
  "Walk away with an actionable 30-day growth plan",
];

export default function Book() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Book Your Free <span className="text-gradient-primary">Strategy Call</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
              30 minutes. Zero pressure. Walk away with a custom growth plan for your service business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">What Happens on the Call</h2>
              <ul className="space-y-4 mb-8">
                {callBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Calendar Placeholder */}
              <div className="bg-muted rounded-xl border border-border p-12 text-center mb-6">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground font-medium">Calendar Integration</p>
                <p className="text-xs text-muted-foreground mt-1">Calendly / Cal.com embed goes here</p>
              </div>

              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 30 min</div>
                <div className="flex items-center gap-1.5"><Phone className="h-4 w-4" /> Video or phone</div>
                <div className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> No obligation</div>
              </div>
            </motion.div>

            {/* Right: Form Fallback */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-display font-semibold text-lg mb-1 text-foreground">Can't find a time?</h3>
                <p className="text-sm text-muted-foreground mb-6">Fill out the form and we'll reach out within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">We'll Be in Touch!</h3>
                    <p className="text-sm text-muted-foreground">Expect a call or email within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <input placeholder="Your Name" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                    <input type="email" placeholder="Email" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                    <input type="tel" placeholder="Phone" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                    <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                      <option value="">Select Your Industry</option>
                      {NICHES.map((n) => <option key={n}>{n}</option>)}
                    </select>
                    <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                      <option value="">Select Your State</option>
                      {STATES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                      <option value="">Preferred Time</option>
                      <option>Morning (9am - 12pm)</option>
                      <option>Afternoon (12pm - 5pm)</option>
                      <option>Evening (5pm - 8pm)</option>
                    </select>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Request a Call <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
