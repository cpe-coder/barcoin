import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function HistoryPage() {
	return (
		<div className="flex flex-col text-center gap-2 items-center justify-start h-screen py-28">
			<h1 className="text-4xl font-bold mb-4 mt-10">History</h1>

			<div className="w-full max-w-[1280px] overflow-x-auto mx-auto px-4 md:px-8 lg:px-8">
				<Table className="w-full">
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Date</TableHead>
							<TableHead>PHP</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">April 22, 2025</TableCell>
							<TableCell>50,000</TableCell>
							<TableCell>Completed</TableCell>
							<TableCell className="text-right">
								<span className="text-blue-900 hover:cursor-pointer">
									View Details
								</span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">April 20, 2025</TableCell>
							<TableCell>30,000</TableCell>
							<TableCell>Completed</TableCell>
							<TableCell className="text-right">
								<span className="text-blue-900 hover:cursor-pointer">
									View Details
								</span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">April 18, 2025</TableCell>
							<TableCell>10,000</TableCell>
							<TableCell>Completed</TableCell>
							<TableCell className="text-right">
								<span className="text-blue-900 hover:cursor-pointer">
									View Details
								</span>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
