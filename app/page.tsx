import Link from "next/link";

export default function Home() {
	return (
		<div className=" bg-[url('/barcoin-bg.png')] bg-bottom bg-no-repeat bg-cover items-center w-full min-h-screen">
			<div className="w-full min-h-screen items-center flex justify-center bg-white/50">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="text-black font-normal text-5xl mb-8">Welcome Back</h1>
					<input
						type="text"
						placeholder="Email address"
						className="py-5 px-4 text-black bg-amber-200 rounded-full w-80 border-black border active:outline-none focus:outline-none"
					/>
					<input
						type="text"
						placeholder="Password"
						className="py-5 px-4 text-black bg-amber-200 rounded-full w-80 border-black border active:outline-none focus:outline-none"
					/>
					<div className="flex gap-2 items-center text-black">
						<p>Don&apos;t have account?</p>
						<Link className="hover:text-blue-900" href={""}>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
