import React from 'react'
import Child from './Child';
import Child2 from '../Child2';

export default function Parent(props) {
    return (
        <div>
            <Child />
            <Child2 />
        </div>
    )
}
