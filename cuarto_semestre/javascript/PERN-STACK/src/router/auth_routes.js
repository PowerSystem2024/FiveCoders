import Router  from "express-promise-router";
import { signin, signup, signout, profile } from "../controllers/auth_controllers.js";

const router = Router();
router.post("/sigin", signin);
router.post("/signup", signup);
router.post("/signout", signout);
router.get("/profile",profile);

export default router;