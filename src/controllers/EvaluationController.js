import EvaluationService from '../services/EvaluationService.js';

class EvaluationController {
    async create(req, res) {
        try {
            const evaluationData = {
                concept: req.body.concept,
                userId: req.body.userId,
                courseId: req.body.courseId
            };

            const newEvaluation = await EvaluationService.createEvaluation(evaluationData);
            return res.status(201).json(newEvaluation);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const evaluation = await EvaluationService.getAllEvaluation();
            return res.status(200).json(evaluation);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const evaluation = await EvaluationService.getByIdEvaluation(Number(id));
            return res.status(200).json(evaluation)
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export default new EvaluationController();