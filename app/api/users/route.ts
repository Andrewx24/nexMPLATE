import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Sam Johnson', email: 'sam@example.com' }, // Add a new user here
];

export async function GET() {
  return NextResponse.json(users);
}

