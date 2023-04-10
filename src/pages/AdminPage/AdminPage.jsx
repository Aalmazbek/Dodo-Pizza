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





function AdminPage({ isProdCreated, setIsProdCreated, pizzasSection }) {
    const navigate = useNavigate()

    const [pizzasArray, setPizzasArray] = useState([])
    const [progress, setProgress] = useState(0)
    // console.log(pizzasArray);

    useEffect(() => {
        if (isProdCreated) {
            setIsProdCreated(false)
            notify()
        }

        setProgress(30)
        setTimeout(() => {
            setProgress(60)
        }, 100)

        axios.get(base_url + 'pizzas')
            .then(response => {
                setPizzasArray(response.data)
            })
            .finally(() => {
                setProgress(100)
            })

        // fetch(base_url + "pizzas")
        //     .then(response => response.json())
        //     .then(data => {
        //         // pizzasArray = data
        //         setPizzasArray(data)
        //     })
        //     .finally(() => {
        //         setProgress(100)
        //     })
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

    



    return (
        <div className={`container ${css.wrapper}`}>
            <LoadingBar 
                color={`rgb(255, 105, 0)`} 
                progress={progress} 
                onLoaderFinished={() => setProgress(0)} 
            />

            <Link to='/admin/create-pizza'>
                <Button className={css.button} title="+ Добавить пиццу" />
            </Link>

            <section className={`pizzasSection`} ref={pizzasSection}>
                <div className='title'>Пицца</div>

                <div className={"pizzasWrapper"}>
                    {
                        pizzasArray.map(elem => <PizzaCard key={elem.id} {...elem} isAdmin={true} setPizzasArray={setPizzasArray} />)
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