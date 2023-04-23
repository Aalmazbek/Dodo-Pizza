import React from 'react'
import { useSelector } from 'react-redux'
import ModalCard from './components/ModalCard'
import ModalHeader from './components/ModalHeader'
import ModalResult from './components/ModalResult'

import css from './NavModal.module.css'

function NavModal({ cart, isCart, setIsCart }) {

    const data = useSelector(state => state.cart.data)


  return (
    <div className={`${css.wrapper}`}>
        <div className={`${css.background} ${isCart ? "" : css.backDisabled}`} onClick={() => setIsCart(!isCart)} ></div>
        <div className={`${css.content} ${isCart ? "" : css.contentDisabled}`}>
            {data.length > 0 ? (
                <>
                    <div className={css.header_cardsWrapper_container}>
                        <ModalHeader />

                        <div className={css.cardsWrapper}>
                            {
                                data.map(elem => (
                                    <ModalCard key={Math.random()*(new Date().getTime()) + elem.id} {...elem} />
                                ))
                            }
                        </div>
                    </div>

                    <ModalResult />
                </>
            ) : (
                <div className={css.emptyCart}>
                    <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" alt="dodopizza-dog" />
                    <div>
                        <p>Ой, пусто!</p>
                        <p>Ваша корзина пуста, откройте «Меню» <br />
                            и выберите понравившийся товар. <br />
                            Мы доставим ваш заказ от 365 сом</p>
                    </div>
                </div>
            )}
        </div>

        <button className={`${css.closeButton} ${!isCart ? css.hideButton : ''}`} onClick={() => setIsCart(!isCart)}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill=""></path></svg>
        </button>
    </div>
  )
}

export default NavModal