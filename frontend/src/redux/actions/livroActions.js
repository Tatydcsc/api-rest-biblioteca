// Definindo os tipos de ação
export const SET_LIVROS = 'SET_LIVROS';

// Action creator para definir livros
export const setLivros = (livros) => {
    return {
        type: SET_LIVROS,
        payload: livros
    };
}; 