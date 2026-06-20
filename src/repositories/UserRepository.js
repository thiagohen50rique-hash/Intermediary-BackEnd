import prisma from '../config/database.js';

class UserRepository {

    async createUser(data) {
        return await prisma.user.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                gender: data.gender,
                profilePicture: data.profilePicture
            }
        })
    }

    async findAll() {
        return await prisma.user.findMany({
            include: {
                evaluation: true
            },
            orderBy: {
                firstName: 'asc'
            }
        })
    }

    async findById(requestId) {
        return await prisma.user.findUnique({
            where: {
                id: Number(requestId)
            },
            inclue: {
                evaluation: true
            }
        })
    }

}

export default new UserRepository();