import { Router } from "express";
import upload from "../middlewares/multerMiddleware.js";
import { uploadFile } from "../controllers/fileController.js";
const router = Router();

router.get("/",(_, res) => {
    res.send("File route is working")
})
router.post("/",upload.single("file"),uploadFile);
export default router