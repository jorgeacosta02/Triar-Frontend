import { NavLink } from "react-router-dom";
import styles from './_navBarNavListComp.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectMenuState } from "../../features/menu/menuSlice";
import { falseMenu } from "../../features/menu/menuSlice";
import { getUserFromLocalStorage } from "../localStorageComp/LocalStorageComp";
import { selectUserAuth } from "../../features/userAuth/userAuthSlice";


const NavBarNavListComp = () => {

  const accessLogin = getUserFromLocalStorage();
  console.log('user in navBarNavList:', accessLogin);
  const userId = accessLogin?.user?.id;
  console.log('userId en NavBarNavListComp: ', userId);
  const userAuth = useSelector(selectUserAuth); 
  const userAuthId = userAuth?.data?.user?.id;
  console.log(userAuth)
  
  // si utilizo useSelector con menuReducer no necesito importarlo
  const menuCompleteReducer = useSelector((state: any) => state.menu.menu);
  // si lo utilizo con la slice separada, sí necesito importarlo.
  const menuReducer:any = useSelector(selectMenuState)

  console.log('menuCompleteReducer: ', menuCompleteReducer)

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    console.log('click en NavLixt');
    dispatch( falseMenu() );
  };

  const navListStyles = `${styles.navList} ${menuReducer.menu ? styles.show : ''}`;

  return (
    <ul className={navListStyles} >
        <li onClick={handleClick} >
          <NavLink
            to="/" 
            className={styles.navLink} 
           >Inicio</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/company" 
            className={styles.navLink} 
           >Empresa</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/services" 
            className={styles.navLink} 
           >Servicios</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/equipment" 
            className={styles.navLink} 
           >Equipos</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/jobs" 
            className={styles.navLink} 
           >Trabajos</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/contact" 
            className={styles.navLink} 
           >Contacto</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/tasks" 
            className={styles.navLink} 
           >Tareas</NavLink>
        </li>


        {accessLogin?.user?.id || userAuthId?.data?.user?.id
        ? <li>
            <NavLink to='/profile'>
              <p>{accessLogin.user.firstName}</p>
            </NavLink>
          </li>
          : <div  className={styles.loginLinks}>
              <li onClick={handleClick} >
                <NavLink
                  to="/login" 
                  className={styles.navLink} 
                >Ingresar</NavLink>
              </li>
              <li onClick={handleClick} >
                <NavLink
                  to="/register" 
                  className={styles.navLink} 
                  >Registrarse</NavLink>
              </li>
            </div>
          }
      </ul>
  )
}

export default NavBarNavListComp
