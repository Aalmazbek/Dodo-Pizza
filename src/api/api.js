import axios from "axios";
import { base_url } from "../constants/api_constant";


const api = axios.create({
    baseURL: base_url
})

export const getPizzas = async () => api.get('pizzas')
export const deletePizza = async (pizzaId) => api.delete('pizzas/' + pizzaId)
export const postPizza = async (data, fetchData) => api.post('pizzas', data, fetchData)