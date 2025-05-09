import mongoose from "mongoose";
import dotenv from "dotenv";
//loaded the env variables
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error("Error connecting to MongoDB",error.message);
    process.exit(1);
  }
};

export default connectDB;
