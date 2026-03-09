import type { Lead, Client, WebhookLog, ActivityLog, DashboardMetrics, AdminMetrics } from "./types";

export const mockLeads: Lead[] = [
  { id: "l1", name: "James Morrison", business: "Morrison Roofing Co.", phone: "(813) 555-0142", email: "james@morrisonroofing.com", niche: "Roofing", state: "Florida", source_page: "homepage", status: "new", created_at: "2026-03-09T10:30:00Z" },
  { id: "l2", name: "Sarah Chen", business: "CoolBreeze HVAC", phone: "(972) 555-0198", email: "sarah@coolbreezehvac.com", niche: "HVAC", state: "Texas", source_page: "pricing", status: "contacted", selected_plan: "Growth", recommended_price: 4400, created_at: "2026-03-08T15:45:00Z" },
  { id: "l3", name: "Mike Torres", business: "FloodGuard Restoration", phone: "(404) 555-0167", email: "mike@floodguard.com", niche: "Water Damage Restoration", state: "Georgia", source_page: "book-a-call", status: "qualified", selected_plan: "Premium", recommended_price: 5400, created_at: "2026-03-07T09:15:00Z" },
  { id: "l4", name: "Lisa Patel", business: "Sparkle Clean Co.", phone: "(614) 555-0123", email: "lisa@sparkleclean.com", niche: "Cleaning Company", state: "Ohio", source_page: "pricing", status: "booked", selected_plan: "Starter", recommended_price: 3050, created_at: "2026-03-06T14:20:00Z" },
  { id: "l5", name: "David Kim", business: "Kim Electric", phone: "(480) 555-0189", email: "david@kimelectric.com", niche: "Electrician", state: "Arizona", source_page: "homepage", status: "new", created_at: "2026-03-09T08:00:00Z" },
];

export const mockClients: Client[] = [
  { id: "c1", business_name: "Morrison Roofing Co.", contact_name: "James Morrison", email: "james@morrisonroofing.com", phone: "(813) 555-0142", niche: "Roofing", state: "Florida", plan: "Growth", monthly_price: 5750, status: "active", joined_at: "2025-11-15", health_score: 92 },
  { id: "c2", business_name: "FloodGuard Restoration", contact_name: "Mike Torres", email: "mike@floodguard.com", phone: "(404) 555-0167", niche: "Water Damage Restoration", state: "Georgia", plan: "Premium", monthly_price: 5400, status: "active", joined_at: "2025-12-01", health_score: 88 },
  { id: "c3", business_name: "CoolBreeze HVAC", contact_name: "Sarah Chen", email: "sarah@coolbreezehvac.com", phone: "(972) 555-0198", niche: "HVAC", state: "Texas", plan: "Growth", monthly_price: 5050, status: "onboarding", joined_at: "2026-02-20", health_score: 75 },
  { id: "c4", business_name: "GreenScape Lawns", contact_name: "Tom Bradley", email: "tom@greenscape.com", phone: "(704) 555-0145", niche: "Landscaping", state: "North Carolina", plan: "Starter", monthly_price: 3250, status: "active", joined_at: "2026-01-10", health_score: 85 },
];

export const mockWebhookLogs: WebhookLog[] = [
  { id: "w1", source: "Stripe", event_type: "checkout.session.completed", payload: '{"customer":"cus_abc","amount":5750}', status: "success", created_at: "2026-03-09T10:00:00Z" },
  { id: "w2", source: "GoHighLevel", event_type: "contact.created", payload: '{"contact_id":"gh_123","name":"New Lead"}', status: "success", created_at: "2026-03-09T09:30:00Z" },
  { id: "w3", source: "LeadForm", event_type: "form.submitted", payload: '{"name":"David Kim","niche":"Electrician"}', status: "success", created_at: "2026-03-09T08:00:00Z" },
  { id: "w4", source: "Stripe", event_type: "invoice.payment_failed", payload: '{"customer":"cus_xyz","amount":3250}', status: "failed", created_at: "2026-03-08T22:15:00Z" },
];

export const mockActivity: ActivityLog[] = [
  { id: "a1", type: "lead", message: "New lead captured: David Kim (Electrician, AZ)", created_at: "2026-03-09T08:00:00Z" },
  { id: "a2", type: "payment", message: "Payment received: Morrison Roofing Co. — $5,750", created_at: "2026-03-09T07:00:00Z" },
  { id: "a3", type: "call", message: "Strategy call booked: Sarah Chen — Mar 12, 2pm CT", created_at: "2026-03-08T15:45:00Z" },
  { id: "a4", type: "onboarding", message: "Onboarding started: CoolBreeze HVAC", created_at: "2026-03-08T14:00:00Z" },
  { id: "a5", type: "alert", message: "Payment failed: GreenScape Lawns — retry scheduled", created_at: "2026-03-08T22:15:00Z" },
];

export const mockDashboardMetrics: DashboardMetrics = {
  leads_captured: 147,
  booked_calls: 38,
  missed_calls: 5,
  response_rate: 94,
  roi_estimate: 12.4,
};

export const mockAdminMetrics: AdminMetrics = {
  total_clients: 24,
  mrr: 98400,
  total_leads: 1247,
  active_campaigns: 18,
};
