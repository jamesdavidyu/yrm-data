import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log(await getToken({ req, secret: process.env.NEXTAUTH_SECRET }))
    const token = req.headers.get("Authorization");
    console.log(token)
    console.log(req)

    if (!token) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    return NextResponse.json({ is_authenticated: true, user: token });
}