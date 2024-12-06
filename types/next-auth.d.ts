// next-auth.d.ts
import NextAuth from "next-auth";
import { UserRole } from ".";

// Extend the default session and user types
declare module "next-auth" {
  interface User {
    id: string;
    role: string; // Add custom field
  }

  interface Session {
    user: {
      id: string;
      role: string; // Add role here too
      name?: string | null;
      email?: string | null;
      image?: string | null;
      token: string;
      accessType: UserRole;
    };
  }
}
