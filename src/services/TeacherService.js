import TeacherRepository from '../repositories/TeacherRepository.js';

class TeacherService {

    async createTeacher(data) {
        if (!data.name || !data.courseId) {
            throw new Error('Nome do Professor e ID do Curso são obrigatórios');
        }

        return await TeacherRepository.create(data);
    }

    async getAll() {
        return await TeacherRepository.findAll();
    }

    async getById(requestId) {
        const teacher = await TeacherRepository.findById(requestId);
        if (!teacher) {
            throw new Error('Professor não encontrado');
        }

        return teacher
    }

}

export default new TeacherService();
