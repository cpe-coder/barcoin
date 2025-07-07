import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { username, password } = await req.json();

	if (username !== "" && password !== "") {
		(await cookies()).set({
			name: "user-auth",
			value: "true",
			httpOnly: true,
			path: "/",
			maxAge: 60 * 60,
		});

		return NextResponse.json({ message: "Logged in" }, { status: 200 });
	}

	return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
