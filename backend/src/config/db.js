import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB_URL = process.env.MONGODB_URI ;

const connectDB = async()=>{
    const connected = await mongoose.connect(DB_URL);
    if(!connected){
        console.error("Failed to connect to database");
    }
    console.log(`Connected to database at ${connected.connection.host}`)
}
export default connectDB;