import React from 'react'
import Button from '../Button/Button'
import css from './PizzaCard.module.css'
import { base_url } from '../../constants/api_constant'
import axios from 'axios'
import { deletePizza, getPizzas } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import CountButton from '../CountButton/CountButton'
import { addToCart, deleteFromCart } from '../../redux/slices/cartSlice'
import { removePizza } from '../../redux/slices/pizzasSlice'






function PizzaCard({id, name, description, price, image, variant, button, isAdmin, setPizzasArray}) {
  const dispatch = useDispatch()


  const deletePizzaFunc = async (pizzaId) => {
    const res = window.confirm("Вы действительно хотите удалить " + name + " ?")

    if (res) {

      const deleteFunc1 = async () => {
        const d1 = await dispatch(removePizza(pizzaId))
        const d2 = await getPizzas()
                    .then(res => {
                      const deletedId = (res.data).findIndex(item => item.id === pizzaId)
                      res.data.splice(deletedId, 1)
                      setPizzasArray(res.data)
                    })
      }

      deleteFunc1()

      // fetch(base_url + "pizzas/" + pizzaId, {method: 'DELETE'})
      //   .finally(
      //     fetch(base_url + "pizzas")
      //       .then(response => response.json())
      //       .then(data => {
      //         let deletedId = data.findIndex(item => item.id === pizzaId)
      //         data.splice(deletedId, 1)
      //         setPizzasArray(data)
      //       })
      //   )
    }
  }

  let data = useSelector(state => state.cart.data)
  let amount = ''
  if (data[data.findIndex(item => item.id === id)]) {
    amount = data[data.findIndex(item => item.id == id)].amount
  }
  const totalAmount = data.reduce((sum, curr) => sum += curr.amount, 0)

  const handleAddToCart = () => {
    if (totalAmount === 100) {
      return
    }
    dispatch(addToCart({
      id,
      name,
      description,
      price,
      image,
      amount: 1
    }))
  }

  const deleteProd = () => {
    setTimeout(() => {
      dispatch(deleteFromCart(id))
    }, 500)
  }



  const handleOnMouseEnter = (e) => {
    e.target.style.transform = 'translateY(5px)'
  }

  const handleOnMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0px)'
  }



  return (
    <div className={css.wrapper}>
        <div>
            <img className={css.pizzaImage} src={image} alt={name} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} />
        </div>

        <div>
            <h3 className={css.title}>{name === "Мексиканская" ? name + " 🌶️🌶️" : name}</h3>
            <p className={css.description}>{description}</p>
        </div>

        <div>  
            <h2 className={css.price}>от {Number(price).toFixed(0)} сом</h2>
            {
              isAdmin ? (
                <Button title={"Удалить"} variant={'second'} onClick={() => deletePizzaFunc(id)} />
              ) : (
                amount ? (
                  <CountButton amount={amount} id={id} deleteProd={deleteProd} />
                ) : (
                  <Button title={`В корзину ${amount ? amount : ''}`} variant={'second'} onClick={handleAddToCart} />
                )
              )
            }
        </div>
    </div>
  )
}

export default PizzaCard