//mongodb+srv://johnsondravid143:Nirmaljohn@24@e-commerce.imljw.mongodb.net/

 import mongoose from "mongoose";

 const connectDB = async () => {

    try{
        const con = await mongoose.connect("mongodb+srv://johnsondravid143:nirmaljohn@e-commerce.imljw.mongodb.net/E_Commerce");


        console.log("DB Connected");
    }catch(err){
        console.log(`Error - ${err}`)
        process.exit(1);

    }
 }

 export default connectDB;