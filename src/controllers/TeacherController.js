import TeacherService from '../services/TeacherService.js'

class TeacherController {
    async create(req, res) {
        try {
            const teacherData = {
                name: req.body.name,
                courseId: req.body.courseId
            };
            const newTeacher = await TeacherService.createTeacher(teacherData);
            return res.status(201).json(newTeacher);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const teacher = await TeacherService.getAll();
            return res.status(200).json(teacher);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const teacher = await TeacherService.getById(Number(id));
            return res.status(200).json(teacher);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

}

export default new TeacherController();