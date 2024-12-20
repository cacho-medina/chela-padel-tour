// lib/mongodb.ts
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your MONGODB_URI to .env.local");
}

const mongoURI = process.env.MONGODB_URI;
let isConnected = false; // Variable para rastrear el estado de la conexión

export async function connectDB() {
    if (isConnected) {
        console.info("Already connected to db");
        return mongoose;
    }

    try {
        await mongoose.connect(mongoURI);
        isConnected = true;
        console.info("Connected to db");
        return mongoose;
    } catch (error) {
        console.error("Error connecting to db:", error);
        throw new Error("Failed to connect to db");
    }
}
