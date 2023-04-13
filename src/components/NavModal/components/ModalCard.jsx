import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../../redux";
import CountButton from "../../CountButton/CountButton";

import css from "../NavModal.module.css";

function ModalCard({ elem }) {

  const amount = useSelector(state => state.cart.data[state.cart.data.findIndex(item => item.id === elem.id)].amount)
  const dispatch = useDispatch()
  
  const deleteProd = () => {
    setTimeout(() => {
      dispatch(deleteFromCart(elem.id))
    }, 500)
  }

  // useEffect(() => {
  //   if (amount < 2) {
  //     deleteProd()
  //     console.log('deleted');
  //   }
  // }, [amount])


  return (
    <div className={css.card}>
      <div className={css.cardTop}>
        <div>
          <img src={elem.image} alt="" />

          <div>
            <p>{elem.name}</p>
            <p>{elem.description}</p>
          </div>
        </div>

        <button className={css.deleteButton} onClick={deleteProd}>
          <svg fill="none" viewBox="0 0 24 24">
            <path
              d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z"
              fill="#000"
            ></path>
          </svg>
        </button>
      </div>

      <hr className={css.betweenTopBottomLine} />

      <div className={css.cardBottom}>
        <p>{elem.price} сом</p>

        <CountButton variant='small' amount={elem.amount} id={elem.id} deleteProd={deleteProd} />
      </div>
    </div>
  );
}

export default ModalCard;
