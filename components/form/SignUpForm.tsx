"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SignUpForm = () => {
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [isDisable, setIsDisable] = React.useState(false);
	const [form, setForm] = React.useState({
		email: "",
		password: "",
	});
	const router = useRouter();

	React.useEffect(() => {
		if (form.email === "" || form.password === "") {
			setIsDisable(true);
		} else {
			setIsDisable(false);
		}
	}, [form]);

	const data = {
		email: form.email,
		password: form.password,
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		const res = await fetch("/api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const responseData = await res.json();
		if (res.status === 201) {
			setIsLoading(false);
			setForm({
				email: "",
				password: "",
			});
			toast.success(responseData.message);
			router.push("/auth/signin");
		} else {
			setIsLoading(false);
			toast.error(responseData.message);
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
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						className=" text-black bg-amber-200 rounded-full w-80 border-black border active:outline-none focus:outline-none"
					/>
					<Input
						placeholder="Password"
						className=" rounded-full text-black bg-amber-200 w-80 border-black border active:outline-none focus:outline-none"
						type={isPasswordVisible ? "text" : "password"}
						value={form.password}
						onChange={(e) => setForm({ ...form, password: e.target.value })}
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
					disabled={isDisable || isLoading}
					className="w-full mt-8 py-2 bg-amber-300  hover:transition-all hover:duration-200 duration-200 transition-all  rounded-full hover:bg-amber-100 hover:cursor-pointer"
					type="submit"
				>
					{isLoading ? "Loading..." : "Sign Up"}
				</Button>
			</form>
			<div className="flex gap-2 pt-2 text-center justify-center items-center text-black">
				<p>Already have an account?</p>
				<Link
					className="hover:text-blue-700 text-blue-900"
					href={"/auth/signin"}
				>
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default SignUpForm;
