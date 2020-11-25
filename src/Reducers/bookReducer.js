import { Buy_Book} from '../actionType/actionType'

const initialStateBooks = {
    numberOfBooks: 15
}
const booksReducer = (state=initialStateBooks, action) => {
    switch(action.type){
        case Buy_Book: return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        default:return state;
    }
}
export default booksReducer;