import {Buy_Pen} from '../actionType'

const initialStatePens = {
    numberOfPens: 15,
}

const pensReducer = (state=initialStatePens, action) => {
    switch(action.type){
        case 'Buy_Pen': return{
            ...state,
            numberOfPens: state.numberOfPens-2
        }
        default: return state;
    }
}

export default pensReducer;