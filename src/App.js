import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(0)

  const f = () => setCount(n => n+1)
  const x2 = () => setCount(n => n*2)
  const divide3 = () => setCount(n => n%3 === 0? n/3 : n)
  const reset = ()  => setCount(0)
  return (
    <>
      {count}
      <button onClick={f}>count</button>
      <button onClick={x2}>x2</button>
      <button onClick={divide3}>divide3</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
