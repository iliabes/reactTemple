import Posts from "../components/Posts/Posts";
import {  useLocation } from 'react-router-dom';

 
const Post = () => {
    const location = useLocation();
    return (
    <>
        <h2>this is Post -{location.pathname} </h2>
    </>
    );
}
 
export default Post;