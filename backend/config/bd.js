import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected successfully")
    }catch(error){
       console.error("error",error)
       process.exit(1)
    }
}          


export default connectDb 