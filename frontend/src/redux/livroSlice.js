import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    livroSelecionado: null,
    livros: [],
    loading: false,
    error: null
};

const livroSlice = createSlice({
    name: 'livro',
    initialState,
    reducers: {
        setLivro: (state, action) => {
            state.livroSelecionado = action.payload;
        },
        setLivros: (state, action) => {
            state.livros = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearLivroSelecionado: (state) => {
            state.livroSelecionado = null;
        }
    }
});

export const { 
    setLivro, 
    setLivros, 
    setLoading, 
    setError, 
    clearLivroSelecionado 
} = livroSlice.actions;

export default livroSlice.reducer; 