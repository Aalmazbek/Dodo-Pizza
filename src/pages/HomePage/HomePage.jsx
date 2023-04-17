import React, { useEffect, useState } from 'react'

import css from './HomePage.module.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import OftenOrderedSwiper from '../../components/OftenOrderedSwiper/OftenOrderedSwiper'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import { base_url } from '../../constants/api_constant'

import LoadingBar from 'react-top-loading-bar'
import axios from 'axios'
import { useRef } from 'react'
import { getPizzas } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/slices/pizzasSlice'





const HomePage = ({ pizzasSection, setPath }) => {
    const pizzasArray = useSelector(state => state.pizzas.data)
    const dispatch = useDispatch()
    // const [pizzasArray, setPizzasArray] = useState([])
    const [progress, setProgress] = useState(0)
    // console.log(pizzasArray);
    
    useEffect(() => {
        setPath('/')
        console.log(pizzasArray);
        // setProgress(30)
        // setTimeout(() => {
        //     setProgress(60)
        // }, 100)
        // getPizzas()
        //     .then(response => dispatch(fetchData(response.data)))
        //     .finally(() => {
        //         setProgress(100)
        //     })
    },[])




   

    return (
        <>

            <MainSlider />
            <OftenOrderedSwiper />

            <section className={`container pizzasSection`} ref={pizzasSection}>
                <div className='title'>Пицца</div>

                <div className='pizzasWrapper'>
                    {
                        pizzasArray.map(elem => <PizzaCard key={elem.id} {...elem} />)
                    }
                </div>
            </section>
        </>
  )
}

export default HomePage