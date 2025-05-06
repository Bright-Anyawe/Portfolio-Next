<<<<<<< HEAD
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
=======
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
>>>>>>> 723f85f4ebd5bb12c1aae736ac92bf584490bb2b

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  pages: {
    signIn: "/signin",
    error: "/error", // Optional: Create an error page
  },

  callbacks: {
    async session({ session }) {
      return session;
    },
    async jwt({ token }) {
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Ensure redirect after sign-in goes to the correct URL
      return url.startsWith("/") ? `${baseUrl}${url}` : url;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
<<<<<<< HEAD
};
=======

} 
>>>>>>> 723f85f4ebd5bb12c1aae736ac92bf584490bb2b
