import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NICHES, STATES } from "@/lib/types";
import { getRecommendedPrice } from "@/lib/pricing";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const plans = [
  {
    name: "Starter",
    desc: "For businesses ready to start capturing leads consistently.",
    features: ["AI Lead Capture", "Automated Follow-Up (SMS)", "Basic Pipeline Dashboard", "Missed Call Text-Back", "Monthly Strategy Call", "Email Support"],
    highlight: false,
  },
  {
    name: "Growth",
    desc: "For businesses scaling aggressively and booking more jobs.",
    features: ["Everything in Starter", "AI Appointment Booking", "Multi-Channel Follow-Up", "Review Generation Campaigns", "Advanced Analytics", "Dedicated Growth Strategist", "Priority Support"],
    highlight: true,
  },
  {
    name: "Premium",
    desc: "Full-service AI growth engine for market dominators.",
    features: ["Everything in Growth", "Custom Landing Pages", "AI Voice Agent", "Full CRM Integration", "Ad Campaign Management", "White-Glove Onboarding", "24/7 Priority Support"],
    highlight: false,
  },
];

const planMultipliers: Record<string, number> = { Starter: 0.75, Growth: 1.0, Premium: 1.35 };

export default function Pricing() {
  const [searchParams] = useSearchParams();
  const [niche, setNiche] = useState(searchParams.get("niche") || "");
  const [state, setState] = useState(searchParams.get("state") || "");
  const [formOpen, setFormOpen] = useState(false);

  const rec = niche && state ? getRecommendedPrice(niche, state) : null;

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="bg-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Transparent Pricing. <span className="text-gradient-primary">Real ROI.</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
              Custom pricing by niche and market. Every plan delivers more leads, more bookings, and measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Niche Selector */}
      <section className="py-12 bg-muted/50">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="font-display font-semibold text-lg mb-4 text-foreground text-center">Get Your Custom Price</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Industry</label>
                <select value={niche} onChange={(e) => setNiche(e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
                  <option value="">Select niche...</option>
                  {NICHES.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your State</label>
                <select value={state} onChange={(e) => setState(e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
                  <option value="">Select state...</option>
                  {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            {rec && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground">{rec.explanation}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => {
              const price = rec ? Math.round((rec.final_price * planMultipliers[plan.name]) / 50) * 50 : Math.round((4000 * planMultipliers[plan.name]) / 50) * 50;
              return (
                <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border p-8 flex flex-col ${plan.highlight ? "border-primary bg-primary/5 shadow-glow relative" : "border-border bg-card"}`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold text-foreground">${price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/checkout?plan=${plan.name}&niche=${encodeURIComponent(niche)}&state=${encodeURIComponent(state)}&price=${price}`}>
                    <Button variant={plan.highlight ? "hero" : "outline"} className="w-full" size="lg">
                      Get Started <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">All prices are custom by niche and state. Book a call for a personalized quote.</p>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold mb-4 text-foreground">Want a Custom Plan?</h2>
          <p className="text-muted-foreground mb-8">Tell us about your business and we'll build a growth plan tailored to your goals.</p>
          <Button variant="cta" size="lg" onClick={() => setFormOpen(!formOpen)}>
            {formOpen ? "Close Form" : "Get My Custom Plan"} <Zap className="ml-1 h-4 w-4" />
          </Button>
          {formOpen && <PricingForm niche={niche} state={state} />}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PricingForm({ niche, state }: { niche: string; state: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 p-8 bg-card rounded-xl border border-border">
        <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
        <h3 className="font-display font-bold text-xl text-foreground mb-2">Request Received!</h3>
        <p className="text-muted-foreground text-sm">Our team will reach out within 24 hours with your custom growth plan.</p>
      </motion.div>
    );
  }

  return (
    <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="mt-8 bg-card rounded-xl border border-border p-6 text-left space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input placeholder="Your Name" required className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
        <input placeholder="Business Name" required className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
        <input type="email" placeholder="Email" required className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
        <input type="tel" placeholder="Phone" required className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
        <input placeholder="Website (optional)" className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
        <select defaultValue={niche} className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
          <option value="">Select Niche</option>
          {NICHES.map((n) => <option key={n}>{n}</option>)}
        </select>
        <select defaultValue={state} className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
          <option value="">Select State</option>
          {STATES.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
          <option value="">Monthly Revenue</option>
          <option>Under $10k</option>
          <option>$10k - $25k</option>
          <option>$25k - $50k</option>
          <option>$50k - $100k</option>
          <option>$100k+</option>
        </select>
      </div>
      <textarea placeholder="Your growth goals (optional)" rows={3} className="w-full rounded-lg border border-input bg-background p-3 text-sm" />
      <Button type="submit" variant="hero" size="lg" className="w-full">Submit Request <ArrowRight className="ml-1 h-4 w-4" /></Button>
    </motion.form>
  );
}
