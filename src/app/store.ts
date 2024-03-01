import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../features/menu/menuSlice'
import userAuthReducer from '../redux/slices/userAuthSlice'
import workerAuthReducer from '../redux/slices/workerAuthSlice'

export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    userAuth: userAuthReducer,
    workerAuth: workerAuthReducer
  }
})








// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from 'redux-thunk';
// import { menuReducer } from './reducers/menuReducer';
// import { userAuthReducer } from './reducers/userAuthReducer';
// // import rootReducer from './reducer';

// // Combina los middleware que necesites, como redux-thunk
// const middleware = [thunkMiddleware];

// const rootReducer = combineReducers({
//     menu: menuReducer,
//     userAuth: userAuthReducer
//   });


// // Crea el store con la función createStore y los enhancers combinados
// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );




// import { createStore, combineReducers } from 'redux';
// import { menuReducer } from './reducers/menuReducer';
// import { userAuthReducer } from './reducers/userAuthReducer';

// const rootReducer = combineReducers({
//   menu: menuReducer,
//   userAuth: userAuthReducer
// });

// export const store = createStore(rootReducer);

// export type State = ReturnType<typeof rootReducer>