import { SET_LIVROS } from '../actions/livroActions';

const initialState = {
    livros: []
};

export const livroReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIVROS:
            return {
                ...state,
                livros: action.payload
            };
        default:
            return state;
    }
}; 