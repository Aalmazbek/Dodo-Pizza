import React from 'react'
import ModalCard from './components/ModalCard'
import ModalHeader from './components/ModalHeader'

import css from './NavModal.module.css'

function NavModal({ cart, isCart, setIsCart }) {

  return (
    <div className={`${css.wrapper}`}>
        <div className={`${css.background} ${isCart ? "" : css.backDisabled}`} onClick={() => setIsCart(!isCart)} ></div>
        <div className={`${css.content} ${isCart ? "" : css.contentDisabled}`}>
            {cart.length > 0 ? (
                <>
                    <ModalHeader />

                    <div className={css.cardsWrapper}>
                        {
                            cart.map(elem => (
                                <ModalCard elem={elem} />
                            ))
                        }
                    </div>

                    <ModalHeader />
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

                    <button className={`${!isCart ? css.hideButton : ''}`} onClick={() => setIsCart(!isCart)}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default NavModal