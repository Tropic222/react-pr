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
      <from>
        <input type=" text" placeholder="Название поста"></input>
        <input type=" text" placeholder="Описание поста"></input>
        <button>Создать пост</button>
      </from>
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
