import React, {useState} from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: "",
        body: "",
      });

      const addNewPost = (e) => {
        e.preventDefault();
    
        const newPost = {...post, id: Date.now()} 
        create(newPost)
        setPost({ title: "", body: "" });
      };
    
    return (
        <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type=" text"
          placeholder="Название поста"
        ></MyInput>
        {/* Неуправляемый\ Неконтролируемый компонент */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type=" text"
          placeholder="Описание поста"
        ></MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
};

export default PostForm;