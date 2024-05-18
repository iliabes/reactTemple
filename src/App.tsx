
import './App.css'
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { fetchUsers } from './store/redusers/UsersSlice';
import { getLocalItem } from './lib/localStore';
import { getDataStorege } from './store/redusers/UsersSlice';
import { Routes, Route, } from 'react-router-dom';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import PostPage from './pages/postPage';
import Post from './pages/post';
import NotFound from './pages/notFoundPAge';
import Layout from './components/lauout/Layout'

export default function App() {


  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(!getLocalItem('users')){
      console.log('start fetch');
      dispatch(fetchUsers())
    }else{
      dispatch(getDataStorege(getLocalItem('users')))
    }
  },[dispatch])
  

  return (
   <>
   
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='/posts' element={<PostPage/>}>
        <Route path='post' element={<Post/>}/>
      </Route>
      <Route path='/post/:123' element={<Post/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
   </Routes>
   </>

  )
}


