"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must have than 8 characters"),
});

const SignInForm = () => {
	const session = useSession();
	const [isLoading, setIsLoading] = React.useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	React.useEffect(() => {
		if (session.status === "authenticated") {
			router.push("/");
		}
	}, [session, router]);

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		setIsLoading(true);
		const email = values.email;
		const password = values.password;
		try {
			const res = await signIn("credentials", {
				redirect: false,
				email,
				password,
			});

			if (res?.ok) {
				setIsLoading(false);
				form.setValue("email", "");
				form.setValue("password", "");
			} else {
				setIsLoading(false);
				console.log("Invalid email or password");
			}
		} catch (error) {
			setIsLoading(false);

			console.log("Something went wrong", error);
		}
	};

	const handleClick = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Email address"
										className=" text-black bg-amber-200 rounded-full w-80 border-black border active:outline-none focus:outline-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Password"
										className=" rounded-full text-black bg-amber-200 w-80 border-black border active:outline-none focus:outline-none"
										type={isPasswordVisible ? "text" : "password"}
										{...field}
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
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button
					className="w-full mt-8 py-2 bg-amber-300 hover:bg-amber-100 hover:transition-all hover:duration-200 duration-200 transition-all hover:cursor-pointer rounded-full"
					type="submit"
				>
					{isLoading ? "Submitting..." : "Sign In"}
				</Button>
			</form>
			<div className="flex gap-2 items-center text-black">
				<p>Don&apos;t have account?</p>
				<Link className="hover:text-blue-900" href={"/auth/sign-up"}>
					Sign Up
				</Link>
			</div>
		</Form>
	);
};

export default SignInForm;
