import { z } from "zod";

export const topicSchema = z.object({
  topic: z
    .string()
    .min(2, { message: "Topic must be at least 2 characters long" }),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters long" })
    .max(255, { message: "Description must be less than 255 characters" }),
  grade: z.string(),
});
