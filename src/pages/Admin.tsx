import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Users, DollarSign, TrendingUp, Zap, ArrowRight, AlertTriangle, CheckCircle2,
  BarChart3, Globe, Activity, CreditCard, Webhook, Heart,
} from "lucide-react";
import { mockClients, mockWebhookLogs, mockActivity, mockAdminMetrics } from "@/lib/mockData";
import Navbar from "@/components/Navbar";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const adminCards = [
  { label: "Total Clients", value: "24", icon: Users, color: "text-primary" },
  { label: "MRR", value: "$98,400", icon: DollarSign, color: "text-success" },
  { label: "Total Leads", value: "1,247", icon: TrendingUp, color: "text-accent" },
  { label: "Active Campaigns", value: "18", icon: Zap, color: "text-warning" },
];

const topNiches = [
  { niche: "Water Damage Restoration", clients: 6, mrr: 32400 },
  { niche: "Roofing", clients: 5, mrr: 28750 },
  { niche: "HVAC", clients: 5, mrr: 25250 },
  { niche: "Plumbing", clients: 4, mrr: 16000 },
  { niche: "Cleaning Company", clients: 4, mrr: 13000 },
];

const healthColors: Record<string, string> = {
  good: "text-success",
  warning: "text-warning",
  critical: "text-destructive",
};

function getHealth(score: number) {
  if (score >= 80) return "good";
  if (score >= 60) return "warning";
  return "critical";
}

export default function Admin() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Command Center</h1>
            <p className="text-sm text-muted-foreground">LeadVerse AI Admin Dashboard — your business at a glance.</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {adminCards.map((m, i) => (
              <motion.div key={m.label} initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-5"
              >
                <m.icon className={`h-6 w-6 ${m.color} mb-3`} />
                <p className="text-3xl font-display font-bold text-foreground">{m.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Clients Table */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl border border-border">
                <div className="p-4 border-b border-border">
                  <h2 className="font-display font-semibold text-foreground">Client Health</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-muted-foreground border-b border-border">
                        <th className="text-left p-3 font-medium">Client</th>
                        <th className="text-left p-3 font-medium hidden sm:table-cell">Niche</th>
                        <th className="text-left p-3 font-medium">Plan</th>
                        <th className="text-left p-3 font-medium hidden sm:table-cell">MRR</th>
                        <th className="text-left p-3 font-medium">Health</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockClients.map((c) => (
                        <tr key={c.id} className="border-b border-border/50 last:border-0 hover:bg-muted/30">
                          <td className="p-3">
                            <p className="text-sm font-medium text-foreground">{c.business_name}</p>
                            <p className="text-xs text-muted-foreground">{c.contact_name}</p>
                          </td>
                          <td className="p-3 text-sm text-foreground hidden sm:table-cell">{c.niche}</td>
                          <td className="p-3"><span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">{c.plan}</span></td>
                          <td className="p-3 text-sm font-semibold text-foreground hidden sm:table-cell">${c.monthly_price.toLocaleString()}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <Heart className={`h-4 w-4 ${healthColors[getHealth(c.health_score)]}`} />
                              <span className={`text-sm font-semibold ${healthColors[getHealth(c.health_score)]}`}>{c.health_score}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Webhook Logs */}
              <div className="bg-card rounded-xl border border-border">
                <div className="p-4 border-b border-border flex items-center gap-2">
                  <Webhook className="h-4 w-4 text-muted-foreground" />
                  <h2 className="font-display font-semibold text-foreground">Webhook Activity</h2>
                </div>
                <div className="divide-y divide-border/50">
                  {mockWebhookLogs.map((w) => (
                    <div key={w.id} className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full ${w.status === "success" ? "bg-success" : w.status === "failed" ? "bg-destructive" : "bg-warning"}`} />
                        <div>
                          <p className="text-xs font-medium text-foreground">{w.source} — {w.event_type}</p>
                          <p className="text-[10px] text-muted-foreground">{new Date(w.created_at).toLocaleString()}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-medium ${w.status === "success" ? "text-success" : w.status === "failed" ? "text-destructive" : "text-warning"}`}>
                        {w.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Top Niches */}
              <div className="bg-card rounded-xl border border-border p-4">
                <h3 className="font-display font-semibold text-foreground text-sm mb-4">Top Performing Niches</h3>
                <div className="space-y-3">
                  {topNiches.map((n, i) => (
                    <div key={n.niche} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground w-4">{i + 1}</span>
                        <span className="text-sm text-foreground">{n.niche}</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">${(n.mrr / 1000).toFixed(1)}k</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <h3 className="font-display font-semibold text-foreground text-sm">Alerts</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-warning/5 rounded-lg border border-warning/10">
                    <p className="text-xs font-medium text-foreground">Payment failed — GreenScape Lawns</p>
                    <p className="text-[10px] text-muted-foreground">Retry scheduled for tomorrow</p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-xs font-medium text-foreground">New signup pending onboarding</p>
                    <p className="text-[10px] text-muted-foreground">CoolBreeze HVAC — awaiting setup</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-xl border border-border p-4">
                <h3 className="font-display font-semibold text-foreground text-sm mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {mockActivity.map((a) => (
                    <div key={a.id} className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-foreground">{a.message}</p>
                        <p className="text-[10px] text-muted-foreground">{new Date(a.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Onboarding Pipeline */}
              <div className="bg-card rounded-xl border border-border p-4">
                <h3 className="font-display font-semibold text-foreground text-sm mb-4">Onboarding Pipeline</h3>
                <div className="space-y-2">
                  {[{ stage: "Discovery Call", count: 3 }, { stage: "Setup In Progress", count: 2 }, { stage: "Live — Week 1", count: 1 }].map((s) => (
                    <div key={s.stage} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                      <span className="text-xs text-foreground">{s.stage}</span>
                      <span className="text-xs font-bold text-primary">{s.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
