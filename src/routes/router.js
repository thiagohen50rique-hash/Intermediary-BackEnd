import express from "express";
import teacherRoute from "./TeacherRoute.js";
import courseRoute from "./CourseRoute.js";
import userRoute from "./UserRoute.js";
import evaluationRoute from "./EvaluationRoute.js";


const router = express.Router();

// Health Check / Ping Route
router.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "API está online e rodando perfeitamente!",
        timestamp: new Date().toISOString()
    });
});

router.use('/teacher', teacherRoute);
router.use('/course', courseRoute);
router.use('/user', userRoute);
router.use('/evaluation', evaluationRoute);

export default router;