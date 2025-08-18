// lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB as string;

if (!uri) throw new Error("Please add MONGODB_URI to .env.local");
if (!dbName) throw new Error("Please add MONGODB_DB to .env.local");

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Reuse promise in dev
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export const getDb = async () => {
  const client = await clientPromise;
  return client.db(dbName);
};

export default clientPromise;
