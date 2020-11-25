import {Buy_Book} from '../actionType/actionType'

export const buyBook = (number=1) => {
    return {
        //action
        type: Buy_Book,
        payload: number
    }
}