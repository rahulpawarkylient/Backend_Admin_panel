import express from "express";
import {
  addConnect,
  addService,
  allLatestBlog,
  bioEmployment,
  biography,
  biographyEducation,
  biographySocial,
  bioSocial,
  connect,
  deleteGallery,
  deleteOnefb,
  deleteOneSocial,
  deleteOnetw,
  editBanner,
  footer,
  gallery,
  getAllData,
  getBanner,
  getbioEmployment,
  getbiography,
  getbiographyEducation,
  getbiographySocial,
  getbioSocial,
  getfooter,
  getgallery,
  getIdGallery,
  getIdsocial,
  getIdsocialfb,
  getIdsocialTw,
  getsocial,
  getsocialfb,
  getsocialTw,
  latestBlog,
  login,
  navbar,
  oneConnect,
  oneLatestBlog,
  oneService,
  service,
  social,
  socialfb,
  socialTw,
  updatebioEmployment,
  updatebiography,
  updatebiographyEducation,
  updatebiographySocial,
  updatebioSocial,
  updateConnect,
  updatefooter,
  updateGallery,
  updateIdsocialfb,
  updateIdsocialTw,
  updateLatestBlog,
  updatenav,
  Updateservice,
  updateSocial,
  UpdateWork,
  Work,
} from "../controllers/adminController.js";

const router = express.Router();

/*Register Api*/
// router.post("/register", register)
router.post("/login", login);

/*NavBar*/
// router.post("/navbar/post", navbar)
router.get("/navbar", navbar);
router.put("/updatenavbar/:id", updatenav);

/*Banner*/
// router.post("/banner/post", banner);
router.get("/banner", getBanner);
router.put("/updatebanner/:id", editBanner);

/*Work Section*/
// router.post("/work/post", Work)
router.get("/work", Work);
router.put("/works/:id", UpdateWork);

/*Iduk----Service Section*/
// router.post("/service",service)
router.post("/service/post", addService);
router.get("/service", service);
router.get("/service/:id", oneService);
router.put("/service/:id", Updateservice);

/*Connects And Nurture Section*/
router.post("/connect/post", addConnect);
router.get("/connect", connect);
router.get("/connect/:id", oneConnect);
router.put("/connect/:id", updateConnect);

/*Latest Article Sections*/
router.post("/latestblog/post", latestBlog);
router.get("/latestblog", allLatestBlog);
router.get("/latestblog/:id", oneLatestBlog);
router.put("/latestblog/:id", updateLatestBlog);

/* social Section */
router.post("/social/post", social);
router.get("/social", getsocial);
router.get("/social/:id", getIdsocial);
router.put("/social/:id", updateSocial);
router.delete("/social/:id", deleteOneSocial);

/* Social FaceBook Section */
router.post("/socialfb/post", socialfb);
router.get("/socialfb", getsocialfb);
router.get("/socialfb/:id", getIdsocialfb);
router.put("/socialfb/:id", updateIdsocialfb);
router.delete("/socialfb/:id", deleteOnefb);

/* Social Twitter Section */
router.post("/socialTw/post", socialTw);
router.get("/socialTw", getsocialTw);
router.get("/socialTw/:id", getIdsocialTw);
router.put("/socialTw/:id", updateIdsocialTw);
router.delete("/socialTw/:id", deleteOnetw);

/* Footer Section*/
router.post("/footer/post", footer);
router.get("/footer", getfooter);
router.put("/footer/:id", updatefooter);

/* Biography Section */
router.post("/biography/post", biography);
router.get("/biography", getbiography);
router.put("/biography/:id", updatebiography);

/* Biography Personal Profile Social Section */
router.post("/bioSocial/post", bioSocial);
router.get("/bioSocial", getbioSocial);
router.put("/bioSocial/:id", updatebioSocial);

/* Biography Employment Section */
router.post("/bioEmployment/post", bioEmployment);
router.get("/bioEmployment", getbioEmployment);
router.put("/bioEmployment/:id", updatebioEmployment);

/* Biography Social Section */
router.post("/biography/social/post", biographySocial);
router.get("/biographySocial", getbiographySocial);
router.put("/biographySocial/:id", updatebiographySocial);

/* Biography Education Section */
router.post("/biography/education/post", biographyEducation);
router.get("/biographyEducation", getbiographyEducation);
router.put("/biographyEducation/:id", updatebiographyEducation);

/* Biography Education Section */
router.post("/gallery/post", gallery);
router.get("/gallery", getgallery);
router.get("/gallery/:id", getIdGallery);
router.put("/gallery/:id", updateGallery);
router.delete("/gallery/:id", deleteGallery);

// Combine Route of all Get APi
router.get("/view", getAllData);

export default router;
