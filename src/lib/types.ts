export interface Lead {
  id: string;
  name: string;
  business: string;
  phone: string;
  email: string;
  website?: string;
  niche: string;
  state: string;
  source_page: string;
  selected_plan?: string;
  recommended_price?: number;
  notes?: string;
  status: "new" | "contacted" | "qualified" | "booked" | "closed" | "lost";
  created_at: string;
}

export interface PricingRule {
  id: string;
  niche: string;
  state: string;
  base_price: number;
  multiplier: number;
  final_price: number;
  explanation: string;
}

export interface Client {
  id: string;
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  niche: string;
  state: string;
  plan: string;
  monthly_price: number;
  status: "active" | "onboarding" | "churned" | "paused";
  joined_at: string;
  health_score: number;
}

export interface WebhookLog {
  id: string;
  source: string;
  event_type: string;
  payload: string;
  status: "success" | "failed" | "pending";
  created_at: string;
}

export interface ActivityLog {
  id: string;
  type: string;
  message: string;
  created_at: string;
}

export interface DashboardMetrics {
  leads_captured: number;
  booked_calls: number;
  missed_calls: number;
  response_rate: number;
  roi_estimate: number;
}

export interface AdminMetrics {
  total_clients: number;
  mrr: number;
  total_leads: number;
  active_campaigns: number;
}

export const NICHES = [
  "Water Damage Restoration",
  "Roofing",
  "HVAC",
  "Plumbing",
  "Electrician",
  "Cleaning Company",
  "Landscaping",
  "Auto Repair",
  "Real Estate",
] as const;

export const STATES = [
  "Florida",
  "Texas",
  "Georgia",
  "North Carolina",
  "Arizona",
  "Ohio",
  "Pennsylvania",
] as const;

export type Niche = (typeof NICHES)[number];
export type USState = (typeof STATES)[number];
