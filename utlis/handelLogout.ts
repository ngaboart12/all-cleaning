"use client"
import { signOut} from "next-auth/react";
import { config } from "dotenv";
config();

const handleLogout = async (token: string) => {


  try {
    // Call your API to log out
    const response = await fetch(`http://localhost:5000/api/v1/user/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the token from session
      },
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    // Sign out from NextAuth
    await signOut({ callbackUrl: "/" });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export default handleLogout;
