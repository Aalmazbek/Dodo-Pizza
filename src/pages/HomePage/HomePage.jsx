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
    const { progress, pizzasData: pizzasArray, isLoading, error } = useSelector(state => state.pizzas)
    
    useEffect(() => {
        setPath('/')
    },[])




   
    if (error) return <h1>Что-то пошло не так!</h1>
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

            <LoadingBar 
                color={`rgb(255, 105, 0)`} 
                progress={progress} 
            />
        </>
  )
}

export default HomePage