"use client";

import { Eye, EyeOff } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SignInForm = () => {
	const session = useSession();
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
	const [disabled, setDisabled] = React.useState(false);
	const [email, setEmail] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");
	const [isLoading, setIsLoading] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		if (email === "" || password === "") {
			setDisabled(true);
		} else {
			setDisabled(false);
		}

		console.log(session);

		if (session.status === "authenticated") {
			router.push("/admin/history");
		}
	}, [email, password, session, router]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsLoading(true);
		const res = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		if (res?.ok) {
			setIsLoading(false);
			setEmail("");
			setPassword("");
			window.location.reload();
			toast.success("Login successfully");
		} else if (res?.status === 401) {
			toast.error("Invalid username or password");
			setIsLoading(false);
		} else {
			toast.error("Something went wrong");
			setIsLoading(false);
		}
	};

	const handleClick = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	return (
		<div>
			<form action="#" method="POST" className="w-full">
				<div className="space-y-6">
					<Input
						placeholder="Email address"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className=" text-black bg-amber-200 rounded-full w-80 border-black border active:outline-none focus:outline-none"
					/>
					<Input
						placeholder="Password"
						className=" rounded-full text-black bg-amber-200 w-80 border-black border active:outline-none focus:outline-none"
						type={isPasswordVisible ? "text" : "password"}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						passwordComponents={
							<Button
								onClick={handleClick}
								className="bg-transparent border-0 hover:bg-transparent focus:bg-transparent hover:cursor-pointer"
							>
								{isPasswordVisible ? (
									<EyeOff className="text-black" />
								) : (
									<Eye className="text-black" />
								)}
							</Button>
						}
					/>
				</div>
				<Button
					onClick={handleSubmit}
					disabled={disabled || isLoading}
					className="w-full mt-8 py-2 bg-amber-300  hover:transition-all hover:duration-200 duration-200 transition-all  rounded-full hover:bg-amber-100 hover:cursor-pointer"
					type="submit"
				>
					{isLoading ? "Loading..." : "Sign In"}
				</Button>
			</form>
			<div className="flex gap-2 pt-2 text-center justify-center items-center text-black">
				<p>Don&apos;t have an account?</p>
				<Link
					className="hover:text-blue-700 text-blue-900"
					href={"/auth/signup"}
				>
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default SignInForm;
