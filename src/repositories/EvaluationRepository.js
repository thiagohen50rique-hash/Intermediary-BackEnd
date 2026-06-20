import prisma from '../config/database.js';

class EvaluationRepository {

    async createEvaluation(data) {
        return await prisma.evaluation.create({
            data: {
                concept: data.concept,
                userId: data.userId,
                courseId: data.courseId
            }
        })
    };

    async findAll() {
        return await prisma.evaluation.findMany({
            include: {
                user: true,
                course: true
            }
        }
        )
    }

    async findById(requestId) {
        return await prisma.evaluation.findUnique({
            where: { id: Number(requestId) }
        })

    }


}

export default new EvaluationRepository();