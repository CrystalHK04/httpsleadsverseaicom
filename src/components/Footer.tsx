import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <Zap className="h-6 w-6 text-accent" />
              LeadVerse AI
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              AI-Powered Growth Engine for Home-Service Businesses. More leads. More bookings. Less stress.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Product</h4>
            <div className="space-y-3">
              <Link to="/pricing" className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">Pricing</Link>
              <Link to="/book" className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">Book a Demo</Link>
              <Link to="/dashboard" className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">Dashboard</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Industries</h4>
            <div className="space-y-3">
              {["Roofing", "HVAC", "Plumbing", "Water Damage", "Electricians"].map((n) => (
                <span key={n} className="block text-sm text-primary-foreground/70">{n}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Company</h4>
            <div className="space-y-3">
              <Link to="/login" className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">Client Login</Link>
              <Link to="/admin" className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">Admin</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">© 2026 LeadVerse AI. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">Built for service businesses that want to grow.</p>
        </div>
      </div>
    </footer>
  );
}
