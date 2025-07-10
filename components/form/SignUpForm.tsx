"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
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

const SignUpForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		console.log(values);
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
					className="w-full mt-8 py-2 bg-amber-300  hover:transition-all hover:duration-200 duration-200 transition-all  rounded-full hover:bg-amber-100 hover:cursor-pointer"
					type="submit"
				>
					Sign Up
				</Button>
			</form>
			<div className="flex gap-2 items-center text-black">
				<p>Already have an account?</p>
				<Link className="hover:text-blue-900" href={"/sign-in"}>
					Sign In
				</Link>
			</div>
		</Form>
	);
};

export default SignUpForm;
