import { configureStore } from '@reduxjs/toolkit';
import { livroReducer } from './reducers/livroReducer';

const store = configureStore({
    reducer: {
        livro: livroReducer
    }
});

export default store; 