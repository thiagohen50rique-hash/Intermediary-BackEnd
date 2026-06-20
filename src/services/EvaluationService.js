import EvaluationRepository from '../repositories/EvaluationRepository.js';

class EvaluationService {

    async createEvaluation(data) {
        if (!data.concept || !data.userId || !data.courseId) {
            throw new Error('É obrigatório o Conceito da Avaliação, ID do Usuário e ID do Curso')
        }

        return await EvaluationRepository.createEvaluation(data);
    }

    async getAll() {
        return await EvaluationRepository.findAll();
    }

    async getById(requestId) {
        const evaluation = await EvaluationRepository.findById(requestId);
        if (!evaluation) {
            throw new Error('Avaliação não foi encontrada')
        }

        return evaluation
    }
}

export default new EvaluationService();