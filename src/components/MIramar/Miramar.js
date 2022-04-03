import React, { useContext } from 'react';
import { create } from '../../Bangladesh';

const Miramar = () => {
    const count = useContext(create);

    return (
        <div className='border'>

            <h1>Miramar</h1>
            <h2>boom: {count}</h2>
        </div>
    );
};

export default Miramar;