import React, { useState, useRef } from "react";
import "./style/styles.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS1", body: "Description" },
    { id: 2, title: "JS2", body: "Description" },
    { id: 3, title: "JS3", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <from>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type=" text"
          placeholder="Название поста"
        ></MyInput>
        {/* Неуправляемый\ Неконтролируемый компонент */}
        <MyInput
          ref={bodyInputRef}
          type=" text"
          placeholder="Описание поста"
        ></MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </from>
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
