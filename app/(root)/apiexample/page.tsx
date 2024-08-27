import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();
const baseUrl = publicRuntimeConfig.apiUrl;

// Fetching data from the REST API
async function fetchRestUsers() {
  const res = await fetch(`${baseUrl}/api/users`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch users from REST API');
  }
  return res.json();
}

// Fetching data from the GraphQL API
async function fetchGraphQLUsers() {
  const query = `
    query {
      users {
        id
        name
        email
      }
    }
  `;

  const res = await fetch(`${baseUrl}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users from GraphQL API');
  }

  const json = await res.json();
  return json.data.users;
}

export default async function ApiExamplePage() {
  const restUsers = await fetchRestUsers();
  const graphQLUsers = await fetchGraphQLUsers();

  return (
    <div>
      <h1>REST API Users</h1>
      <ul>
        {restUsers.map((user: { id: number; name: string; email: string }) => (
          <Link
            href={{
              pathname: `/apiexample/${user.id}`,
              query: { name: user.name, email: user.email, id: user.id },
            }}
            key={user.id}
          >
            <li>
              {user.name} - {user.email}
            </li>
          </Link>
        ))}
      </ul>

      <h1>GraphQL API Users</h1>
      <ul>
        {graphQLUsers.map((user: { id: number; name: string; email: string }) => (
          <Link
            href={{
              pathname: `/apiexample/${user.id}`,
              query: { name: user.name, email: user.email, id: user.id },
            }}
            key={user.id}
          >
            <li>
              {user.name} - {user.email}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
