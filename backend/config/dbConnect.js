import mongoose from 'mongoose';

async function conectarBanco() {
    try {
        console.log('Tentando conectar ao MongoDB...');
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexão estabelecida com sucesso');
        return mongoose.connection;
    } catch (erro) {
        console.error('Erro ao conectar com MongoDB:', erro);
        process.exit(1); // Encerra a aplicação se não conseguir conectar ao banco
    }
}

export default conectarBanco; 