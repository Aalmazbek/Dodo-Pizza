import React, { useEffect, useState } from 'react'
import css from './HomePage.module.css'

import MainSlider from '../../components/MainSlider/MainSlider'
import OftenOrderedSwiper from '../../components/OftenOrderedSwiper/OftenOrderedSwiper'
import PizzaCard from '../../components/PizzaCard/PizzaCard'


let pizzasUrl = "https://6426d796d24d7e0de4799ee4.mockapi.io/api/v1/pizzas"





const HomePage = () => {
    const [pizzasArray, setPizzasArray] = useState([])
    // console.log(pizzasArray);

    useEffect(() => {
        fetch(pizzasUrl)
            .then(response => response.json())
            .then(data => {
                // pizzasArray = data
                setPizzasArray(data)
            })
    },[])


    return (
        <>
        <MainSlider />
        <OftenOrderedSwiper />

        <section className={`container ${css.pizzasSection}`}>
            <div className='title'>Пицца</div>

            <div className={css.pizzasWrapper}>
                {
                    pizzasArray.map(elem => <PizzaCard key={elem.id} {...elem} />)
                }
            </div>
        </section>
    </>
  )
}

export default HomePage