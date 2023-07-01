import express from "express";
import { AddCat } from "../controller/categories";
const router= express.Router();

router.post('/category/add', AddCat)

export default router