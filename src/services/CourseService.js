import CourseRepository from '../repositories/CourseRepository.js';

class CourseService {

    async createService(data) {
        if (!data.name) {
            throw new Error('Nome do Curso é obrigatório');
        }

        return await CourseRepository.createCourse(data);
    }

    async getAll() {
        return await CourseRepository.findAll();
    }

    async getById(requestId) {
        const course = await CourseRepository.findById(requestId);
        if (!course) {
            throw new Error('Curso não encontrado');
        }

        return course
    }

}

export default new CourseService();