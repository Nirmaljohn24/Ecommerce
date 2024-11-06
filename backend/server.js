import express from "express";
import products from "./Data/products.js";
import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddler.js";







const port = 5000;

connectDB(); //Connect to MongoDb

const app = express();

app.use(cors());

app.get("/" , (req,res) =>{ 
    res.send("Hello");
})

app.use("/api/products" ,productRoutes);
app.use("/api/users" ,userRoutes);

app.use(notFound);

app.use(errorHandler);



app.listen( port , () =>console.log(`My Server is running in port ${port}`))

