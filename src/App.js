import express from 'express';
import conectarBanco from '../config/dbConnect.js';
import livroRoutes from './routes/livroRoutes.js';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

const app = express();
app.use(express.json());

// Inicia conexão com o banco
conectarBanco().then((conexao) => {
    console.log('Conexão estabelecida com sucesso');

    conexao.on("error", (erro) => {
        console.log(erro);
    });

    conexao.once("open", () => {
        console.log("Conectado ao MongoDB");
    });
});

app.get('/', (req, res) => {
    res.status(200).send("Teste do node");
});

app.use('/livros', livroRoutes);

export default app;
