import type { Niche, USState } from "./types";

const DEFAULT_PRICE = 4000;

// Niche multipliers — high-value niches cost more
const NICHE_MULTIPLIERS: Record<string, number> = {
  "Water Damage Restoration": 1.35,
  "Roofing": 1.25,
  "HVAC": 1.15,
  "Plumbing": 1.0,
  "Electrician": 1.0,
  "Cleaning Company": 0.85,
  "Landscaping": 0.85,
  "Auto Repair": 0.95,
  "Real Estate": 1.20,
};

// State multipliers — high-cost markets price higher
const STATE_MULTIPLIERS: Record<string, number> = {
  "Florida": 1.15,
  "Texas": 1.10,
  "Georgia": 1.0,
  "North Carolina": 0.95,
  "Arizona": 1.05,
  "Ohio": 0.90,
  "Pennsylvania": 1.0,
};

export function getRecommendedPrice(niche: string, state: string) {
  const nicheMultiplier = NICHE_MULTIPLIERS[niche] ?? 1.0;
  const stateMultiplier = STATE_MULTIPLIERS[state] ?? 1.0;
  const multiplier = nicheMultiplier * stateMultiplier;
  const finalPrice = Math.round((DEFAULT_PRICE * multiplier) / 50) * 50; // Round to nearest 50

  let explanation = `Based on ${niche} in ${state}: `;
  if (multiplier > 1.1) {
    explanation += "This is a high-value market with strong demand. Premium pricing reflects the competitive landscape and high ticket values.";
  } else if (multiplier < 0.95) {
    explanation += "This market has moderate competition. Pricing is optimized for strong ROI while remaining accessible.";
  } else {
    explanation += "Standard market pricing delivers excellent value with proven ROI for your industry.";
  }

  return {
    base_price: DEFAULT_PRICE,
    niche_multiplier: nicheMultiplier,
    state_multiplier: stateMultiplier,
    final_price: finalPrice,
    explanation,
  };
}
