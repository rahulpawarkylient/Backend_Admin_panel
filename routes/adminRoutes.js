import express from "express";
import {  editBanner, getBanner, login, navbar, service, updatenav, Updateservice, UpdateWork, Work } from "../controllers/adminController.js";

const router = express.Router();

/*Register Api*/
// router.post("/register", register)
router.post("/login", login)

/*NavBar*/
// router.post("/navbar/post", navbar)
router.get("/navbar", navbar)
router.put("/updatenavbar/:id", updatenav)

/*Banner*/
// router.post("/banner/post", banner);
router.get("/banner", getBanner);
router.put("/updatebanner/:id", editBanner);

/*Work Section*/
// router.post("/work/post", Work)
router.get("/work", Work)
router.put("/works/:id", UpdateWork)

/*Iduk----Service Section*/
// router.post("/service",service)
router.get("/service",service)
router.put("/service/:id",Updateservice)

export default router;
