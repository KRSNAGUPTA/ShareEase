import Router from "express"
import { linkShortner } from "../controllers/linkShortnerController.js";

const router = Router();

router.get("/",(req,res)=>{
    res.status(200).json("Welcome in link shortner!")
})
router.post("/",linkShortner)
export default router;