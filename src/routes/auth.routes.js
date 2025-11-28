import express from "express";
import {login, logout } from '../controllers/auth.controller.js';
import { upload } from "../middlewares/upload.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", upload.none(), login);
router.post("/logout", upload.none(), logout);

export default router;