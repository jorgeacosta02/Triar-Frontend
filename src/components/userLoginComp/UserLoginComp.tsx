import styles from './_UserLoginComp.module.scss'
import { IUserLoginData } from '../../Interfaces/UserInterfaces';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'
import { selectUserAuth } from '../../redux/slices/userAuthSlice';
import { loginUser } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toggleMessage } from '../../redux/slices/messageSlice';


const UserLoginComp = () => {

    const userAuth = useSelector(selectUserAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Estado de datos del formulario
    const [formData, setFormData] = useState<IUserLoginData>({
        dni: '',
        password: '',
    });
    
    console.log('formData in UserLoginComp ',formData);
    

    // Estado de errores del formulario
    const [errors, setErrors] = useState<IUserLoginData>({
        dni: '',
        password: '',
    });

    // Comprobación de estados para enviar formulario
    let submitOk = false;
  
    if(
        formData.dni  !== '' &&
        formData.password  !== ''
    ){
        submitOk = true;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
         ...prevData,
         [name]: value,
       }));
       setErrors((prevData) => ({
         ...prevData,
         [name]: '',
       }));
    };

    const emptyMessage = 'Este campo debe ser completado.'
 
    const emptyValidationHandler =()=>{
        if(!formData.dni){
        setErrors((prevData) => ({
            ...prevData,
            dni: emptyMessage,
        }));
        };
        if(!formData.password){
        setErrors((prevData) => ({
            ...prevData,
            password: emptyMessage,
        }));
        };
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log('submit')
        if(!submitOk) return emptyValidationHandler();
        submitForm();
      }
      
    const messageHandleClick = () => {
        dispatch( toggleMessage() );
    };

    const submitForm = async () => {
        try{




            // const response = await axios.post(
            // 'http://localhost:4000/user-login',
            //     formData
            // );
            // console.log('response.statys', response.status);

            dispatch(loginUser(formData));


            // queryResponse = await response.status;
            setFormData({
            dni: '',
            password: '',
            })

            messageHandleClick()
            navigate('/')

        }catch(error:any){
            console.log(error.message)
        }
    }
  
    console.log('userAuth en UserLoginComp:  ',userAuth);
    
    console.log('document.cookie', document);

    // const userAuthCompleteReducer = useSelector((state: any) => state.userAuth.data);
    // console.log('userAuthCompleteReducer state.usrerAuth.data in LoginAction :',userAuthCompleteReducer);

    
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.title}>
                        Ingresar
                    </h2>
                    <div className={styles.inputBlock}>
                    <label 
                        htmlFor='dni'>
                        'DNI'
                    </label>
                    <input
                        type='text'
                        id='dni'
                        name='dni' 
                        value={formData.dni}
                        onChange={handleInputChange} 
                        placeholder='Ingrese dni...'
                        // className={inputColor}
                    />
                    {
                        errors.dni 
                        && 
                        <p className={styles.errorMessage}>
                        {errors.dni}
                        </p>
                    }
                    </div>
                    <div className={styles.inputBlock}>
                    <label 
                    htmlFor='password'>
                        Contraseña
                    </label>
                    <input
                    type='text'
                    id='password'
                    name='password' 
                    value={formData.password}
                    onChange={handleInputChange} 
                    placeholder='Ingrese contraseña...'
                    // className={inputColor}
                    />
                    {
                    errors.password 
                    && 
                    <p className={styles.errorMessage}>
                        {errors.password}
                    </p>
                    }
                    </div>
                    <button
                        className={styles.submit}
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserLoginComp




























// import styles from './_UserLoginComp.module.scss'
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { userLoginSchema } from '../../validations/zodUserSchemas';
// import { IUserLoginData } from '../../Interfaces/userInterfaces';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUserAuth } from '../../redux/slices/userAuthSlice';
// import { loginUser } from '../../redux/actions/actions';
// import { useNavigate, Link } from 'react-router-dom';


// const UserLoginComp = () => {

//   const userAuth = useSelector(selectUserAuth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<IUserLoginData>({
//     resolver: zodResolver(userLoginSchema)
//   })

//   const onSubmit = async (data:IUserLoginData) => {
//     console.log('data en onSubmit ', data)
//     dispatch(loginUser(data));
//     reset();
//     navigate('/');
//   };
  
//   console.log('userAuth en LoginComp:  ',userAuth);
  
//   console.log('document.cookie', document);

//   const userAuthCompleteReducer = useSelector((state: any) => state.userAuth.data);
//   console.log('userAuthCompleteReducer state.usrerAuth.data in LoginAction :',userAuthCompleteReducer);

 
//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h2 className={styles.title}>
//             Ingresar
//           </h2>
//           <div className={styles.inputBlock}>
//             <label htmlFor='dni'>Dni</label>
//             <input type='text' {...register(
//               'dni',
//               { required: 'El dni es requerido' })}
//               placeholder='Ingrese dni...'
//             />
//             {errors.dni && <span>{errors.dni.message}</span>}
//           </div>
//           <div className={styles.inputBlock}>
//             <label htmlFor='password'>Contraseña</label>
//             <input type='password' {...register(
//               'password',
//               { required: 'La contraseña es requerida' })}
//               placeholder='Ingrese contraseña...'
//             />
//           {errors.password && <span>{errors.password.message}</span>}
//           </div>
//           <button
//             className={styles.submit}
//             type='submit'
//           >
//             Ingresar
//           </button>
//         </form>
//         <p className={styles.linkContainer}>
//           Aún no tenés una cuenta?
//           <Link 
//             to='/user-register'
//             className={styles.register}
//           >
//             Registrarse
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default UserLoginComp
