import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <Counter />
    </>
  );
}

function Counter() {
  //let counter = 1; stateless variable
  let [counter, setCounter] = useState(1);//stateful variable which performs dom operations

  let LikeMeAction = () => {
    counter = counter + 1;
    console.log("counter:"+counter);
   //asking react to perform dom operations
    setCounter(counter);
    
  }
  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="LikeMe" onClick={LikeMeAction} />
    </>
  );
}

export default App;
