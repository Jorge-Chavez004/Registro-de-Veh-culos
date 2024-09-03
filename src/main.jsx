import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostPage from './routes/PostPage.jsx'
import Notfound from './routes/404NotFound.jsx';
import NewPostPage from './routes/NewPostPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Notfound />,
    children: [
      {
        path: "blogs/: id",
        element: <PostPage/>
      }
    ]
  },
  {
    path: "/registroAutos",
    element: <NewPostPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)
