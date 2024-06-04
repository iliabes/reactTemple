import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import {Outlet} from 'react-router-dom'

function Layout() {
    return (
        <>
        <main className="main">
        <Navbar/>
        <Outlet/>
        <Footer/>
        </main>
        </>
    )
}

export default Layout;