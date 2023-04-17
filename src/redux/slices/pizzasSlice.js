import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { deletePizza, getPizzas, postPizza } from '../../api/api'


export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async () => {
    const res = await getPizzas()
    return res.data
  }
)

export const fetchDeletePizza = createAsyncThunk(
  'pizzas/fetchDeletePizzas',
  async (id) => {
    const res = await deletePizza(id)
    return res.data
  }
)

export const fetchCreatePizza = createAsyncThunk(
  'pizzas/fetchCreatePizzas',
  async (data) => {
    const res = await postPizza(data)
    return res.data
  }
)


const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: {
    pizzasData: [],
    progress: 5,
    isLoading: true,
    isCreating: 'idle',
    error: ''
  },
  reducers: {
    setPending: (state, action) => {
      state.isCreating = action.payload
    }
  },
  extraReducers: (builder) => {
    // GET PIZZAS 
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzasData = action.payload
      state.isLoading = false
      state.progress = 100
    })

    builder.addCase(fetchPizzas.pending, (state) => {
      state.progress = 60
    })

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.progress = 100
      state.error = action.payload
    })


    // DELETE PIZZA
    builder.addCase(fetchDeletePizza.fulfilled, (state, action) => {
      state.pizzasData = state.pizzasData.filter(elem => elem.id !== action.payload.id)
    })


    // CREATE PIZZA
    builder.addCase(fetchCreatePizza.fulfilled, (state, action) => {
      state.pizzasData.push(action.payload)
      state.isCreating = 'success'
    })

    builder.addCase(fetchCreatePizza.pending, (state, action) => {
      state.isCreating = 'pending'
    })
  }
})


export const { setPending } = pizzasSlice.actions
export const pizzasReducer = pizzasSlice.reducer