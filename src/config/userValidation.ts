import { z } from "zod";

export const userValidationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),

  lastName: z.string().min(2, "Last name must be at least 2 characters"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be 10 digits"),

  email: z.string().email("Invalid email address"),
});

export type UserFormData = z.infer<typeof userValidationSchema>;
