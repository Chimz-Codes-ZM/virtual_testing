import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { API_URL } from "@/config";

const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60; // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60; // 6 days

const getCurrentEpochTime = () => {
  return Math.floor(new Date().getTime() / 1000);
};

const SIGN_IN_HANDLERS = {
  credentials: async (user, account, profile, email, credentials) => {
    return true;
  },
};
const SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS);

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const response = await axios({
            url: `https://${API_URL}/api/token/`,
            method: "post",
            data: credentials,
          });
          const data = response.data;
          
          if (data) {
            return data;
          }
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!SIGN_IN_PROVIDERS.includes(account.provider)) return false;
      return SIGN_IN_HANDLERS[account.provider](
        user,
        account,
        profile,
        email,
        credentials
      ) ;
    },
    async jwt({ user, token, account }) {
      if (user && account) {
        let backendResponse =
          account.provider === "credentials" ? user : account.meta;
        token.user = backendResponse.user;
        token.access = backendResponse.access;
        token.refresh = backendResponse.refresh;
        token.ref = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
        return token;
      }
      return token;
    },

    async session({ user, token }) {
      return { ...token, user };
    },
  },

  pages: {
    signIn: "/homepage/login",
    error: '/homepage/login',
  },
};
//

export default NextAuth(authOptions);
