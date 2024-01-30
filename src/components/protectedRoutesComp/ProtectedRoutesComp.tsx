import { Navigate, Outlet } from "react-router-dom";
import { decodeToken } from 'react-jwt';
import { useSelector } from "react-redux";
import { selectUserAuth } from "../../features/userAuth/userAuthSlice";


const ProtectedRoutesPage = () => {

  const userAuthReducer = useSelector(selectUserAuth);
  const userAuthCompleteReducer = useSelector((state: any) => state.userAuth);
  console.log('state.user in ProtectedRoutes :',userAuthCompleteReducer);

  console.log('userAuth de redux en ProtecterRoutes: ', userAuthReducer);

  const jwtSecret: string | undefined = 'triarsecrettoken';

  function getCookieValue(name: string): string | null {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
  
    return null;
  }



  if (!jwtSecret) {
    console.error('La clave secreta no está definida.');
    return null; // o maneja el error de alguna manera
  }

  console.log('document.cookie', document.cookie);

  // Extraigo el token de la cookie
  const tokenCookie = getCookieValue('token')
  //   .split('; ')
  //   .find(row => row.startsWith('token='))
  //   ?.split('=')[1];

  console.log('tokenCookie en ProtecterRoutes: ', tokenCookie)

  // Defino la variable para guardar el valor del usuario del token dedocificado
  let userFromCookie: any = null;


  if (tokenCookie) {
    try {
      // Decodifico el token
      userFromCookie = decodeToken(tokenCookie);
      console.log('Datos de la cookie:', userFromCookie);
    } catch (error) {
      console.error('Error al verificar el token:', error);
    }
  } else {
    console.log('No hay datos en la cookie');
  }
  
  console.log('userFromCookie: ', userFromCookie);
  
  if (userAuthCompleteReducer.data.role === 'user') {
    console.log('dentro del if')
    return <Outlet/>;
  }
  console.log('fuera del if')
  return <Navigate to='/login' />
};

export default ProtectedRoutesPage;
  
    






// import { Navigate, Outlet } from "react-router-dom"
// import { ILocalStorageUserData } from "../../Interfaces/userInterfaces";
// // import { useSelector } from "react-redux"
// // import { userAuthState } from "../../features/userAuth/userAuthSlice"


// const ProtectedRoutesPage = () => {

//     // const userRole = useSelector(userAuthState);
//     // se debe comprobar la autenticación
//     // console.log('userRole.data.role: ',userRole.data?.role);
//     const userFromLocalStorageString = localStorage.getItem('user');

//     let userFromLocalStorage: ILocalStorageUserData | null = null;

//     if (userFromLocalStorageString !== null) {
//     userFromLocalStorage = JSON.parse(userFromLocalStorageString);
//     console.log('Datos del Local Storage:', userFromLocalStorage);
//     } else {
//     console.log('No hay datos en el Local Storage');
//     }

//     console.log('userFromLocalStorage: ', userFromLocalStorage)

//     // console.log('role en ProtectedRoutes: ', role);
//     if(userFromLocalStorage?.role === 'user') {
//         // return <Navigate to='/login' replace />
//         return <Outlet/>
//         // replace hace que la ruta se sobreescriba para que no vuelva a la anterior.
//     }
//     return <Navigate to='/login' replace />
//         // con Outlet le digo que continúe con el componente hijo
// }

// export default ProtectedRoutesPage
