import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { getYrmApiHttpClient } from "@/lib/yrm-api-http-client";

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
                token.idToken = account.id_token;
            }

            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.idToken = token.idToken;
            return session;
        },
        async signIn({ user }) {
            try {
                const client = getYrmApiHttpClient();
                const firstAndLastName = user.name?.split(" ");

                const loginResponse = await client.loginUser({
                    username: firstAndLastName ? firstAndLastName[0]+firstAndLastName[1] : "",
                    password: user.email,
                });

                if (loginResponse.status > 300) {
                    return false;
                };

                return true;
            } catch (e) {
                return false;
            };
        },
    },
};