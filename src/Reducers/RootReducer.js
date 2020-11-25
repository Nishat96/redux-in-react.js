import {combineReducers} from 'redux';
import bookReducer from './bookReducer';

import penReducer from './penReducer';


const rootReducers = combineReducers({
    book: bookReducer,
    pen: penReducer,
});
export default rootReducers;