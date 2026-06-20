import UserRepository from '../repositories/UserRepository.js';

class UserService {

    async createUser(data) {
        if (!data.firstName || !data.lastName) {
            throw new Error('Nome completo é obrigatório')
        }

        return await UserRepository.createUser(data);
    }

    async getAll() {
        return await UserRepository.findAll();
    }

    async getById(requestId) {
        const user = await UserRepository.findById(requestId);
        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        return user
    }
}

export default new UserService();