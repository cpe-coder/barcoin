import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	passwordComponents?: React.ReactNode;
}

function Input({ className, passwordComponents, type, ...props }: InputProps) {
	return (
		<div className="relative flex w-full items-center">
			<input
				type={type}
				data-slot="input"
				className={cn(
					" flex max-w-80 w-full min-w-0 py-5 px-4 rounded-md border text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
					className
				)}
				{...props}
			/>
			<div className="absolute right-5">{passwordComponents}</div>
		</div>
	);
}

export { Input };
