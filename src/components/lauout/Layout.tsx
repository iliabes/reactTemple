import Navbar from "./navbar/navbar";
import {Switch} from '@gravity-ui/uikit';
import {Outlet} from 'react-router-dom'
import useTheme from "../../hooks/useTheme";


function Layout() {

    
    let swithTheme = useTheme()

    return (
        <>
        <main>
        <Navbar/>
        <Switch onChange={()=>{swithTheme()}} size="l">Unchecked</Switch>
        <Outlet/>
        </main>
        </>
    )
}

export default Layout;