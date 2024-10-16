import { Router } from "express";
import {uploadImage } from "../controllers/imageController.js";
import upload from "../middlewares/multerMiddleware.js";
const router = Router();

router.get("/upload",(req,res)=>{
    res.send("Api for uploading is working!")
});

router.post("/upload",upload.single("file"), uploadImage);

export default router;
