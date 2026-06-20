import express from 'express';
import CourseController from '../controllers/CourseController.js';

const router = express.Router();

router.post('/', CourseController.create);
router.get('/', CourseController.getAll);
router.get('/:id', CourseController.getById);

export default router;