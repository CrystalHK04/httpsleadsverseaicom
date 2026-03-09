import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  business: z.string().trim().min(2, "Business name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone number required").max(20),
  website: z.string().trim().url("Must be a valid URL").optional().or(z.literal("")),
  niche: z.string().min(1, "Please select your industry"),
  state: z.string().min(1, "Please select your state"),
});

export const pricingFormSchema = leadFormSchema.extend({
  revenue_range: z.string().min(1, "Select your revenue range"),
  goals: z.string().trim().max(500).optional(),
});

export const bookingFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone number required").max(20),
  niche: z.string().min(1, "Please select your industry"),
  state: z.string().min(1, "Please select your state"),
  preferred_time: z.string().optional(),
});

export const checkoutSchema = z.object({
  business_name: z.string().trim().min(2, "Business name is required"),
  contact_name: z.string().trim().min(2, "Contact name is required"),
  contact_email: z.string().trim().email("Valid email required"),
  contact_phone: z.string().trim().min(7, "Valid phone required"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type PricingFormData = z.infer<typeof pricingFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
export type CheckoutFormData = z.infer<typeof checkoutSchema>;
