import React from 'react'
import Button from '../Button/Button'
import css from './PizzaCard.module.css'

function PizzaCard({name, description, price, image, variant, button}) {
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
            <h2 className={css.price}>{price}</h2>
            <Button title={button} variant={variant} />
        </div>
    </div>
  )
}

export default PizzaCard