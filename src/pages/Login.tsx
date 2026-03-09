import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, Lock } from "lucide-react";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Login() {
  const [tab, setTab] = useState<"client" | "admin">("client");

  return (
    <div className="min-h-screen bg-hero flex items-center justify-center p-4">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-display font-bold text-2xl text-primary-foreground mb-2">
            <Zap className="h-7 w-7 text-accent" />
            LeadVerse AI
          </Link>
          <p className="text-sm text-primary-foreground/50">Sign in to your account</p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
          {/* Tabs */}
          <div className="flex rounded-lg bg-muted p-1 mb-6">
            <button onClick={() => setTab("client")}
              className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors ${tab === "client" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
            >Client Login</button>
            <button onClick={() => setTab("admin")}
              className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors ${tab === "admin" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
            >Admin Login</button>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            window.location.href = tab === "admin" ? "/admin" : "/dashboard";
          }} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input type="email" placeholder="you@company.com" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Password</label>
              <input type="password" placeholder="••••••••" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="rounded" /> Remember me
              </label>
              <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Lock className="h-4 w-4 mr-1" /> Sign In
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Don't have an account?{" "}
            <Link to="/book" className="text-primary hover:underline font-medium">Book a demo</Link>
          </p>
        </div>

        <p className="text-center text-xs text-primary-foreground/30 mt-6">
          © 2026 LeadVerse AI. Secure login powered by industry-standard encryption.
        </p>
      </motion.div>
    </div>
  );
}
