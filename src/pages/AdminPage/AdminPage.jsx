import React, { useEffect, useState } from 'react'

import css from './AdminPage.module.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import OftenOrderedSwiper from '../../components/OftenOrderedSwiper/OftenOrderedSwiper'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import { base_url } from '../../constants/api_constant'

import LoadingBar from 'react-top-loading-bar'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'



function AdminPage({ isLoggedIn }) {
    const navigate = useNavigate()
    if (!isLoggedIn) {
        navigate('/login-page')
    }

    const [pizzasArray, setPizzasArray] = useState([])
    const [progress, setProgress] = useState(0)
    // console.log(pizzasArray);

    useEffect(() => {
        setProgress(30)
        setTimeout(() => {
            setProgress(60)
        }, 100)
        fetch(base_url + "pizzas")
            .then(response => response.json())
            .then(data => {
                // pizzasArray = data
                setPizzasArray(data)
            })
            .finally(() => {
                setProgress(100)
            })
    },[])

    



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

            <section className={`pizzasSection`}>
                <div className='title'>Пицца</div>

                <div className={"pizzasWrapper"}>
                    {
                        pizzasArray.map(elem => <PizzaCard key={elem.id} {...elem} isAdmin={true} setPizzasArray={setPizzasArray} />)
                    }
                </div>
            </section>
        </div>
  )
}

export default AdminPage