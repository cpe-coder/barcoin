import { Logo } from "@/constant";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="  items-center w-full min-h-screen">
			<div className="w-full min-h-screen items-center flex justify-center bg-white">
				<div className="flex flex-col items-center justify-center gap-4">
					<Image src={Logo} alt="Barcoin Logo" />
					<div className="absolute animate-ping">
						<Loader size={50} className="text-slate-500 animate-spin" />
					</div>
					<h1 className="text-4xl font-bold text-center text-gray-500">
						Welcome to Barcoin
					</h1>
				</div>
			</div>
		</div>
	);
}
