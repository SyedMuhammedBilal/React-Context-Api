import React, {useContext} from 'react'
import CounterContext from '../CounterContext';

export default function Child(props) {
    let counterValue = useContext(CounterContext)

    return (
        <div>
            <h2>Using Context API</h2>
            <h2>
                Counter value is: {counterValue}
            </h2>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    )
}
