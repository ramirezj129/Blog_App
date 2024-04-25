import React from 'react';
import './App.css';
import IndexPage from './pages/IndexPage';
import Layout from './Layout';
import {Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (

    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/edit/:id' element={<EditPost/>}/>
        </Route>
      </Routes>
   </UserContextProvider>
  );
}

export default App;

/*      
<div className="post">

<div clasName="image">
<img src='https://spaceexplored.com/wp-content/uploads/sites/10/2023/01/FmjaekIWQAEMh3g.jpeg?resize=667,1000' alt="description of spacex"></img>
</div>

<div className="texts">

<h2>How many rockets has SpaceX launched so far in 2023?</h2>

<p className="info">
    <a href="/#" className="author">Javier Ramirez</a>
    <time>09/21/2023</time>
</p>

<p className="summary">SpaceX is aiming to launch 100 rockets this year, another big increase from what the company did in 2022. That will mean they will have to launch on average every three to four days. Will SpaceX be able to pull it off? Keep track below of all of SpaceX 2023 launches.</p>

</div>
</div>  */
