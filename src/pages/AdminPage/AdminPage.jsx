import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import css from './AdminPage.module.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import OftenOrderedSwiper from '../../components/OftenOrderedSwiper/OftenOrderedSwiper'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import { base_url } from '../../constants/api_constant'
import Button from '../../components/Button/Button'
import { getPizzas } from '../../api/api';
import { useSelector } from 'react-redux';





function AdminPage({ setPath, isProdCreated, setIsProdCreated, pizzasSection }) {
    const navigate = useNavigate()
    const { progress, pizzasData: pizzasArray, isLoading, error } = useSelector(state => state.pizzas)

    useEffect(() => {
        setPath('/admin')

        if (isProdCreated) {
            setIsProdCreated(false)
            notify()
        }
    },[])


    const notify = () => {
        return (
            toast.success('Пицца добавлена', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
            })
        )
    }

    


    if (error) return <h1>Что-то пошло не так!</h1>
    return (
        <div className={`container ${css.wrapper}`}>
            <LoadingBar 
                color={`rgb(255, 105, 0)`} 
                progress={progress} 
            />

            <Link to='/admin/create-pizza'>
                <Button className={css.button} title="+ Добавить пиццу" />
            </Link>

            <section className={`pizzasSection`} ref={pizzasSection}>
                <div className='title'>Пицца</div>

                <div className={"pizzasWrapper"}>
                    {
                        pizzasArray.map(elem => <PizzaCard key={elem.id} {...elem} isAdmin={true} />)
                    }
                </div>
            </section>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Flip}
            />            
        </div>
  )
}

export default AdminPage