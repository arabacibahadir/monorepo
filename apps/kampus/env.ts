import { parseEnv, z } from "znv";

export const env = parseEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    GQL_URL: process.env.NEXT_PUBLIC_GQL_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    KAMPUS_ENV: process.env.NEXT_PUBLIC_KAMPUS_ENV ?? process.env.VERCEL_URL,
  },
  {
    NODE_ENV: z.enum(["development", "test", "production"]),
    GQL_URL: z.string().url().default("http://localhost:4000/graphql"),
    RESEND_API_KEY: z.string().default("default-resend-key"),
    NEXTAUTH_URL: z.string().url().default("http://localhost:3001/auth"),
    KAMPUS_ENV: z.enum(["localhost", "preview", "development", "production"]).default("localhost"),
  }
);
