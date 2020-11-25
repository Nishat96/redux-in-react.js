import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyBook} from '../actionType/index';

const HookBook = () => {
    const numberOfBooks = useSelector(state=>state.numberOfBooks);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Hook Container</h1>
            <h3> Number of Books: {numberOfBooks}</h3>
            <button onClick={()=>dispatch(buyBook())}>Buy Book</button>
    </div>
    );
};

export default HookBook;