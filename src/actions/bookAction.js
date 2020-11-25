import {Buy_Book} from '../actionType'

export const buyBook = () => {
    return {
        //action
        type: Buy_Book,
        payload: "First Action"
    }
}