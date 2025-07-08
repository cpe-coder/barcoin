"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		console.log(values);
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
										type="password"
										{...field}
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
					Sign in
				</Button>
			</form>
			<div className="flex gap-2 items-center text-black">
				<p>Don&apos;t have account?</p>
				<Link className="hover:text-blue-900" href={"/sign-up"}>
					Sign Up
				</Link>
			</div>
		</Form>
	);
};

export default SignInForm;
