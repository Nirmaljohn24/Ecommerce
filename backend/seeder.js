import mongoose from "mongoose";
import users from "./Data/users.js";
import products from "./Data/products.js";

import Product from "./Model/productModel.js";
import Order from "./Model/orderModel.js";
import User from "./Model/userModel.js";

import connectDB from "./config/db.js";

connectDB();

const importData = async() =>{

    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createUser = await User.insertMany(users);

        const sampleProduct = await Product.insertMany(products);

        console.log("Data Imported");

        process.exit(1);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

const destroyData = async() =>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log("Data Destroyed");

        process.exit(1);

    }catch(err){

        console.log(err);

        process.exit(1);
    }
}

if(process.argv[2] === "-d"){
    destroyData();
}else{
    importData();    
}



