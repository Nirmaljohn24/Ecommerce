import express from "express"
import products from "../Data/products.js";
import { getProducts, getProductsById } from "../controllers/productsController.js";


const router = express.Router();



router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

 router.get("/test" ,(req,res) =>{
    res.send("test");
 })
 export default router;