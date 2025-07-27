"use server";

import connectToDatabase from "@/lib/mongodb";
import User from "@/model/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { email, password } = await request.json();

	if (email == "" || password === "") {
		return NextResponse.json(
			{ message: "All fields are required" },
			{ status: 400 }
		);
	}

	if (password.length < 7) {
		return NextResponse.json(
			{ message: "Password must be at least 8 characters" },
			{ status: 400 }
		);
	}

	try {
		await connectToDatabase();

		const isUserExists = await User.findOne({ email });
		if (isUserExists) {
			return NextResponse.json(
				{ message: "Username already registered" },
				{ status: 400 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({
			email,
			password: hashedPassword,
		});

		if (newUser) {
			return NextResponse.json(
				{ message: "User created successfully" },
				{ status: 201 }
			);
		}

		return NextResponse.json(
			{ message: "Cannot create user" },
			{ status: 500 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: `Something went wrong, ${error}` },
			{ status: 500 }
		);
	}
}
