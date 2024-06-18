import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
  { path: "posts", element: <Posts /> },
  { path: "posts/:id", element: <PostIdPage /> },
  { path: "about", element: <About /> },
  // { path: "*", element: <Error /> },
];
