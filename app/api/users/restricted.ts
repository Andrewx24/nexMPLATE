// pages/api/restricted.ts
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized: Please log in' });
  }

  // User is authenticated
  res.status(200).json({ message: 'You have access to this route!' });
}
