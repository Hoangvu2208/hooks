import React from 'react';
import useIncrement from '../hooks/useIncrement';

const Count2 = () => {
  const [count,setCount] = useIncrement(2);

  const handleClick  = () => {
    setCount(count);
  }



  return (
    <>
      <p>Count : {count}</p>
      <button type='button' onClick={() => handleClick()}>Add</button>
    </>
  );
  
}

export default Count2