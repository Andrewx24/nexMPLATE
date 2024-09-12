import mongoose from 'mongoose';

const uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

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
    }).then((mongoose) => {
      console.log("Successfully connected to MongoDB");
      return mongoose;
    }).catch((error) => {
      console.error("Failed to connect to MongoDB", error);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

