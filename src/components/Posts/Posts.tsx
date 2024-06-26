import Post from "./Post/Post"
import s from './Post.module.sass'
import { fetchUsers } from "../../store/redusers/UsersSlice"
import { useAppDispatch } from "../../hooks/redux"
import { useAppSelector } from "../../hooks/redux"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

function Posts() {
  let acunkUsers = useState(useAppSelector(state => state.rootReduser.usersSlice.users))
  let users = useAppSelector(state => state.rootReduser.usersSlice.users)
  const dispatch = useAppDispatch()


  // useEffect(()=>{
  //   dispatch(fetchUsers())
    
  // },[dispatch])



  const posts = users.map(item => <Post name={item.name} key={item.id} userName={item.username}/>)
  return (
    <>
        <div className="fixed-grid has-4-cols">
          <div className="grid ">
          {posts}
          </div>
        </div>
    </>
  )
}

export default Posts
