import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
const NavBar = () => {
   return (

      <div className={style.containT}>

         <Link to="/home" className={style.contain}>Home</Link>

         <Link to="/create" className={style.contain}>create</Link>

         <Link to="/about" className={style.contain}>About</Link>

      </div>

   )

}
export default NavBar;