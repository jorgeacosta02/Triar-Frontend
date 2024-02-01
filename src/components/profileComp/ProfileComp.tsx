import styles from './_ProfileComp.module.scss'
import { getUserFromLocalStorage, cleanUserInlocalStorage } from '../localStorageComp/LocalStorageComp'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanUser } from '../../features/userAuth/userAuthSlice'

const ProfileComp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = getUserFromLocalStorage().user;

    const clickHandler = () => {
        cleanUserInlocalStorage();
        dispatch(cleanUser());
        navigate('/company');
    }

    return (
        <div className={styles.container}>
            <h1>Mi perfil</h1>
            <div className={styles.data}>
                <p>{`Nombre: ${user.firstName}`}</p>
                <p>{`Apellido: ${user.lastName}`}</p>
                <p>{`Dni: ${user.dni}`}</p>
                <p>{`Teléfono: ${user.phone}`}</p>
                <p>{`Email: ${user.email}`}</p>
            </div>
            <button onClick={clickHandler}>Cerrar sesión</button>
        </div>
    )
}

export default ProfileComp
