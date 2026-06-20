//IMPORTAÇÃO DA CONEXÃO COM O DATABASE
import prisma from '../config/database.js';

//CONSTRUÇÃO DE CLASSE
class CourseRepository {

    //CONSTRUÇÃO DOS MÉTODOS

    //definido que o método de criação de curso será assíncrono e usará um parâmetro 'data', que representa o nome do curso a ser criado
    async createCourse(data) {

        //definido o que o método retornará (executará), usando delegate create do Prisma
        return await prisma.course.create({

            //definido o objeto que será criado
            data: { name: data.name }
        });
    }

    //definido que o método de busca de todos os cursos será assíncrono
    async findAll() {

        //definido que o método retornará (executará), usando delegate findMany do Prisma
        return await prisma.course.findMany({

            //incluído o nome do professor relacionado ao curso
            include: { teacher: true },

            //usado a ordenação por ordem alfabética (opcional)
            orderBy: { name: 'asc' }
        });
    }

    //definido que o método de busca de um curso por ID (vindo do frontend) será assíncrono
    async findById(requestId) {

        //definido que o método retornará (executará), usando delegate findUnique do Prisma
        return await prisma.course.findUnique({

            //utilizado a cláusula where para comparar o ID (id) do schema.prisma com o ID (requestId) passado no frontend
            where: { id: Number(requestId) },

            //incluído o nome do professor relacionado ao curso
            include: { teacher: true }
        });
    }


} //ENCERRAMENTO DA CLASSE

//EXPORTAÇÃO DA CLASSE
export default new CourseRepository();