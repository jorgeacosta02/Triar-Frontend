import styles from './_LoginComp.module.scss'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../validations/zodSchemas';
import { Link } from 'react-router-dom';
import { ILoginData } from '../../Interfaces/userInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuth } from '../../features/userAuth/userAuthSlice';
import { loginUser } from '../../app/actions';
import { useNavigate } from 'react-router-dom';


const LoginComp = () => {

  const userAuth = useSelector(selectUserAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data:ILoginData) => {
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
