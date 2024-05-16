import PostPage from "../pages/postPage";
import AboutPage from "../pages/aboutPage";
import HomePage from "../pages/homePage";
import {createBrowserRouter,} from "react-router-dom";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/Posts",
    element: <PostPage/>,
  },
  {
    path: "/About",
    element: <AboutPage/>,
  },
]);
  
export default Router