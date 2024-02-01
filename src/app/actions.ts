// import { ILoginData } from "../Interfaces/userInterfaces";
// // import axios from 'axios';
// import { Dispatch } from "redux";
// import ActionTypes from "./actionTypes";


// const API = 'http://localhost:3001'

// export const loginAction2 = (data: ILoginData) => {
//     return async (dispatch: Dispatch<any>)=> {
//         console.log('data en loginAction: ',data)
//         try {
//             const response = await axios.post(`${API}/login`, data)
//         const user = response.data.user;
//         console.log('user en loginAction: ',user);
//         dispatch({
//             type: ActionTypes.LOGIN,
//             payload: data,
//           });
//         } catch (error) {
//             console.error('Error al enviarlo', error);
//         }
//     }
// }




// actions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserDataFromDB } from '../Interfaces/userInterfaces';
// import { localStorageSetUserData } from '../components/localStorageComp/LocalStorageComp';

// interface ApiResponse {
//   user: IUserData;
//   message: string;
// }

export const loginUser: any = createAsyncThunk('user/loginUser', async (credentials: { dni: number; password: string }) => {

  
  try {
    const response = await axios.post<IUserDataFromDB, any>('/login', credentials);
    console.log('response.data en loginUser: ', response.data);
    const data = response.data;
    // const user = data.user;
    const jsonUserFromLocalStorage: any = localStorage.getItem('accessLogin');
    console.log('jsonUserFromLocalStorage: ', jsonUserFromLocalStorage)
    const userFLS = JSON.parse(jsonUserFromLocalStorage);
    console.log('userFLS: ', userFLS);
    console.log('userFLS.user :', userFLS?.user );
    if(userFLS?.user === null){
      localStorage.setItem('accessLogin', data)
    }
    // const foundUser = response.data.user
    // localStorageSetUserData(response.data.user);
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});

