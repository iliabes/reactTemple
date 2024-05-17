import { Link , useNavigate} from "react-router-dom";
import s from './navbar.module.sass'


function Navbar() {
    const navigate = useNavigate();
    return ( 
        <>
        <div className={s.Navbar}>
            <ul className={s.Navbar__container}>
                <li className={s.Navigation__li}><Link className={s.Navbar__link} to={'/'}>Home</Link></li>
                <li className={s.Navigation__li}><Link className={s.Navbar__link} relative="path" to={'About'} >About</Link></li>
                <li className={s.Navigation__li}><Link className={s.Navbar__link} to={'posts'}>Posts</Link></li>
                <li className={s.Navigation__li}><a onClick={()=>{navigate(-1)}} className={s.Navbar__link} >Go back</a></li>
            </ul>
        </div>
        </>
     );
}

export default Navbar;