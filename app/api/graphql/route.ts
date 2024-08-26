import { NextResponse } from 'next/server';
import { graphql, buildSchema } from 'graphql';

// Define GraphQL schema
const schema = buildSchema(`
  type User {
    id: Int
    name: String
    email: String
  }

  type Query {
    users: [User]
  }
`);

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice May', email:'alice@example.com'},
   { id: 4, name: 'Bob Smith', email: 'bob@example.com'},
];

// Define resolvers
const root = {
  users: () => users,
};

export async function POST(request: Request) {
  const body = await request.json();
  const response = await graphql({
    schema,
    source: body.query,
    rootValue: root,
  });

  return NextResponse.json(response);
}
