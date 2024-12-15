import mongoose from "mongoose"
const url = "mongodb://localhost:27017/customers"

async function connectToDB() {
    try {
        console.log("Connected to DB");
        return await mongoose.connect(url)
    } catch (error) {
        console.log("error no connection to DB");
        
    }
   
}

export default connectToDB