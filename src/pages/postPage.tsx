import Posts from "../components/Posts/Posts";
import {Outlet} from 'react-router-dom'
 
const PostPage = () => {
    return (
    <>
        <Outlet/>
        <h2>Posts</h2>
        <Posts/>
        
    </>
    );
}
 
export default PostPage;