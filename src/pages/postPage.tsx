import Posts from "../components/Posts/Posts";
import {Outlet} from 'react-router-dom'
 
const PostPage = () => {
    return (
    <>
        <section className="section">
        <h2 className="title">Posts</h2>
        <Outlet/>
        <Posts/>
        </section>
    </>
    );
}
 
export default PostPage;