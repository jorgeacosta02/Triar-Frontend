import styles from './_RegisterPage.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '../../validations/zodSchemas';
// import { registerRequest } from '../../requests/requests';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { IRegisterData } from '../../Interfaces/userInterfaces';


const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: zodResolver(userSchema)
  });


  const API = 'http://localhost:3001'

  // export const registerRequest = (user: IUserData) => axios.post(`${API}/register`, user)

  const onSubmit: SubmitHandler<IRegisterData> = async (data) => {
    console.log(data);
    try {
      await axios.post(`${API}/register`, data);
      console.log('Formulario enviado con éxito');
      reset();
    } catch (error) {
      console.error('Error al enviarlo', error);
        // Verificación de tipos para 'error.response'
    if (axios.isAxiosError(error) && error.response) {
      console.error('Detalles del error:', error.response.data);
    } else {
      console.error('Error desconocido:', error);
    }
    }
  };
  
  // const firstName = watch('firstName');
  // const lastName = watch('lastName');
  // const dni = watch('dni');

  // console.log('Watched Fields:', { firstName, lastName, dni });

  console.log(errors);

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.title}>
          Registrarse
        </h1>
        <div className={styles.inputBlock}>
          <label htmlFor='firstName'>Nombre</label>
          <input {...register('firstName')}
              placeholder='Ingrese nombre...'
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor='lastName'>Apellido</label>
          <input {...register(
              'lastName',
              { required: 'El apellido es requerido' })}
              placeholder='Ingrese apellido...'
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
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
          <label htmlFor='healthPlan'>Obra social</label>
          <input {...register(
              'healthPlan',
            )}
              placeholder='Ingrese su obra social...'
          />
          {/* {errors.healthPlan && <span>{errors.healthPlan.message}</span>} */}
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor='phone'>Teléfono</label>
          <input {...register(
              'phone',
              { required: 'El número de teléfono es requerido' })}
              placeholder='Ingrese número de teléfono...'
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor='email'>Correo</label>
          <input {...register(
            'email',
            { required: 'El email es requerido' })}
            placeholder='Ingrese correo...'
          />
        {errors.email && <span>{errors.email.message}</span>}
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
          Enviar formulario
        </button>
      </form>
      <p className={styles.link}>
        Ya tenés una cuenta?
        <Link to='/login'>
          Ingresar
        </Link>
      </p>
      {/* <div>
        {JSON.stringify(watch(), null, 2)}
      </div> */}
    </div>
  )
}

export default RegisterPage
