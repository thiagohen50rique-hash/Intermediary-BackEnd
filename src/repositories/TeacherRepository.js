import prisma from '../config/database.js';

class TeacherRepository {

    async createTeatcher(data) {
        return await prisma.teacher.create({
            data: {
                name: data.name,
                courseId: data.courseId
            }
        });
    }

    async findAll() {
        return await prisma.teacher.findMany({
            include: { course: true }
        });
    }

    async findById(requestId) {
        return await prisma.teacher.findUnique({
            where: { id: Number(requestId) },
            include: { course: true }
        });
    }

}

export default new TeacherRepository;