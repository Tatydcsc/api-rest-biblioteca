import express from 'express';
import conectarBanco from '../config/dbConnect.js';
import livroRoutes from './routes/livroRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Carrega as variáveis de ambiente
dotenv.config();

const app = express();

// Configuração mais permissiva do CORS
app.use(cors({
    origin: '*', // Permite todas as origens em desenvolvimento
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(express.json());

// Inicia conexão com o banco
conectarBanco().then(() => {
    console.log('Conexão estabelecida com sucesso');
}).catch(erro => {
    console.error('Erro ao conectar com MongoDB:', erro);
});

app.get('/', (req, res) => {
    res.status(200).send("Teste do node");
});

app.use('/livros', livroRoutes);

export default app;
