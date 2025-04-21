import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    autor: {type: String, required: String},
    ano: {type: Number},
    pagina: {type: Number},
    preco: {type: Number}
}, {versionKey: false});

const livros = mongoose.model('Livros', livroSchema, 'Livros');

export default livros;
