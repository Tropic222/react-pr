import React, { useState } from "react";
import "./style/styles.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS1", body: "Description" },
    { id: 2, title: "JS2", body: "Description" },
    { id: 3, title: "JS3", body: "Description" },
  ]);

  const [title, setTitle] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <from>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type=" text"
          placeholder="Название поста"
        ></input>
        <input type=" text" placeholder="Описание поста"></input>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </from>
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
