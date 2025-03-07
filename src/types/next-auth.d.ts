import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
        accessToken?: string | unknown;
        idToken?: string | unknown;
    }

    interface JWT {
        accessToken?: string;
    }
}