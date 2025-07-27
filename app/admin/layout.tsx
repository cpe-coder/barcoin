"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	const session = useSession();
	const router = useRouter();

	if (session.status === "loading") {
		return (
			<div className="bg-white flex items-center justify-center">
				<h1 className="text-black">Loading...</h1>
			</div>
		);
	}

	if (session.status === "unauthenticated") {
		router.push("/auth/signin");
	}

	return <div>{children}</div>;
};

export default AuthLayout;
