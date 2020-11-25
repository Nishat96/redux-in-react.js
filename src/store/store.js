import {createStore} from 'redux';
import booksReducer from '../Reducers/bookReducer';
// import rootReducers from '../Reducers/RootReducer';


const store = createStore(booksReducer);

export default store;