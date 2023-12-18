//[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            "https://baobabpad-334a8864da0e.herokuapp.com/api/token/",
            credentials
          );
          const data = response.data;

          if (data) {
            return {
              ...data,
              user: { email: credentials.email }, // Adjust this based on your user data
            };
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.user = account.user;
        token.accessToken = account.access;
        token.refreshToken = account.refresh;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  },
  pages: {
    signIn: "/homepage/login",
    signOut: "/"
  },
});