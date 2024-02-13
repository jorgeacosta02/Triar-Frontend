import styles from './_UserProfileComp.module.scss'
import { getDataFromLocalStorage, cleanDataInLocalStorage } from '../localStorageComp/LocalStorageComp'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanUser } from '../../features/userAuth/userAuthSlice'

const UserProfileComp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = getDataFromLocalStorage('accessLogin').user;

    const clickHandler = () => {
        cleanDataInLocalStorage('accessLogin');
        dispatch(cleanUser());
        navigate('/');
    }

    const goBackHandler = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>
            <h1>Mi perfil</h1>
            <div className={styles.data}>
                <p>{`Nombre: ${user.firstName.toUpperCase()}`}</p>
                <p>{`Apellido: ${user.lastName.toUpperCase()}`}</p>
                <p>{`Dni: ${user.dni ? user.dni : 'sin número'}`}</p>
                <p>{`Teléfono: ${user.phone}`}</p>
                <p>{`Email: ${user.email}`}</p>
            </div>
            <button onClick={clickHandler}>Cerrar sesión</button>
            <button onClick={goBackHandler}>Volver</button>
        </div>
    )
}

export default UserProfileComp
