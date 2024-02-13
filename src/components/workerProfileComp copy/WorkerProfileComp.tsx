import styles from './_WorkerProfileComp.module.scss'
import { getDataFromLocalStorage, cleanDataInLocalStorage } from '../localStorageComp/LocalStorageComp'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanWorker } from '../../features/workerAuth/workerAuthSlice';
const WorkerProfileComp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const worker = getDataFromLocalStorage('accessLogin').worker;

    const clickHandler = () => {
        cleanDataInLocalStorage('accessLogin');
        dispatch(cleanWorker());
        navigate('/');
    }

    const goBackHandler = () => {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <h1>Mi perfil</h1>
            <div className={styles.data}>
                <p>{`Nombre: ${worker.firstName.toUpperCase()}`}</p>
                <p>{`Apellido: ${worker.lastName.toUpperCase()}`}</p>
                <p>{`Dni: ${worker.dni ? worker.dni : 'sin número'}`}</p>
                <p>{`Teléfono: ${worker.phone}`}</p>
                <p>{`Email: ${worker.email}`}</p>
            </div>
            <button onClick={clickHandler}>Cerrar sesión</button>
            <button onClick={goBackHandler}>Volver</button>
        </div>
    )
}

export default WorkerProfileComp
