"use client";

import SignUpForm from "@/components/form/SignUpForm";

export default function SignUpPage() {
	return (
		<div className=" bg-[url('/barcoin-bg.png')] bg-bottom bg-no-repeat bg-cover items-center w-full min-h-screen">
			<title>Sign In</title>
			<div className="w-full min-h-screen items-center flex justify-center bg-white/50">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="text-black font-normal text-5xl mb-8">
						Create account
					</h1>
					<SignUpForm />
				</div>
			</div>
		</div>
	);
}
