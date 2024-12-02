import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import API from "@/lib/api/apiCall";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await API.post(`/users/login`, {
            email: credentials.email,
            password: credentials.password,
          });

          console.log("Response login:", response.data);

          // Check if the response contains the expected data
          if (response.data.status && response.data.data?.token) {
            const { userId, userType, profile, token } = response.data.data;

            return {
              id: userId,
              role: userType,
              name: profile.names,
              email: profile.email_address,
              token: token, // Store the token here
            };
          } else {
            console.error("Invalid login response format:", response.data);
            return null;
          }
        } catch (error) {
          console.error("Error during authentication:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.token = token.token;
      }
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};

export default function auth(req, res) {
  return NextAuth(req, res, options);
}
