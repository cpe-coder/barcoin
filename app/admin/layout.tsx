"use client";

import Navbar from "@/components/navbar";
import { LoaderIcon } from "lucide-react";
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
			<div className="bg-amber-50 flex w-full h-screen items-center justify-center">
				<LoaderIcon color="gray" size={70} className="animate-spin" />
			</div>
		);
	}

	if (session.status === "unauthenticated") {
		router.push("/auth/signin");
	}

	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default AuthLayout;
