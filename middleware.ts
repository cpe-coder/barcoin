import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
	const isAdminLogin = request.nextUrl.pathname === "/auth/sign-in";
	const isAdminSignup = request.nextUrl.pathname === "/auth/sign-up"; // Allow signup
	const isAuthenticated = request.cookies.get("admin-auth")?.value === "true";

	if (isAdminRoute && !isAdminLogin && !isAdminSignup && !isAuthenticated) {
		return NextResponse.redirect(new URL("/auth/sign-in", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*"],
};
