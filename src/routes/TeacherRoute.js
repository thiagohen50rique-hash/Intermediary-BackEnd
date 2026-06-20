import express from "express"
import TeacherController from "../controllers/TeacherController.js"

const router = express.Router();

router.post('/', TeacherController.create);
router.get('/', TeacherController.getAll);
router.get('/:id', TeacherController.getById)

export default router;