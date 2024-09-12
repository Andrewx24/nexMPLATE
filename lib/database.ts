import mongoose from 'mongoose';

const uri: string = process.env.MONGODB_URI as string;  // Assert the type to string

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Declare a cached connection to use across hot reloads in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      },
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
