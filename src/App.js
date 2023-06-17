function App() {
  let str = `hello world`;
  let pi = 3.14;
  let active = true;

  return (
    <>
      <h1>hello world</h1>
      <h1>{str}</h1>
      <h1>{str.toUpperCase()}</h1>
      {active && <h1>good morning</h1>}
      {!active ? <h1>good morning</h1> : <h1>good night</h1>}
    </>
  );
}

export default App;
