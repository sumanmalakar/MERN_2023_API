import mongoose from "mongoose";

export const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "MERN-2023"
}).then(() => console.log("MongoDb is Connected..!")).catch((e)=>console.log(e))



}