import { getYrmApiHttpClient } from "@/lib/yrm-api-http-client";
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({ req });
        const client = getYrmApiHttpClient(token?.idToken as string);
        const hoursResponse = await client.getHours();

        return NextResponse.json(hoursResponse);
    } catch (e: any) {
        console.log(e)
        return NextResponse.json(
            { message: "Error fetching hours." },
            { status: 500 },
        );
    };
};