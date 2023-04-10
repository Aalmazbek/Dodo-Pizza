import React from 'react'
import Button from '../Button/Button'
import css from './PizzaCard.module.css'
import { base_url } from '../../constants/api_constant'
import axios from 'axios'

function PizzaCard({id, name, description, price, image, variant, button, isAdmin, setPizzasArray}) {

  const deletePizza = (pizzaId) => {
    const res = window.confirm("Вы действительно хотите удалить " + name + " ?")

    if (res) {
      axios.delete(base_url + 'pizzas/' + pizzaId)
        .finally(
          axios.get(base_url + 'pizzas')
            .then(res => {
              const deletedId = (res.data).findIndex(item => item.id === pizzaId)
              res.data.splice(deletedId, 1)
              setPizzasArray(res.data)
            })
        )
        

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


  return (
    <div className={css.wrapper}>
        <div>
            <img className={css.pizzaImage} src={image} alt={name} />
        </div>

        <div>
            <h3 className={css.title}>{name === "Мексиканская" ? name + " 🌶️🌶️" : name}</h3>
            <p className={css.description}>{description}</p>
        </div>

        <div>  
            <h2 className={css.price}>от {Number(price).toFixed(0)} сом</h2>
            {
              isAdmin ? (
                <Button title={"Удалить"} variant={'second'} onClick={() => deletePizza(id)} />
              ) : (
                <Button title={"В корзину"} variant={'second'} />
              )
            }
        </div>
    </div>
  )
}

export default PizzaCard