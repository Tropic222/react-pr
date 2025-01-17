import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "posts", element: <Posts /> },
  { path: "posts/:id", element: <PostIdPage /> },
  { path: "about", element: <About /> },
  // { path: "*", element: <Error /> },
];

export const publicRoutes = [{ path: "/Login", element: <Login /> }];
