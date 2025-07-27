import Logo from "@/assets/logo/logo.png";
import { Bell } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
	const session = useSession();
	return (
		<div className="w-full py-6 shadow-2xl bg-amber-50 fixed">
			<nav className="flex items-center mx-auto justify-between max-w-[1280px] px-4 md:px-8 lg:px-8">
				<div className="flex items-center gap-2">
					<Image src={Logo} className="w-12 h-12" alt="Logo" />
					<h1 className="text-lg font-bold text-slate-700">
						{session.data?.user?.email}
					</h1>
				</div>
				<div className="flex items-center gap-4">
					<Button
						variant="outline"
						size="icon"
						className="hover:cursor-pointer hover:bg-none"
					>
						<Bell size={25} color="gray" />
					</Button>
					<Button className="text-slate-700 hover:cursor-pointer font-medium">
						Logout
					</Button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
