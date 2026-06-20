import CourseService from '../services/CourseService.js';

class CourseController {
    async create(req, res) {
        try {
            const courseData = { name: req.body.name };
            const newCourse = await CourseService.createCourse(teacherData);
            return res.status(201).json(newTeacher);

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const course = await CourseService.getAllCourse();
            return res.status(200).json(course);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const course = await CourseService.getCourseById(Number(id));
            return res.status(200).json(teacher);

        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

}

export default new CourseController();