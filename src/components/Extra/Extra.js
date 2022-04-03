import React, { useContext } from 'react';
import { create } from '../../Bangladesh';

const Extra = () => {
    const count = useContext(create)
    return (
        <div>
            <h1>I am extra Bomb: {count}</h1>
        </div>
    );
};

export default Extra;