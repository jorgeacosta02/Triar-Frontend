// workerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginWorker } from '../actions/actions';
import { IWorkerData, ApiResponse } from '../../Interfaces/workerInterfaces';


interface WorkerState {
    data: IWorkerData | null;
    loading: boolean;
    error: string | null;
}

const initialState: WorkerState = {
    data: null,
    loading: false,
    error: null,
};

const workerSlice = createSlice({
    name: 'workerAuth',
    initialState,
    reducers: {
      cleanWorker : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginWorker.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginWorker.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
          state.loading = false;
          console.log('action.payload.worker in slice :', action.payload.worker);
          state.data = action.payload.worker;
          console.log('state.data en la slice: ', state.data)
          if (action.payload.message === 'El usuario no existe') {
            // El servidor devolvió un mensaje indicando que el usuario no existe
            // Puedes manejar esto de acuerdo a tus necesidades
          }
        })
        .addCase(
          loginWorker.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de inicio de sesión';
          }
        );
    },
});

export const { cleanWorker } = workerSlice.actions;

export default workerSlice.reducer;

export const selectWorkerAuth = (state:any) => state.workerAuth;






// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     firstName: '',
//     lastName: '',
//     dni: 0,
//     healthPlan: '',
//     phone: 0,
//     email: '',
//     password: '',
//     status: false,
//     role: '',
// }

// export const userAuthSlice = createSlice({
//     name: 'userAuth',
//     initialState,
//     reducers: {

//     }
// })

// export const {  } = userAuthSlice.actions;

// export const userAuthState = (state:any) => state.userAuth;

// export default userAuthSlice.reducer;