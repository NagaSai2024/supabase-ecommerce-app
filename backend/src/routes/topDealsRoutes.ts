import { Router } from "express";
import { getTopDealsController } from "../Controller/topDealsController.js";

const router = Router();

router.get("/top-deals", getTopDealsController);

export default router;
