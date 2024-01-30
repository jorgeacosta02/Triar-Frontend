import styles from './_LoginComp.module.scss'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../validations/zodSchemas';
import { Link } from 'react-router-dom';
import { ILoginData } from '../../Interfaces/userInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuth } from '../../features/userAuth/userAuthSlice';
import { loginUser } from '../../app/loginActions';



const LoginComp = () => {

  // const userAuth = useSelector((state: any) => state.userAuth);
  const userAuth = useSelector(selectUserAuth);

  // const dispatch = useDispatch<Dispatch<AnyAction> | any>();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data:ILoginData) => {
    console.log('data en onSubmit ',data)
    dispatch(loginUser(data));
    reset();
  };
  
  console.log('userAuth en LoginComp:  ',userAuth);
  
  console.log('document.cookie', document);

  const userAuthCompleteReducer = useSelector((state: any) => state.userAuth.data);
  console.log('userAuthCompleteReducer state.usrerAuth.data in LoginAction :',userAuthCompleteReducer);

  // Extraigo el token de la cookie
 // Función para obtener el valor de una cookie específica
 



  // const userFromLocalStorage = localStorage.getItem('user');
  // console.log('user de localStorage en LoginPage: ', JSON.parse(userFromLocalStorage));

  return (
    <div className={styles.container}>
       <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.title}>
          Ingresar
        </h1>
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
        <Link to='/register'>
          Registrarse
        </Link>
      </p>
        <Link to='/company'>Company</Link>
        <Link to='/tasks'>TasksPage</Link>
    </div>
  )
}

export default LoginComp
