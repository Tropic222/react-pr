function App() {
  let likes = 0;
  function increment() {
    likes += 1;
    console.log(likes);
  }

  function dicrement() {
    likes -= 1;
    console.log(likes);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={dicrement}>Dicrement</button>
    </div>
  );
}

export default App;
