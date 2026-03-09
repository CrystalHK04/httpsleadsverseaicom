import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Shield, ArrowRight, CreditCard, Lock } from "lucide-react";
import { getRecommendedPrice } from "@/lib/pricing";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "Growth";
  const niche = searchParams.get("niche") || "";
  const state = searchParams.get("state") || "";
  const priceParam = searchParams.get("price");
  const price = priceParam ? parseInt(priceParam) : (niche && state ? getRecommendedPrice(niche, state).final_price : 4000);

  const [status, setStatus] = useState<"form" | "success" | "error">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Stripe checkout
    setStatus("success");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 md:pt-36">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
            {status === "success" ? (
              <div className="text-center py-20">
                <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-6" />
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Welcome to LeadVerse AI!</h1>
                <p className="text-muted-foreground text-lg mb-2">Your {plan} plan is confirmed.</p>
                <p className="text-sm text-muted-foreground mb-8">Our team will reach out within 24 hours to begin your onboarding.</p>
                <Link to="/dashboard"><Button variant="cta" size="lg">Go to Dashboard <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
              </div>
            ) : status === "error" ? (
              <div className="text-center py-20">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="h-8 w-8 text-destructive" />
                </div>
                <h1 className="font-display text-3xl font-bold text-foreground mb-4">Payment Failed</h1>
                <p className="text-muted-foreground mb-8">Something went wrong. Please try again or contact support.</p>
                <Button variant="outline" size="lg" onClick={() => setStatus("form")}>Try Again</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Order Summary */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                    <h2 className="font-display font-bold text-lg mb-4 text-foreground">Order Summary</h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between"><span className="text-muted-foreground">Plan</span><span className="font-semibold text-foreground">{plan}</span></div>
                      {niche && <div className="flex justify-between"><span className="text-muted-foreground">Industry</span><span className="font-semibold text-foreground">{niche}</span></div>}
                      {state && <div className="flex justify-between"><span className="text-muted-foreground">State</span><span className="font-semibold text-foreground">{state}</span></div>}
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="text-muted-foreground">Monthly Investment</span>
                        <span className="text-2xl font-display font-bold text-foreground">${price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      30-day money-back guarantee
                    </div>
                  </div>
                </div>

                {/* Checkout Form */}
                <div className="lg:col-span-3">
                  <h1 className="font-display text-2xl font-bold mb-6 text-foreground">Complete Your Setup</h1>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Contact Name</label>
                        <input required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Business Name</label>
                        <input required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                        <input type="email" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone</label>
                        <input type="tel" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                      </div>
                    </div>

                    {/* Stripe placeholder */}
                    <div className="bg-muted rounded-xl border border-border p-8 text-center">
                      <Lock className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground font-medium">Stripe Payment Element</p>
                      <p className="text-xs text-muted-foreground mt-1">Secure payment processing goes here</p>
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full">
                      Start My {plan} Plan — ${price.toLocaleString()}/mo <ArrowRight className="ml-1 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">Cancel anytime. No long-term contracts.</p>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
