import React from 'react';

// Fetching data from the REST API
async function fetchRestUsers() {
  const res = await fetch('http://localhost:3000/api/users');
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

  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
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
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <h1>GraphQL API Users</h1>
      <ul>
        {graphQLUsers.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
          {user.id} - {user.name} - {user.email} 
          </li>
        ))}
      </ul>
    </div>
  );
}
