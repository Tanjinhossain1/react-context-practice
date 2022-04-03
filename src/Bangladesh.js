import React, { createContext, useState } from 'react';
import Chaina from './components/Chaina/Chaina';
import India from './components/India/India';
import Usa from './components/Usa/Usa';
export const create = createContext('value')
const Bangladesh = () => {
    const [count, setCount] = useState(0)
    const boomCount = () =>{
        setCount(count + 1)
    }
  
    return (
       <create.Provider value={count}>
            <div className='border-4 p-6 mt-12'>
            <h1>Leader Bangladesh</h1>
            <button onClick={boomCount}>Boom</button>
            <Usa></Usa>
            <Chaina></Chaina>
            <India></India>
        </div>
       </create.Provider>
    );
};

export default Bangladesh;