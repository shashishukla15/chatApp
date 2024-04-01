import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

//const baseUrl = '0.0.0.0:27017';


export const connectToDatabase = async () => {
    console.log(baseUrl)
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}