import React, { useState } from "react";
import "./style/styles.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS1", body: "Description" },
    { id: 2, title: "JS2", body: "Description" },
    { id: 3, title: "JS3", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
}

export default App;
