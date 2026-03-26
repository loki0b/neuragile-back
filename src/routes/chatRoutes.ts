import { Router } from "express";
import authenticationMiddleware from "../middlewares/auth.js";
import ChatController from "../controllers/ChatController.js";

const router = Router();
const chatController = new ChatController();

router.post("/sendMessage", authenticationMiddleware, chatController.sendMessage.bind(chatController));

export default router;