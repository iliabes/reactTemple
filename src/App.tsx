
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
      <Route path='/' element={<HomePage/>}/>
   </Routes>
   </>

  )
}


