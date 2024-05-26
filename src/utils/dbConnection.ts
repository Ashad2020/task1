import mongoose from "mongoose";

async function dbConnection(uri: string) {
  await mongoose.connect(uri);
}

export default dbConnection;
