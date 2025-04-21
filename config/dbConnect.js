import mongoose from 'mongoose';

async function conectarBanco() {
    try {
        console.log('Tentando conectar ao MongoDB...');
        mongoose.connect(process.env.MONGO_URL);
        console.log('Conexão estabelecida com sucesso');
        return mongoose.connection;
    } catch (erro) {
        console.error('Erro ao conectar com MongoDB:', erro);
        throw erro;
    }
}

export default conectarBanco; 