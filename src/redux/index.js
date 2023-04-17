import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./slices/authSlice";
import { cartReducer } from "./slices/cartSlice";
import { pizzasReducer } from "./slices/pizzasSlice";


// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0
//     },
//     reducers: {
//         incremented: (state) => {
//             state.value += 1
//         },
//         decremented: (state) => {
//             state.value -= 1
//         }
//     }
// })
// export const { incremented, decremented } = counterSlice.actions







const reducers = combineReducers({
    // counter: counterSlice.reducer,
    cart: cartReducer,
    auth: authReducer,
    pizzas: pizzasReducer
})

export const store = configureStore({
    reducer: reducers,
})


// console.log(store);


// window.store = store
// window.plus = counterSlice.actions.incremented
// window.minus = counterSlice.actions.decremented

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('isAuth', state.auth.isAuth)
})