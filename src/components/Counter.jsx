import React, { useContext } from 'react';
import { Mycontext } from '../App';


const Counter = () => {

    const value = useContext(Mycontext)
  return <div>
      <h1 className='counter'>I am using context API</h1>
      <h1 className='counter'>{`counter : ${value}`}</h1>
  </div>;
};

export default Counter;
