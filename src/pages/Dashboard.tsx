import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Phone, PhoneMissed, Clock, DollarSign, Plus, Download, Settings, FileText,
  TrendingUp, Users, Zap, ArrowRight, Bot, Bell,
} from "lucide-react";
import { mockLeads, mockDashboardMetrics, mockActivity } from "@/lib/mockData";
import Navbar from "@/components/Navbar";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const metricCards = [
  { label: "Leads Captured", value: "147", icon: Users, change: "+23%", color: "text-primary" },
  { label: "Booked Calls", value: "38", icon: Phone, change: "+15%", color: "text-success" },
  { label: "Missed Calls", value: "5", icon: PhoneMissed, change: "-40%", color: "text-destructive" },
  { label: "Response Rate", value: "94%", icon: Clock, change: "+8%", color: "text-accent" },
  { label: "Est. ROI", value: "12.4x", icon: DollarSign, change: "+2.1x", color: "text-warning" },
];

const statusColors: Record<string, string> = {
  new: "bg-primary/10 text-primary",
  contacted: "bg-warning/10 text-warning",
  qualified: "bg-accent/10 text-accent",
  booked: "bg-success/10 text-success",
  closed: "bg-muted text-muted-foreground",
  lost: "bg-destructive/10 text-destructive",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back. Here's your growth snapshot.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm"><Plus className="h-4 w-4 mr-1" /> Add Lead</Button>
              <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export</Button>
              <Button variant="outline" size="sm"><Settings className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {metricCards.map((m, i) => (
              <motion.div key={m.label} initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <m.icon className={`h-5 w-5 ${m.color}`} />
                  <span className="text-xs font-medium text-success">{m.change}</span>
                </div>
                <p className="text-2xl font-display font-bold text-foreground">{m.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Leads */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border">
              <div className="p-4 border-b border-border flex justify-between items-center">
                <h2 className="font-display font-semibold text-foreground">Recent Leads</h2>
                <Button variant="ghost" size="sm">View All <ArrowRight className="ml-1 h-3 w-3" /></Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-muted-foreground border-b border-border">
                      <th className="text-left p-3 font-medium">Name</th>
                      <th className="text-left p-3 font-medium hidden sm:table-cell">Business</th>
                      <th className="text-left p-3 font-medium hidden md:table-cell">Niche</th>
                      <th className="text-left p-3 font-medium">Status</th>
                      <th className="text-left p-3 font-medium hidden sm:table-cell">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <p className="text-sm font-medium text-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">{lead.email}</p>
                        </td>
                        <td className="p-3 text-sm text-foreground hidden sm:table-cell">{lead.business}</td>
                        <td className="p-3 text-sm text-foreground hidden md:table-cell">{lead.niche}</td>
                        <td className="p-3">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[lead.status]}`}>{lead.status}</span>
                        </td>
                        <td className="p-3 text-xs text-muted-foreground hidden sm:table-cell">{lead.source_page}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {mockLeads.length === 0 && (
                <div className="p-12 text-center">
                  <Users className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">No leads yet. They'll appear here as they come in.</p>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* AI Recommendations */}
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground text-sm">AI Recommendations</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-xs font-medium text-foreground">Follow up with David Kim</p>
                    <p className="text-xs text-muted-foreground mt-0.5">New lead hasn't been contacted. Send intro SMS.</p>
                  </div>
                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/10">
                    <p className="text-xs font-medium text-foreground">Increase ad spend in FL market</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Florida leads have 3x higher close rate this month.</p>
                  </div>
                  <div className="p-3 bg-success/5 rounded-lg border border-success/10">
                    <p className="text-xs font-medium text-foreground">Request review from Lisa Patel</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Job completed 3 days ago. Ideal review timing.</p>
                  </div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-semibold text-foreground text-sm">Activity</h3>
                </div>
                <div className="space-y-3">
                  {mockActivity.slice(0, 4).map((a) => (
                    <div key={a.id} className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-foreground">{a.message}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{new Date(a.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Chart Placeholder */}
              <div className="bg-card rounded-xl border border-border p-4">
                <h3 className="font-display font-semibold text-foreground text-sm mb-4">Performance</h3>
                <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 text-muted-foreground/40 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Chart placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
