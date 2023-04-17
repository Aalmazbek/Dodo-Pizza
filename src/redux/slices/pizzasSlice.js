import { createSlice } from "@reduxjs/toolkit";

import { deletePizza, getPizzas, postPizza } from '../../api/api'



let pizzasArray

getPizzas()
  .then(res => {
    pizzasArray = res.data
    console.log(pizzasArray);
  })

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: {
    data: pizzasArray ? pizzasArray : []
  },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload
    },
    addPizza: (state, action) => {
      let fetchData = {headers: { "Content-Type": "application/json" }}
      postPizza(action.payload, fetchData)
    },
    deletePizza: (state, action) => {
      deletePizza(action.payload)
    }
  }
})


export const { fetchData, addPizza, deletePizza: removePizza } = pizzasSlice.actions
export const pizzasReducer = pizzasSlice.reducer