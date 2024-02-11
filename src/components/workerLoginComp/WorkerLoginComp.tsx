import styles from './_WorkerLoginComp.module.scss'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { workerLoginSchema } from '../../validations/zodWorkerSchemas';
import { Link } from 'react-router-dom';
import { IWorkerLoginData } from '../../Interfaces/workerInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuth } from '../../features/userAuth/userAuthSlice';
import { loginUser } from '../../app/actions';
import { useNavigate } from 'react-router-dom';


const WorkerLoginComp = () => {

  const userAuth = useSelector(selectUserAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IWorkerLoginData>({
    resolver: zodResolver(workerLoginSchema)
  })

  const onSubmit = async (data:IWorkerLoginData) => {
    console.log('data en onSubmit ', data)
    dispatch(loginUser(data));
    reset();
    navigate('/');
  };
  
  console.log('userAuth en LoginComp:  ',userAuth);
  
  console.log('document.cookie', document);

  const userAuthCompleteReducer = useSelector((state: any) => state.userAuth.data);
  console.log('userAuthCompleteReducer state.usrerAuth.data in LoginAction :',userAuthCompleteReducer);

 
  return (
    <div className={styles.container}>
       <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.title}>
          Ingresar
        </h2>
        <div className={styles.inputBlock}>
          <label htmlFor='dni'>Dni</label>
          <input type='text' {...register(
            'dni',
            { required: 'El dni es requerido' })}
            placeholder='Ingrese dni...'
          />
          {errors.dni && <span>{errors.dni.message}</span>}
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' {...register(
            'password',
            { required: 'La contraseña es requerida' })}
            placeholder='Ingrese contraseña...'
          />
        {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button
          className={styles.submit}
          type='submit'
        >
          Ingresar
        </button>
      </form>
      <p className={styles.link}>
        Aún no tenés una cuenta?
        <Link 
          to='/user-register'
          className={styles.register}
        >
          Registrarse
        </Link>
      </p>
        {/* <Link to='/company'>Company</Link>
        <Link to='/tasks'>TasksPage</Link> */}
    </div>
  )
}

export default WorkerLoginComp
