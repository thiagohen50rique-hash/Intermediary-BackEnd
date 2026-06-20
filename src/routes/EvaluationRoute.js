import express from 'express';
import EvaluationController from '../controllers/EvaluationController.js';

const router = express.Router();

router.post('/', EvaluationController.create);
router.get('/', EvaluationController.getAll);
router.get('/:id', EvaluationController.getById);

export default router;