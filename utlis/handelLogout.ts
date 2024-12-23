"use client"
import { signOut} from "next-auth/react";
import { config } from "dotenv";
config();

const handleLogout = async (token?: string) => {


  try {
    await signOut({ callbackUrl: "/" });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessType");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export default handleLogout;
