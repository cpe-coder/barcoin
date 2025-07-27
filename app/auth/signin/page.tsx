"use client";

import SignInForm from "@/components/form/SignInForm";

export default function SignInPage() {
	return (
		<div className=" bg-[url('/barcoin-bg.png')] bg-bottom bg-no-repeat bg-cover items-center w-full min-h-screen">
			<title>Sign In</title>
			<div className="w-full min-h-screen items-center flex justify-center bg-white/50">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="text-black font-normal text-5xl mb-8">Welcome Back</h1>
					<SignInForm />
				</div>
			</div>
		</div>
	);
}
