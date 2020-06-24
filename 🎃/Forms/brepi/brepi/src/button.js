import React, { useState } from 'react';

const Btn = ({currentPageToChange}) => {

    const [Counter, setCounter] = useState(1)
    console.log(Counter)
    currentPageToChange(Counter)

    return (
      <div className="counter">
        <button onClick={() => {Counter == 1 ? setCounter(Counter) : setCounter(Counter - 1)}}>Previous page</button>
        <button onClick={() => {setCounter(Counter + 1)}}>Next page</button>
        
      </div>
    )
  

  }
export default Btn ;