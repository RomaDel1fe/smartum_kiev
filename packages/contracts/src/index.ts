import { z } from "zod";

export const healthResponseSchema = z.object({
  status: z.literal("ok"),
  service: z.literal("smartum-api"),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;

export const courseTeacherSchema = z.object({
  name: z.string().trim().min(1),
  role: z.string().trim().min(1),
  bio: z.string().trim().min(1),
  photoUrl: z.url().optional(),
});

export const courseReviewSchema = z.object({
  author: z.string().trim().min(1),
  text: z.string().trim().min(1),
  rating: z.number().int().min(1).max(5),
  childAge: z.string().trim().optional(),
});

export const coursePriceSchema = z.object({
  title: z.string().trim().min(1),
  amount: z.number().int().nonnegative(),
  currency: z.literal("UAH").default("UAH"),
  period: z.string().trim().min(1),
  description: z.string().trim().optional(),
});

export const learningFormatSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  durationMinutes: z.number().int().positive().optional(),
  groupSize: z.string().trim().optional(),
});

export const courseSchema = z.object({
  id: z.string().optional(),
  slug: z.string().trim().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(1),
  age: z.string().trim().min(1),
  shortDescription: z.string().trim().min(1),
  fullDescription: z.string().trim().min(1),
  eyebrow: z.string().trim().min(1),
  symbol: z.string().trim().min(1),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  outcomes: z.array(z.string().trim().min(1)),
  program: z.array(z.string().trim().min(1)),
  teachers: z.array(courseTeacherSchema),
  reviews: z.array(courseReviewSchema),
  prices: z.array(coursePriceSchema),
  learningFormats: z.array(learningFormatSchema),
  isPublished: z.boolean().default(false),
});

export const createCourseSchema = courseSchema.omit({ id: true });
export const updateCourseSchema = createCourseSchema.partial();

export type Course = z.infer<typeof courseSchema>;
export type CreateCourse = z.infer<typeof createCourseSchema>;
export type UpdateCourse = z.infer<typeof updateCourseSchema>;
