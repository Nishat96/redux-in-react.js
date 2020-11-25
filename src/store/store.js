import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import booksReducer from '../Reducers/bookReducer';
// import rootReducers from '../Reducers/RootReducer';


const store = createStore(booksReducer, applyMiddleware(logger));

export default store;