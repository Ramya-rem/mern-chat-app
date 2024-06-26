import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);//protect the route before u run this func
router.post("/send/:id",  protectRoute,sendMessage);

export default router;