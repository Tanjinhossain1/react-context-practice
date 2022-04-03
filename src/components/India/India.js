import React, { useContext } from 'react';
import { create } from '../../Bangladesh';
import Kasmir from '../Kasmir/Kasmir';

const India = () => {
    const count = useContext(create);
   
    return (
        <div className='border-2 mt-2 mb-2 p-2'>
            <h1>India</h1>
            <h2>boom: {count}</h2>
            <Kasmir></Kasmir>
        </div>
    );
};

export default India;