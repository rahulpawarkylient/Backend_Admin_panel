import express from "express";
import { contact } from "../controllers/userController.js";

const router = express.Router();

//contact me api
router.post("/send", contact);

export default router;
