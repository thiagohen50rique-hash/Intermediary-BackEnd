import UserService from '../services/UserService.js';

class UserController {
    async create(req, res) {
        try {
            const userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                profilePicture: req.file ? req.file.path : null
            };

            const newUser = await UserService.createUser(userData);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const user = await UserService.getAllUser();
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(Number(id));
            return res.status(200).json(teacher);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

}

export default new UserController();