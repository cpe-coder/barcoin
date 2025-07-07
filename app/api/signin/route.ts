import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

export async function POST(req: NextRequest) {
	const { username, password } = await req.json();

	if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
		(await cookies()).set({
			name: "admin-auth",
			value: "true",
			httpOnly: true,
			path: "/",
			maxAge: 60 * 60, // 1 hour
		});

		return NextResponse.json({ message: "Logged in" }, { status: 200 });
	}

	return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
