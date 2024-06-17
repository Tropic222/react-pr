import React from "react";
import "./style/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

// import PostList from "./components/PostList";
// import PostForm from "./components/PostForm";
// import PostFilter from "./components/PostFilter";
// import MyModal from "./components/UI/MyModal/MyModal";
// import MyButton from "./components/UI/button/MyButton";
// import { usePosts } from "./hooks/usePosts";
// import PostServies from "./API/PostServies";
// import Loader from "./components/UI/Loader/Loader";
// import { useFatching } from "./hooks/useFetching";
// import { getPageCount } from "./utils/pages";
// import Pagination from "./components/UI/pagination/Pagination";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <a href="/about">About</a>
          <a href="/posts">Posts</a>
        </div>
      </div>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
