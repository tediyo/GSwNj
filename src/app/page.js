////export default function Home() {
  // return (
  //   <div>
  //     {/* <h1>Welcome to My Next.js App</h1>
  //     <p>Main content goes here.</p> */}
      
  //   </div>
  // );

'use client';
  import React, { useState } from 'react';
  const Counter = () => {
    // Declare a state variable called 'count' and a function to update it called 'setCount'
    const [count, setCount] = useState(0);
  
    // Function to handle button click
    const handleClick = () => {
      // Update the state by incrementing the count
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={handleClick} style={{ backgroundColor: '#D9D9D9' , color: 'black'} } >Increase Count</button>
      </div>
    );
  };
  
  export default Counter;

//}
