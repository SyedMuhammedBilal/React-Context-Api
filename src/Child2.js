import React, { useReducer } from 'react';
import CounterReducer from '../src/CounterReducer';

export default function Child2() {
    let [ state, dispatch ] = useReducer(CounterReducer, 0)
    console.log(state)

    return (
        <div>
            <h2>Using Reducer</h2>
            <h2>value of reducer sate is: {state}</h2>
            <button onClick={() => (dispatch('Increment'))}>Increment value in Reducer</button>
        </div>
    )
}
