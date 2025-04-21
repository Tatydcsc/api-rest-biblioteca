import livros from '../models/Livro.js';

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livros.find({});
            console.log('Livros encontrados:', listaLivros);
            res.status(200).json(listaLivros);
        } catch (erro) {
            console.error('Erro ao listar livros:', erro);
            res.status(500).json({ error: erro.message });
        }
    }

    static async buscarLivros(req, res) {
        try {
            const termo = req.query.q;

            if (!termo) {
                return res.status(400).json({ message: 'É necessário informar o parâmetro ?q=termo' });
            }

            const query = {
                $or: [
                    { titulo: { $regex: termo, $options: 'i' } },
                    { autor: { $regex: termo, $options: 'i' } },
                    { ano: !isNaN(termo) ? parseInt(termo) : undefined },
                    { pagina: !isNaN(termo) ? parseInt(termo) : undefined },
                    { preco: !isNaN(termo) ? parseFloat(termo) : undefined }
                ].filter(cond => cond !== undefined)
            };

            const resultado = await livros.find(query);
            res.status(200).json(resultado);
        } catch (erro) {
            res.status(500).json({ error: erro.message });
        }
    }

    static async criarLivro(req, res) {
        try {
            const novoLivro = new livros({
                titulo: req.body.titulo,
                autor: req.body.autor,
                ano: req.body.ano,
                pagina: req.body.pagina,
                preco: req.body.preco
            });
            const livroSalvo = await novoLivro.save();
            res.status(201).json(livroSalvo);
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const { id } = req.params;
            const livroAtualizado = await livros.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(livroAtualizado);
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const { id } = req.params;
            const livroDeletado = await livros.findByIdAndDelete(id);

            if (!livroDeletado) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }

            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    }
}

export default LivroController; 