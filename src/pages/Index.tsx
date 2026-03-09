import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Zap, TrendingUp, Phone, Clock, Bot, BarChart3, Shield, CheckCircle2, ArrowRight, Star, ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

function Hero() {
  return (
    <section className="bg-hero pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(220_80%_50%/0.15),transparent_60%)]" />
      <div className="container relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <Zap className="h-4 w-4 text-cyan" />
            <span className="text-xs font-medium text-cyan">AI-Powered Growth Engine</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-primary-foreground">
            Stop Losing Leads.<br />
            <span className="text-gradient-primary">Start Growing Revenue.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            LeadVerse AI captures, qualifies, and books leads for home-service businesses — automatically. More booked jobs. Fewer missed calls. Better ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button variant="hero" size="xl">Book a Demo <ArrowRight className="ml-1 h-5 w-5" /></Button>
            </Link>
            <Link to="/pricing">
              <Button variant="hero-outline" size="xl">See How It Works</Button>
            </Link>
          </div>
          <p className="text-xs text-primary-foreground/40 mt-6">No contracts. Custom plans by niche. Results in 30 days.</p>
        </motion.div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: TrendingUp, title: "More Booked Jobs", desc: "AI follow-up converts leads 3x faster than manual outreach." },
  { icon: Phone, title: "Fewer Missed Calls", desc: "24/7 AI receptionist captures every inquiry, day and night." },
  { icon: Clock, title: "Faster Response Time", desc: "Respond to leads in under 60 seconds — before your competitors." },
  { icon: Bot, title: "AI-Powered Follow-Up", desc: "Automated SMS, email, and voicemail drops that sound human." },
  { icon: BarChart3, title: "Better ROI Tracking", desc: "See exactly which campaigns generate revenue, not just clicks." },
  { icon: Shield, title: "Built for Your Niche", desc: "Custom-tuned for roofing, HVAC, plumbing, restoration, and more." },
];

function Benefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">Why Service Businesses Choose LeadVerse AI</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to capture more leads, book more jobs, and grow faster — powered by AI.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  "AI Lead Capture & Qualification",
  "Automated SMS & Email Follow-Up",
  "Missed Call Text-Back",
  "AI Appointment Booking",
  "Review Generation Campaigns",
  "Pipeline & CRM Management",
  "Performance Dashboards",
  "Niche-Specific Ad Templates",
];

function Services() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">Everything Your Business Needs to Dominate Locally</h2>
            <p className="text-muted-foreground text-lg mb-8">One platform. All the tools. Custom-built for home-service businesses that want to scale.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{s}</span>
                </div>
              ))}
            </div>
            <Link to="/pricing" className="inline-block mt-8">
              <Button variant="cta" size="lg">Get My Custom Plan <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <span className="text-sm font-medium text-foreground">New leads this week</span>
                <span className="text-2xl font-bold font-display text-primary">47</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <span className="text-sm font-medium text-foreground">Calls booked</span>
                <span className="text-2xl font-bold font-display text-success">12</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <span className="text-sm font-medium text-foreground">Response rate</span>
                <span className="text-2xl font-bold font-display text-accent">94%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/10">
                <span className="text-sm font-medium text-foreground">Est. revenue generated</span>
                <span className="text-2xl font-bold font-display text-primary">$28,400</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: "01", title: "Choose Your Niche", desc: "Select your industry — roofing, HVAC, plumbing, restoration, and more. We customize everything." },
  { num: "02", title: "We Build Your System", desc: "Our team deploys your AI lead engine, landing pages, automations, and tracking in days." },
  { num: "03", title: "Leads Start Flowing", desc: "Qualified leads land in your pipeline. AI follows up instantly. You just show up and close." },
];

function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-muted-foreground text-lg">Three steps. Zero complexity. Real results.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-6xl font-display font-bold text-primary/10 mb-4">{s.num}</div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "James M.", business: "Morrison Roofing Co.", state: "FL", quote: "We went from 10 leads a month to over 60. LeadVerse AI paid for itself in the first week.", rating: 5 },
  { name: "Sarah C.", business: "CoolBreeze HVAC", state: "TX", quote: "The AI follow-up is a game-changer. We're booking 3x more calls without hiring anyone new.", rating: 5 },
  { name: "Mike T.", business: "FloodGuard Restoration", state: "GA", quote: "Best investment we've made. Our response time went from hours to seconds. Revenue is up 40%.", rating: 5 },
];

function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">Trusted by Service Business Owners</h2>
          <p className="text-muted-foreground text-lg">Real results from real businesses.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business} · {t.state}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What industries do you serve?", a: "We specialize in home-service businesses: roofing, HVAC, plumbing, water damage restoration, electricians, cleaning companies, landscaping, auto repair, and real estate services." },
  { q: "How quickly can I see results?", a: "Most clients see their first qualified leads within 7 days. Our AI systems are deployed within 48 hours of onboarding." },
  { q: "Do I need to sign a long-term contract?", a: "No. We work on month-to-month agreements. We earn your business every month with results, not contracts." },
  { q: "How does pricing work?", a: "Pricing is customized by your niche and market. Most plans center around $4,000/month with premium options for high-value markets. Book a call to get your custom quote." },
  { q: "What's included in the service?", a: "AI lead capture, automated follow-up (SMS, email, voicemail), appointment booking, pipeline management, performance dashboards, and a dedicated growth strategist." },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium text-foreground text-sm">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(195_90%_50%/0.1),transparent_60%)]" />
      <div className="container relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto mb-10">
            Join dozens of service businesses already growing with LeadVerse AI. Your competitors are. Will you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button variant="hero" size="xl">Start Growing Today <ArrowRight className="ml-1 h-5 w-5" /></Button>
            </Link>
            <Link to="/pricing">
              <Button variant="hero-outline" size="xl">Get My Custom Plan</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
