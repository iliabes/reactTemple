import Navbar from "./navbar/navbar";
import {Outlet} from 'react-router-dom'

function Layout() {
    return (
        <>
        <main className="main">
        <Navbar/>
        <Outlet/>
        </main>
        </>
    )
}

export default Layout;