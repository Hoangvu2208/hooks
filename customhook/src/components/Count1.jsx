import React from "react";
import useIncrement from "../hooks/useIncrement";

const Count1 = () => {
  const [count, setCount] = useIncrement(1);
   console.log(useIncrement(1));
  // console.log(count);
  const handleClick = () => {
    setCount(count);
  }

  return (
    <>
      <div>count : {count}</div>
      <p>
        <button type="button" onClick={() => handleClick()}>Add</button>
      </p>
    </>
  );
};

export default Count1;
