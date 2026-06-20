import express from "express";
import UserController from "../controllers/UserController.js";
import { upload } from "../config/multer.js";

const router = express.Router();

router.post('/', upload.single('profilePicture'), UserController.create);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

export default router;