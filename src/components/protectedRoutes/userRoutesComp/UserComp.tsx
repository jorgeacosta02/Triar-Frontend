import { Navigate, Outlet } from "react-router-dom";
import { getUserFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


const UserRoutesComp = () => {

  const userFLS = getUserFromLocalStorage();

  if ( userFLS.user.active && userFLS?.user?.role === 'user' ) {
    console.log('dentro del if')
    return <Outlet/>;
  }
  console.log('fuera del if')
  return <Navigate to='/user-login' />
};

export default UserRoutesComp