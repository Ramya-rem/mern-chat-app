import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGO_DB_URI=process.env.MONGO_DB_URI;
const connectToMongoDB = async () => {

	try {
		await mongoose.connect(MONGO_DB_URI);
		console.log("🚀 🚀 Connected to MongoDB 🔥🔥");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;