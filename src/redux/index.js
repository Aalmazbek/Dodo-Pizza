import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
        decremented: (state) => {
            state.value -= 1
        }
    }
})
export const { incremented, decremented } = counterSlice.actions



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: []
    }, 
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            const productId = action.payload
            console.log(productId);
            // state.data.splice(productId, 1)
            state.data = state.data.filter(elem => elem.id !== productId)
        },
        increaseAmount: (state, action) => {
            const productId = state.data.findIndex(item => item.id === action.payload)
            // console.log(state.data[productId].amount);
            state.data[productId].amount += 1
        },
        decreaseAmount: (state, action) => {
            const productId = state.data.findIndex(item => item.id === action.payload)

            // console.log(state.data[productId].amount);
            state.data[productId].amount -= 1
        }
    }
})

export const { addToCart, deleteFromCart, increaseAmount, decreaseAmount } = cartSlice.actions
// export const incremented = counterSlice.actions.incremented
// export const decremented = counterSlice.actions.decremented


console.log(counterSlice);


const reducers = combineReducers({
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
})

export const store = configureStore({
    reducer: reducers
})


console.log(store);


window.store = store
window.plus = counterSlice.actions.incremented
window.minus = counterSlice.actions.decremented