import express from "express";
import {  editBanner, getBanner } from "../controllers/adminController.js";

const router = express.Router();

//Banner
// router.post("/banner/post", banner);
router.get("/banner", getBanner);
router.put("/updatebanner/:id", editBanner);

export default router;
