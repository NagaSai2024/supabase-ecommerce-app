import { Router } from "express";
import { getCategoryProductsController } from "../Controller/categoryController.js";

const router = Router();

router.get("/category/:category", getCategoryProductsController);

export default router;
