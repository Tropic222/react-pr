import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1);
  }

  function dicrement() {
    setLikes(likes - 1);
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
