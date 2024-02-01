// actions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserDataFromDB } from '../Interfaces/userInterfaces';

export const loginUser: any = createAsyncThunk('user/loginUser', async (credentials: { dni: number; password: string }) => {

  try {
    const response = await axios.post<IUserDataFromDB, any>('/login', credentials);
    console.log('response.data en loginUser: ', response.data);
    const data = response.data;
    // const user = data.user;
    // const jsonUserFromLocalStorage: any = localStorage.getItem('accessLogin');
    // console.log('jsonUserFromLocalStorage: ', jsonUserFromLocalStorage)
    // const userFLS = JSON.parse(jsonUserFromLocalStorage);
    // console.log('userFLS: ', userFLS);
    // console.log('userFLS.user :', userFLS?.user );
    // console.log('data.user.id :', data.user.id);
    // console.log('userFLS.user.id: ', userFLS?.user?.id);
    // if(userFLS?.user?.id !== data.user.id){
    localStorage.setItem('accessLogin', JSON.stringify(data));
    // const foundUser = response.data.user
    // localStorageSetUserData(response.data.user);
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});

