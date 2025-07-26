import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
	const isAdminLogin = request.nextUrl.pathname === "/admin/sign-in";
	const isAuthenticated = request.cookies.get("admin-auth")?.value === "true";

	if (isAdminRoute && !isAdminLogin && !isAuthenticated) {
		return NextResponse.redirect(new URL("/admin/sign-in", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*"],
};
