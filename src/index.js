import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();

//Middlewares Globais
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//Servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

