import express from "express";
import { AddProduct, GetAllProduct, GetOneProduct, RemoveProduct } from "../controller/product";

const router = express.Router();

router.post('/product/add', AddProduct)
router.delete('/product/:id', RemoveProduct)
router.get('/product', GetAllProduct)
router.get('/product/:id', GetOneProduct)
export default router