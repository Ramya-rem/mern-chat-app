import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// const MONGO_DB_URI=process.env.MONGO_DB_URI;
const connectToMongoDB = async () => {

	try {
		await mongoose.connect("mongodb+srv://root:iPAYfJfGWGg39aab@mernchatappupdated.pbzvc.mongodb.net/?retryWrites=true&w=majority&appName=MernChatAppUpdated");
		console.log("🚀 🚀 Connected to MongoDB 🔥🔥");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};


export default connectToMongoDB;