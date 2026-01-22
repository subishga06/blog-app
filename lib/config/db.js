import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://blog-app:blogapp123@cluster0.dfhpyq0.mongodb.net/blog-app');
    console.log("DB Connected");
}


