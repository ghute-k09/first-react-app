function App() {
  let str = "hello world";
  let style = {backgroundColor:"yellow", color:"white"};

  return <>
  <h1 style={{backgroundColor: "red"}}>hello world</h1>
  <h1 style={style}>{str}</h1>
  </>
}

export default App;
