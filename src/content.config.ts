import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sharedFields = {
  title: z.string(),
  description: z.string(),
  h1: z.string().optional(),
  pillar: z.enum([
    "elajnery",
    "brekety",
    "prikus",
    "ortodont",
    "gnatologiya",
    "detskaya-ortodontiya",
    "retentsiya",
    "klinika",
    "o-nas",
    "home",
  ]),
  priority: z.number().min(1).max(5).default(3),
  exact_volume_total: z.number().int().nonnegative().default(0),
  primary_keywords: z.array(z.string()).default([]),
  secondary_keywords: z.array(z.string()).default([]),
  schema: z
    .enum(["Article", "MedicalProcedure", "MedicalWebPage", "FAQPage", "LocalBusiness"])
    .default("MedicalWebPage"),
  noindex: z.boolean().default(true),
  updated: z.coerce.date().optional(),
};

const cluster = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cluster" }),
  schema: z.object({
    ...sharedFields,
    parent: z.string().optional(),
  }),
});

const brand = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/brand" }),
  schema: z.object({
    ...sharedFields,
    brand_name: z.string(),
    brand_type: z.enum(["aligners", "braces"]),
    manufacturer: z.string().optional(),
  }),
});

export const collections = { cluster, brand };
