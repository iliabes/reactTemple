import { Link } from "react-router-dom";
import s from './navbar.module.sass'

function Navbar() {
    return ( 
        <>
        <div className={s.Navbar}>
            <ul className={s.Navbar__container}>
                <li className={s.Navigation__li}><Link className={s.Navbar__link} to={'/'}>Home</Link></li>
                <li className={s.Navigation__li}><Link className={s.Navbar__link} relative="path" to={'About'} >About</Link></li>
                <li className={s.Navigation__li}><Link className={s.Navbar__link} to={'Posts'}>Posts</Link></li>
            </ul>
        </div>
        </>
     );
}

export default Navbar;