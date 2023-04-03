import React, { useEffect, useState } from 'react'

import css from './HomePage.module.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import OftenOrderedSwiper from '../../components/OftenOrderedSwiper/OftenOrderedSwiper'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import { base_url } from '../../constants/api_constant'

import LoadingBar from 'react-top-loading-bar'





const HomePage = () => {
    const [pizzasArray, setPizzasArray] = useState([])
    const [progress, setProgress] = useState(30)
    // console.log(pizzasArray);

    useEffect(() => {
        fetch(base_url + "pizzas")
            .then(response => response.json())
            .then(data => {
                // pizzasArray = data
                setPizzasArray(data)
                setProgress(100)
            })
    },[])


    return (
        <>
            <LoadingBar 
                color='rgb(255, 105, 0)' 
                progress={progress} 
                onLoaderFinished={() => setProgress(0)} 
            />

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