import { connectToDatabase } from "@/lib/database";
import User from "@/lib/models/useers";

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, age } = await request.json();

    // Connect to the database
    await connectToDatabase();

    // Create a new user
    const user = new User({
      name,
      age,
    });

    // Save the user to the database
    await user.save();

    return NextResponse.json({ message: 'User created successfully!' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}