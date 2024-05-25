import { Link , useNavigate} from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import {Switch} from '@gravity-ui/uikit';


function Navbar() {
    const navigate = useNavigate();
    const theme = useTheme()
    function switchTheme(){theme()}


    return ( 
        <>
            <ul className='navbar is-warning navbar-end' role="navigation" aria-label="dropdown navigation">
                <li className='navbar-item'><Link className='button' to={'/'}>Home</Link></li>
                <li className='navbar-item'><Link className='button' relative="path" to={'about'} >About</Link></li>
                <li className='navbar-item'><Link className='button' relative="path" to={'firebase'} >Firebase</Link></li>
                <li className='navbar-item'><Link className='button' to={'posts'}>Posts</Link></li>
                <li className='navbar-item'><button  onClick={()=>{navigate(-1)}} className='button' >Go back</button></li>
                <li className='navbar-item'><Switch size="m" onChange={switchTheme}>Dark</Switch></li>  
            </ul>

        </>
     );
}

export default Navbar;