import { Logo } from "@/constant";
import Image from "next/image";

export default function Home() {
	return (
		<div className="  items-center w-full min-h-screen">
			<div className="w-full min-h-screen items-center flex justify-center bg-white">
				<div className="flex flex-col items-center justify-center gap-4">
					<Image src={Logo} alt="Barcoin Logo" />
					<div className="absolute"></div>
				</div>
			</div>
		</div>
	);
}
