import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      data: []
  }, 
  reducers: {
      addToCart: (state, action) => {
        const findedEl = state.data.findIndex(elem => elem.id === action.payload.id)
        if (findedEl === -1) {
          state.data.push(action.payload)
        } else{
          alert('Этот продукт уже в корзине')
        }
      },
      deleteFromCart: (state, action) => {
          const productId = action.payload
          // console.log(productId);
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
export const cartReducer = cartSlice.reducer