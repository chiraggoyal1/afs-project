import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter}from 'react-router-dom'
import App from './App';
import Home from './Home';
import Counter from './Counter';
import ViewPosts from './ViewPosts';
import Regestration from './Regestration';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import Contact from './Contact';
import DescribePage from './DescribeFile';


// import Postsss from './Postsss';
const router=createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    errorElement : <h1>Page Not Found</h1>
  },
  {
    path :"/app",
    element : <App></App>,
  },
  
  {
    path :"/posts",
    element : <ViewPosts></ViewPosts>,
  },
  {
    path:"/Counter",
    element:<Counter/>,
  },
  {
    path:"/register",
    element:<Regestration></Regestration>
  },
  {
    path:'CreatePost',
    element:<CreatePost></CreatePost>
  },
  {
    path:"EditPost",
    element:<EditPost></EditPost>
  },
  {
    path:"Contact",
    element:<Contact></Contact>
  },
  {
    path:"DescribeFile",
    element:<DescribePage></DescribePage>
  }
  
  // {
  //   path:"/ViewPosts.js"
  //   element:<h1>ViewPost</h1>,
  // }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

